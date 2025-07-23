import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { theme } from "../../theme/theme";
import { WText } from "../WText/WText";

type WTextInputProps = Pick<
  TextInputProps,
  "placeholder" | "value" | "onChangeText"
> & {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label?: string;
};

export const WTextInput = ({
  label,
  containerStyle,
  inputStyle,
  ...props
}: WTextInputProps) => {
  return (
    <View style={[styles.root, containerStyle]}>
      {label && <WText style={styles.label}>{label}</WText>}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={theme.typography.caption.color}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: theme.space.s,
  },
  label: {
    color: theme.colors.text,
  },
  input: {
    ...theme.typography.body,
    color: theme.colors.text,
    borderColor: theme.colors.border,
    borderWidth: 1,
    padding: theme.space.m,
    borderRadius: theme.borderRadius.default,
  },
});
