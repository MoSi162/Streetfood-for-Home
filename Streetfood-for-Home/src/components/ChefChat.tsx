import React, { useState, useRef, useEffect } from 'react'
import { streamChefTips } from '../services/aiChefService'

interface Message {
  id: string
  text: string
  sender: 'user' | 'chef'
  timestamp: Date
}

interface ChefChatProps {
  dishName: string
  ingredients?: string[]
  cuisineType?: string
}

const ChefChat: React.FC<ChefChatProps> = ({ dishName, ingredients, cuisineType }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showChat, setShowChat] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize with chef greeting
  useEffect(() => {
    if (messages.length === 0 && showChat) {
      setMessages([
        {
          id: '1',
          text: `Hello! I'm your Michelin-star chef. I'm here to help you cook "${dishName}" perfectly! Ask me anything about ingredients, techniques, or wine pairings.`,
          sender: 'chef',
          timestamp: new Date(),
        },
      ])
    }
  }, [showChat, dishName])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Get chef response
      let chefResponse = ''

      // Stream the response
      for await (const chunk of streamChefTips(dishName, ingredients, cuisineType)) {
        chefResponse += chunk
      }

      // Add chef message
      const chefMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: chefResponse || "That's a great question! Use the tips above and remember: passion is the secret ingredient!",
        sender: 'chef',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, chefMessage])
    } catch (error) {
      console.error('Error getting chef response:', error)
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: 'I had a moment to think, but my expertise is always here! Try asking about techniques, ingredients, or cooking times.',
        sender: 'chef',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chef-chat-container">
      <button
        className="chat-toggle-btn"
        onClick={() => setShowChat(!showChat)}
        title="Chat with Chef"
      >
        👨‍🍳
      </button>

      {showChat && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>👨‍🍳 Chef Assistant</h3>
            <button className="chat-close" onClick={() => setShowChat(false)}>
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-avatar">
                  {message.sender === 'chef' ? '👨‍🍳' : '👤'}
                </div>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message chef">
                <div className="message-avatar">👨‍🍳</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask the chef anything..."
              className="chat-input"
              disabled={isLoading}
            />
            <button type="submit" className="chat-send-btn" disabled={isLoading}>
              🚀
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChefChat
