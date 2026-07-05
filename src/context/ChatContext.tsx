import React, { createContext, useContext, useState } from 'react';

interface ChatContextType {
    open: boolean;
    openChat: () => void;
    closeChat: () => void;
    toggleChat: () => void;
}

interface ChatProviderProps {
    children: React.ReactNode;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: ChatProviderProps) {
    const [open, setOpen] = useState(false);

    const openChat = () => setOpen(true);
    const closeChat = () => setOpen(false);
    const toggleChat = () => setOpen((prev) => !prev);

    return (
        <ChatContext.Provider value={{ open, openChat, closeChat, toggleChat }}>
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
