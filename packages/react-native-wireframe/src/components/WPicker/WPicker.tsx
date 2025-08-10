import { Picker, PickerProps } from "@react-native-picker/picker";
import { StyleSheet, View, ViewProps } from "react-native";
import { theme } from "../../theme/theme";

type WPickerProps = Pick<
  PickerProps<string>,
  "style" | "onValueChange" | "selectedValue"
> & {
  items: { label: string; value: string }[];
  containerStyle?: ViewProps["style"];
};

export const WPicker = ({
  items,
  style,
  containerStyle,
  ...props
}: WPickerProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Picker style={[styles.picker, style]} {...props}>
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.default,
  },
  picker: {
    backgroundColor: "transparent",
  },
});
