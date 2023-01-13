import { definePlugin, ServerAPI, staticClasses } from "decky-frontend-lib";
import { FaGamepad } from "react-icons/fa";
import { Content } from "./components/HQQuickMenu";
import { patchLibraryApp } from "./lib/patchLibraryApp";
import Config from "./lib/Config";
import { GlobalContext } from "./context";
import { useState } from "react";
import { HQResult } from "./types";

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

  return {
    title: <div className={staticClasses.Title}>Steam Deck HQ</div>,
    content: <App serverApi={serverApi} />,
    icon: <FaGamepad />,
    alwaysRender: true,
    onDismount() {
      Config.pageId = -1;
      serverApi.routerHook.removePatch('/library/app/:appid', libraryPatch)
    },
  };
});
