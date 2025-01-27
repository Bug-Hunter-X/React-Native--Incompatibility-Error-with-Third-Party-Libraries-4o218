// Bug.js
import React from 'react';
import MapView from 'react-native-maps'; // Outdated version causing incompatibility

const MyMap = () => {
  return (
    <MapView style={{flex: 1}} initialRegion={{latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} />
  );
};

export default MyMap;

// BugSolution.js
import React from 'react';
import MapView from 'react-native-maps'; // Updated version

const MyMap = () => {
  return (
    <MapView style={{flex: 1}} initialRegion={{latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} />
  );
};

export default MyMap; 