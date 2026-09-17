import { useState } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import api from "../api";

const AIChatbot = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi! 👋 I'm your Car Rental AI Assistant. How can I help you?"
        }
    ]);

    const [loading, setLoading] = useState(false);
    const [previousInteractionId, setPreviousInteractionId] = useState(null);

    const handleSend = async (e) => {

        e.preventDefault();

        const text = message.trim();

        if (!text || loading) {
            return;
        }

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: text
            }
        ]);

        setMessage("");

        setLoading(true);

        try {

            const res = await api.post("/api/ai-chat", {
                message: text,
                previousInteractionId: previousInteractionId
            });

            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: res.data.reply
                }
            ]);

            setPreviousInteractionId(res.data.interactionId);

        } catch (error) {

            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "Sorry 😔 I'm unable to respond right now. Please try again."
                }
            ]);

        } finally {

            setLoading(false);

        }
    };

    return (
        <>
            {isOpen && (

                <div className="fixed bottom-24 right-3 sm:right-5 md:right-6
                    w-[calc(100vw-1.5rem)] sm:w-[340px] md:w-[360px]
                    h-[70vh] sm:h-[500px] md:h-[540px]
                    max-h-[calc(100vh-7rem)]
                    bg-white rounded-2xl shadow-2xl z-50 overflow-hidden
                    border border-gray-200 flex flex-col">

                    <div className="bg-orange-600 text-white x-3 sm:px-4 py-3 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white text-orange-600 rounded-full flex items-center justify-center shrink-0 ">
                                <FaRobot />
                            </div>

                            <div>

                                <h2 className="font-bold">
                                    Car Rental AI
                                </h2>

                                <p className="text-xs text-orange-100">
                                    Your virtual assistant
                                </p>

                            </div>

                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200 text-lg"
                        >
                            <FaTimes />
                        </button>

                    </div>

                    <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gray-50 space-y-3">

                        {messages.map((msg, index) => (

                            <div
                                key={index}
                                className={`flex ${msg.sender === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >

                                <div
                                    className={`max-w-[80%] sm:max-w-[85%] px-3 sm:px-4 py-2 rounded-2xl text-sm break-words ${msg.sender === "user"
                                        ? "bg-orange-600 text-white rounded-br-sm"
                                        : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
                                        }`}
                                >
                                    {msg.text}
                                </div>

                            </div>

                        ))}


                        {loading && (

                            <div className="flex justify-start">

                                <div className="bg-white shadow-sm px-4 py-3 rounded-2xl rounded-bl-sm">

                                    <div className="flex gap-1">

                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>

                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>

                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>

                                    </div>

                                </div>

                            </div>

                        )}

                    </div>

                    <form
                        onSubmit={handleSend}
                        className="flex-1 min-w-0 border border-gray-300 rounded-full px-3 sm:px-4 py-2 text-sm outline-none focus:border-orange-500"
                    >

                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ask me anything..."
                            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-orange-500"
                        />

                        <button
                            type="submit"
                            disabled={loading || !message.trim()}
                            className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center disabled:bg-gray-300"
                        >
                            <FaPaperPlane className="text-sm" />
                        </button>

                    </form>

                </div>

            )}


            {!isOpen && (

                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 w-13 h-13 sm:w-14 sm:h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-xl flex items-center justify-center z-50 transition-transform duration-300 hover:scale-110"
                >
                    <FaRobot className="text-xl" />
                </button>

            )}

        </>
    );
};

export default AIChatbot;