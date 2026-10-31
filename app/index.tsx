import { Link } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import ProductList from "./components/ProductList";

export default function Index() {
  const [count, setCount] = useState(10);

  function plus() {
    setCount(count + 1);
  }

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
          setCount(count + 1);
        },
      },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
        style: "default",
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "destructive",
      },
    ]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Counter: {count}</Text>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
      <Button title={"Plus"} onPress={plus} /> */}
      <ProductList />
      <Link href="./screens/details" style={styles.link}>
        Open Details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  link: {
    marginTop: 10,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
