import { useEffect, useRef, useState } from 'react';
import { Bot, Send, X, ArrowUpRight } from 'lucide-react';
import { useChat as useAIChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { Streamdown } from 'streamdown';
import { useTheme } from '../../context/ThemeContext';
import { useChat } from '../../context/ChatContext';
import { SUGGESTED_PROMPTS } from '../../services/aiAssistant';
import { CHAT_API_ROUTE, CHAT_LIMITS } from '@shared/chat';

/** Max input height ≈ 3 lines (13px text, leading-relaxed); grows to here, then scrolls. */
const MAX_INPUT_HEIGHT = 64;

function messageText(message: UIMessage): string {
  return message.parts
    .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
    .map((part) => part.text)
    .join('');
}

function AIAssistant() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const { open, closeChat, toggleChat, pendingPrompt, clearPendingPrompt } = useChat();

  const { messages, sendMessage, status } = useAIChat({
    transport: new DefaultChatTransport({ api: CHAT_API_ROUTE }),
  });
  const [input, setInput] = useState('');
  const [isHopping, setIsHopping] = useState(false);
  const [size, setSize] = useState({ width: 390, height: 540 });
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const busy = status === 'submitted' || status === 'streaming';
  const tooLong = input.length > CHAT_LIMITS.maxMessageChars;

  // Grow the input up to ~3 lines, then let it scroll (iMessage-style).
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, MAX_INPUT_HEIGHT)}px`;
  }, [input]);

  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setIsHopping(true);
      setTimeout(() => setIsHopping(false), 700);
    }, 10000);
    return () => clearInterval(interval);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  useEffect(() => {
    if (open && pendingPrompt) {
      send(pendingPrompt);
      clearPendingPrompt();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, pendingPrompt]);

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
    <div className="pointer-events-none fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
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
                      Hi, I'm Alex's AI assistant
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
                {messages.map((msg, index) => (
                  <div
                    key={msg.id || index}
                    className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="size-6 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot size={11} className="text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-md whitespace-pre-wrap'
                          : 'bg-muted text-foreground rounded-2xl rounded-bl-md'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        messageText(msg)
                      ) : (
                        <Streamdown className="[&>:first-child]:mt-0 [&>:last-child]:mb-0 [&_a]:text-primary [&_a]:underline">
                          {messageText(msg)}
                        </Streamdown>
                      )}
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
            <div className="flex items-end gap-2 px-3.5 py-2.5 rounded-xl bg-muted border border-border focus-within:border-primary/35 transition-colors">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Ask a question or paste a job description..."
                className="flex-1 resize-none bg-transparent text-[13px] leading-relaxed text-foreground placeholder:text-muted-foreground outline-none border-none min-w-0 overflow-y-auto"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || busy || tooLong}
                aria-label="Send message"
                className="p-1.5 rounded-lg bg-primary text-primary-foreground disabled:opacity-25 hover:opacity-85 transition-all flex-shrink-0"
              >
                <Send size={12} />
              </button>
            </div>
            {tooLong && (
              <p className="mt-1.5 px-1 text-[11px] text-destructive">
                Message is too long — please shorten it before sending.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Floating button */}
      <div className="relative pointer-events-auto">
        <button
          onClick={toggleChat}
          aria-label="Open Alex's AI assistant"
          className="relative group flex items-center gap-2 sm:gap-3 p-2.5 sm:py-3 sm:pl-3.5 sm:pr-4 rounded-xl sm:rounded-2xl bg-primary text-primary-foreground transition-all duration-200 hover:opacity-95 hover:scale-[1.02]"
          style={{ boxShadow: btnShadow, animation: isHopping ? 'btn-hop 0.7s ease-in-out' : undefined }}
        >
          <div className="size-7 sm:size-8 rounded-lg sm:rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
            <Bot size={16} />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold leading-none mb-1 hidden sm:block">Alex's AI Assistant</p>
            <p className="text-[11px] opacity-70 leading-none">Ask anything about Alex</p>
          </div>
          {hasMessages && !open && (
            <span className="size-2 rounded-full bg-white animate-pulse ml-1" />
          )}
        </button>
      </div>
    </div>
  );
}

export default AIAssistant;
