import { motion } from "motion/react";
import { Truck, RotateCw, Cog, ShieldCheck } from "lucide-react";

export function Fabrication() {
  const items = [
    { label: "Candidate", value: "阙锦钰 (Que Jinyu)" },
    { label: "Instructor", value: "Architecture Dept." },
    { label: "Project Index", value: "AR-2024-XZ01" },
  ];

  return (
    <section id="build" className="py-24 px-12 max-w-6xl mx-auto space-y-16 bg-white border-x cad-line">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="label-caps">06. Fabrication Logic</h2>
          <h3 className="text-3xl font-light tracking-tight text-slate-800">模块化装配与分级运输</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            方案适配 4.2m 公路大件运输标准，提供整体运输与分构件打包两种策略。通过 BIM 协同管理，实现在 5-9 月非冻土窗口期内的极速装配。
          </p>
          <div className="flex flex-col gap-4 pt-6 border-t border-slate-100">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.label}</span>
                <span className="text-[14px] font-medium text-slate-700">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <div className="aspect-[16/9] bg-white border cad-line flex items-center justify-center overflow-hidden">
                <img src="/fabrication-1.png" className="w-full h-full object-contain" alt="整体运输"/>
              </div>
              <p className="text-[10px] text-slate-400 font-mono text-center uppercase tracking-widest">方案一：整体运输 (Integrated Transportation)</p>
            </div>
            <div className="space-y-2">
              <div className="aspect-[16/9] bg-white border cad-line flex items-center justify-center overflow-hidden">
                <img src="/fabrication-2.png" className="w-full h-full object-contain" alt="分构件打包"/>
              </div>
              <p className="text-[10px] text-slate-400 font-mono text-center uppercase tracking-widest">方案二：分构件打包 (Componentized Packing)</p>
            </div>
          </div>
          <button className="w-full py-4 bg-slate-900 text-white text-[12px] uppercase tracking-[0.3em] font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
             Download Full PDF Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

