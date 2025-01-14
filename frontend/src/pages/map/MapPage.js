import React from "react";
import GoogleMapBlock from "../../components/GoogleMapBlock/GoogleMapBlock";
import AutoComplete from "../../components/GoogleMapBlock/AutoComplete";

const markers = [
  { lat: 40.7128, lng: -74.0060, message: "Hello from New York City" },  // Example: New York City
  { lat: 34.0522, lng: -118.2437, message: "Hello from Los Angeles"  }, // Example: Los Angeles
  { lat: 41.8781, lng: -87.6298, message: "Hello from Chicago"  }   // Example: Chicago
  // Add more coordinates as needed
];

function MapPage() {
  return (
    <div>
      <h2>Map Page</h2>
      <AutoComplete />
      <GoogleMapBlock width="800px" height="600px" markerCoordinatesArray={markers} />
    </div>
  );
}

export default MapPage;

