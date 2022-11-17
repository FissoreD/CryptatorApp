import { SafeAreaView, useWindowDimensions } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Props } from '../navigation/types';

function PuzzleScreen({ route, navigation }: Props) {
  const { width } = useWindowDimensions();
  // const { id } = route.params;

  return(
    <SafeAreaView style={styles.container}>
      <Header title = "Cryptator" width={width} right={true}/>
      <Footer width={width}/>
    </SafeAreaView>
  );
};

export default PuzzleScreen;