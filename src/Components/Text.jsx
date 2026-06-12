import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../Theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },

  textSecondary: {
    color: theme.colors.textSecondary,
  },

  primary: {
    color: theme.colors.primary,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({
  color,
  fontWeight,
  style,
  ...props
}) => {
  const textStyles = [
    styles.text,
    color === 'textSecondary' && styles.textSecondary,
    color === 'primary' && styles.primary,
    fontWeight === 'bold' && styles.bold,
    style,
  ];

  return (
    <NativeText
      style={textStyles}
      {...props}
    />
  );
};

export default Text;