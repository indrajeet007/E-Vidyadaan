import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import AppNavigation from "./navigation/AppNavigator";
import { red } from "ansi-colors";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete) {
    return (
      <View style={styles.container}>
        <AppNavigation></AppNavigation>
      </View>
    );
  }
  return (
    <AppLoading
      startAsync={loadResourcesAsync}
      onError={handleLoadingError}
      onFinish={() => handleFinishLoading(setLoadingComplete)}
    ></AppLoading>
  );
}

async function loadResourcesAsync() {
  return;
}

function handleLoadingError(error) {
  console.log("Error on Main App Loading Resources.", error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
