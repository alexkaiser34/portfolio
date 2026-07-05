import { useEffect, useRef, useState } from 'react';
import { Bot, Send, X, ArrowUpRight } from 'lucide-react';
import { useChat as useAIChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { useTheme } from '../../context/ThemeContext';
import { useChat } from '../../context/ChatContext';
import { SUGGESTED_PROMPTS } from '../../services/aiAssistant';
import { CHAT_API_ROUTE } from '@shared/chat';

function messageText(message: UIMessage): string {
  return message.parts
    .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
    .map((part) => part.text)
    .join('');
}

function AIAssistant() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const { open, closeChat, toggleChat } = useChat();

  const { messages, sendMessage, status } = useAIChat({
    transport: new DefaultChatTransport({ api: CHAT_API_ROUTE }),
  });
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(true);
  const [size, setSize] = useState({ width: 390, height: 540 });
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const busy = status === 'submitted' || status === 'streaming';

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  useEffect(() => {
    if (open) {
      setShowHint(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    setInput('');
    void sendMessage({ text: trimmed });
  };

  const hasMessages = messages.length > 0;

  // Drag the top-left grip to enlarge the panel (anchored bottom-right).
  const startResize = (e: React.PointerEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startW = size.width;
    const startH = size.height;
    const onMove = (ev: PointerEvent) => {
      const width = Math.min(Math.max(startW + (startX - ev.clientX), 340), window.innerWidth - 48);
      const height = Math.min(Math.max(startH + (startY - ev.clientY), 360), window.innerHeight - 120);
      setSize({ width, height });
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  const panelShadow = dark
    ? '0 16px 60px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.06)'
    : '0 16px 60px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.05)';

  const btnShadow = dark
    ? '0 4px 28px rgba(0,0,0,0.5), 0 0 30px rgba(139,142,245,0.22)'
    : '0 4px 24px rgba(91,95,207,0.28), 0 2px 8px rgba(0,0,0,0.08)';

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {/* Chat panel */}
      <div
        className="transition-all duration-300 ease-out origin-bottom-right"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(10px)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div
          className="relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden"
          style={{
            width: size.width,
            height: size.height,
            maxWidth: 'calc(100vw - 3rem)',
            maxHeight: 'calc(100dvh - 7.5rem)',
            boxShadow: panelShadow,
          }}
        >
          {/* Resize grip (top-left) */}
          <div
            onPointerDown={startResize}
            role="separator"
            aria-label="Resize chat"
            className="absolute top-0 left-0 z-10 size-5 cursor-nwse-resize"
            style={{ touchAction: 'none' }}
          >
            <div className="absolute top-1.5 left-1.5 size-2 border-t-2 border-l-2 border-muted-foreground/40 rounded-tl-sm" />
          </div>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-border flex-shrink-0 bg-card">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Bot size={15} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-none mb-1">
                  Alex's AI Assistant
                </p>
                <p className="text-[10px] text-muted-foreground font-mono tracking-wide leading-none">
                  Ask about experience, skills, or role fit
                </p>
              </div>
            </div>
            <button
              onClick={closeChat}
              aria-label="Close chat"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
            {!hasMessages ? (
              <div className="flex flex-col h-full gap-5">
                <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-3">
                  <div className="size-12 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                    <Bot size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Hi — I'm Alex's AI assistant
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed max-w-[260px] mx-auto">
                      I can answer questions about Alex's background, technical skills, and
                      experience. Recruiters: paste a job description to see how Alex aligns
                      with your role.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1 px-0.5">
                    Suggested
                  </p>
                  {SUGGESTED_PROMPTS.map(({ text }) => (
                    <button
                      key={text}
                      onClick={() => send(text)}
                      className="group text-left text-xs px-3.5 py-2.5 rounded-xl border border-border bg-muted hover:border-primary/30 hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-all duration-150 flex items-center gap-2"
                    >
                      <ArrowUpRight
                        size={11}
                        className="flex-shrink-0 opacity-40 group-hover:opacity-70 transition-opacity"
                      />
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="size-6 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot size={11} className="text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-md'
                          : 'bg-muted text-foreground rounded-2xl rounded-bl-md'
                      }`}
                    >
                      {messageText(msg)}
                    </div>
                  </div>
                ))}
                {status === 'submitted' && (
                  <div className="flex gap-2 justify-start">
                    <div className="size-6 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={11} className="text-primary" />
                    </div>
                    <div className="bg-muted px-4 py-3.5 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                      {[0, 140, 280].map((delay) => (
                        <span
                          key={delay}
                          className="size-1.5 rounded-full bg-muted-foreground/40 animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="self-center text-[11px] text-muted-foreground text-center px-3 py-2">
                    Something went wrong. Please try again.
                  </div>
                )}
                <div ref={bottomRef} />
              </>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex-shrink-0">
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-muted border border-border focus-within:border-primary/35 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Ask a question or paste a job description…"
                className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground outline-none border-none min-w-0"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || busy}
                aria-label="Send message"
                className="p-1.5 rounded-lg bg-primary text-primary-foreground disabled:opacity-25 hover:opacity-85 transition-all flex-shrink-0"
              >
                <Send size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* First-load hint bubble */}
      {!open && (
        <div
          className="transition-all duration-500 ease-out origin-bottom-right"
          style={{
            opacity: showHint ? 1 : 0,
            transform: showHint ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(4px)',
            pointerEvents: 'none',
          }}
        >
          <div
            className="relative mr-1 mb-1 max-w-[240px] px-3.5 py-2.5 rounded-xl bg-card border border-border text-xs text-muted-foreground leading-relaxed"
            style={{
              boxShadow: dark ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.08)',
            }}
          >
            <span className="text-foreground font-medium">Recruiters:</span> paste a job
            description to see how Alex fits your role.
            <div className="absolute bottom-[-5px] right-7 size-2.5 rotate-45 bg-card border-r border-b border-border" />
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={toggleChat}
        aria-label="Open Alex's AI assistant"
        className="group flex items-center gap-3 py-3 pl-3.5 pr-4 rounded-2xl bg-primary text-primary-foreground transition-all duration-200 hover:opacity-95 hover:scale-[1.02]"
        style={{ boxShadow: btnShadow }}
      >
        <div className="size-8 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
          <Bot size={17} />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold leading-none mb-1">Alex's AI Assistant</p>
          <p className="text-[11px] opacity-70 leading-none">Ask about fit, skills, or paste a JD</p>
        </div>
        {hasMessages && !open && (
          <span className="size-2 rounded-full bg-white animate-pulse ml-1" />
        )}
      </button>
    </div>
  );
}

export default AIAssistant;
