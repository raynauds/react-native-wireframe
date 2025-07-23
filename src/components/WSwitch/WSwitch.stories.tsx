import { Story } from "../_internal/Story";
import { WSwitch } from "./WSwitch";

export const WSwitchStories = () => {
  return (
    <Story title="WSwitch">
      <WSwitch />
      <WSwitch label="With label" />
      <WSwitch label="Disabled" disabled />
    </Story>
  );
};
