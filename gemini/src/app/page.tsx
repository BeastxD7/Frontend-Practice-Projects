"use client";
import React, { useEffect, useState } from "react";
import { SendHorizontal, Loader2, User } from "lucide-react";
import MessageBox from "../Components/MessageBox";
import MessageSkeleton from "../Components/MessageSkeleton"; // Import Skeleton
import { gemini } from "./utils/Gemini";
import MainCards from "@/Components/MainCards";
import UsernameModal from "@/Components/UsernameModal";

const Page = () => {
  interface IMessage {
    message: string;
    type: "you" | "system";
    loading?: boolean;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string | null>("")

  useEffect(() => {
    const name = localStorage.getItem("username") || "User";
    setName(name);
  }, []);  
  

  const handleSend = async () => {
    if (!inputValue) return;

    setLoading(true);
    const userMessage: IMessage = { message: inputValue, type: "you" };
    setMessages((prev) => [...prev, userMessage]);
    let prompt = inputValue;
    setInputValue("");

    const loadingMessage: IMessage = {
      message: "",
      type: "system",
      loading: true,
    };
    setMessages((prev) => [...prev, loadingMessage]);

    const response = await gemini(prompt);


    setMessages((prev) =>
      prev.map((msg) =>
        msg.loading
          ? { message: response, type: "system", loading: false }
          : msg
      )
    );

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-t from-slate-950 to-slate-800 w-screen h-screen text-white flex flex-col  justify-center items-center">
      {/* Render modal when isModalOpen is true */}
      {isModalOpen && <UsernameModal onClose={() => setIsModalOpen(false)} />}

      <header
        className={
          messages.length <= 0
            ? "fixed top-0 w-[64%]  py-4 flex justify-between items-center"
            : "hidden"
        }>
        <h1 className="text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-semibold tracking-tighter">
          Gemini
        </h1>
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 hover:cursor-pointer transition">
          <User color="white" size={20} />
        </div>
      </header>

      {/* Main Heading */}
      <div className={messages.length <= 0 ? "flex flex-col gap-10" : "hidden"}>
        <h1 className="text-5xl mb-4 text-center font-semibold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          Hello, {name}
        </h1>
        <MainCards setFn={setInputValue} />
      </div>

      {/* Message Section */}
      <div
        className={`${
          messages.length <= 0 ? "hidden" : ""
        } h-full  mb-30  py-7  overflow-auto  w-screen lg:px-[25%] md:px-[20%] sm:px-[13%] px-[7%]`}>
        <div className="h-[87%]">
          {messages.map((data, index) =>
            data.loading ? (
              <MessageSkeleton key={index} /> // Show Skeleton instead of "Thinking..."
            ) : (
              <MessageBox key={index} message={data.message} type={data.type} />
            )
          )}
        </div>
      </div>

      {/* Input Box */}
      <div className="fixed w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] bottom-6 md:bottom-12 flex pr-3 pl-6 justify-between items-center h-16 border rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-slate-500">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              handleSend();
            }
          }}
          disabled={loading}
          placeholder={loading ? "Thinking..." : "Ask Gemini..."}
          className={`bg-transparent h-full outline-none w-[80%] ${
            loading
              ? "bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent cursor-not-allowed"
              : ""
          }`}
          type="text"
        />

        {loading ? (
          <div className="bg-slate-800/50 p-2 rounded-full animate-pulse">
            <Loader2 className="animate-spin" size={20} />
          </div>
        ) : (
          <button
            onClick={handleSend}
            className="bg-slate-800/50 hover:bg-slate-800/100 p-2 rounded-full">
            <SendHorizontal size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
