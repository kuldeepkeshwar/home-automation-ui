import axios from "axios";

export async function fetchBoards() {
  const response = await axios.get(
    "https://home-automation-server.now.sh/api/devices"
  );
  return response.data;
}
export async function setPin(id, pin, status) {
  const response = await axios.post(
    `https://home-automation-server.now.sh//api/devices/${id}/pins/${pin}`,
    { status }
  );
  return response.data;
}
export default {
  "-LUsr5_mgCiuYCqcrewG": {
    buttons: ["tv", "home theatre"],
    id: "-LUsr5_mgCiuYCqcrewG",
    ip: 0,
    lastOnline: "2018-12-29T12:04:40.947Z",
    name: "testing",
    pins: [4, 5],
    status: [1, 0],
    syncd: true
  },
  "-LUty0DUZSo2xasq_esa": {
    buttons: ["tv", "home theatre"],
    id: "-LUty0DUZSo2xasq_esa",
    ip: "192.168.0.31",
    lastOnline: "2018-12-30T05:41:08.194Z",
    name: "tv-set",
    pins: [4, 5],
    status: [0, 1],
    syncd: false
  },
  "-LUvfTuR92u-UC-OwfI4": {
    buttons: ["light", "fan"],
    id: "-LUvfTuR92u-UC-OwfI4",
    ip: "192.168.0.32",
    lastOnline: "2018-12-29T21:29:34.178Z",
    name: "living-room",
    pins: [4, 5],
    status: [1, 1],
    syncd: false
  }
};
