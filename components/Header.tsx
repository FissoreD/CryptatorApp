import React from 'react';
import {View, Text} from 'react-native';
import {ClickableOnceIcon} from './Bouton';
import { Icon } from 'react-native-elements'
import styles from './style';
import colors from './colors';

interface Props {
  title: string;
  width: number;
  right?: boolean;
}
const Header: React.FC<Props> = ({title, width, right}) => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  let rightElem = <View style={styles.headerRight} />
  if (right) {
    rightElem = <View style={styles.headerRight}>
      <ClickableOnceIcon name='lightbulb' print='hint' flexBasis='100%' {...{ selectedItem, setSelectedItem }} />
    </View>
  }

  return (
    <View style={[styles.header, styles.center, styles.row]}>
      <View style={[styles.headerLeft, styles.center]}>
        <Icon name='menu' size={width/8} color={colors.color}
          tvParallaxProperties={undefined}
          onPress={() => console.log('menu')}
        />
      </View>
      <View style={[styles.headerTitle, styles.center]}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {rightElem}
    </View>
  );
};

export default Header;
