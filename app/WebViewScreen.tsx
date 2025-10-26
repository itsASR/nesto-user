import React, { useRef, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
  const [loading, setLoading] = useState(true);
  const webViewRef = useRef(null);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#00BFA5"
          style={styles.loader}
        />
      )}
      <WebView
        ref={webViewRef}
        source={{ uri: "https://abhishek-dir.vercel.app" }} // ← apni website URL yahan daalo
        onLoadEnd={() => setLoading(false)}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
});
