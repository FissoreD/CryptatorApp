import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {ClickableIcon} from './Bouton';

interface Props {
  width: number;
}

const Footer: React.FC<Props> = ({width}) => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  return (
    <View style={styles.footer}>
      <View style={styles.row}>
        <ClickableIcon name='pencil' print='draft' flexBasis='34%' {...{ selectedItem, setSelectedItem }} />
        <ClickableIcon name='pen' print='final' flexBasis='34%' {...{ selectedItem, setSelectedItem }} />
        <ClickableIcon name='bucket' print='color' flexBasis='34%' {...{ selectedItem, setSelectedItem }} />
      </View>
    </View>
  )
}

export default Footer;