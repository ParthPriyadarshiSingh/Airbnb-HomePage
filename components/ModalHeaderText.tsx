import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setActive(0)}
        style={{ paddingBottom: 2, borderBottomWidth: active === 0 ? 2 : 0 }}
      >
        <Text
          style={{
            fontFamily: "mon-sb",
            fontSize: 20,
            color: active === 0 ? "#000" : Colors.grey,
          }}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setActive(1)}
        style={{ paddingBottom: 2, borderBottomWidth: active === 1 ? 2 : 0 }}
      >
        <Text
          style={{
            fontFamily: "mon-sb",
            fontSize: 20,
            color: active === 1 ? "#000" : Colors.grey,
          }}
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});

export default ModalHeaderText;
