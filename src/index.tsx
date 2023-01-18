import { definePlugin, ServerAPI, staticClasses } from "decky-frontend-lib";
import { FaGamepad } from "react-icons/fa";
import { Content } from "./components/HQQuickMenu";
import { patchLibraryApp } from "./lib/patchs/patchLibraryApp";
import { GlobalContext } from "./context";
import { useState } from "react";
import { HQResult } from "./types";
import { SteamClient } from "./types";
import ConfigStore from "./lib/ConfigStore";

declare global
{
  // @ts-ignore
  let SteamClient: SteamClient;
}

const App = ({ serverApi }: { serverApi: ServerAPI }) => {
  const [data, setData] = useState<HQResult[]>([]);

  return (
    <GlobalContext.Provider value={{ setData: (d: HQResult[]) => setData(d), data: data }}>
      <Content serverAPI={serverApi} />
    </GlobalContext.Provider>
  )
}

export default definePlugin((serverApi: ServerAPI) => {
  const libraryPatch = patchLibraryApp(serverApi);

  const startHook = SteamClient.Apps.RegisterForGameActionStart((_: number, id: string) =>
  {
    ConfigStore.pageId = +id;
    ConfigStore.locked = true;
  });

  return {
    title: <div className={staticClasses.Title}>Steam Deck HQ</div>,
    content: <App serverApi={serverApi} />,
    icon: <FaGamepad />,
    alwaysRender: true,
    onDismount() {
      startHook.unregister();
      serverApi.routerHook.removePatch('/library/app/:appid', libraryPatch);
    },
  };
});
