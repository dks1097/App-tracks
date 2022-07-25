import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import "../_mockLocations";

const TrackCreateScreen = ({isFocused}) => {
  const { addLocation } = useContext(LocationContext);
  const [error] = useLocation(isFocused,addLocation);

  console.log(isFocused);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a track</Text>
      <Map />
      {error ? <Text>Please enable location services.</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

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
