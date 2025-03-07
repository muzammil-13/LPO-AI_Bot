# LinkedIn Profile Optimization AI Bot

An intelligent chatbot built with Next.js, React, and OpenAI's GPT API to analyze and enhance LinkedIn profiles for better visibility, recruiter reach, and career growth.

## Features

* **Profile Strength Analysis** – AI evaluates profile completeness, clarity, and keyword optimization.
* **Headline & Summary Optimization** – AI generates engaging, SEO-friendly headlines and summaries.
* **ATS Keyword Suggestions** – AI suggests job-specific keywords for better recruiter visibility.
* **Networking Assistance** – AI suggests personalized outreach messages.
* **LinkedIn Post Generation** – AI creates content ideas for professional branding.
* **Real-time Chat Interface** – Built using `react-chatbot-kit` for interactive AI conversations.
* **Secure API Handling** – Uses environment variables to manage OpenAI API keys securely.

## Tech Stack

* **Frontend:** Next.js 13+ (React framework)
* **Backend:** OpenAI GPT API
* **Chatbot Engine:** `react-chatbot-kit`
* **Styling:** Geist Font
* **Hosting & Deployment:** Vercel

## Quick Start

### 1. Clone the repository:

```bash
git clone https://github.com/muzammil-13/linkedin-ai-bot.git
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create an `.env.local` file and add your OpenAI API key:

```bash
NEXT_PUBLIC_apiKey=your-api-key-here
```

### 4. Run the development server:

```bash
npm run dev
```

### 5. Open the chatbot:

Go to [http://localhost:3000](http://localhost:3000/) to access the LinkedIn Profile Optimization AI Bot.

## Usage

### ✅ **Profile Strength Analysis**

* Paste your LinkedIn profile summary and get  **AI-generated improvements** .
* Receive a **profile score** and  **keyword optimization tips** .

### ✍ **Headline & Summary Suggestions**

* AI suggests **3 optimized headlines** based on job role and industry.
* Get a rewritten, **SEO-friendly summary** with better engagement potential.

### 🔍 **ATS Keyword Suggestions**

* Enter your  **job title & industry** .
* AI lists **top 15 recruiter-friendly keywords** to improve search ranking.

### 🤝 **Networking & Outreach Messages**

* AI suggests  **customized connection request messages** .
* Optimize LinkedIn messages for recruiters, mentors, and industry professionals.

### 📢 **LinkedIn Post Generator**

* AI provides **engaging LinkedIn post ideas** for career branding and thought leadership.

## Development

### Project Structure:

```
/src/app/components/ChatComponent.js  # Main chat interface
/src/app/ActionProvider.js           # AI response handling
/src/app/MessageParser.js            # User input processing
/src/app/config.js                    # Chatbot configuration
/src/pages/api/generate.js            # API endpoint for OpenAI
```

## Deployment

### Deploy with [Vercel](https://vercel.com/):

1. Push your project to GitHub.
2. Import your repository into Vercel.
3. Add your OpenAI API key as an environment variable.
4. Click  **Deploy** .

## Contributing

Contributions are welcome! You can contribute by:

* Adding new AI-powered features.
* Enhancing UI/UX.
* Improving response accuracy.
* Fixing bugs and performance issues.

## License

[MIT License](https://chatgpt.com/c/LICENSE)

---

🚀 **Turn your LinkedIn profile into a job-magnet with AI-powered optimization!**
