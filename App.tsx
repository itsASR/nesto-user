import React, { useState } from "react";
import { View } from "react-native";
import LoginScreen from "./app/LoginScreen";
import WebViewScreen from "./app/WebViewScreen";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <WebViewScreen />
  ) : (
    <LoginScreen onLogin={() => setLoggedIn(true)} />
  );
}
