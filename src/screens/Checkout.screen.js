import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CreditCard from "../components/CreditCard";
//Icon Component
const ArrowIcon = ({ nav }) => (
  <Icon onPress={nav} name="chevron-back-outline" size={30} color="#0D0D0F" />
);
const DummyIcon = () => (
  <Icon name="chevron-back-outline" size={30} color="transparent" />
);
const AppleIcon = () => <Icon name="logo-apple" size={30} color="#0D0D0F" />;
const PaypalIcon = () => <Icon name="logo-usd" size={30} color="#0D0D0F" />;

const Checkout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <ArrowIcon nav={() => navigation.goBack()} />
        <Text style={{ fontSize: 22, fontWeight: "500" }}>Checkout</Text>
        <DummyIcon />
      </View>
      <View style={{ flex: 1, width: "100%", justifyContent: "space-between" }}>
        <View style={styles.contentWrapper}>
          <CreditCard />
          <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 15 }}>
            Choose Payment Method
          </Text>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity style={styles.paymentCard}>
                <AppleIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.paymentCard}>
                <PaypalIcon />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "500", marginVertical: 15 }}>
            Promo Code
          </Text>
          <KeyboardAvoidingView
            style={{
              padding: 10,
              backgroundColor: "#e4e4e4",
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <TextInput placeholder="Promo Code" style={{ flex: 1 }} />
            <TouchableOpacity style={styles.coupon}>
              <Text style={{ color: "#fff", fontWeight: "500" }}>Apply</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <View style={{ paddingHorizontal: 25 }}>
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
          <TouchableOpacity style={styles.payButton}>
            <Text style={{ color: "#fff", fontWeight: "500" }}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Checkout;

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
    flexDirection: "row",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  contentWrapper: {
    paddingTop: 20,
    paddingHorizontal: 25,
    width: "100%",
  },
  paymentCard: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#c6c6c6",
    padding: 10,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  coupon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0d0d0f",
    borderRadius: 10,
  },
  payButton: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#0D0D0F",
    alignItems: "center",
    borderRadius: 10,
  },
});
