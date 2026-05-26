import { motion } from "motion/react";

interface NavbarProps {
  onOpenProjectMgmt: () => void;
}

export function Navbar({ onOpenProjectMgmt }: NavbarProps) {
  const navItems = [
    { name: "Overview", href: "#hero" },
    { name: "Concept", href: "#concept" },
    { name: "Design", href: "#design" },
    { name: "Technology", href: "#tech" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 glass h-20"
    >
      <div className="flex flex-col">
        <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">Architectural Thesis / 011211</span>
        <a href="/" className="text-2xl font-light tracking-tight text-slate-800">
          雪域阳光方舟 <span className="text-slate-400 italic font-serif ml-2 text-lg">Snowy Sun Ark</span>
        </a>
      </div>

      <div className="flex items-center gap-12">
        <div className="flex gap-8 text-[11px] uppercase tracking-widest font-medium text-slate-500">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-slate-900 transition-colors py-1"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <button 
          onClick={onOpenProjectMgmt}
          className="bg-slate-800 text-white px-4 py-2 text-[10px] uppercase font-bold tracking-widest hover:bg-slate-700 transition-all rounded-sm shadow-sm"
        >
          建筑项目管理系统
        </button>
      </div>
    </motion.nav>
  );
}

