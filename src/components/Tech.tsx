import { motion } from "motion/react";
import { 
  ChevronDown, 
  Ruler, 
  Zap, 
  Activity, 
  ShieldCheck, 
  ThermometerSnowflake, 
  Sun, 
  Droplets, 
  Box, 
  Layers
} from "lucide-react";

export function Tech() {
  const componentGroups = [
    {
      group: "结构系统 / Structural System",
      items: [
        { name: "UHPC 基础板", material: "UHPC 混凝土", specs: "1000x1000x100mm", function: "高强度支撑，防止冻土层沉降" },
        { name: "板式轻钢骨架", material: "Q355 高强钢", specs: "壁厚 3.0-5.0mm", function: "模数化受力单元，抵御 10 级瞬时强风" },
      ]
    },
    {
      group: "围护与内装 / Envelope & Interior",
      items: [
        { name: "UHPCC 模块外壳", material: "复合材料", specs: "30mm 超薄壳体", function: "极致防风蚀、防紫外线老化防护层" },
        { name: "气凝胶保温板", material: "纳米气凝胶", specs: "50mm / λ=0.015", function: "极端负温环境下的被动式保温核心" },
      ]
    },
    {
      group: "设备与管线 / MEP Systems",
      items: [
        { name: "BIPV 能源舱", material: "晶硅/高效储能", specs: "总功率 12kW", function: "严寒环境下的电能与热能独立循环" },
        { name: "相变蓄热模块", material: "PCM 材料", specs: "相变温度 22°C", function: "平衡昼夜温差，维持室内恒温" },
      ]
    }
  ];

  const mainTechs = [
    {
      title: "太阳能发电能源自持",
      icon: Sun,
      desc: "采用高效晶硅光伏组件，单站装机容量可实现全天诊疗负荷的 100% 能源自洽，并为周边提供电力补偿。",
      img: "/tech1.jpg",
      pos: "0% 0%"
    },
    {
      title: "电加热蓄热体",
      icon: ThermometerSnowflake,
      desc: "严寒环境下台基内部形成热量库，通过热辐射维持室内温暖。",
      img: "/tech2.jpg",
      pos: "100% 0%"
    },
    {
      title: "预制化装配式结构",
      icon: Box,
      desc: "主体框架在工厂全量预制，现场采用机械化锁扣连接，实现零湿作业，大幅减少对高原草皮的扰动。",
      img: "/tech3.jpg",
      pos: "0% 50%"
    },
    {
      title: "多层保温技术",
      icon: Layers,
      desc: "采用‘气凝胶+石墨泡沫’夹芯构造组合，解决高海拔极端气温下的热流散失，维持室内恒温。",
      img: "/tech4.png",
      pos: "100% 50%"
    },
    {
      title: "板式轻钢构件系统",
      icon: Activity,
      desc: "高强度螺栓连接节点，具备极高的结构冗余与韧性，能够适应高原强风与频繁的地震响应。",
      img: "/tech5.jpg",
      pos: "0% 100%"
    },
    {
      title: "雨水收集系统",
      icon: Droplets,
      desc: "利用十字拱券的流线坡度收集雪水与降雨，通过多级超滤系统转化为医疗辅助水源，实现资源闭环。",
      img: "/tech6.png",
      pos: "100% 100%"
    }
  ];

  return (
    <section id="tech" className="py-24 px-12 bg-slate-50 border-y cad-line">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Section 1: Performance Analysis */}
        <div className="space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="label-caps">01. Performance Analysis</h2>
            <h3 className="text-4xl font-light tracking-tight text-slate-800">性能分析</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="label-caps">太阳能利用 / Solar Energy</h4>
              <div className="aspect-square bg-white border cad-line overflow-hidden">
                <img 
                  src="/climate-zap.png" 
                  className="w-full h-full object-contain p-8" 
                  alt="Solar Energy Analysis" 
                />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                采用高效晶硅光伏组件，单站装机容量 12kW，可实现全天诊疗负荷的 100% 能源自洽，并为周边提供电力补偿。通过智能储能系统平衡昼夜能源差异。
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="label-caps">围护性能 / Envelope Performance</h4>
              <div className="aspect-square bg-white border cad-line overflow-hidden">
                <img 
                  src="/climate-temperature.png" 
                  className="w-full h-full object-contain p-8" 
                  alt="Thermal Performance" 
                />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                采用‘气凝胶+石墨泡沫’夹芯构造组合，传热系数 λ=0.015，有效解决高海拔极端气温下的热流散失，维持室内恒温环境。
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Self-Sufficiency Systems */}
        <div className="space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="label-caps">02. Self-Sufficiency</h2>
            <h3 className="text-4xl font-light tracking-tight text-slate-800">建筑自保障</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="label-caps">水资源循环 / Water Cycle</h4>
              <div className="aspect-square bg-white border cad-line overflow-hidden">
                <img 
                  src="tech6.png" 
                  className="w-full h-full object-contain p-8" 
                  alt="Water Cycle System" 
                />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                利用十字拱券的流线坡度收集雪水与降雨，通过多级超滤系统转化为医疗辅助水源。雨水收集量可达年降雨量的 60%，实现资源闭环利用。
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="label-caps">能源自给 / Energy Independence</h4>
              <div className="aspect-square bg-white border cad-line overflow-hidden">
                <img 
                  src="/input_file_0.png" 
                  className="w-full h-full object-contain p-8" 
                  alt="Energy System" 
                />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                BIPV 能源舱集成太阳能发电与相变蓄热模块，相变温度 22°C，有效平衡昼夜温差，在 -40°C 极端环境下仍可维持室内舒适温度。
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Main Tech Introduction */}
        <div className="space-y-16">
          <div className="space-y-2 text-center">
            <h2 className="label-caps">03. Advanced Integration</h2>
            <h3 className="text-4xl font-light tracking-tight text-slate-800">重要技术解析</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {mainTechs.map((tech) => (
              <motion.div
                key={tech.title}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col group"
              >
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img 
                    src={tech.img} 
                    style={{ objectPosition: tech.pos }}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-125 transition-all duration-700" 
                    alt={tech.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 p-2 backdrop-blur-sm rounded-sm z-10">
                    <tech.icon className="w-4 h-4 text-slate-800" />
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 border-l-2 border-slate-900 pl-4">
                    <h5 className="text-[14px] font-bold text-slate-800 uppercase tracking-widest">{tech.title}</h5>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                    {tech.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Diagram Placeholder */}
          <div className="mt-24 relative group">
            <div className="aspect-[21/9] bg-white border cad-line flex items-center justify-center p-2 overflow-hidden">
              <img 
                src="input_file_0.png" 
                className="w-full h-full object-contain transition-all duration-700 group-hover:scale-[1.01]" 
                alt="Detailed Construction Analysis"
              />
            </div>
            <p className="mt-6 text-[10px] text-slate-300 font-mono text-center uppercase tracking-[0.4em]">
              Construction Detail Analysis / 构造系统逻辑解析集成
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}