class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    // Profile Analysis
    if (lowerCase.includes('analyze') || lowerCase.includes('optimize') || lowerCase.includes('review')) {
      this.actionProvider.handleProfileAnalysis(message);
      return;
    }

    // Headline Optimization
    if (lowerCase.includes('headline') || lowerCase.includes('title')) {
      const industry = this.extractIndustry(message) || 'tech';
      const role = this.extractRole(message) || 'professional';
      this.actionProvider.handleHeadlineOptimization(industry, role);
      return;
    }

    // Skills & Keywords
    if (lowerCase.includes('skills') || lowerCase.includes('keywords')) {
      const jobTitle = this.extractRole(message) || 'professional';
      const industry = this.extractIndustry(message) || 'tech';
      this.actionProvider.handleKeywordSuggestions(jobTitle, industry);
      return;
    }

    // Networking Messages
    if (lowerCase.includes('message') || lowerCase.includes('connect') || lowerCase.includes('network')) {
      this.actionProvider.handleNetworkingMessage(message);
      return;
    }

    // Default response for unmatched queries
    this.actionProvider.respond(message);
  }

  extractIndustry(message) {
    // Add industry detection logic
    const industries = ['tech', 'finance', 'healthcare', 'marketing', 'sales'];
    return industries.find(industry => message.toLowerCase().includes(industry));
  }

  extractRole(message) {
    // Add role detection logic
    const roles = ['software engineer', 'product manager', 'data scientist', 'designer'];
    return roles.find(role => message.toLowerCase().includes(role));
  }
}

export default MessageParser;
