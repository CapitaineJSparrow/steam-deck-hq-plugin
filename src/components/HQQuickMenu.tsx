import { VFC, useEffect, useState } from "react";
// @ts-ignore
import logo from "../../assets/logo.png";
import {
  PanelSection,
  PanelSectionRow,
  ServerAPI,
  Focusable,
} from "decky-frontend-lib";
import Config from "../lib/Config";
import { HQResult } from "../types";
import SteamOSSettings from "./ui/SteamOSSettings";
import FocusableTitle from "./ui/FocusableTitle";
import BatteryUsage from "./ui/BatteryUsage";

export const Content: VFC<{ serverAPI: ServerAPI }> = ({ serverAPI }) => {
  const [data, setData] = useState<HQResult[]>([]);

  useEffect(() => {
    if (Config.pageId === -1) return;
    serverAPI!.callPluginMethod("add", { appid: Config.pageId }).then(d => setData(d["result"] as unknown as HQResult[]));

    return () => {
      setData([])
    }
  }, []);

  const game = data[0] as HQResult | undefined;

  if (Config.pageId === -1) {
    return (
      <PanelSectionRow>
        <h3>Visit a game in your game library to get Steam Deck HQ review !</h3>
      </PanelSectionRow>
    )
  }

  return (
    <PanelSection title={game?.title.rendered}>
      <PanelSectionRow>
        {
          !game
            ? (
              <PanelSectionRow>
                <h3 style={{ textAlign: "center" }}>This game has not been reviewed on Steam Deck HQ yet !</h3>
              </PanelSectionRow>
            )
            : (
              <span>
                <PanelSectionRow>
                  <FocusableTitle label={"Steam OS Settings"} />
                  <hr />
                  <SteamOSSettings
                    fpsCap={game.acf.optimized_and_recommended_settings.steamos_settings.fps_cap}
                    tdp={game.acf.optimized_and_recommended_settings.steamos_settings.tdp_limit}
                    scaling={game.acf.optimized_and_recommended_settings.steamos_settings.scaling_filter}
                    refreshRate={game.acf.optimized_and_recommended_settings.steamos_settings.fps_refresh_rate}
                    gpuClock={game.acf.optimized_and_recommended_settings.steamos_settings.gpu_clock_frequency}
                    protonVersion={game.acf.optimized_and_recommended_settings.proton_version}
                  />
                  <h3 style={{ textAlign: 'center', color: 'yellow', margin: 0, padding: 0, marginBottom: '6px' }}>
                    { Array(game.acf.sdhq_rating).fill("★").map(el => el) }
                    { Array(5 - game.acf.sdhq_rating).fill("☆").map(el => el) }
                  </h3>
                </PanelSectionRow>

                <PanelSectionRow>
                  <FocusableTitle label={"Projected Battery Usage and Temp"} />
                  <hr />
                  <BatteryUsage
                    battery={game.acf.optimized_and_recommended_settings.projected_battery_usage_and_temperature.wattage}
                    temps={game.acf.optimized_and_recommended_settings.projected_battery_usage_and_temperature.temperatures}
                    duration={game.acf.optimized_and_recommended_settings.projected_battery_usage_and_temperature.gameplay_time}
                  />
                </PanelSectionRow>

                <PanelSectionRow>
                  <FocusableTitle label={"Description"} />
                  <p dangerouslySetInnerHTML={{ __html: game.excerpt.rendered }} />
                </PanelSectionRow>
              </span>
            )
        }
      </PanelSectionRow>
      <PanelSectionRow>
        <div style={{display: "flex", justifyContent: "center", margin: 0 }}>
            <img width={200} src={logo} />
        </div>
        <FocusableTitle label={"Visit Steam Deck HQ website"} />
      </PanelSectionRow>
    </PanelSection>
  );
};
