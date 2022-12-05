import { Alert } from "react-native";

const solvedMessage = async () => {
  return Alert.alert(
    "Congratulations",
    "You have solved the puzzle !",
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
export default solvedMessage;