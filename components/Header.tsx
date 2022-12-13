import React from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';
import { ClickableOnceIcon } from './Bouton';
import { Icon } from 'react-native-elements'
import styles from './style';
import colors from './colors';
import { TOOLS } from './constants';
import { useAppSelector } from '../app/hooks';
import createHintMessage from './buttonListener/HintListener';

interface Props {
  title: string;
  right?: boolean;
  onLayout?: ((event: LayoutChangeEvent) => void)
}
const Header: React.FC<Props> = ({ title, right, onLayout }) => {
  const [selectedItem, setSelectedItem] = React.useState("");
  const width = useAppSelector((state) => state.window.width)

  let rightElem = <View style={styles.headerRight} />
  if (right) {
    rightElem = <View style={styles.headerRight}>
      <ClickableOnceIcon name={TOOLS.HINT} onPress={createHintMessage} print='hint' flexBasis='100%' {...{ selectedItem, setSelectedItem }} />
    </View>
  }

  return (
    <View style={[styles.header, styles.center, styles.row]} onLayout={onLayout}>
      <View style={[styles.headerLeft, styles.center]}>
        <Icon name='menu' size={width / 8} color={colors.color}
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
