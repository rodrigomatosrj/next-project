import React, { useState, useEffect, useRef } from "react";
import Message from "./message";
import SendMessage from "./sendMessage";
import { db } from "../../config/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

const Chat = ({ receiver }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Compoenent */}
      <SendMessage scroll={scroll} receiver={receiver} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
