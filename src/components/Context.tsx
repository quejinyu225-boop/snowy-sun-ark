import { motion } from "motion/react";
import { MapPin, Thermometer, Wind, Zap } from "lucide-react";

export function Context() {
  const stats = [
    { label: "Location", value: "西藏那曲班戈县" },
    { label: "Altitude", value: "4,697 m" },
    { label: "Climate", value: "极地干冷环境" },
    { label: "Challenge", value: "物流受限/强风" },
  ];

  return (
    <section id="context" className="py-24 px-12 max-w-6xl mx-auto border-x cad-line bg-white">
      <div className="grid md:grid-cols-[1fr,320px] gap-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="label-caps">01. Project Context</h2>
            <h3 className="text-3xl font-light tracking-tight">雪域环境下的医疗自保障</h3>
          </div>

          <div className="text-slate-500 text-sm leading-relaxed space-y-4 max-w-prose">
            <p>
              针对极端高寒、缺氧、季节性冻土环境设计的乡村医疗服务基站，旨在极端环境下实现医疗功能的自保障与智慧化。挑战包括大风、强辐射及物流受限。
            </p>
            <p>
              场地位于西藏那曲班戈县央木布村，平均海拔4697米，含氧量仅为平原60%。冬季极端低温达-25℃以下。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="label-caps">Site Data</h2>
          <div className="flex flex-col gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex justify-between border-b border-slate-100 pb-1 text-sm">
                <span className="text-slate-400 font-medium">{stat.label}</span>
                <span className={stat.label === "Altitude" ? "font-mono" : ""}>{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Climate Analysis Cards */}
      <div className="mt-24 grid md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
        <div className="space-y-4">
          <div className="aspect-[16/10] bg-slate-50 border cad-line overflow-hidden">
             <img src="/climate-temperature.png" className="w-full h-full object-cover" alt="严寒低温环境" />
          </div>
          <div className="space-y-2">
            <h4 className="text-[12px] font-bold text-slate-700 uppercase tracking-tight">严寒低温环境</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              冬季极端气温低于-25°C, 全年低温期长达6个月, 对建筑保温性能与室内热舒适提出极高要求。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="aspect-[16/10] bg-slate-50 border cad-line overflow-hidden">
            <img src="/climate-wind.png.png" className="w-full h-full object-cover" alt="强风气候条件" />
          </div>
          <div className="space-y-2">
            <h4 className="text-[12px] font-bold text-slate-700 uppercase tracking-tight">强风气候条件</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              年均风速4.13m/s, 瞬时极大风速达33.2m/s, 主导西南风, 建筑需具备优异抗风与防风蚀能力。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="aspect-[16/10] bg-slate-50 border cad-line overflow-hidden">
            <img src="/climate-zap.png" className="w-full h-full object-cover" alt="高辐射强日照" />
          </div>
          <div className="space-y-2">
            <h4 className="text-[12px] font-bold text-slate-700 uppercase tracking-tight">高辐射强日照</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              高原空气稀薄, 太阳辐射强度超平原1.5倍, 光热资源丰富, 为被动式设计与光伏利用提供潜力。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}