import { ServerAPI, Button, Router } from "decky-frontend-lib";
import React, { useEffect, useState } from "react";
import ConfigStore from "../lib/ConfigStore";
import { HQResult } from "../types";
// @ts-ignore
import logo from "../../assets/logo.png";
import Rating from "./ui/Rating";

const buttonStyles = {
  background:"#ce346d",
  color:"#FFF",
  border:"none",
  fontSize: "16px",
  padding: "12px 8px",
  width: "100%"
};

const blockquoteStyles = {
  fontStyle: "italic",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  "-webkit-line-clamp": "3",
  "-webkit-box-orient": "vertical",
  margin: 0,
  marginBottom: "16px"
};

const HQLibraryDetail = ({ pageId, serverAPI }: { pageId: number, serverAPI: ServerAPI }) => {
  const [data, setData] = useState<HQResult[]>([]);

  useEffect(() => {
    ConfigStore.pageId = pageId;
    ConfigStore.locked = false;

    serverAPI
      .callPluginMethod("get_sdhq_data", { appid: pageId })
      .then((d: any) => {
        console.log(d);
        return setData(d["result"] as HQResult[]);
      });

    return () => {
      ConfigStore.pageId = -1;
    }
  }, []);

  const handleBtnClick = (url: string) => {
    Router.NavigateToExternalWeb(url);
  }

  const game = data ? data[0] : undefined;

  if (!game) {
    return <React.Fragment></React.Fragment>
  }

  return (
    <div style={{ display: 'flex', padding: "24px" }}>
      <div style={{ flex: "0 0 210px" }}>
        <img style={{ width: "80%", margin: "0 auto", display: "block", marginBottom: "12px" }} src={logo} />
        <Button style={buttonStyles} onClick={() => handleBtnClick(game.link)}>
          {"View review on SDHQ"}
        </Button>
      </div>
      <div style={{ flex: "1", paddingLeft: "20px" }}>
        <blockquote
          style={blockquoteStyles}
          dangerouslySetInnerHTML={{ __html: game.excerpt.rendered }}
        />
        <div style={{ display: "flex", flexDirection: "row", textAlign: "center" }}>
          <Rating score={game.acf.sdhq_rating_categories.performance} label="Performances" />
          <Rating score={game.acf.sdhq_rating_categories.visuals} label="Visuals" />
          <Rating score={game.acf.sdhq_rating_categories.stability} label="Stability" />
          <Rating score={game.acf.sdhq_rating_categories.controls} label="Controls" />
          <Rating score={game.acf.sdhq_rating_categories.battery} label="Battery" />
        </div>
      </div>
    </div>
  )
}

export default HQLibraryDetail;