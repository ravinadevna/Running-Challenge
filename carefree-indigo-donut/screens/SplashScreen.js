import React, { useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Video } from "expo-av";

export default function SplashScreen({ navigation }) {
  const video = useRef(null);

  return (
    <View style={styles.container}>
      {/* Background Video */}
      <Video
        ref={video}
        source={require("../assets/splash.mp4")} // put your video in assets folder
        style={StyleSheet.absoluteFill} // makes video cover the whole screen
        resizeMode="cover"              // crop/zoom to fill screen
        shouldPlay
        isLooping
        isMuted
      />

      {/* Overlay Content */}
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Challenges", { country: "AU" })}
        >
          <Text style={styles.buttonText}>Australia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Challenges", { country: "CA" })}
        >
          <Text style={styles.buttonText}>Canada</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // makes overlay on top of video
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
