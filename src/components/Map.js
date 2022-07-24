import React, { useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
      ></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  spinner: {
    marginTop: 200,
  },
});

export default Map;
