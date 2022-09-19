import React from "react";
// maps environment
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import newIcon from "../assets/images/path.png";
import LocationData from "../constant/location.json";
import L from "leaflet";
import "../assets/style/maps.css";
// store management
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { dataAtom } from "../store/atom/dataAtom";
import { dataSelector } from "../store/selector/dataSelector";

const Maps = () => {
  // send data to store
  const setData = useSetRecoilState(dataAtom);
  const setValue = useRecoilValue(dataSelector);

  //map utilities
  const centerPosition = [1.2935, 103.8504];
  const zoom = setValue.zoom;
  // setting icon and marker ...

  const customMarker = new Icon({
    iconUrl: `${newIcon}`,
    iconAnchor: [30, 70],
  });

  const showMarker = LocationData.map((data) => (
    <>
      {/* boilerplate from leaflet lib... */}
      <Marker
        key={data.id}
        icon={L.divIcon({ html: `${data.place}`, className: "box" })}
        position={[data.latitude, data.longitude]}
        eventHandlers={{
          click: () => {
            setData({
              desc: data.desc,
              img: data.img,
              place: data.place,
              clicked: true,
              zoom: 17,
            });
          },
        }}
      />
      <Marker
        icon={customMarker}
        position={[data.latitude, data.longitude]}
        iconAnchor={[100, 30]}
        eventHandlers={{
          click: () => {
            setData({
              desc: data.desc,
              img: data.img,
              place: data.place,
              clicked: true,
              zoom: 17,
            });
          },
        }}
      />
      {/*...boilerplate from leaflet lib*/}
    </>
  ));
  // ...end of setting icon and marker
  return (
    <div>
      <MapContainer center={centerPosition} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showMarker}
      </MapContainer>
    </div>
  );
};

export default Maps;

// source from : leaflet library
