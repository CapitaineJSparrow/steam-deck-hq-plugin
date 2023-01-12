import { VFC, useEffect, useState } from "react";
// @ts-ignore
import logo from "../../assets/logo.png";
import {
  PanelSection,
  PanelSectionRow,
  ServerAPI,
} from "decky-frontend-lib";
import Config from "../lib/Config";
import { HQResult } from "../types";

export const Content: VFC<{ serverAPI: ServerAPI }> = ({ serverAPI }) => {
  const [data, setData] = useState<HQResult[]>([]);

  useEffect(() => {
    if (Config.pageId === -1) return;
    serverAPI!.callPluginMethod("add", { appid: Config.pageId }).then(d => setData(d["result"] as unknown as HQResult[]));
  }, []);

  const game: HQResult = data[0];

  if (Config.pageId === -1) {
    return (
      <PanelSectionRow>
        <h3>Visit a game in your game library to get Steam Deck HQ review !</h3>
      </PanelSectionRow>
    )
  }

  return (
    <PanelSection>
      <PanelSectionRow>
        <div style={{display: "flex", justifyContent: "center", margin: 0 }}>
          <img width={200} src={logo} />
        </div>
      </PanelSectionRow>
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
                <PanelSection title="Steam OS Settings">
                  <table>
                    <tr>
                      <td style={{ width: '112px' }}>FPS Cap</td>
                      <td><b>{game.acf.optimized_and_recommended_settings.steamos_settings.fps_cap}</b></td>
                    </tr>
                    <tr>
                      <td style={{ width: '112px' }}>Refresh Rate</td>
                      <td><b>{game.acf.optimized_and_recommended_settings.steamos_settings.fps_refresh_rate}</b></td>
                    </tr>
                    <tr>
                      <td style={{ width: '112px' }}>TDP Limit</td>
                      <td><b>{game.acf.optimized_and_recommended_settings.steamos_settings.tdp_limit}</b></td>
                    </tr>
                    <tr>
                      <td style={{ width: '112px' }}>Scaling Filter</td>
                      <td><b>{game.acf.optimized_and_recommended_settings.steamos_settings.scaling_filter}</b></td>
                    </tr>
                    <tr>
                      <td style={{ width: '112px' }}>GPU Clock</td>
                      <td><b>{game.acf.optimized_and_recommended_settings.steamos_settings.gpu_clock_frequency}</b></td>
                    </tr>
                  </table>
                </PanelSection>
                <PanelSectionRow>
                  <h3 style={{ textAlign: 'center', color: 'yellow' }}>
                    { Array(game.acf.sdhq_rating).fill("★").map(el => el) }
                    { Array(5 - game.acf.sdhq_rating).fill("☆").map(el => el) }
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: game.excerpt.rendered }} />
                </PanelSectionRow>
              </span>
            )
        }
      </PanelSectionRow>
    </PanelSection>
  );
};
