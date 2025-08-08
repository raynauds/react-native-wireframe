import { Meta } from "@storybook/react-native";
import { StyleSheet, View } from "react-native";

export const DefaultStoriesDecorator: Meta["decorators"] = (Story) => {
  return (
    <View style={styles.root}>
      <Story />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" },
});
