import { Story } from "../_internal/Story";
import { WText } from "./WText";

export const WTextStories = () => {
  return (
    <Story title="WText">
      <WText variant="h1">WText h1</WText>
      <WText variant="h2">WText h2</WText>
      <WText variant="h3">WText h3</WText>
      <WText variant="body">WText body</WText>
      <WText variant="caption">WText caption</WText>
    </Story>
  );
};
