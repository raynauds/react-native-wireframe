import { Pressable, StyleSheet, View } from "react-native";
import { theme } from "../../theme/theme";
import { WText } from "../WText/WText";

type WRadioButtonProps = {
  label?: string;
  value: string;
  isSelected?: boolean;
  onValueChange?: (value: string) => void;
};

const WRadioButton = ({
  label,
  value,
  isSelected,
  onValueChange,
}: WRadioButtonProps) => {
  return (
    <Pressable style={styles.root} onPress={() => onValueChange?.(value)}>
      <View style={[styles.radio, isSelected && styles.selected]}>
        {isSelected && <View style={styles.innerRadio} />}
      </View>
      {label && <WText>{label}</WText>}
    </Pressable>
  );
};

type WRadioGroupOptions = {
  label?: string;
  value: string;
};

type WRadioGroupProps = {
  value: string;
  onChange: (newValue: string) => void;
  options: WRadioGroupOptions[];
};

export const WRadioGroup = ({ value, onChange, options }: WRadioGroupProps) => {
  return (
    <View style={styles.groupContainer}>
      {options.map((option) => (
        <WRadioButton
          key={option.value}
          value={value}
          label={option.label}
          isSelected={option.value === value}
          onValueChange={onChange}
        />
      ))}
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
