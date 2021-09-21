import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { View } from "moti";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const CartItem = ({ props }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width,
        padding: 20,
      }}
      key={props.id}
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
      }}
      delay={150 * props.id}
    >
      <BouncyCheckbox
        size={25}
        fillColor="black"
        iconStyle={{ borderRadius: 5 }}
      />
      <Image
        source={props.image}
        style={{
          width: 75,
          height: 75,
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: "#c4c4c4",
        }}
      />
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 18,
            maxWidth: 200,
            fontWeight: "500",
          }}
          numberOfLines={1}
        >
          {props.name}
        </Text>
        <Text style={{ marginBottom: 10, color: "#c6c6c6", fontWeight: "500" }}>
          Size {props.size}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{props.price}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: "#c6c6c6",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 15,
              }}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "500" }}>{props.quantity}</Text>
            <TouchableOpacity
              style={{
                width: 25,
                height: 25,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: "#c6c6c6",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 15,
                backgroundColor: "#000",
              }}
            >
              <Text style={{ color: "#fff" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
