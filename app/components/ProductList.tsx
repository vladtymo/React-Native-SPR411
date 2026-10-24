import { useEffect, useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { Product } from "../models/Product";
import ProductForm from "./ProductForm";
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

  const handleCreateProduct = (item: Product) => {
    let newId = products.length + 1;
    let newItem: Product = {
      ...item,
      price: Number(item.price),
      rating: {
        rate: null,
        count: 0,
      },
      id: newId,
    };

    setProducts((prevProducts) => [...prevProducts, newItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Product</Text>
      <ProductForm onCreateProduct={handleCreateProduct} />
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        initialNumToRender={4}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <Button title="Clear All" onPress={() => setProducts([])}></Button>
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
