import {definePlugin, ServerAPI, staticClasses} from "decky-frontend-lib";
import {FaShip} from "react-icons/fa";
import {Content} from "./components/HQQuickMenu";
import {patchLibraryApp} from "./lib/patchLibraryApp";
import Config from "./lib/Config";

export default definePlugin((serverApi: ServerAPI) => {
  const libraryPatch = patchLibraryApp(serverApi);

  return {
    title: <div className={staticClasses.Title}>Steam Deck HQ</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaShip />,
    onDismount() {
      Config.pageId = -1;
      serverApi.routerHook.removePatch('/library/app/:appid', libraryPatch)
    },
  };
});
