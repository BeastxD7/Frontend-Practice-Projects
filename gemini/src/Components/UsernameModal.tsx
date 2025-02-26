import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface UsernameModalProps {
  onClose: () => void;
}

const UsernameModal: React.FC<UsernameModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blur bg-opacity-50 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }}
        className="bg-gray-900 p-6 rounded-xl shadow-lg w-96 text-white"
      >
        <h2 className="text-xl font-semibold mb-4">Enter Your Username</h2>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Username"
        />
        <div className="flex justify-end mt-4 gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">Cancel</button>
          <button 
            onClick={() => {
              if (username.trim()) {
                onClose();
              }
              localStorage.setItem("username",username)
            }}
            className="px-4 py-2  rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500 hover:bg-blue-500 cursor-pointer"
          >Submit</button>
        </div>
      </motion.div>
    </div>
  );
};

export default UsernameModal;