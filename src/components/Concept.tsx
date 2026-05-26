import { motion } from "motion/react";

export function Concept() {
  const steps = [
    { title: "Site Mesh", desc: "原始地形网格分析。", step: "01" },
    { title: "Base Box", desc: "体块雏形生成。", step: "02" },
    { title: "Arch Void", desc: "气候拱券切分。", step: "03" },
    { title: "Assembly", desc: "全站模块装配。", step: "04" },
  ];

  return (
    <section id="concept" className="bg-slate-50 py-24 px-12 border-y cad-line">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr,400px] gap-20">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="label-caps">02. Form Generation</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">从传统智慧到模块化转译</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {steps.map((item) => (
              <motion.div
                key={item.step}
                whileHover={{ scale: 1.02 }}
                className="group aspect-square bg-white border border-slate-200 flex flex-col items-center justify-center p-6 text-center shadow-sm transition-all"
              >
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-2 font-mono">Step {item.step}</span>
                <p className="text-[12px] font-semibold text-slate-700 uppercase tracking-tight italic mb-2">{item.title}</p>
                <div className="w-8 h-[1px] bg-slate-100 group-hover:bg-slate-200 transition-colors" />
                <p className="text-[10px] text-slate-400 mt-4 leading-tight opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-slate-500 italic font-serif">
            从“半边拱券”到“正交十字框架”的几何平衡。
          </p>
        </div>

        <div className="space-y-8 flex flex-col justify-center">
          <div className="aspect-[4/5] bg-white border cad-line flex items-center justify-center p-4 overflow-hidden relative group">
             <img 
               src="input_file_0.png" 
               className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110" 
               alt="Form Generation Diagram"
             />
             <div className="absolute inset-0 bg-slate-400/5 mix-blend-multiply pointer-events-none" />
          </div>
          <div className="space-y-4">
            <h4 className="label-caps !mb-4 uppercase tracking-[0.2em]">Morphological Evolution</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium italic">
              形态生演变逻辑 / Form Generation Logic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

