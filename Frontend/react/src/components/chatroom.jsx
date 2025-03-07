import React, { useContext, useState } from "react";
import styles from "./Chatroom.module.css";
import { LoginContext } from "../contexts/LoginContext";
import { ChatContext, ChatProvider } from "../contexts/ChatContext";
import BeatLoader from "react-spinners/BeatLoader";

const Chatroom = () => {
  const { token } = useContext(LoginContext);
  const { loadingMessage, chats, sendMessage } = useContext(ChatContext);
  const [input, setInput] = useState("");
  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(input, token);
    setInput("");
  };
  function formatText(input) {
    // Replace double asterisks (**) with <strong> tags  
    const parts = input.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/); // Split using **bold** and *paragraph*
  
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>; // Remove **
    } else if (part.startsWith("*") && part.endsWith("*")) {
      return <p key={index}>{part.slice(1, -1)}</p>; // Remove *
    }
    return part; // Return unformatted text
  });
};
  return (
      <div className={styles.chatroom}>
        <div className={styles.chatArea}>
          {chats && chats.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles[msg.role]}`}
            >
              <div>{formatText(msg.parts)}</div> 
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

  );
};

export default Chatroom;
