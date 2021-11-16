import {DefaultTheme} from 'react-native-paper';
import colors from './colors';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    black: colors.black,
    white: colors.white,
  },
  padding: {
    PADDING_20: 20,
    PADDING_10: 10,
  },
  font: {
    FONT_SIZE_12: 12,
    FONT_SIZE_14: 14,
    FONT_SIZE_16: 16,
    FONT_SIZE_18: 18,
    FONT_SIZE_20: 20,
    FONT_WEIGHT_LIGHT: '200',
    FONT_WEIGHT_MEDIUM: '500',
    FONT_WEIGHT_BOLD: '700',
  },
};
