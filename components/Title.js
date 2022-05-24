import { StyleSheet, Text } from "react-native";
import { LIGHT_CYAN } from "../constants";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
  r;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: LIGHT_CYAN,
    textAlign: "center",
    borderWidth: 2,
    borderColor: LIGHT_CYAN,
    padding: 12,
  },
});

export default Title;
