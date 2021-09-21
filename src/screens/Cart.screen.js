import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CartItem from "../components/CartItem";
//Icon Component
const MenuIcon = () => (
  <Icon name="ellipsis-vertical" size={30} color="#0D0D0F" />
);
const ArrowIcon = ({ nav }) => (
  <Icon onPress={nav} name="chevron-back-outline" size={30} color="#0D0D0F" />
);

const Cart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <ArrowIcon nav={() => navigation.goBack()} />
        <Text style={{ fontSize: 22, fontWeight: "500" }}>Cart</Text>
        <MenuIcon />
      </View>
      <View style={styles.contentWrapper}>
        <ScrollView style={{ width: "100%" }}>
          {data.map((item) => {
            return <CartItem key={item.id} props={item} />;
          })}
        </ScrollView>
      </View>
      <View style={{ paddingHorizontal: 25, width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 10,
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Selected Item (1)
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>$175.88</Text>
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            backgroundColor: "#0D0D0F",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => navigation.push("Checkout")}
        >
          <Text style={{ color: "#fff", fontWeight: "500" }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const data = [
  {
    id: "1",
    name: 'Air Jordan XXXV "Sisterhood"',
    size: 42,
    price: "$175.88",
    quantity: "1",
    image: require("../assets/images/shoes-1.jpg"),
  },
  {
    id: "2",
    name: "Nike Air Zoom Terra Kids..",
    size: 43,
    price: "$229.99",
    quantity: "1",
    image: require("../assets/images/shoes-2.jpg"),
  },
  {
    id: "3",
    name: 'LeBorn Witness 5 Limited Edition"',
    size: 41,
    price: "$180.99",
    quantity: "1",
    image: require("../assets/images/shoes-3.jpg"),
  },
  {
    id: "4",
    name: "Nike Metcon 6 AMP Anniversary",
    size: 42,
    price: "$230.00",
    quantity: "2",
    image: require("../assets/images/shoes-4.jpg"),
  },
];

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 30,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  headerWrapper: {
    width: "100%",
    // backgroundColor: "#36f",
    flexDirection: "row",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 20,
  },
});
