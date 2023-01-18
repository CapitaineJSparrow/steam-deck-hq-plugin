import {useEffect} from "react";
import Config from "../lib/Config";

const HQLibraryDetail = ({ pageId }: { pageId: number }) => {
  useEffect(() => {
    Config.setPageId(pageId);
    Config.locked = false;

    return () => {
      if (!Config.locked) {
        Config.pageId = -1;
      }
    }
  }, []);

  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default HQLibraryDetail;