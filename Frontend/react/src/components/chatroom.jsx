import React, { useState } from 'react';
import './Chatroom.css';

const Chatroom = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            // Simulate AI response
            const aiMessage = { text: "This is a simulated AI response.", sender: 'ai' };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
            setInput('');
        }
    };

    return (
        <div className="chatroom">
            <div className="chat-area">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form className="input-area" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatroom;