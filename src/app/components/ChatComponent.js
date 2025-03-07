import * as React from "react"
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../ActionProvider'
import MessageParser from '../MessageParser'
import config from '../config'
import { LinkedInIcon } from '../icons'

import 'react-chatbot-kit/build/main.css'

function ChatComponent() {
  const [profileText, setProfileText] = React.useState('')

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    // Trigger profile analysis
    const chatbot = document.querySelector('.react-chatbot-kit-chat-input')
    if (chatbot) {
      chatbot.value = `Analyze this profile: ${profileText}`
      chatbot.dispatchEvent(new Event('submit'))
    }
  }

  return (
    <div className="career-optimizer">
      <div className="chatbot-header">
        <LinkedInIcon />
        <h2>AI Career Optimizer</h2>
      </div>
      
      <div className="profile-input-section">
        <textarea 
          placeholder="Paste your LinkedIn profile summary here for AI analysis..."
          value={profileText}
          onChange={(e) => setProfileText(e.target.value)}
          className="profile-textarea"
        />
        <button 
          onClick={handleProfileSubmit}
          className="analyze-btn"
        >
          Analyze Profile
        </button>
      </div>

      <div className="chatui">
        <Chatbot 
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          placeholderText="Ask me about optimizing your LinkedIn presence..."
        />
      </div>

      <style jsx>{`
        .career-optimizer {
          max-width: 800px;
          margin: 2rem auto;
          padding: 1rem;
        }

        .chatbot-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          color: #0a66c2;
        }

        .profile-input-section {
          margin-bottom: 2rem;
        }

        .profile-textarea {
          width: 100%;
          min-height: 120px;
          padding: 1rem;
          border: 2px solid #0a66c2;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .analyze-btn {
          background: #0a66c2;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
        }

        .chatui {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  )
}

export default ChatComponent
