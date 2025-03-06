import React, { useState } from 'react';
import styles from './Chatroom.module.css';

const Chatroom = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const userMessage = { text: input, sender: 'messageUser' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            // Simulate AI response
            const aiMessage = { text: "This is a simulated AI response.", sender: 'messageAi' };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
            setInput('');
        }
    };

    return (
        <div className={styles.chatroom}>
            <div className={styles.chatArea}>
                {messages.map((msg, index) => (
                    <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form className={styles.inputArea} onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={styles.inputField}
                    placeholder="Type your message..."
                />
                <button type="submit" className={`${styles.sendButton} ${styles.sendButtonHover}`}>
                    Send
                </button>
            </form>
        </div>
    );
};

export default Chatroom;
