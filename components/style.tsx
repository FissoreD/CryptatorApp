import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    width: '100%',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 9,
    backgroundColor: colors.backgroundColor,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: colors.color,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  full: {
    height: '100%',
    width: '100%',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  icon: {
  },
  highlight: {
    backgroundColor: colors.highlight,
    color: '#000',
  },
  headerTitle: {
    display: 'flex',
    flexBasis: '50%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRightWidth: 1,
  },
  headerLeft: {
    display: 'flex',
    flexBasis: '25%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRightWidth: 1,
  },
  headerRight: {
    flexBasis: '25%',
    height: '100%',
    alignContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    color: 'blue',
  },
  footer: {
    display: 'flex',
    width: '100%',
    height: 100,
    borderTopWidth: 1,
    borderBottomColor: '#000',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 9,
    position: 'absolute',
    bottom: 0
  },
  item: {
    display: 'flex',
    flexBasis: '34%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRightWidth: 1,
  },
});

export default styles;
