import { StyleSheet, Switch, SwitchProps, View } from "react-native";
import { theme } from "../../theme/theme";
import { WText } from "../WText/WText";

type WSwitchProps = Pick<SwitchProps, "style" | "disabled"> & {
  value: boolean;
  onChange: (newValue: boolean) => void;
  label?: string;
};

export const WSwitch = ({ value, onChange, label, disabled }: WSwitchProps) => {
  return (
    <View style={styles.root}>
      {label && (
        <WText style={[styles.label, disabled && styles.labelDisabled]}>
          {label}
        </WText>
      )}
      <Switch
        trackColor={{
          true: theme.colors.primary,
        }}
        thumbColor={theme.colors.background}
        onValueChange={onChange}
        value={value}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.space.m,
  },
  label: {
    ...theme.typography.body,
  },
  labelDisabled: {
    opacity: 0.4,
  },
});
