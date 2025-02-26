import { Lightbulb, Compass, SquarePen, PartyPopper } from 'lucide-react';
import React from 'react';
import { color, motion } from 'framer-motion';

const cardVariants = {
  hover: { scale: 1.05, backgroundColor: '#374151', boxShadow: '0 20px 50px rgba(8, 112, 184, 0.3)' },
  tap: { scale: 0.95 }
};

interface IProps {
  setFn: (value: string) => void;
}

const MainCards = ({ setFn }: IProps) => {
  return (
    <div className="hidden md:flex gap-6 flex-wrap w-full justify-center items-center">
      {[ 
        { text: 'Generate five innovative startup ideas that solve everyday problems using AI, automation, or sustainability.', icon: <Lightbulb color="yellow" size={20} /> },
        { text: 'What are the best strategies for setting and achieving long-term goals?', icon: <Compass color="green" size={20} /> },
        { text: 'What are some tips for writing engaging blog posts that attract readers?', icon: <SquarePen color="blue" size={20} /> },
        { text: 'What are some creative ways to celebrate small achievements in life?', icon: <PartyPopper color="cyan" size={20} /> }
      ].map((card, index) => (
        <motion.div 
          key={index} 
          variants={cardVariants} 
          whileHover="hover" 
          whileTap="tap" 
          onClick={() => setFn(card.text)}
          className="card w-72 h-56 bg-gray-800 flex flex-col justify-between rounded-2xl p-5 cursor-pointer transition-all "
        >
          <h1 className=" hover:text-white text-gray-400 text-lg font-semibold leading-snug">{card.text}</h1>
          <div className="flex justify-end">
            <div className="w-fit h-fit p-3 bg-slate-900 rounded-full flex items-center justify-center">{card.icon}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MainCards;