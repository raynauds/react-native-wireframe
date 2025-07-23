import { useState } from "react";
import { Story } from "../_internal/Story";
import { WRadioButton, WRadioGroup } from "./WRadioButton";

export const WRadioButtonStories = () => {
  const [value, setValue] = useState("1");

  return (
    <Story title="WRadioButton">
      <WRadioGroup value={value} onChange={setValue}>
        <WRadioButton value="1" label="Option 1" />
        <WRadioButton value="2" label="Option 2" />
        <WRadioButton value="3" label="Option 3" />
      </WRadioGroup>
    </Story>
  );
};
