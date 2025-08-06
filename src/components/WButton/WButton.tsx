import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { theme } from "../../theme/theme";
import { WText } from "../WText/WText";

type WButtonProps = Pick<
  TouchableOpacityProps,
  "style" | "onPress" | "accessibilityHint" | "accessibilityLabel"
> & {
  title: string;
  variant?: "filled" | "outlined" | "text";
};
export const WButton = ({
  title,
  variant = "filled",
  style,
  onPress,
  ...props
}: WButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.root,
        variant === "filled" && styles.rootFilled,
        variant === "outlined" && styles.rootOutlined,
        variant === "text" && styles.rootText,
        style,
      ]}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={title}
      {...props}
    >
      <WText style={[styles.text, variant === "filled" && styles.textFilled]}>
        {title}
      </WText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: theme.space.m,
    paddingVertical: theme.space.m,
    borderRadius: theme.borderRadius.default,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  rootFilled: {
    backgroundColor: theme.colors.primary,
  },
  rootOutlined: {},
  rootText: {
    borderWidth: 0,
  },
  text: {
    color: theme.colors.text,
    textAlign: "center",
  },
  textFilled: {
    color: theme.colors.contrastText,
  },
});
