import { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { WText } from "../WText/WText";

type WHeaderProps = Pick<ViewProps, "style" | "accessibilityRole"> & {
  title: string;
  actions?: ReactNode;
};

export const WHeader = ({ title, actions, style, ...props }: WHeaderProps) => {
  return (
    <View style={[styles.root, style]} {...props}>
      <WText variant="h2" style={styles.title}>
        {title}
      </WText>
      {actions && <View style={styles.actions}>{actions}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
  },
});
