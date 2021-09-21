import React from "react";
import {
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Image, View, ScrollView } from "moti";
//Icon Component
const HeartIcon = () => (
  <Icon name="ios-heart-outline" size={30} color="#0D0D0F" />
);
const ArrowIcon = () => (
  <Icon name="chevron-back-outline" size={30} color="#0D0D0F" />
);
const ArrowBottomIcon = () => (
  <Icon name="chevron-down-outline" size={30} color="#0D0D0F" />
);
const CartIcon = () => <Icon name="cart-outline" size={30} color="#FFF" />;

const ProductPage = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <ArrowIcon />
        <HeartIcon />
      </View>
      <View style={styles.thumbnailWrapper}>
        <Image
          source={require("../assets/images/shoes-1-detail-2.jpg")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          from={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transform: [
              {
                translateX: 0,
              },
            ],
          }}
          transition={{
            type: "spring",
          }}
          delay={150}
        />
      </View>
      <View
        style={styles.descriptionWrapper}
        from={{
          opacity: 0,
          transform: [
            {
              translateY: 50,
            },
          ],
        }}
        animate={{
          opacity: 1,
          transform: [
            {
              translateY: 0,
            },
          ],
        }}
        transition={{
          type: "spring",
        }}
        delay={50}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "500",
                maxWidth: 200,
                marginBottom: 5,
              }}
            >
              Air Jordan XXXV "Sisterhood"
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#c6c6c6",
                fontWeight: "500",
              }}
            >
              Nike Men's Basketball Shoes
            </Text>
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
            }}
          >
            $171,88
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={require("../assets/images/shoes-1-detail-1.jpg")}
              style={styles.thumbnail}
              from={{
                opacity: 0,
                transform: [
                  {
                    translateX: -50,
                  },
                ],
              }}
              animate={{
                opacity: 1,
                transform: [
                  {
                    translateX: 0,
                  },
                ],
              }}
              transition={{
                type: "spring",
              }}
              delay={100}
            />
            <Image
              source={require("../assets/images/shoes-1-detail-2.jpg")}
              style={styles.thumbnail}
              from={{
                opacity: 0,
                transform: [
                  {
                    translateX: -50,
                  },
                ],
              }}
              animate={{
                opacity: 1,
                transform: [
                  {
                    translateX: 0,
                  },
                ],
              }}
              delay={200}
            />
            <Image
              source={require("../assets/images/shoes-1-detail-3.jpg")}
              style={styles.thumbnail}
              from={{
                opacity: 0,
                transform: [
                  {
                    translateX: -50,
                  },
                ],
              }}
              animate={{
                opacity: 1,
                transform: [
                  {
                    translateX: 0,
                  },
                ],
              }}
              delay={300}
            />
            <Image
              source={require("../assets/images/shoes-1-detail-4.jpg")}
              style={styles.thumbnail}
              from={{
                opacity: 0,
                transform: [
                  {
                    translateX: -50,
                  },
                ],
              }}
              animate={{
                opacity: 1,
                transform: [
                  {
                    translateX: 0,
                  },
                ],
              }}
              delay={400}
            />
          </ScrollView>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Size</Text>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#c6c6c6" }}>
              Size Guide
            </Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              from={{
                opacity: 0,
                transform: [
                  {
                    translateX: -50,
                  },
                ],
              }}
              animate={{
                opacity: 1,
                transform: [
                  {
                    translateX: 0,
                  },
                ],
              }}
              transition={{
                type: "spring",
              }}
              delay={150}
            >
              {[40, 41, 42, 43, 44, 45].map((value, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.sizeCard}>
                    <Text style={{ fontSize: 18 }}>{value}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "500" }}>Description</Text>
            <ArrowBottomIcon />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Cart")}
          >
            <CartIcon />
            <Text style={{ marginLeft: 15, color: "#fff", fontWeight: "500" }}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 30,
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 20,
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  thumbnailWrapper: {
    flex: 3,
    paddingHorizontal: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  descriptionWrapper: {
    flex: 4,
    width: "100%",
    backgroundColor: "#fff",
    padding: 35,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  thumbnail: {
    width: Dimensions.get("window").width / 4 - 20,
    height: 50,
    resizeMode: "cover",
    backgroundColor: "#f6f6f6",
    marginRight: 10,
    borderRadius: 10,
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#0D0D0F",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  sizeCard: {
    width: 50,
    height: 50,
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 10,
  },
});

export default ProductPage;
