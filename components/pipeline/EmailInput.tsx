"use client";

import { motion } from "framer-motion";

export function EmailInput() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden font-mono text-sm">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-gray-400">draft.txt</span>
      </div>
      <div className="p-6 text-gray-700 space-y-4">
        <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Subject</p>
            <p className="font-medium text-gray-900">Summer Sale</p>
        </div>
        <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Body</p>
            <p className="leading-relaxed">
              Hey [Name],<br/><br/>
              We are having a huge summer sale. Everything is 50% off. Come check it out before it&apos;s gone.<br/><br/>
              Best,<br/>
              The Team
            </p>
        </div>
        <motion.div 
            className="w-2 h-4 bg-ink/50"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
