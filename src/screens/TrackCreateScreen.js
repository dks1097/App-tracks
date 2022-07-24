import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";
import "../_mockLocations";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a track</Text>
      <Map />
      {error ? <Text>Please enable location services.</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

//const { granted } = await requestForegroundPermissionsAsync();
// const startWatching = async () => {
//     try {
//       const { granted } = await requestPermissionsAsync();
//       if (!granted) {
//         throw new Error('Location permission not granted');
//       }
//     } catch (e) {
//       setErr(e);
//     }
//   };
