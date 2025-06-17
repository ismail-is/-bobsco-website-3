import React, { useState } from 'react';

export default function Whatsapp() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    {
      author: 'Bobsco Holding',
      text1: 'Hi There 👋\n\n',
      text:"How Can we help you!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      const newMessage = {
        author: 'You',
        text: chatInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);

      // Create the WhatsApp link and open it
      const phoneNumber = ' +'; // Update this with the desired phone number
      const messageText = encodeURIComponent(chatInput);
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`;
      window.open(whatsappURL, '_blank');

      setChatInput('');
    }
  };

  return (
    <>
      <div id="whatsapp-chat" className={isChatOpen ? '' : 'hide'}>
        <div className="header-chat">
          <div className="head-home">
            <div className="info-avatar">
              <img
                src="/android-chrome-192x192.png"
                alt="Avatar"
              />
            </div>
            <p>
              <span className="whatsapp-name">Bobsco Holding</span>
              <br />
              <small>Online</small>
            </p>
          </div>
          <div className="get-new hide">
            <div id="get-label"></div>
            <div id="get-nama"></div>
          </div>
        </div>
        {/* <div className="home-chat">
          {messages.map((message, index) => (
            <div key={index} className="WhatsappChat__Component-sc-1wqac52-0 whatsapp-chat-body whatsapp-chat-message">
              <div className="WhatsappChat__MessageContainer-sc-1wqac52-1 dAbFpq">
                <div className="WhatsappChat__Message-sc-1wqac52-4 kAZgZq">
                  <div className="WhatsappChat__Author-sc-1wqac52-3 bMIBDo message-author">{message.author}</div>
                  <div className="WhatsappChat__Text-sc-1wqac52-2 iSpIQi">{message.text}</div>
                  <div className="WhatsappChat__Time-sc-1wqac52-5 cqCDVm">{message.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="home-chat">
  {messages.map((message, index) => (
    <div key={index} className="whatsapp-chat-message">
      <div className="message-author">{message.author}</div>
      <div className="message-text">{message.text1}</div>
      <div className="message-text">{message.text}</div>
      <div className="message-time">{message.time}</div>
    </div>
  ))}
</div>


        <div className="start-chat">
          <div className="blanter-msg">
            <textarea
              id="chat-input"
              placeholder="Write a response"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              maxLength="120"
              rows="1"
            ></textarea>
            <a href="javascript:void(0);" id="send-it" onClick={handleSendMessage}>
              <svg viewBox="0 0 448 448">
                <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" />
              </svg>
            </a>
          </div>
        </div>
        <div id="get-number"></div>
        <a className="close-chat" href="javascript:void(0);" onClick={() => setIsChatOpen(false)}>
          ×
        </a>
      </div>
      <a className="blantershow-chat" href="javascript:void(0);" title="Show Chat" onClick={() => setIsChatOpen(true)}>
        <svg width="20" viewBox="0 0 24 24">
          <defs />
          <path
            fill="#eceff1"
            d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"
          />
          <path
            fill="#4caf50"
            d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"
          />
          <path
            fill="#fafafa"
            d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
          />
        </svg>
        Chat with Us
      </a>
    </>
  );
}
