import { StyleSheet, View, ViewProps } from "react-native";
import { theme } from "../../theme/theme";

type WCardProps = Pick<ViewProps, "style" | "children" | "accessibilityRole">;

export const WCard = ({ children, style, ...props }: WCardProps) => {
  return (
    <View style={[styles.root, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.default,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.space.m,
  },
});
