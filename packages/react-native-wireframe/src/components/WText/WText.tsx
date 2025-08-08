import { StyleSheet, Text, TextProps } from "react-native";
import { theme, TypographyVariant } from "../../theme/theme";

type WTextProps = Pick<
  TextProps,
  "style" | "children" | "accessibilityRole"
> & {
  variant?: TypographyVariant;
};

export const WText = ({
  variant = "body",
  children,
  style,
  ...props
}: WTextProps) => {
  return (
    <Text style={[styles.root, styles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {
    color: theme.colors.text,
  },
  ...theme.typography,
});
