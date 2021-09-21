import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductPage from "../screens/ProductPage.screen";
import Cart from "../screens/Cart.screen";
import Checkout from "../screens/Checkout.screen";
const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Product"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Product" component={ProductPage} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default ProductStack;
