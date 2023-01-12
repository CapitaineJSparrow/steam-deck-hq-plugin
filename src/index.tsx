import { afterPatch, definePlugin, ServerAPI, staticClasses, wrapReactType } from "decky-frontend-lib";
import { ReactElement } from "react";
import { FaShip } from "react-icons/fa";
import { Content } from "./components/HQQuickMenu";
import Config from "./lib/Config";

function patchLibraryApp(serverAPI: ServerAPI) {
  return serverAPI.routerHook.addPatch(
    '/library/app/:appid',
    (props: { path: string; children: ReactElement }) => {
      afterPatch(
        props.children.props,
        'renderFunc',
        (_: Record<string, unknown>[], ret: ReactElement) => {
          wrapReactType(ret.props.children)
          afterPatch(
            ret.props.children.type,
            'type',
            (_2: Record<string, unknown>[], ret2: ReactElement) => {
              let parts = window.location.href.split('/');
              Config.pageId = Number(parts[parts.length - 1]);
              return ret2
            }
          )
          return ret
        }
      )
      return props
    }
  )
}

export default definePlugin((serverApi: ServerAPI) => {
  const libraryPatch = patchLibraryApp(serverApi)

  return {
    title: <div className={staticClasses.Title}>Steam Deck HQ</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaShip />,
    onDismount() {
      serverApi.routerHook.removePatch('/library/app/:appid', libraryPatch)
    },
  };
});
