// @ts-check

import GoogleMapReact from "google-map-react";

export function GoogleMapPage() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBVsjeUwHbdajJ8xIn0caGtye3yZsS0E2w" }}
        defaultZoom={11}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
      ></GoogleMapReact>
    </div>
  );
}
