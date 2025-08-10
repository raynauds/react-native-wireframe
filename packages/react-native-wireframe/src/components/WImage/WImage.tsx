import { Image, ImageProps, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

type WImageProps = Pick<
  ImageProps,
  "style" | "source" | "accessibilityHint" | "accessibilityLabel"
>;

export const WImage = ({ style, ...props }: WImageProps) => {
  return <Image style={[styles.root, style]} {...props} />;
};

const styles = StyleSheet.create({
  root: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
});
