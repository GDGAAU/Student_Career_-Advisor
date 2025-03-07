import { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";

const ChatContext = createContext();
function ChatProvider({ children }) {
  const { token } = useContext(LoginContext)
  let [chats, setChat] = useState();
  let [loadingMessage, setLoadingMessage] = useState(false)

  useEffect(()=>{
    const initialChats =async()=>{
      return await fetch("http://127.0.0.1:5000/get-messages",{headers:{
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
      }})
    }
    const result = initialChats()
    if(result.ok){
    setChat(result.json)
    }
    return()=>{
      setChat([]);
    }
  }, [token]);
  function addMessageToChatRoom(message){
    setChat((chat) => {
      return chat ? [...chat, message] : [message];
    });
    setLoadingMessage(true)
  }  

  async function sendMessage(message,token) {
    let msg;
    let response;
    if(message.trim() !== ""){
      msg = { role: "user", parts: message.trim() };
      
      console.log("message sent by user",JSON.stringify(msg));
      addMessageToChatRoom(msg);

      response = await fetch("http://127.0.0.1:5000/chat-service", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "Authorization":`Bearer ${token} `
       },
      body: JSON.stringify(msg),
    }).then(response => response.json());
  }
    
  console.log("chats updated",JSON.stringify(response));
    if(response){
      setChat(chat => {      
      return [...chat,response];
      });
      setLoadingMessage(false);
    }
  }
  return (
    <ChatContext.Provider value={{ loadingMessage, chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };
