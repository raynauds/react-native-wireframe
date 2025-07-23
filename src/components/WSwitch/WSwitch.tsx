import { useState } from "react";
import { StyleSheet, Switch, SwitchProps, Text, View } from "react-native";
import { theme } from "../../theme/theme";

type WSwitchProps = Pick<SwitchProps, "style" | "disabled"> & {
  label?: string;
};

export const WSwitch = ({ label, disabled }: WSwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.root}>
      {label && (
        <Text style={[styles.label, disabled && styles.labelDisabled]}>
          {label}
        </Text>
      )}
      <Switch
        trackColor={{
          true: theme.colors.primary,
        }}
        thumbColor={theme.colors.background}
        onValueChange={toggleSwitch}
        value={isEnabled}
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
