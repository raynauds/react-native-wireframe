import React from 'react';
import { Pressable, StyleSheet, View, ViewProps } from 'react-native';
import { WText } from '../WText';
import { theme } from '../../theme/theme';

export type WListItemProps = Pick<ViewProps, 'style' | 'accessibilityRole'> & {
  title: string;
  description?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  onPress?: () => void;
};

export const WListItem = ({
  title,
  description,
  left,
  right,
  onPress,
  style,
  ...props
}: WListItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.root,
        pressed && styles.pressed,
        style,
      ]}
      {...props}
    >
      {left ? <View style={styles.leftContainer}>{left}</View> : null}
      <View style={styles.contentContainer}>
        <WText style={styles.title}>{title}</WText>
        {description ? (
          <WText style={styles.description}>{description}</WText>
        ) : null}
      </View>
      {right ? <View style={styles.rightContainer}>{right}</View> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.space.m,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  pressed: {
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  leftContainer: {
    marginRight: theme.space.m,
  },
  rightContainer: {
    marginLeft: theme.space.m,
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: theme.colors.text,
  },
});
