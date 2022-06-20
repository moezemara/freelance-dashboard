import { io } from "socket.io-client";

const socket = new io("https://api.plebits.com/", {
  autoConnect: false,
  withCredentials: true
  //transports: ['websocket']
});

export default socket;