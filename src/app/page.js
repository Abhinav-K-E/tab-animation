"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: 0, name: "Home" },
  { id: 1, name: "About" },
  { id: 2, name: "Lab" },
  { id: 3, name: "Contact" },
];
export default function Home() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  return (
    <div className="main w-full h-screen bg-zinc-900 flex items-center justify-center">
      <div className="tabs p-2 rounded-lg bg-zinc-800 flex items-center gap-2">
        {tabs.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedTab(item.id)}
            className={`
            ${selectedTab == item.id ? "text-black" : "text-white"}
            relative rounded-sm px-8 py-4 text-sm  transition
            `}
          >
            {selectedTab == item.id && (
              <motion.span
                layoutId="bubble"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="absolute inset-0 z-10 bg-teal-400 rounded-sm mix-blend-difference"
              />
            )}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
