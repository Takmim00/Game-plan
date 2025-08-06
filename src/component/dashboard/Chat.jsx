import { ChevronDown, LogOut, Menu, Search, Mic, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const Chat = ({ setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    alert("Logged out!");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Selected image: ${file.name}`);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
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
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col justify-center items-center text-gray-500 px-4 text-center">
        <p>No messages yet. Start a new conversation!</p>
      </div>

      {/* Message */}
      <div className="p-4 border-t">
        <div className="flex items-center border rounded-md overflow-hidden relative">
          
          <Search className="w-5 h-5 text-gray-400 absolute left-3" />
          <input
            type="text"
            placeholder="Type your message (Shift + Enter for new line)"
            className="flex-1 pl-10 p-2 outline-none"
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
            type="submit"
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
