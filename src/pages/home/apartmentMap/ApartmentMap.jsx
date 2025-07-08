import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";

// Fixing default marker icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Tower marker data
const towers = [
  {
    name: "Tower A - Gulshan",
    location: "Gulshan, Dhaka",
    position: [23.7916, 90.4152],
  },
  {
    name: "Tower B - Dhanmondi",
    location: "Dhanmondi, Dhaka",
    position: [23.7383, 90.3745],
  },
  {
    name: "Tower C - Uttara",
    location: "Uttara, Dhaka",
    position: [23.8741, 90.3986],
  },
  {
    name: "Tower D - Chattogram",
    location: "Agrabad, Chattogram",
    position: [22.3361, 91.8312],
  },
  {
    name: "Tower E - Rajshahi",
    location: "Rajshahi City",
    position: [24.3745, 88.6042],
  },
];
// Component to move the map on tower change
const FlyToLocation = ({ position }) => {
  const map = useMap();
  map.flyTo(position, 15, {
    duration: 2,
  });
  return null;
};

const ApartmentMap = () => {
  const [selectedTower, setSelectedTower] = useState(towers[0]);

  return (
    <section className="bg-base-100 text-base-content py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-title font-bold text-primary mb-6 text-center">
          Our Apartment Locations
        </h2>
        <p className="text-lg text-secondary mb-4 text-center">
          Use the dropdown to view any tower location on the map.
        </p>

        {/* Dropdown Menu */}
        <div className="mb-6 text-center">
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedTower.name}
            onChange={(e) => {
              const tower = towers.find((t) => t.name === e.target.value);
              setSelectedTower(tower);
            }}
          >
            {towers.map((tower, idx) => (
              <option key={idx} value={tower.name}>
                {tower.name}
              </option>
            ))}
          </select>
        </div>

        {/* Map */}
        <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            dragging={true}
            doubleClickZoom={false}
            center={selectedTower.position}
            zoom={7}
            scrollWheelZoom={false}
            className="h-full w-full z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FlyToLocation position={selectedTower.position} />

            {towers.map((tower, index) => (
              <Marker key={index} position={tower.position}>
                <Popup>
                  <strong>{tower.name}</strong>
                  <br />
                  {tower.location}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default ApartmentMap;
