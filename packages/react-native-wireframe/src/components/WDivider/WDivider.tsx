import { StyleSheet, View, ViewProps } from "react-native";
import { theme } from "../../theme/theme";

type WDividerProps = Pick<ViewProps, "style"> & {
  orientation?: "horizontal" | "vertical";
};

export const WDivider = ({
  orientation = "horizontal",
  style,
  ...props
}: WDividerProps) => {
  return (
    <View
      style={[
        styles.root,
        orientation === "horizontal" ? styles.horizontal : styles.vertical,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.colors.border,
  },
  horizontal: {
    height: 1,
    width: "100%",
  },
  vertical: {
    width: 1,
    height: "100%",
  },
});
