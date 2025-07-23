import { Story } from "../_internal/Story";
import { WButton } from "./WButton";

export const WButtonStories = () => {
  return (
    <Story title="WButton">
      <WButton title="Filled Button" variant="filled" />
      <WButton title="Outlined Button" variant="outlined" />
      <WButton title="Text Button" variant="text" />
    </Story>
  );
};
