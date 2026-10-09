import { partIconKey } from "../../lib/partIconKey";

const icons = {
  part: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.2v2.4M12 18.4v2.4M3.2 12h2.4M18.4 12h2.4M5.9 5.9l1.7 1.7M16.4 16.4l1.7 1.7M18.1 5.9l-1.7 1.7M7.6 16.4l-1.7 1.7" />
    </>
  ),
  accessory: (
    <>
      <path d="M12 3.5 18.5 6v5.2c0 3.6-2.6 5.8-6.5 7.8-3.9-2-6.5-4.2-6.5-7.8V6L12 3.5z" />
    </>
  ),
  spring: (
    <>
      <path d="M8 3.5h8" />
      <path d="M10 3.5v2.2l4 2.2-4 2.2 4 2.2-4 2.2 4 2.2-4 2.1v2.2" />
      <path d="M8 20.5h8" />
    </>
  ),
  foot: (
    <>
      <path d="M9 4h6v8H9z" />
      <path d="M7 12h10l1.2 8H5.8L7 12z" />
    </>
  ),
  drum: (
    <>
      <circle cx="12" cy="12" r="7.2" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6v1.2M12 13.2v1.2M9.6 12h1.2M13.2 12h1.2" />
    </>
  ),
  bolt: (
    <>
      <path d="M9 3.5h6l.6 3.2H8.4L9 3.5z" />
      <path d="M8.2 6.7 7 20.5h10L15.8 6.7" />
      <path d="M9 12h6M9.4 16h5.2" />
    </>
  ),
  fan: (
    <>
      <circle cx="12" cy="12" r="1.7" />
      <path d="M12 10.2c2.2-3.6 6.2-3.2 6.2.2-3.2.6-4.4.2-6.2-.2z" />
      <path d="M13.8 12c3.6 2.2 3.2 6.2-.2 6.2-.6-3.2-.2-4.4.2-6.2z" />
      <path d="M12 13.8c-2.2 3.6-6.2 3.2-6.2-.2 3.2-.6 4.4-.2 6.2.2z" />
      <path d="M10.2 12c-3.6-2.2-3.2-6.2.2-6.2.6 3.2.2 4.4-.2 6.2z" />
    </>
  ),
  bushing: (
    <>
      <rect x="8" y="3.5" width="8" height="17" rx="1.4" />
      <path d="M8 8h8M8 16h8" />
    </>
  ),
  motor: (
    <>
      <rect x="3.5" y="7.5" width="12" height="9" rx="1.4" />
      <path d="M15.5 10.2h3.2v3.6h-3.2" />
      <circle cx="9.2" cy="12" r="2.1" />
    </>
  ),
  holder: (
    <>
      <path d="M4 8h7v8H4z" />
      <path d="M11 10.2h9M11 13.8h7" />
    </>
  ),
  lock: (
    <>
      <rect x="6" y="10" width="12" height="9" rx="1.5" />
      <path d="M8.5 10V7.6a3.5 3.5 0 0 1 7 0V10" />
    </>
  ),
  valve: (
    <>
      <path d="M8 4h8l-1.4 5H9.4L8 4z" />
      <path d="M12 9v8" />
      <path d="M7.5 20h9" />
      <path d="M9.5 14h5" />
    </>
  ),
  switch: (
    <>
      <rect x="5" y="5.5" width="14" height="13" rx="2" />
      <circle cx="12" cy="12" r="2.2" />
    </>
  ),
  capacitor: (
    <>
      <path d="M8 4.5v15M16 4.5v15" />
      <path d="M4 8.5h4M4 15.5h4M16 12h4" />
    </>
  ),
  housing: (
    <>
      <rect x="4" y="4.5" width="16" height="15" rx="1.4" />
      <path d="M4 9h16" />
    </>
  ),
  cross: (
    <>
      <path d="M12 3.5v17M3.5 12h17" />
      <circle cx="12" cy="12" r="2.2" />
    </>
  ),
  door: (
    <>
      <rect x="6" y="3.2" width="12" height="17.6" rx="1.4" />
      <circle cx="15" cy="12" r="0.9" />
    </>
  ),
  gasket: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  board: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="1.2" />
      <rect x="8.2" y="8.2" width="7.6" height="5.2" rx="0.4" />
      <path d="M5.2 7.2h2.2M5.2 10h2.2M5.2 12.8h2.2M5.2 15.6h2.2M16.6 7.2H18.8M16.6 10H18.8M16.6 12.8H18.8M16.6 15.6H18.8" />
      <path d="M10.2 8.2V6M13.8 8.2V6M10.2 13.4v2.2M13.8 13.4v2.2" />
    </>
  ),
  heater: (
    <>
      <path d="M7 4.5v8.2a5 5 0 0 0 10 0V4.5" />
      <path d="M4.8 4.5h4.4M14.8 4.5h4.4" />
      <path d="M9.2 8.2h.1M12 8.2h.1M14.8 8.2h.1" />
    </>
  ),
  pump: (
    <>
      <circle cx="9" cy="13" r="4.2" />
      <path d="M12.8 11.2 18 8.5M18 8.5v4.2M5 13H3.5" />
    </>
  ),
  hose: (
    <>
      <path d="M6.2 5.5v5.2c0 3.6 2.4 5.6 5.8 5.6s5.8-2 5.8-5.6V5.5" />
      <path d="M6.2 8.2c1.8.7 3.6.7 5.8 0s4-.7 5.8 0" />
      <rect x="4" y="3.2" width="4.4" height="3.6" rx="0.5" />
      <rect x="15.6" y="3.2" width="4.4" height="3.6" rx="0.5" />
    </>
  ),
  hinge: (
    <>
      <rect x="3.5" y="6" width="6.2" height="12" rx="1" />
      <rect x="14.3" y="6" width="6.2" height="12" rx="1" />
      <path d="M9.7 12h4.6" />
    </>
  ),
  bearing: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 5v2.2M12 16.8V19M5 12h2.2M16.8 12H19" />
    </>
  ),
  dispenser: (
    <>
      <path d="M8 4.5h8l-.8 3.2H8.8L8 4.5z" />
      <path d="M8.2 7.7h7.6V17a2 2 0 0 1-2 2h-3.6a2 2 0 0 1-2-2V7.7z" />
    </>
  ),
  weight: (
    <>
      <path d="M9 8h6V5.5H9V8z" />
      <rect x="6" y="8" width="12" height="11" rx="1.4" />
    </>
  ),
  rib: (
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 5.2v13.6M7.2 7.6l9.6 8.8M16.8 7.6 7.2 16.4" />
    </>
  ),
  gear: (
    <>
      <circle cx="8" cy="13" r="3" />
      <circle cx="16" cy="10" r="3" />
    </>
  ),
  relay: (
    <>
      <rect x="5" y="3.5" width="14" height="11" rx="1.3" />
      <path d="M8.5 14.5v5M12 14.5v5M15.5 14.5v5" />
    </>
  ),
  belt: (
    <>
      <circle cx="7.2" cy="12" r="3.3" />
      <circle cx="16.8" cy="12" r="3.3" />
      <circle cx="7.2" cy="12" r="1.1" />
      <circle cx="16.8" cy="12" r="1.1" />
      <path d="M7.2 8.7h9.6M7.2 15.3h9.6" />
    </>
  ),
  kit: (
    <>
      <rect x="4" y="7" width="16" height="12" rx="1.3" />
      <path d="M4 11.5h16M9 7V4.5h6V7" />
    </>
  ),
  handle: (
    <>
      <path d="M5 13h8.5a3.5 3.5 0 1 0 0-7H8" />
      <path d="M5 8v8" />
    </>
  ),
  grease: (
    <>
      <path d="M9 10.5h6V20H9z" />
      <path d="M10.2 10.5V7h3.6v3.5" />
      <path d="M13.8 7.2c1.6-.2 2.6-1.2 3.2-2.4" />
    </>
  ),
  filter: (
    <>
      <path d="M4 5.5h16l-5.2 6.4V18l-5.6 2.2v-8.3L4 5.5z" />
    </>
  ),
  care: (
    <>
      <path d="M10 8h4V4.5h-4z" />
      <rect x="8" y="8" width="8" height="11.5" rx="2" />
    </>
  ),
  glass: (
    <>
      <path d="M4.8 7.2 19.2 5.4v12.4L4.8 19.6z" />
      <path d="M7.6 8.6 16.4 7.4v8.2L7.6 17z" />
    </>
  ),
  thermo: (
    <>
      <path d="M10 13.2V6.2a2 2 0 1 1 4 0v7a3.3 3.3 0 1 1-4 0z" />
      <path d="M12 8.2v3.6" />
    </>
  ),
  sensor: (
    <>
      <circle cx="12" cy="9" r="3" />
      <path d="M12 12v8" />
      <path d="M8.2 6.2a5.2 5.2 0 0 1 7.6 0" />
    </>
  ),
  pulley: (
    <>
      <circle cx="12" cy="12" r="6.4" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M12 5.6V8M12 16v2.4M5.6 12H8M16 12h2.4" />
    </>
  ),
  clamp: (
    <>
      <path d="M6 8h12v2.2a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8z" />
      <path d="M8 8V5.5h8V8" />
    </>
  ),
  flange: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="2.3" />
      <path d="M12 3.2v2M12 18.8v2M3.2 12h2M18.8 12h2" />
    </>
  ),
  brush: (
    <>
      <path d="M8 14.5h8V20H8z" />
      <path d="M9.2 14.5V6.5M12 14.5V4.5M14.8 14.5V6.5" />
    </>
  ),
  wire: (
    <>
      <path d="M4 8.5c3.2 0 3 7 6.2 7s3-7 6.2-7 2.6 5 3.6 5" />
      <circle cx="4" cy="8.5" r="1.2" />
    </>
  ),
  compressor: (
    <>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <path d="M9 8V5.5h6V8" />
      <circle cx="12" cy="13" r="2" />
    </>
  ),
  lamp: (
    <>
      <path d="M9 14a4 4 0 1 1 6 0" />
      <path d="M9.2 14h5.6M10 17.5h4M10.6 20h2.8" />
    </>
  ),
  shelf: (
    <>
      <path d="M4 7.5h16M4 12h16M4 16.5h16" />
      <path d="M7 4.5v15M17 4.5v15" />
    </>
  ),
  burner: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="12" cy="12" r="5.6" />
      <path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2" />
    </>
  ),
  exchanger: (
    <>
      <path d="M4 8h9a3.5 3.5 0 0 1 0 7H8" />
      <path d="M20 16h-9a3.5 3.5 0 0 1 0-7h5" />
    </>
  ),
  anode: (
    <>
      <path d="M12 3.5v17" />
      <path d="M8 7.5h8M9 12h6M10 16.5h4" />
    </>
  ),
  gas: (
    <>
      <rect x="8" y="6" width="8" height="14" rx="3" />
      <path d="M12 6V3.2" />
    </>
  ),
  shock: (
    <>
      <path d="M12 3.2v4" />
      <rect x="8.2" y="7.2" width="7.6" height="9.2" rx="1.2" />
      <path d="M12 16.4v2.2" />
      <path d="M8 20.6h8" />
    </>
  ),
  button: (
    <>
      <rect x="3.8" y="7.2" width="6.6" height="9.6" rx="3.2" />
      <rect x="13.6" y="7.2" width="6.6" height="9.6" rx="3.2" />
    </>
  ),
  knife: (
    <>
      <path d="M5 16.5c2.4-4.8 6.2-7.2 11.2-8.2" />
      <path d="M14.2 4.2 19 9.2" />
      <path d="M8.5 14.8 5.8 19" />
    </>
  ),
  sieve: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <path d="M8.2 9.2h7.6M8.2 12h7.6M8.2 14.8h7.6M9.6 6.8v10.4M14.4 6.8v10.4" />
    </>
  ),
  auger: (
    <>
      <path d="M12 3.5v17" />
      <path d="M12 6c3 1.2 3 2.6 0 3.6s-3 2.4 0 3.6 3 2.4 0 3.6" />
    </>
  ),
  cog: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3.8v2.2M12 18v2.2M3.8 12h2.2M18 12h2.2M6.2 6.2l1.6 1.6M16.2 16.2l1.6 1.6M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6" />
    </>
  ),
  coupling: (
    <>
      <rect x="3.5" y="8" width="6" height="8" rx="1" />
      <rect x="14.5" y="8" width="6" height="8" rx="1" />
      <path d="M9.5 12h5" />
    </>
  ),
  whisk: (
    <>
      <path d="M12 3.2v4" />
      <path d="M8 8.2c0 6 1.6 10.2 4 12.2 2.4-2 4-6.2 4-12.2" />
      <path d="M8 8.2h8M9.2 12.2h5.6M10.2 16h3.6" />
    </>
  ),
  bowl: (
    <>
      <path d="M5 8h14c-.6 6.2-3.2 9.2-7 9.2S5.6 14.2 5 8z" />
      <path d="M4 8h16" />
    </>
  ),
  lid: (
    <>
      <path d="M4 12h16" />
      <path d="M7 12c.4-3.2 2.2-5 5-5s4.6 1.8 5 5" />
      <path d="M11 7V4.2h2V7" />
    </>
  ),
  grate: (
    <>
      <rect x="4" y="4.5" width="16" height="15" rx="1" />
      <path d="M4 9.2h16M4 14h16M9.2 4.5v15M14.8 4.5v15" />
    </>
  ),
  tray: (
    <>
      <path d="M4 8h16l-1.4 9.2H5.4L4 8z" />
      <path d="M8 8V5.5h8V8" />
    </>
  ),
  gauge: (
    <>
      <circle cx="12" cy="13" r="6" />
      <path d="M12 13 15.2 9.6" />
      <path d="M12 4.2v2" />
    </>
  ),
  transformer: (
    <>
      <rect x="4" y="6" width="6.5" height="12" rx="1" />
      <rect x="13.5" y="6" width="6.5" height="12" rx="1" />
      <path d="M7.2 9.2v5.6M16.8 9.2v5.6" />
    </>
  ),
  fuse: (
    <>
      <rect x="4" y="9" width="16" height="6" rx="3" />
      <path d="M8 12h8" />
    </>
  ),
  plate: (
    <>
      <ellipse cx="12" cy="12" rx="7.2" ry="3.2" />
      <path d="M5 12v3.2c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2V12" />
    </>
  ),
  mica: (
    <>
      <path d="M7 4.5h10l-2 15H9l-2-15z" />
      <path d="M9.2 9h5.6M9.6 13h5" />
    </>
  ),
  magnetron: (
    <>
      <rect x="3.5" y="8" width="10" height="8" rx="1" />
      <path d="M13.5 10h3.2a3 3 0 0 1 0 4H13.5" />
      <path d="M6 8V5.2M9.2 8V5.2" />
    </>
  ),
  paddle: (
    <>
      <path d="M12 3.2v8" />
      <path d="M7 13.5h10l-1.2 6.2H8.2L7 13.5z" />
    </>
  ),
  bucket: (
    <>
      <path d="M7 7h10l-1 12H8L7 7z" />
      <path d="M9 7V5.2h6V7" />
    </>
  ),
  box: (
    <>
      <path d="M4 8.5 12 5l8 3.5v8L12 20l-8-3.5v-8z" />
      <path d="M12 12v8M12 12 4 8.5M12 12l8-3.5" />
    </>
  ),
  piston: (
    <>
      <rect x="8" y="8" width="8" height="5" rx="0.6" />
      <path d="M12 3.5v4.5" />
      <path d="M6.5 13h11v6.2H6.5z" />
    </>
  ),
  carafe: (
    <>
      <path d="M9 4h6v3.2L17 18.2a2 2 0 0 1-2 2.3H9a2 2 0 0 1-2-2.3L9 7.2V4z" />
      <path d="M8.2 11.5h7.6" />
    </>
  ),
  nut: (
    <>
      <path d="M12 3.8 18.2 7.2v7.2L12 20.2 5.8 14.4V7.2L12 3.8z" />
      <circle cx="12" cy="12" r="2.2" />
    </>
  ),
  bracket: (
    <>
      <path d="M5 5h8v4H9v10H5" />
      <path d="M13 9h6v4h-6" />
    </>
  ),
  insulation: (
    <>
      <path d="M5 7h14v10H5z" />
      <path d="M8 7v10M12 7v10M16 7v10" />
    </>
  ),
  membrane: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <path d="M6.5 12c1.6-2.4 3.4-3.6 5.5-3.6s3.9 1.2 5.5 3.6c-1.6 2.4-3.4 3.6-5.5 3.6s-3.9-1.2-5.5-3.6z" />
    </>
  ),
  electrode: (
    <>
      <path d="M12 20.2V8" />
      <path d="M12 8c2.4-2 2.4-4.2 0-5.2" />
      <path d="M8.5 18.5h7" />
    </>
  ),
  evaporator: (
    <>
      <path d="M6 5h8c2.4 0 4 1.4 4 3.2S16.4 11.4 14 11.4H8c-2.4 0-4 1.4-4 3.2S5.6 18 8 18h10" />
    </>
  ),
  salt: (
    <>
      <path d="M8 8h8l-1 11H9L8 8z" />
      <path d="M9.5 8c.4-2.4 1.4-3.6 2.5-3.6S14.1 5.6 14.5 8" />
    </>
  ),
  basket: (
    <>
      <path d="M5 8h14l-1.4 10H6.4L5 8z" />
      <path d="M8 8c0-2.4 1.6-4 4-4s4 1.6 4 4" />
      <path d="M9 12h6M9.4 15h5.2" />
    </>
  ),
  spray: (
    <>
      <circle cx="12" cy="14" r="4.2" />
      <path d="M12 9.8V4.5" />
      <path d="M8.2 6.2 6.5 4.5M15.8 6.2 17.5 4.5M12 6.2V4" />
    </>
  ),
  grinder: (
    <>
      <path d="M8 4h8l-1.2 5.2H9.2L8 4z" />
      <path d="M9.2 9.2h5.6V16L12 19.5 9.2 16V9.2z" />
    </>
  ),
  funnel: (
    <>
      <path d="M5 5h14l-5.2 7.2V19h-3.6v-6.8L5 5z" />
    </>
  ),
  battery: (
    <>
      <rect x="6" y="7" width="12" height="12" rx="1.4" />
      <path d="M10 4.5h4V7" />
      <path d="M12 10v5M9.8 12.5h4.4" />
    </>
  ),
  remote: (
    <>
      <rect x="7" y="3.5" width="10" height="17" rx="2" />
      <circle cx="12" cy="8" r="1.2" />
      <path d="M10 12.5h4M10 15.2h4" />
    </>
  ),
  shaft: (
    <>
      <path d="M12 3.2v17.6" />
      <path d="M8.5 6.5h7M8.5 17.5h7" />
    </>
  ),
  pusher: (
    <>
      <rect x="8" y="3.5" width="8" height="5" rx="1" />
      <path d="M12 8.5v12" />
    </>
  ),
  ice: (
    <>
      <path d="M12 3.5 14.2 7.2 18.2 8l-2.8 2.8.6 4.2L12 13.2 7.8 15l.6-4.2L5.6 8l4-0.8L12 3.5z" />
      <path d="M8 17.5h8M9.2 20h5.6" />
    </>
  ),
  decor: (
    <>
      <rect x="4.5" y="6" width="15" height="12" rx="1.2" />
      <circle cx="9" cy="11" r="1.3" />
      <path d="M7 15.5 10.2 12l2.2 2.2 2-1.6 2.6 2.9" />
    </>
  ),
  rail: (
    <>
      <path d="M5 8h14M5 16h14" />
      <path d="M8 6v4M16 6v4M8 14v4M16 14v4" />
    </>
  ),
  emblem: (
    <>
      <path d="M12 3.8 18 6.2v5.2c0 3.4-2.4 5.4-6 7.4-3.6-2-6-4-6-7.4V6.2L12 3.8z" />
      <path d="M9.2 11.2 11 13l3.8-4" />
    </>
  ),
  schrader: (
    <>
      <path d="M12 3.2v14" />
      <path d="M9.2 6.2h5.6M10 9.2h4" />
      <path d="M8 17.2h8v3.2H8z" />
    </>
  ),
  damper: (
    <>
      <path d="M12 3.5v5" />
      <path d="M7 8.5h10" />
      <rect x="9.2" y="8.5" width="5.6" height="8" rx="0.8" />
      <path d="M8 19.5h8" />
    </>
  ),
  frame: (
    <>
      <rect x="4.5" y="5" width="15" height="14" rx="1" />
      <rect x="7.5" y="8" width="9" height="8" rx="0.6" />
    </>
  ),
  knob: (
    <>
      <circle cx="12" cy="12" r="5.2" />
      <path d="M12 6.8v3.2" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13" r="6" />
      <path d="M12 10.2V13l2.2 1.4" />
      <path d="M9.2 4.2h5.6" />
    </>
  ),
  drawer: (
    <>
      <path d="M5 8h14v10H5z" />
      <path d="M5 12h14" />
      <path d="M10 15h4" />
    </>
  ),
  plug: (
    <>
      <rect x="7" y="8" width="10" height="9" rx="1.2" />
      <path d="M10 8V5.2M14 8V5.2" />
      <path d="M9 17h6" />
    </>
  ),
  panel: (
    <>
      <path d="M3.5 8h17v8h-17z" />
      <path d="M6 11.2h5.2M6 13.6h3.2" />
      <circle cx="16.2" cy="12" r="1.3" />
    </>
  ),
  dial: (
    <>
      <circle cx="12" cy="12" r="6.2" />
      <circle cx="12" cy="12" r="1.3" />
      <path d="M12 5.8v1.6M12 16.6v1.6M5.8 12h1.6M16.6 12h1.6M7.6 7.6l1.1 1.1M15.3 15.3l1.1 1.1M16.4 7.6l-1.1 1.1M8.7 15.3l-1.1 1.1" />
    </>
  ),
  spreader: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4.2v3.2M12 16.6v3.2M4.2 12h3.2M16.6 12h3.2M6.4 6.4l2.2 2.2M15.4 15.4l2.2 2.2M17.6 6.4l-2.2 2.2M8.6 15.4l-2.2 2.2" />
    </>
  ),
  probe: (
    <>
      <path d="M8 4.2 16.2 19.5" />
      <path d="M6.2 6.4h3.6M14.4 17.2l2.4 1.4" />
      <circle cx="7.2" cy="5.2" r="1.1" />
    </>
  ),
  gastube: (
    <>
      <path d="M5 7h6.5a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3H19" />
      <path d="M4 5.2h2.4V8.8H4zM17.6 15.2H20v3.6h-2.4z" />
    </>
  ),
  gastap: (
    <>
      <path d="M8 9h8v8H8z" />
      <path d="M12 5.2v3.8M9.2 6.4h5.6" />
      <path d="M10 17v2.2M14 17v2.2" />
    </>
  ),
  igniter: (
    <>
      <rect x="4.5" y="8" width="10" height="8" rx="1.2" />
      <path d="M14.5 10.5 19 7.5M14.5 13.5 19 16.5" />
      <path d="M16.2 12h2.2" />
    </>
  ),
  baffle: (
    <>
      <path d="M4 15.5 20 8.5" />
      <path d="M6.2 13.2v4.2M12 11.2v4.2M17.6 9.2v4.2" />
    </>
  ),
  indicator: (
    <>
      <path d="M8.5 13.5a3.5 3.5 0 1 1 7 0" />
      <path d="M9.2 13.5h5.6v3.2H9.2z" />
      <path d="M10.4 16.7v2.4M13.6 16.7v2.4" />
    </>
  ),
  terminal: (
    <>
      <rect x="4" y="7" width="16" height="10" rx="1.2" />
      <circle cx="8" cy="12" r="1.2" />
      <circle cx="12" cy="12" r="1.2" />
      <circle cx="16" cy="12" r="1.2" />
      <path d="M8 7V4.8M16 16.8V19.2" />
    </>
  ),
  cooktop: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="1.2" />
      <circle cx="8.2" cy="9.2" r="1.7" />
      <circle cx="15.8" cy="9.2" r="1.7" />
      <circle cx="8.2" cy="14.8" r="1.7" />
      <circle cx="15.8" cy="14.8" r="1.7" />
    </>
  ),
  scraper: (
    <>
      <path d="M5 16.5h10.5L19 13" />
      <path d="M5 16.5v2.2h8.5" />
      <path d="M14.2 8.2 18.2 12.2" />
    </>
  ),
  nozzle: (
    <>
      <path d="M9 4.5h6v4l2.2 2.2V16H6.8v-5.3L9 8.5z" />
      <path d="M10.2 16v3.2M13.8 16v3.2" />
    </>
  ),
  hydraulic: (
    <>
      <rect x="4" y="8" width="10" height="8" rx="1.2" />
      <path d="M14 10.2H19M14 13.8H19" />
      <path d="M7 8V5.2M11 8V5.2" />
    </>
  ),
  flue: (
    <>
      <path d="M7 20V11a4 4 0 0 1 4-4h4.2" />
      <path d="M12.6 4.2 19 7l-6.4 2.8" />
    </>
  ),
  tank: (
    <>
      <circle cx="12" cy="13.2" r="5.4" />
      <path d="M12 7.8V4.2" />
      <path d="M9.4 4.2h5.2" />
    </>
  ),
  programmer: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="1.4" />
      <rect x="6.4" y="7.4" width="7.2" height="4" />
      <path d="M6.8 14.8h5.2" />
      <circle cx="16.4" cy="15" r="1.2" />
    </>
  ),
  threeway: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 12H4.5M12 12l6-4.6M12 12l6 4.6" />
    </>
  ),
  vent: (
    <>
      <path d="M9 5.5h6V18H9z" />
      <path d="M9 8.5h6M9 12h6M9 15.5h6" />
    </>
  ),
  flow: (
    <>
      <path d="M3.8 12h9.2" />
      <path d="M10.2 8.4 15.2 12l-5 3.6" />
      <circle cx="18.2" cy="12" r="1.7" />
    </>
  ),
  controls: (
    <>
      <rect x="6.5" y="3.8" width="11" height="16.4" rx="1.2" />
      <circle cx="10" cy="8" r="1.2" />
      <circle cx="14" cy="8" r="1.2" />
      <path d="M8.8 12.4h6.4M8.8 15.6h6.4" />
    </>
  ),
};

export default function PartIcon({ name }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-[#2c2c38]"
    >
      {icons[partIconKey(name)] || icons.part}
    </svg>
  );
}
