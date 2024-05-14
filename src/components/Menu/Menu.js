"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// labels
const tabs = [
  { id: 0, name: "Home" },
  { id: 1, name: "About" },
  { id: 2, name: "Lab" },
  { id: 3, name: "Contact" },
];

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <div className="tabs p-2 rounded-lg bg-zinc-800 flex items-center gap-2">
      {tabs.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelectedTab(item.id)}
          className={`relative rounded-lg px-8 py-4 text-sm  transition cursor-pointer z-10 flex items-center justify-center`}
        >
          <span className=" z-50 text-white">{item.name}</span>

          {selectedTab == item.id && (
            <motion.span
              layoutId="bubble"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              className="absolute inset-0 -z-0 bg-blue-500 rounded-md"
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default Menu;
