import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layout, Users, Activity, Layers, Play, Pause } from "lucide-react";

export function Design() {
  const [activeLayer, setActiveLayer] = useState(0);

  const zones = [
    { title: "医疗核心区", color: "bg-yellow-400", desc: "核心诊断与手术单元，连接南侧主入口村民流线。" },
    { title: "公共服务区", color: "bg-green-400", desc: "健康宣教与社区集散，连接东侧社区宣教流线。" },
    { title: "后勤保障区", color: "bg-blue-400", desc: "能源自给与废弃物处理，连接北侧后勤污物流线。" },
  ];

  const [isPlaying, setIsPlaying] = useState(true);

  const layers = [
    { title: "主体结构 / Structure", src: "/layer-1.jpg", desc: "拱券壳体结构系统，提供核心支撑与空间形体。" },
    { title: "围护系统 / Enclosure", src: "/layer-2.jpg", desc: "外墙与玻璃围护，建立建筑物理边界与气候缓冲层。" },
    { title: "支撑龙骨 / Sub-frame", src: "/layer-3.jpg", desc: "屋顶框架与设备龙骨，为顶层构件提供安装基础。" },
    { title: "屋顶层级 / Roof Surface", src: "/layer-4.jpg", desc: "最终顶面覆盖与光伏集成层，实现完整的环境屏障。" },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % layers.length);
    }, 4000); // 每4秒自动切换
    return () => clearInterval(interval);
  }, [isPlaying, layers.length]);

  return (
    <section id="design" className="py-24 px-12 max-w-6xl mx-auto space-y-24 bg-white border-x cad-line">
      {/* 1. Aerial View */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps">03. Spatial Layout - Perspective</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">全站鸟瞰与环境布局</h3>
          </div>
        </div>
        <div className="space-y-6">
          <div className="aspect-[21/9] bg-white border cad-line overflow-hidden group">
            <img 
              src="/design-view.png" 
              className="w-full h-full object-cover transition-all duration-700" 
              alt="Project Full Perspective" 
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-3xl font-medium">
            全站场景分析 / Project Full Perspective: <br />
            选址避风向阳，以正交拱券壳体为核心形态，结合南坡地形布置入口灰空间与后勤通道。
            锯齿型体量引导高原强风，有效减少建筑能耗并优化微气候。
          </p>
        </div>
      </div>

      {/* 2. Grouped Plans Analysis */}
      <div className="space-y-12">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <h4 className="label-caps !mb-0 font-bold">Planned Metrics & Layout / 平面系统解析</h4>
        </div>
        <div className="space-y-8">
          <div className="aspect-[16/9] bg-white border cad-line overflow-hidden p-2 group">
            <img 
              src="/design-plan.png" 
              className="w-full h-full object-contain transition-all duration-700" 
              alt="Combined Architectural Plans" 
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-3">
              <h5 className="text-[13px] font-bold text-slate-800 uppercase tracking-tight">朝向与选址逻辑</h5>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                主体采用十字形对称布局，四翼拱券主立面统一向阳，精准适配高原太阳高度角，最大化冬季阳光摄入。选址避开北侧强风口与冻土敏感区。
              </p>
            </div>
            <div className="space-y-3">
              <h5 className="text-[13px] font-bold text-slate-800 uppercase tracking-tight">功能分区与流线</h5>
              <div className="aspect-[4/3] bg-white border cad-line overflow-hidden">
                <img 
                  src="/floor-plan.png" 
                  className="w-full h-full object-contain p-4" 
                  alt="一层平面图" 
                />
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                主入口设于十字形南侧翼，以拱券壳体围合形成双层门斗。内部通过枢纽空间连接各功能分区，实现医疗流线与后勤流线的完全分离。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Zoning & Logic */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps">Analysis Logic</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">流线组织与功能分区</h3>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="label-caps !mb-6">Zoning Analysis</h4>
            <ul className="space-y-4">
              {zones.map((zone) => (
                <li key={zone.title} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 ${zone.color} rounded-sm`} />
                    <span className="text-[13px] font-semibold text-slate-700">{zone.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 ml-5 font-medium tracking-tight">
                    {zone.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h4 className="label-caps !mb-0">Circulation Logic</h4>
          </div>
        </div>

        {/* Full-width Circulation Diagram */}
        <div className="space-y-6">
          <div className="aspect-[21/9] bg-white border cad-line overflow-hidden">
            <img 
              src="/circulation-diagram.png" 
              className="w-full h-full object-contain p-4" 
              alt="流线分析图" 
            />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            主体采用对称十字骨架，通过流线型体量引导高原强风。
            实现医疗、社区、后勤三线完全分离，避免流线交叉而导致的院内感染风险。
          </p>
        </div>
      </div>

      {/* 4. Layered Components Analysis */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps flex items-center gap-2"><Layers className="w-4 h-4" /> 04. Construction Sequence</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">建筑分层构件解析</h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-[4/3] bg-white border cad-line overflow-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLayer}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  src={layers[activeLayer].src}
                  className="w-full h-full object-contain p-8"
                  alt={layers[activeLayer].title}
                />
              </AnimatePresence>
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="font-mono text-[10px] bg-slate-900 text-white px-2 py-0.5 uppercase tracking-widest">
                  Layer 0{activeLayer + 1}
                </span>
                <span className="font-mono text-[10px] bg-white border border-slate-200 px-2 py-0.5 uppercase tracking-widest text-slate-500">
                  {layers[activeLayer].title}
                </span>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/90 border border-slate-200 flex items-center justify-center hover:bg-white transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {layers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLayer(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === activeLayer ? "bg-slate-900 w-6" : "bg-white/60 hover:bg-white"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="label-caps !mb-4">Layer Selection</h4>
              <div className="flex flex-col gap-3">
                {layers.map((layer, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLayer(index)}
                    className={`flex items-center gap-4 p-4 border transition-all text-left group ${
                      activeLayer === index 
                        ? "border-slate-900 bg-slate-50 translate-x-2" 
                        : "border-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <span className={`w-8 h-8 flex items-center justify-center font-mono text-xs rounded-full border transition-colors ${
                      activeLayer === index ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-400 border-slate-200"
                    }`}>
                      0{index + 1}
                    </span>
                    <div className="space-y-1">
                      <p className={`text-[12px] font-bold uppercase tracking-tight ${activeLayer === index ? "text-slate-900" : "text-slate-500"}`}>
                        {layer.title}
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium">
                        {layer.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-100 rounded-sm">
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  分层逻辑：从结构骨架到围护系统，再到支撑龙骨与顶面覆盖，呈现了建筑气候适应性的构造层叠逻辑。
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Interior Perspective */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps">05. Interior Experience</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">室内空间体验与氛围</h3>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-6">
          {/* 第一张图放大占据整行 */}
          <div className="aspect-[16/9] bg-white border cad-line overflow-hidden">
            <img 
              src="/interior-1.png" 
              className="w-full h-full object-cover" 
              alt="室内空间视角1" 
            />
          </div>
          {/* 剩下两张并列 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] bg-white border cad-line overflow-hidden">
              <img 
                src="/interior-2.png" 
                className="w-full h-full object-cover" 
                alt="室内空间视角2" 
              />
            </div>
            <div className="aspect-[4/3] bg-white border cad-line overflow-hidden">
              <img 
                src="/interior-3.png" 
                className="w-full h-full object-cover" 
                alt="室内空间视角3" 
              />
            </div>
          </div>
        </div>
          <div className="grid md:grid-cols-2 gap-16">
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              空间感知：十字拱券结构在室内创造了向心凝聚的公共医疗大厅，充足的南向采光通过三玻两腔幕墙渗入，有效缓解了患者在高原封闭环境下的幽闭心理。
            </p>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              材质策略：内装采用轻质木饰面与钛合金龙骨结合，在满足医疗卫生等级要求的同时，通过暖色调木纹平衡室外的极寒视觉冲击，营造具有温度感的治愈场景。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}