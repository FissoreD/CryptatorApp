import { Alert } from "react-native";
import { getSolutions } from "../../backend/nativeModules";

const createHintMessage = async (puzzleId: number) => {
  console.log("$ printing hint");
  let sol = JSON.parse(await getSolutions(puzzleId));

  return Alert.alert(
    "A wonderful hint",
    `The solution of this cryptarithm is: \n ${JSON.stringify(sol.solutions)} for the symbols ${JSON.stringify(sol.symbols)}`,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
}
export default createHintMessage;