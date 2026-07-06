import React, { createContext, useContext, useState } from 'react';

interface ChatContextType {
    open: boolean;
    openChat: () => void;
    closeChat: () => void;
    toggleChat: () => void;
    pendingPrompt: string | null;
    openChatWithPrompt: (text: string) => void;
    clearPendingPrompt: () => void;
}

interface ChatProviderProps {
    children: React.ReactNode;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: ChatProviderProps) {
    const [open, setOpen] = useState(false);
    const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);

    const openChat = () => setOpen(true);
    const closeChat = () => setOpen(false);
    const toggleChat = () => setOpen((prev) => !prev);
    const openChatWithPrompt = (text: string) => {
        setOpen(true);
        setPendingPrompt(text);
    };
    const clearPendingPrompt = () => setPendingPrompt(null);

    return (
        <ChatContext.Provider value={{ open, openChat, closeChat, toggleChat, pendingPrompt, openChatWithPrompt, clearPendingPrompt }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}
