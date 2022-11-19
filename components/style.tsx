import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pad10 : {
    width: '100%',
    padding: 10,
  },
  pad20 : {
    width: '100%',
    padding: 20,
  },
  pad10_20 : {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }, 
  full: {
    height: '100%',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.color,
  },
  header: {
    width: '100%',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    flexWrap: 'wrap',
    zIndex: 9,
    backgroundColor: colors.backgroundColor,
  },
  headerTitle: {
    flexBasis: '50%',
    height: '100%',
    borderRightWidth: 1,
  },
  headerLeft: {
    flexBasis: '25%',
    height: '100%',
    borderRightWidth: 1,
  },
  headerRight: {
    flexBasis: '25%',
    height: '100%',
  },
  toolFooter: {
    width: '100%',
    flexWrap: 'wrap',
    position: 'absolute',
    bottom: 110
  },
  footer: {
    width: '100%',
    height: 100,
    borderTopWidth: 1,
    borderColor: '#000',
    flexWrap: 'wrap',
    zIndex: 9,
    position: 'absolute',
    bottom: 0
  },
  item: {
    display: 'flex',
    flexBasis: '34%',
    height: '100%',
    borderRightWidth: 1,
  },
  button: {
    width: '100%',
    height : 65,
    borderWidth: 2,
    borderColor: colors.color,
  },
  buttonList: {
    width: '100%',
    height : 65,
    borderWidth: 2,
    borderColor: colors.color,
    flexDirection: 'row',
  },
  buttonLeft: {
    height: '100%',
    display: 'flex',
    flexBasis: '75%',
    borderRightWidth: 2,
    borderColor: colors.color,
  },
  buttonRight: {
    display: 'flex',
    flexBasis: '25%',
  },
  circle: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 30,
  }
});

export default styles;
