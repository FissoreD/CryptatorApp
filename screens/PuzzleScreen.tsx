import React from 'react';
import { SafeAreaView, useWindowDimensions, View } from 'react-native';
import styles from '../components/style';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Props } from '../navigation/types';

function PuzzleScreen({ route, navigation }: Props) {
  const empty = "";
  const { width } = useWindowDimensions();
  const [selectedNumbers, setSelectedNumbers] = React.useState<string[]>([empty]);
  const [doneNumbers, setDoneNumbers] = React.useState<string[]>([empty]);
  const [selectedColor, setSelectedColor] = React.useState<string>("");
  const [selectedTool, setSelectedTool] = React.useState<string>("");
  // const { id } = route.params;

  const onPressLetter = async (letter: string) => {
    if (selectedTool === "pen") {
      if (selectedNumbers.length > 0) {
        // replace the letter with the selected number
      }
    } else if (selectedTool === "pencil") {
      if (selectedNumbers.length > 0) {
        // annotate the letter with the selected numbers
      }
    } else if (selectedTool === "bucket") {
      if (selectedColor !== "none") {
        // color the letter with the selected color
      }
    }
    console.log(letter)
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header title = "Cryptator" width = {width} right = {true}/>
      <Footer {...{width, doneNumbers, setDoneNumbers, selectedNumbers, setSelectedNumbers, selectedColor, setSelectedColor, selectedTool, setSelectedTool}} />
    </SafeAreaView>
  );
};

export default PuzzleScreen;