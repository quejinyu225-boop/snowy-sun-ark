import { motion } from "motion/react";
import { Users, MapPin, BatteryWarning, HeartPulse } from "lucide-react";

export function Importance() {
  const stats = [
    {
      title: "人口结构压力",
      label: "Demographics",
      icon: Users,
      value: "68.1%",
      desc: "西藏农牧民人口占比高，且 60 岁以上人口比例已达 26.15%，老龄化与分散居住并存。",
      chart: (
        <div className="w-full h-2 bg-slate-100 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-slate-800 w-[68.1%]" />
        </div>
      )
    },
    {
      title: "空间服务瓶颈",
      label: "Spatial Gap",
      icon: MapPin,
      value: "100km+",
      desc: "牧民平均就医半径超 35km，极端环境下甚至达 100km 以上，传统医疗设施辐射范围不足。",
      chart: (
        <div className="flex gap-1 mt-4">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`h-4 flex-1 ${i <= 4 ? 'bg-slate-800' : 'bg-slate-100'}`} />
          ))}
        </div>
      )
    },
    {
      title: "能源设备缺失",
      label: "Infrastructure",
      icon: BatteryWarning,
      value: "42%",
      desc: "村卫生室设施完好率仅为 42%，缺乏持续能源供应，难以维持高能耗医疗设备的运转。",
      chart: (
        <div className="relative w-8 h-8 mt-4 border-2 border-slate-100 rounded-full">
          <div className="absolute inset-0 border-2 border-slate-800 rounded-full border-t-transparent -rotate-45" />
        </div>
      )
    },
    {
      title: "疾病风险防控",
      label: "Health Risks",
      icon: HeartPulse,
      value: "High",
      desc: "极寒缺氧环境下，高原性呼吸系统疾病与心脑血管发病率显著高于平原地区。",
      chart: (
        <div className="flex items-end gap-1 h-8 mt-4">
          <div className="w-2 h-1/2 bg-slate-200" />
          <div className="w-2 h-3/4 bg-slate-400" />
          <div className="w-2 h-full bg-slate-800" />
        </div>
      )
    }
  ];

  return (
    <section className="py-24 px-12 max-w-6xl mx-auto space-y-16 bg-white border-x cad-line">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
        <div className="space-y-2">
          <h2 className="label-caps">Perspective: Rural Medical Necessity</h2>
          <h3 className="text-3xl font-light tracking-tight text-slate-800">乡村医疗挑战与必要性分析</h3>
        </div>
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed">
          Based on 2024 regional health statistics / <br />Nagqu, Tibet Autonomous Region
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <motion.div 
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-6 group"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="w-5 h-5 text-slate-400 group-hover:text-slate-800 transition-colors" />
              <span className="text-[10px] font-mono text-slate-300 font-bold">{stat.label}</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light text-slate-900">{stat.value}</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                {stat.desc}
              </p>
              {stat.chart}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-8 bg-slate-50 border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-2">
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">设计对策：高自持移动基站</h4>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            本项目针对上述痛点，提出一种能够快速部署、高度自保障的医疗服务单元。通过模块化设计解决最后 100km 的医疗真空，并利用自供能系统保障高原环境下的生命维持设备运行。
          </p>
        </div>
        <div className="h-px w-full md:w-px md:h-12 bg-slate-200" />
        <div className="flex gap-4">
           <div className="flex flex-col">
             <span className="text-2xl font-light">42%</span>
             <span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">完好率现状</span>
           </div>
           <div className="text-slate-200 text-2xl font-thin">→</div>
           <div className="flex flex-col">
             <span className="text-2xl font-light text-blue-600">95%+</span>
             <span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">设计目标</span>
           </div>
        </div>
      </div>
    </section>
  );
}
