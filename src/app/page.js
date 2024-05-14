import { motion } from "framer-motion";

const tabs = [
  { id: 0, name: "Home" },
  { id: 1, name: "About" },
  { id: 2, name: "Lab" },
  { id: 3, name: "Contact" },
];
export default function Home() {
  return (
    <div className="main w-full h-screen bg-zinc-900 flex items-center justify-center">
      <div className="tabs p-2 rounded-lg bg-zinc-800 flex items-center gap-2">
        {tabs.map((item) => (
          <div key={item.id} className="tab px-8 py-4 bg-zinc-900 rounded-md text-white text-md">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
