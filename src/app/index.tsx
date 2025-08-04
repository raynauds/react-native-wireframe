import { ScrollView, StyleSheet } from "react-native";
import { WButtonStories } from "../components/WButton/WButton.stories";
import { WCheckboxStories } from "../components/WCheckbox/WCheckbox.stories";
import { WRadioButtonStories } from "../components/WRadioButton/WRadioButton.stories";
import { WSwitchStories } from "../components/WSwitch/WSwitch.stories";
import { WTextStories } from "../components/WText/WText.stories";
import { WTextInputStories } from "../components/WTextInput/WTextInput.stories";
import { theme } from "../theme/theme";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <WTextStories />
      <WButtonStories />
      <WTextInputStories />
      <WSwitchStories />
      <WCheckboxStories />
      <WRadioButtonStories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    gap: theme.space.m,
    padding: theme.space.m,
  },
});
