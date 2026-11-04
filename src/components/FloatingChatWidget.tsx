import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Check, Bot, User, Phone, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FloatingChatWidgetProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  action?: 'contact' | 'resume';
}

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({
  onOpenContact,
  onOpenResume
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputText, setInputText] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "👋 Hi there! I'm Rowshanara's AI Portfolio Assistant. How can I assist you with her background, full-stack projects, or AI engineering work today?",
      timestamp: 'Just now'
    }
  ]);

  const quickPrompts = [
    "I have an idea!",
    "Available for new project?",
    "Tell me about her AI & RAG work"
  ];

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    setHasUnread(false);
    setShowTooltip(false);
  };

  const handleSendPrompt = (prompt: string) => {
    setIsOpen(true);
    setHasUnread(false);
    setShowTooltip(false);

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: prompt,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);

    // Generate intelligent contextual response
    setTimeout(() => {
      let reply = "";
      let action: 'contact' | 'resume' | undefined = undefined;

      const lower = prompt.toLowerCase();
      if (lower.includes('available') || lower.includes('project') || lower.includes('hire') || lower.includes('idea')) {
        reply = "Yes! Rowshanara is currently accepting freelance contracts and remote full-time opportunities. She specializes in production Next.js/React web applications, AI chatbots, and multi-tenant SaaS platforms. Would you like to send a direct message or schedule a discussion?";
        action = 'contact';
      } else if (lower.includes('rag') || lower.includes('ai') || lower.includes('agent')) {
        reply = "Rowshanara has about a year of hands-on experience integrating LLM APIs (OpenAI & Claude), building autonomous AI Agents with tool calling, and designing end-to-end RAG pipelines with vector databases. Her team also achieved Top 50 standing out of 900+ teams in the SOLVIO AI Hackathon 2025!";
        action = 'resume';
      } else if (lower.includes('stack') || lower.includes('skills')) {
        reply = "Her core tech stack includes React.js, Next.js (App Router), TypeScript, Node.js/Express, and Laravel (PHP), backed by MongoDB, MySQL, Redis, and Tailwind CSS. She also manages VPS deployments, Docker, and payment webhooks (Stripe, SSLCommerz).";
        action = 'resume';
      } else {
        reply = `Thanks for asking! Rowshanara is a Full Stack Web Developer & AI Solutions Engineer based in Dhaka, Bangladesh. She is passionate about building scalable, secure, and production-ready applications. Feel free to leave a note in the contact form or email rowshanaraakhter9@gmail.com!`;
        action = 'contact';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: reply,
          timestamp: 'Just now',
          action
        }
      ]);
    }, 600);
  };

  const handleSubmitText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    handleSendPrompt(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Speech bubbles matching frame 006, 008 */}
      {!isOpen && showTooltip && (
        <div className="mb-3 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* Main greeting bubble */}
          <div className="bg-white dark:bg-zinc-800 text-slate-800 dark:text-zinc-100 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-zinc-700 text-xs sm:text-sm font-medium flex items-center gap-2">
            <span>👋 Hi! How can I help?</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 ml-1 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick action pill buttons */}
          <div className="flex flex-col items-end gap-1.5">
            {quickPrompts.slice(0, 2).map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(prompt)}
                className="bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-zinc-700 px-3.5 py-1.5 rounded-xl text-xs font-semibold shadow-md border border-indigo-200 dark:border-indigo-900/60 transition-all hover:scale-102 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Expanded Interactive Chat Modal */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[500px] animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-indigo-600 dark:bg-indigo-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Rowshanara's AI Assistant</h4>
                <div className="text-[11px] text-indigo-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Online · Answers instantly
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages scroll area */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 text-[10px] font-bold">
                    RA
                  </div>
                )}
                
                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-xs'
                      : 'bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  
                  {msg.action === 'contact' && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenContact();
                      }}
                      className="mt-2.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] flex items-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-3 h-3" />
                      Contact Rowshanara
                    </button>
                  )}

                  {msg.action === 'resume' && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenResume();
                      }}
                      className="mt-2.5 px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-[11px] flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3" />
                      View Full Resume & Skills
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Preset Prompts */}
          <div className="px-3 py-2 border-t border-slate-100 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-800/20 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendPrompt(prompt)}
                className="px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-[11px] whitespace-nowrap border border-slate-200 dark:border-zinc-700 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSubmitText} className="p-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-3.5 py-2 text-xs rounded-full border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Purple Button with Notification Badge matching Video */}
      <button
        onClick={handleOpenChat}
        aria-label="Open chat assistant"
        className="relative w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all cursor-pointer group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 fill-current" />
        )}

        {/* Unread notification badge '1' */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white dark:border-zinc-900 shadow-sm animate-bounce">
            1
          </span>
        )}
      </button>

    </div>
  );
};
