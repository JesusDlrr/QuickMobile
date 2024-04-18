import { View, Text, Button, StatusBar } from "react-native";
import React from "react";
import Webview from "react-native-webview";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Webview source={{ uri: 'https://quick.businesscodecreators.com' }} injectedJavaScript={"et meta = document.createElement('meta'); meta.setAttribute('name', 'viewport'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); document.getElementsByTagName('head')[0].appendChild(meta)"} />
    </>
  );
}
