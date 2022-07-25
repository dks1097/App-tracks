import React, { useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={styles.spinner} />;
  }
  initialLocation = {
    longitude: -8.149258613586426,
    latitude: 41.18540573120117,
  };

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialLocation,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // onRegionChange={onRegionChange}
        // onRegionChangeComplete={onRegionChangeComplete}
        // onPress={onMapPress}
        // onLongPress={onMapLongPress}
        // onMarkerPress={onMarkerPress}
        // onMarkerSelect={onMarkerSelect}
        // onMarkerDeselect={onMarkerDeselect}
        // onCalloutPress={onCalloutPress}
        // onMarkerDragStart={onMarkerDragStart}
        // onMarkerDragEnd={onMarkerDragEnd}
        // onPointerCapture={onPointerCapture}
        // onPanDrag={onPanDrag}
        // onPanDragEnd={onPanDragEnd}
        // onPanDragStart={onPanDragStart}
        // onTap={onTap}
        // onDoubleTap={onDoubleTap}
        // onLongPress={onLongPress}
        // Update map position se o user mexer no mapa (move ou zoom) ver as funcoes acima
      >
        <Circle
        center={currentLocation.coords}
        radius={25}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
        />
      </MapView>
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
