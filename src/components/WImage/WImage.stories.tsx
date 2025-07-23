import { Story } from "../_internal/Story";
import { WImage } from "./WImage";

export const WImageStories = () => {
  return (
    <Story title="WImage">
      <WImage />
      <WImage width={300} />
      <WImage isRound />
    </Story>
  );
};
