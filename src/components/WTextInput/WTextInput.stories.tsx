import { Story } from "../_internal/Story";
import { WTextInput } from "./WTextInput";

export const WTextInputStories = () => {
  return (
    <Story title="WTextInput">
      <WTextInput placeholder="Placeholder" />
      <WTextInput label="Label" placeholder="Placeholder" />
    </Story>
  );
};
