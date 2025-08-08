import { theme } from "@/src/theme/theme";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { WText } from "../WText/WText";

type StoryProps = {
  title: string;
  children: ReactNode;
};

export const Story = ({ title, children }: StoryProps) => {
  return (
    <View style={styles.root}>
      <WText variant="h2">{title}</WText>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: theme.space.m,
  },
  contentContainer: {
    gap: theme.space.m,
    paddingHorizontal: theme.space.m,
  },
});
