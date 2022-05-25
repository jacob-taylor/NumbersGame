import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { PACIFIC_BLUE, MIDNIGHT_BLUE } from "../../constants";

const Card = () => {
  return <View style={styles.inputContainer}></View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    alignItems: "center",
    padding: 16,
    backgroundColor: MIDNIGHT_BLUE,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
