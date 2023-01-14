import Config from "./Config";
import {afterPatch, ServerAPI, wrapReactType } from "decky-frontend-lib";
import { ReactElement } from "react";
import HQLibraryDetail from "../components/HQLibraryDetail";

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

              const alreadySpliced = Boolean(
                ret2.props?.children?.[1]?.props.children.props.children.find(
                  (child: ReactElement) => child?.props?.className === 'protondb-decky-indicator'
                )
              )

              if (!alreadySpliced) {
                ret2.props.children?.[1]?.props.children.props.children.splice(
                  1,
                  0,
                  <HQLibraryDetail />
                )
              }

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