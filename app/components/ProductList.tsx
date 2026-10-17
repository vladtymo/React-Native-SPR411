import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Product } from "../models/Product";
import ProductItem from "./ProductItem";

const api = "https://fakestoreapi.com/products";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => Alert.alert("Error", error.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        initialNumToRender={4}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 12,
  },
  list: {
    paddingBottom: 12,
  },
});
