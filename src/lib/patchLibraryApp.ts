import Config from "./Config";
import {afterPatch, ServerAPI, wrapReactType } from "decky-frontend-lib";
import { ReactElement } from "react";

export function patchLibraryApp(serverAPI: ServerAPI) {
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