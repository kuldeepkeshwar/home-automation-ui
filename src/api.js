import axios from "axios";

export async function fetchBoards() {
  const response = await axios.get(
    "https://home-automation-server.now.sh/api/devices"
  );

  return response.data.data;
}
export async function setPin(id, pin, status) {
  const response = await axios.post(
    `https://home-automation-server.now.sh/api/devices/${id}/pins/${pin}`,
    { status }
  );
  return response.data.data;
}
