import { Alert } from "react-native";
import { getSolutions, isSolved } from "../../backend/nativeModules";

const createHintMessage = async (puzzleId: number) => {
  console.log("$ printing hint");
  let sol = JSON.parse(await getSolutions(puzzleId));
  let message = await isSolved() ? "The cryptarithm is already solved" : `The solution of this cryptarithm is: \n ${JSON.stringify(sol.solutions)} for the symbols ${JSON.stringify(sol.symbols)}`

  return Alert.alert(
    "A wonderful hint",
    message,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed in hint"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed in hint") }
    ]
  );
}
export default createHintMessage;