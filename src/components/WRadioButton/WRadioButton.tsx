import { Pressable, StyleSheet, View } from "react-native";
import { theme } from "../../theme/theme";
import { WText } from "../WText/WText";

type WRadioButtonProps = {
  label?: string;
  value: string;
  selectedValue?: string;
  onValueChange?: (value: string) => void;
};

export const WRadioButton = ({
  label,
  value,
  selectedValue,
  onValueChange,
}: WRadioButtonProps) => {
  const isSelected = value === selectedValue;

  return (
    <Pressable style={styles.root} onPress={() => onValueChange?.(value)}>
      <View style={[styles.radio, isSelected && styles.selected]}>
        {isSelected && <View style={styles.innerRadio} />}
      </View>
      {label && <WText>{label}</WText>}
    </Pressable>
  );
};

type WRadioGroupProps = {
  children: React.ReactNode;
  value: string;
  onChange: (newValue: string) => void;
};

export const WRadioGroup = ({
  children,
  value,
  onChange,
}: WRadioGroupProps) => {
  return (
    <View style={styles.groupContainer}>
      {Array.isArray(children) &&
        children.map((child, index) => {
          return (
            <WRadioButton
              key={index}
              {...child.props}
              selectedValue={value}
              onValueChange={onChange}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.space.m,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  innerRadio: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.background,
  },
  groupContainer: {
    gap: theme.space.m,
  },
});
