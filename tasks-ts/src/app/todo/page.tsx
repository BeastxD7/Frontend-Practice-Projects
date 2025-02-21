"use client"
import React, { useOptimistic, useRef, useState } from 'react'

const page = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [messages, setMessages] = useState<{ text: string; sending: boolean; id: number }[]>([]);

    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state: { text: string; sending: boolean; id: number }[], newMessage: { text: string; sending: boolean; id: number }) => [...state, newMessage]);

    const handleAdd = async (currentMessage: string) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setMessages(prevMessages => [
            ...prevMessages, 
            { 
                text: currentMessage, 
                sending: false,
                id: Date.now()  
            }
        ]);
    }

    async function formAction(formData: FormData) {

        const message = formData.get("message") as string;
        
        addOptimisticMessage({ 
            text: message, 
            sending: true,
            id: Date.now() 
        });

        formRef.current?.reset();
        await handleAdd(message);
    }

    return (
        <div className='bg-black flex-col gap-5 px-4 text-white h-screen w-screen flex justify-center items-center'>
            <form ref={formRef} action={formAction}>
                <div>
                    <input 
                        name='message'  
                        className='py-2 px-4 rounded-md outline-none w-80 bg-slate-800' 
                        type="text" 
                    />
                    <button 
                        type='submit' 
                        className='w-fit h-fit py-2 px-4 bg-blue-600 rounded-md ml-2'
                    >
                        Add
                    </button>
                </div>
            </form>
            <div className='w-96 flex flex-col items-center gap-3 justify-start py-3 bg-slate-700/50 min-h-80 rounded-lg'>
                {optimisticMessages.map((item) => (
                    <li 
                        key={item.id}
                        className={`${item.sending ? '' : ''}`}
                    >
                        {item.text}
                    </li>
                ))}
            </div>
        </div>
    )
}

export default page