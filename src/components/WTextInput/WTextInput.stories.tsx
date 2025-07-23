import { Story } from "../_internal/Story";
import { WTextInput } from "./WTextInput";

export const WTextInputStories = () => {
  return (
    <Story title="WTextInput">
      <WTextInput placeholder="Placeholder" />
      <WTextInput label="Label" placeholder="Placeholder" />
      <WTextInput iconLeft placeholder="Icon left" />
      <WTextInput iconRight placeholder="Icon right" />
      <WTextInput iconLeft iconRight placeholder="Icon left and right" />
    </Story>
  );
};
