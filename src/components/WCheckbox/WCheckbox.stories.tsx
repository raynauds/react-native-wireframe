import { useState } from "react";
import { Story } from "../_internal/Story";
import { WCheckbox } from "./WCheckbox";

export const WCheckboxStories = () => {
  const [isCheck1, setIsChecked1] = useState(false);
  const [isCheck2, setIsChecked2] = useState(false);

  return (
    <Story title="WCheckbox">
      <WCheckbox value={isCheck1} onChange={setIsChecked1} />
      <WCheckbox label="With label" value={isCheck2} onChange={setIsChecked2} />
    </Story>
  );
};
