import { Story } from "../_internal/Story";
import { WText } from "./WText";

export const WTextStories = () => {
  return (
    <Story title="WText">
      <WText variant="h1">Header 1 (h1)</WText>
      <WText variant="h2">Header 2 (h2)</WText>
      <WText variant="h3">Header 3 (h3)</WText>
      <WText variant="body">Body</WText>
      <WText variant="caption">Caption</WText>
    </Story>
  );
};
