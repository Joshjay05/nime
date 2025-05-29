import { MessageCircle } from "lucide-react";
import { Button } from "./components/ui/button";

export const ChatWidget = () => (
  <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
    <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-3 py-2 sm:px-6 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="hidden sm:inline">Talking to Us</span>
      <span className="sm:hidden">Chat</span>
    </Button>
  </div>
);
