// ทำการเชื่อม Websocket Server ตาม url ที่กำหนด
const connection = new WebSocket(`${process.env.REACT_APP_URL_WEBSOCKET}`);

export default connection;
