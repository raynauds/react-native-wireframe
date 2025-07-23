import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { theme } from "../../theme/theme";

type WTextInputProps = Pick<
  TextInputProps,
  "placeholder" | "value" | "onChangeText"
> & {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
};

export const WTextInput = ({
  label,
  containerStyle,
  inputStyle,
  iconLeft,
  iconRight,
  ...props
}: WTextInputProps) => {
  return (
    <View style={[styles.root, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {iconLeft && (
          <Image style={styles.icon} source={require("./icon.png")} />
        )}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholderTextColor={theme.typography.caption.color}
          {...props}
        />
        {iconRight && (
          <Image style={styles.icon} source={require("./icon.png")} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: theme.space.s,
  },
  label: {
    ...theme.typography.body,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.space.s,
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.borderRadius.default,
    paddingHorizontal: theme.space.m,
  },
  input: {
    ...theme.typography.body,
    color: theme.colors.text,
    flex: 1,
    paddingVertical: theme.space.m,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
