import {
  ChevronDown,
  Image as ImageIcon,
  LogOut,
  Menu,
  Mic,
  Search,
} from "lucide-react";
import { useState } from "react";
import main from "../../config/gemini";

const Chat = ({ setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // Logout
  const handleLogout = () => alert("Logged out!");

  // Image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Send
  const handleSend = async () => {
    if (!newMessage && !imagePreview) return;

    const userMsg = { text: newMessage, image: imagePreview, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    const prompt = newMessage;

    setNewMessage("");
    setImagePreview(null);

    try {
      const reply = await main(prompt);
      setMessages((prev) => [...prev, { text: reply, sender: "ai" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Error: Could not get response.", sender: "ai" },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b bg-white relative">
        <button className="md:hidden p-2" onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        <div className="ml-auto relative">
          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="font-medium">Takmim</span>
            <ChevronDown className="w-5 h-5" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Chat  */}
      <div className="flex-1 flex flex-col gap-2 p-4 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center items-center text-gray-500 px-4 text-center">
            <p>No messages yet. Start a new conversation!</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "self-end bg-blue-500 text-white"
                  : "self-start bg-gray-200 text-black"
              }`}
            >
              {msg.text && <p>{msg.text}</p>}
              {msg.image && (
                <img
                  src={msg.image}
                  alt="preview"
                  className="mt-2 rounded-lg max-h-40"
                />
              )}
            </div>
          ))
        )}
      </div>

      {/* Image*/}
      {imagePreview && (
        <div className="p-2 border-t bg-gray-100 flex items-center gap-2">
          <img
            src={imagePreview}
            alt="preview"
            className="w-16 h-16 rounded object-cover"
          />
          <button
            onClick={() => setImagePreview(null)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center border rounded-md overflow-hidden relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3" />
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message (Shift+Enter for new line)"
            className="flex-1 pl-10 p-2 outline-none resize-none"
            rows={1}
          />
          <label className="p-3 cursor-pointer hover:bg-gray-100">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <ImageIcon className="w-6 h-6 text-gray-600" />
          </label>
          <button
            type="button"
            className="p-3 cursor-pointer hover:bg-gray-100"
            title="Voice input"
          >
            <Mic className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={handleSend}
            className="btn p-3 cursor-pointer hover:bg-gray-100"
            title="Send"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-2xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16 464 480-208L16 48v160l320 48-320 48z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
