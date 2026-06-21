import "./index.css";
import { Composition } from "remotion";
import { PortfolioReel } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PortfolioReel"
        component={PortfolioReel}
        durationInFrames={420}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
