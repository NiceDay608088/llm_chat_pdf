import React from "react";
import ChatBubble from "./ChatBubble";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const dummyMessages: AIMessage[] = [
  { role: "user", content: "hey, I'm the user", id: "2" },
  { role: "assistant", content: "hey, I'm your AI", id: "1" },
];
const dummySources = ["I'm source one", "I'm source two"];

const Chat = () => {
  return (
    <div className=" rounded-2xl border flex flex-col justify-between h-full ">
      <div className="p-6 overflow-auto">
        {dummyMessages.map(({ id, role, content }: AIMessage, idx) => (
          <ChatBubble
            key={id}
            content={content}
            role={role}
            sources={role === "user" ? [] : dummySources}
          />
        ))}
      </div>

      <form className="flex p-4 clear-both">
        <Input
          placeholder="type to chat with AI"
          className="mr-2 focus:outline-none focus:ring-0 focus:ring-offset-0 !ring-0 !ring-offset-0"
        />
        <Button type="submit" className="w-24">
          Ask
        </Button>
      </form>
    </div>
  );
};

export default Chat;
