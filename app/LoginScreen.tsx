import React, { useEffect } from "react";
import { View, Button, Alert, Text } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ onLogin }) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "999955088407-4l1nlt4bftctml4qfq9icqqne7b01p5j.apps.googleusercontent.com",
    redirectUri: makeRedirectUri({
      scheme: "nesto", // same as app.json
    }),
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          Alert.alert("✅ Login successful!");
          onLogin();
        })
        .catch((err) => {
          console.error("Google login failed:", err);
          Alert.alert("❌ Google login failed");
        });
    } else if (response?.type === "error") {
      console.error("Login error:", response.error);
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login to Nesto</Text>
      <Button
        disabled={!request}
        title="Login with Google"
        onPress={() => promptAsync()}
      />
    </View>
  );
}
