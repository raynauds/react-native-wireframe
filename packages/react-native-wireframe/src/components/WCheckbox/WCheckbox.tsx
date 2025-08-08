import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { theme } from "../../theme/theme";
import { WText } from "../WText/WText";

type WCheckboxProps = Pick<
  PressableProps,
  "style" | "accessibilityHint" | "accessibilityLabel"
> & {
  label?: string;
  value: boolean;
  onChange: (newValue: boolean) => void;
  style?: StyleProp<ViewStyle>;
};

export const WCheckbox = ({
  label,
  value,
  onChange,
  style,
  ...props
}: WCheckboxProps) => {
  return (
    <Pressable
      style={[styles.root, style]}
      onPress={() => onChange?.(!value)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value }}
      accessibilityLabel={label}
      {...props}
    >
      <View style={[styles.checkbox, value && styles.checked]}>
        {value && <View style={styles.innerCheck} />}
      </View>
      {label && <WText>{label}</WText>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.space.m,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  innerCheck: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.background,
  },
});
