import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProductStack from "./src/stacks/Product.stack";
export default function App() {
  return (
    <NavigationContainer>
      <ProductStack />
    </NavigationContainer>
  );
}
