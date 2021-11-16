import {StyleSheet} from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.padding.PADDING_20,
    alignItems: 'center',
  },
  titleHeading: {
    fontSize: theme.font.FONT_SIZE_14,
    alignSelf: 'flex-start',
    padding: theme.padding.PADDING_10,
    fontWeight: theme.font.FONT_WEIGHT_BOLD,
  },
  toolbar_container: {
    backgroundColor: theme.colors.white,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolbar_title: {
    fontSize: theme.font.FONT_SIZE_20,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
});
