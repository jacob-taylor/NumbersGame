import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { PACIFIC_BLUE } from "../constants";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <TouchableOpacity style={styles.buttonInnerContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: { borderRadius: 28, margin: 4, overflow: "hidden" },
  buttonInnerContainer: {
    backgroundColor: PACIFIC_BLUE,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: { color: "white", textAlign: "center" },
});
export default PrimaryButton;
