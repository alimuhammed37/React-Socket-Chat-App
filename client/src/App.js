import './App.css';
import io from "socket.io-client"
import { useEffect, useState } from "react"

const socket = io.connect("http://193.168.94.14:3001");

function App() {

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    })
  }, [socket])

  const sendMessage = () => {
    socket.emit("send_message", { message: message });
  }

  // console.log('messageReceived', messageReceived)
  return (
    <div className="App">
      <header className="App-header">
        <div>Server is Running</div>
        <div>
          <input placeholder="Type message here" onChange={(event) => { setMessage(event.target.value) }} style={{ padding: "10px 10px", borderRadius: "5px" }} />
          <button onClick={sendMessage} style={{ padding: "10px 10px", borderRadius: "5px" }}>Send message</button>
        </div>
        <h3>Message : </h3>
        <ul>
          <li>{messageReceived}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
