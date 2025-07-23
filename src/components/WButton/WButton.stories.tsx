import { Story } from "../_internal/Story";
import { WButton } from "./WButton";

export const WButtonStories = () => {
  return (
    <Story title="WButton">
      <WButton title="Filled" variant="filled" />
      <WButton title="Outlined" variant="outlined" />
      <WButton title="Text" variant="text" />
    </Story>
  );
};
