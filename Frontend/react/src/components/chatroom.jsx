import React, { useContext, useEffect, useState } from "react";
import styles from "./Chatroom.module.css";
import { LoginContext } from "../contexts/LoginContext";
import { ChatContext, ChatProvider } from "../contexts/ChatContext";
import BeatLoader from "react-spinners/BeatLoader";

const Chatroom = () => {
//   const { token } = useContext(LoginContext);
//   const { loadingMessage, chats, sendMessage } = useContext(ChatContext);
//   const [input, setInput] = useState("");
//   const [initialChat, setInitialChat] = useState([]);
//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     sendMessage(e.target.value, token);
//   };

//   useEffect(() => {
//     const fetchMessages = async () => {
//       const messages = await fetch("http://127.0.0.1/get-messages", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }).then((response) => {
//         if (response.ok) {
//           return { messages: response.json(), status: 0 };
//         } else {
//           return { messages: null, status: 1 };
//         }
//       });
//       return { messages: messages, status: messages.status };
//     };
//     const messages = fetchMessages();
//     if (messages.status == 0) {
//       setInitialChat(messages.messages);
//     }
//     return () => {
//       setInitialChat([]);
//     };
//   }, [token]);

  return (
    <ChatProvider initialChat={initialChat}>
      <div className={styles.chatroom}>
        <div className={styles.chatArea}>
          {chats.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles[msg.role]}`}
            >
              {msg.text}
            </div>
          ))}
          {loadingMessage && <BeatLoader className="message model" />}
        </div>
        <form className={styles.inputArea} onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.inputField}
            placeholder="Type your message..."
          />

          <button
            type="submit"
            className={`${styles.sendButton} ${styles.sendButtonHover}`}
          >
            Send
          </button>
        </form>
      </div>
    </ChatProvider>
  );
};

export default Chatroom;
