import OpenAI from "openai"


const openAI = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    baseURL: "https://api.openai.com",
    dangerouslyAllowBrowser: true,
    maxRetries: 2,
    timeout: 15000
})


class ActionProvider {
    createChatBotMessage
    setState
    createClientMessage
    stateRef
    createCustomMessage
    
    constructor(
      createChatBotMessage,
      setStateFunc,
      createClientMessage,
      stateRef,
      createCustomMessage,
      ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage
        this.setState = setStateFunc
        this.createClientMessage = createClientMessage
        this.stateRef = stateRef
        this.createCustomMessage = createCustomMessage
    }

    callGenAI = async (prompt) => {
        const chatCompletion = await openAI.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: "You are a LinkedIn Profile Optimization Assistant. Provide strategic, actionable suggestions for profile enhancement, headline optimization, keyword placement, and professional networking. Focus on career growth and recruiter visibility."},
                {role: "user", content: prompt}
            ],
            temperature: 0.8,
            max_tokens: 250
        });
        return chatCompletion.choices[0].message.content
    }
    
    timer = ms => new Promise(res => setTimeout(res, ms));
    
    generateResponseMessages = async (userMessage)  => {
        const responseFromGPT = await this.callGenAI(userMessage);
        let message;
        let numberOfLines = responseFromGPT.split("\n").length;
        for(let i=0; i<numberOfLines; i++){
            const msg = responseFromGPT.split("\n")[i];
            if(msg.length){
                message = this.createChatBotMessage(msg);
                this.updateChatbotState(message);
            }
            await this.timer(1000);
        }
    }

    handleProfileAnalysis = (profileContent) => {
        const prompt = `Analyze this LinkedIn profile and provide specific improvements: ${profileContent}`;
        this.generateResponseMessages(prompt);
    }

    handleHeadlineOptimization = (industry, role) => {
        const prompt = `Generate 3 compelling LinkedIn headlines for a ${role} in ${industry} that maximize visibility`;
        this.generateResponseMessages(prompt);
    }

    handleNetworkingMessage = (context) => {
        const prompt = `Create a personalized LinkedIn connection message for ${context}`;
        this.generateResponseMessages(prompt);
    }

    handleKeywordSuggestions = (jobTitle, industry) => {
        const prompt = `Suggest top 10 ATS-friendly keywords for a ${jobTitle} in ${industry}`;
        this.generateResponseMessages(prompt);
    }

    respond = (message) => {
        this.generateResponseMessages(message)
    }

    updateChatbotState = (message) => {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;
