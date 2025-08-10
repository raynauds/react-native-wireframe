import Slider, { SliderProps } from "@react-native-community/slider";
import { View, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

type WSliderProps = Pick<
  SliderProps,
  | "style"
  | "onValueChange"
  | "value"
  | "minimumValue"
  | "maximumValue"
  | "step"
  | "disabled"
  | "accessibilityHint"
  | "accessibilityLabel"
>;

export const WSlider = ({ style, ...props }: WSliderProps) => {
  return (
    <View style={styles.root}>
      <Slider
        style={[styles.slider, style]}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.colors.tertiary}
        thumbTintColor={theme.colors.primary}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: theme.space.s,
  },
  slider: {
    height: 40,
  },
});
