import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ALL_INDIA_STATIONS, ALL_INDIA_CORRIDORS } from '../../data/seedData';

// Custom Map Marker styling (Indian Railways theme)
const createStationMarker = (isJunction: boolean) => L.divIcon({
  className: 'custom-ir-marker',
  html: `<div style="
    background-color: ${isJunction ? '#d97706' : '#0f4c81'};
    width: ${isJunction ? '14px' : '10px'};
    height: ${isJunction ? '14px' : '10px'};
    border-radius: 50%;
    border: 2px solid #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7]
});

export const PuneDivisionMapPage: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('ALL');

  const filteredStations = selectedZone === 'ALL'
    ? ALL_INDIA_STATIONS
    : ALL_INDIA_STATIONS.filter((s) => s.zone === selectedZone);

  return (
    <div className="p-6 bg-slate-100 min-h-screen space-y-4">
      {/* Top Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-bold text-slate-800">Indian Railways Nationwide Network</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Official All-India Zone & Division Integrated Block Planning Map
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-600">Filter IR Zone:</label>
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
          >
            <option value="ALL">All 17 IR Zones</option>
            <option value="CR">Central Railway (CR)</option>
            <option value="NR">Northern Railway (NR)</option>
            <option value="WR">Western Railway (WR)</option>
            <option value="SR">Southern Railway (SR)</option>
            <option value="ER">Eastern Railway (ER)</option>
            <option value="SCR">South Central Railway (SCR)</option>
          </select>
        </div>
      </div>

      {/* Map Container */}
      <div className="h-[720px] w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm relative">
        <MapContainer
          center={[22.5937, 78.9629]} // Center of India
          zoom={5}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Light styled basemap */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          {/* Railway Trunk Corridors */}
          {ALL_INDIA_CORRIDORS.map((corridor) => (
            <Polyline
              key={corridor.id}
              positions={corridor.positions}
              pathOptions={{ color: '#0f4c81', weight: 4, opacity: 0.7, dashArray: '8, 8' }}
            />
          ))}

          {/* Station Pins */}
          {filteredStations.map((station) => (
            <Marker
              key={station.id}
              position={[station.lat, station.lng]}
              icon={createStationMarker(station.junction)}
            >
              <Popup>
                <div className="p-1 text-slate-800">
                  <h3 className="font-bold text-sm text-[#0f4c81]">{station.name} ({station.code})</h3>
                  <p className="text-xs text-slate-600 mt-1">Zone: <b>{station.zone}</b></p>
                  <p className="text-xs text-slate-600">Division: <b>{station.division}</b></p>
                  {station.junction && (
                    <span className="inline-block mt-1 px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
                      Major Junction
                    </span>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
