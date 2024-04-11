import { View, Text, StyleSheet } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>BOOK</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Page;
