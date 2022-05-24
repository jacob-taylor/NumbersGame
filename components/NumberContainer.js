import { View, Text, StyleSheet } from "react-native";
import { LIGHT_CYAN } from "../constants";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: LIGHT_CYAN,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: { color: LIGHT_CYAN, fontWeight: "bold", fontSize: 32 },
});
export default NumberContainer;
