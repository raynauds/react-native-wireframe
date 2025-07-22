import { ScrollView, StyleSheet } from "react-native";
import { WTextStories } from "../components/WText/WText.stories";
import { theme } from "../theme/theme";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <WTextStories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    gap: theme.spacing.m,
    padding: theme.spacing.m,
  },
});
