import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CreditCard = () => {
  return (
    <View style={styles.body}>
      <Text style={{ color: "#fff", fontSize: 16, marginBottom: 40 }}>
        Credit Card
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 22,
          fontWeight: "500",
          marginBottom: 10,
        }}
      >
        3514 2807 2915 2305
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Bagus Amrullah</Text>
        <Image
          source={require("../assets/icons/mastercard.png")}
          style={{ width: 50, height: 30 }}
        />
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#5E5F61",
    padding: 15,
    borderRadius: 25,
    marginBottom: 25,
  },
});
