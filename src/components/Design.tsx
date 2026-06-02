import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layout, Users, Activity, Layers, Play, Pause, ChevronDown } from "lucide-react";

export function Design() {
  const [activeLayer, setActiveLayer] = useState(0);

  const zones = [
    { title: "医疗核心区", color: "bg-yellow-400", desc: "核心诊断与手术单元，连接南侧主入口村民流线。" },
    { title: "公共服务区", color: "bg-green-400", desc: "健康宣教与社区集散，连接东侧社区宣教流线。" },
    { title: "后勤保障区", color: "bg-blue-400", desc: "能源自给与废弃物处理，连接北侧后勤污物流线。" },
  ];

  const [isPlaying, setIsPlaying] = useState(true);

  const layers = [
    { title: "地桩 / Pile Foundation", src: "/1.jpg", desc: "深层基础支撑系统，确保结构稳定。" },
    { title: "基座 / Base Platform", src: "/2.jpg", desc: "底层承重结构，承载上部荷载。" },
    { title: "轻钢连接件 / Steel Connectors", src: "/3.jpg", desc: "轻钢连接节点，增强结构整体性。" },
    { title: "UHPC构件 / UHPC Components", src: "/4.jpg", desc: "高性能混凝土预制构件，增强结构耐久性。" },
    { title: "屋顶钢架 / Roof Steel Frame", src: "/5.jpg", desc: "屋顶承重体系，支撑屋面荷载。" },
    { title: "幕墙框架 / Curtain Wall Frame", src: "/6.jpg", desc: "外立面支撑骨架，固定幕墙面板。" },
    { title: "围合墙体 / Enclosure Walls", src: "/7.jpg", desc: "保温隔热围护，分隔内外空间。" },
    { title: "屋面板 / Roof Panels", src: "/8.jpg", desc: "屋面覆盖层，防水防潮保护。" },
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
      {/* 形态逻辑生成图 */}
      <div className="space-y-6">
        <div className="aspect-[21/9] bg-white border cad-line overflow-hidden">
          <img 
            src="/形态逻辑生成.png" 
            className="w-full h-full object-contain p-4" 
            alt="形态逻辑生成" 
          />
        </div>
      </div>

      {/* 1. Design Presentation */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps">01. Design Presentation</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">设计表现</h3>
          </div>
        </div>

        {/* 鸟瞰图 */}
        <div className="space-y-6">
          <h4 className="label-caps">鸟瞰图 / Aerial View</h4>
          <div className="space-y-6">
            <div className="aspect-[21/9] bg-white border cad-line overflow-hidden group">
              <img 
                src="/鸟瞰1.jpg" 
                className="w-full h-full object-cover transition-all duration-700" 
                alt="Aerial View 1" 
              />
            </div>
            <div className="aspect-[21/9] bg-white border cad-line overflow-hidden group">
              <img 
                src="/鸟瞰2.jpg" 
                className="w-full h-full object-cover transition-all duration-700" 
                alt="Aerial View 2" 
              />
            </div>
            <div className="aspect-[21/9] bg-white border cad-line overflow-hidden group">
              <img 
                src="/放大鸟瞰.png" 
                className="w-full h-full object-cover transition-all duration-700" 
                alt="放大鸟瞰" 
              />
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-3xl font-medium">
            全站场景分析 / Project Full Perspective: <br />
            选址避风向阳，以正交拱券壳体为核心形态，结合南坡地形布置入口灰空间与后勤通道。
            锯齿型体量引导高原强风，有效减少建筑能耗并优化微气候。
          </p>
        </div>

        {/* 室外透视 */}
        <div className="space-y-6">
          <h4 className="label-caps">室外透视 / Exterior Perspectives</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] bg-white border cad-line overflow-hidden">
              <img 
                src="/室外透视1.png" 
                className="w-full h-full object-cover" 
                alt="Exterior Perspective 1" 
              />
            </div>
            <div className="aspect-[4/3] bg-white border cad-line overflow-hidden">
              <img 
                src="/室外透视2.png" 
                className="w-full h-full object-cover" 
                alt="Exterior Perspective 2" 
              />
            </div>
          </div>
        </div>

        {/* 室内空间 */}
        <div className="space-y-6">
          <h4 className="label-caps">室内空间 / Interior Spaces</h4>
          <div className="space-y-6">
            <div className="aspect-[16/9] bg-white border cad-line overflow-hidden">
              <img 
                src="/interior-1.png" 
                className="w-full h-full object-cover" 
                alt="Interior View 1" 
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] bg-white border cad-line overflow-hidden">
                <img 
                  src="/interior-2.png" 
                  className="w-full h-full object-cover" 
                  alt="Interior View 2" 
                />
              </div>
              <div className="aspect-[4/3] bg-white border cad-line overflow-hidden">
                <img 
                  src="/interior-3.png" 
                  className="w-full h-full object-cover" 
                  alt="Interior View 3" 
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

      {/* 2. Design Drawings */}
      <div className="space-y-12">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
          <h4 className="label-caps !mb-0 font-bold">Design Drawings / 设计图纸</h4>
        </div>
        <div className="space-y-8">
          <div className="aspect-[16/9] bg-white border cad-line overflow-hidden p-2 group">
            <img 
              src="/design-plan .png" 
              className="w-full h-full object-contain transition-all duration-700" 
              alt="Combined Architectural Plans" 
            />
          </div>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <h5 className="text-[13px] font-bold text-slate-800 uppercase tracking-tight">朝向与选址逻辑</h5>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                  主体采用十字形对称布局，四翼拱券主立面统一向阳，精准适配高原太阳高度角，最大化冬季阳光摄入。选址避开北侧强风口与冻土敏感区。
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="text-[13px] font-bold text-slate-800 uppercase tracking-tight">功能分区与流线</h5>
              </div>
            </div>
            <div className="aspect-[21/9] bg-white border cad-line overflow-hidden">
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

      {/* 3. Zoning & Logic */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps">Analysis Logic</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">流线组织与功能分区</h3>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
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
          <div className="space-y-6">
            <h4 className="label-caps !mb-0">Circulation Logic</h4>
            <div className="aspect-square bg-white border cad-line overflow-hidden">
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
      </div>

      {/* 4. Elevations & Sections */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps">04. Elevations & Sections</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">立面与剖面</h3>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="label-caps">南立面 / South Elevation</h4>
            <div className="aspect-[4/5] bg-white border cad-line overflow-hidden">
              <img 
                src="/elevation-south.png" 
                className="w-full h-full object-contain p-4" 
                alt="南立面图" 
              />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="label-caps">西北立面 / Northwest Elevation</h4>
            <div className="aspect-[4/5] bg-white border cad-line overflow-hidden">
              <img 
                src="/elevation-northwest.png" 
                className="w-full h-full object-contain p-4" 
                alt="西北立面图" 
              />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="label-caps">剖面图 A-A / Section A-A</h4>
            <div className="aspect-[4/5] bg-white border cad-line overflow-hidden">
              <img 
                src="/section-aa.png" 
                className="w-full h-full object-contain p-4" 
                alt="剖面图A-A" 
              />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="label-caps">剖面图 B-B / Section B-B</h4>
            <div className="aspect-[4/5] bg-white border cad-line overflow-hidden">
              <img 
                src="/section-bb.png" 
                className="w-full h-full object-contain p-4" 
                alt="剖面图B-B" 
              />
            </div>
          </div>
        </div>

        {/* 剖透视 */}
        <div className="space-y-6">
          <h4 className="label-caps">剖透视 / Section Perspective</h4>
          <div className="aspect-[16/9] bg-white border cad-line overflow-hidden">
            <img 
              src="/剖透视.png" 
              className="w-full h-full object-contain p-4" 
              alt="剖透视" 
            />
          </div>
        </div>
      </div>

      {/* 5. Construction Details */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps">05. Construction Details</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">构造大样</h3>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="label-caps">钢架UHPC连接大样</h4>
            <div className="aspect-[16/9] bg-white border cad-line overflow-hidden">
              <img 
                src="/钢架uhpc连接大样.png" 
                className="w-full h-full object-contain p-4" 
                alt="钢架UHPC连接大样" 
              />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="label-caps">屋顶钢架连接大样</h4>
            <div className="aspect-[16/9] bg-white border cad-line overflow-hidden">
              <img 
                src="/屋顶钢架连接大样.png" 
                className="w-full h-full object-contain p-4" 
                alt="屋顶钢架连接大样" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Layered Components Analysis */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps flex items-center gap-2"><Layers className="w-4 h-4" /> 06. Construction Sequence</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">建筑分层构件解析</h3>
          </div>
        </div>

        {/* 构件分析图 */}
        <div className="space-y-6">
          <div className="aspect-[21/9] bg-white border cad-line overflow-hidden">
            <img 
              src="/构件分析.jpg" 
              className="w-full h-full object-contain p-4" 
              alt="构件分析" 
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          <div className="lg:col-span-2 space-y-8">
            <div className="h-full bg-white border cad-line overflow-hidden relative group flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeLayer}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  src={layers[activeLayer].src}
                  className="max-w-full max-h-full object-contain"
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

      {/* 5. Exploded Diagram & Component List */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <h2 className="label-caps">06. Exploded Diagram</h2>
            <h3 className="text-3xl font-light tracking-tight text-slate-800">爆炸分解图与构件清单</h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="label-caps">爆炸分解图 / Exploded Axonometric</h4>
            <div className="aspect-square bg-white border cad-line overflow-hidden">
              <img 
                src="/exploded-diagram.png" 
                className="w-full h-full object-contain p-8" 
                alt="建筑爆炸分解图" 
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              爆炸分解图展示了建筑从地桩基础到屋顶的完整构造层次，清晰呈现各构件之间的装配关系。
            </p>
          </div>

          <div className="space-y-12">
            <h4 className="label-caps">全预制构件清单</h4>
            
            {/* 结构系统 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2">
                <ChevronDown className="w-3 h-3" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900">结构系统 / Structural System</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">UHPC 基础板</span>
                  <span className="text-xs text-slate-400 font-mono">UHPC 混凝土</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">板式轻钢骨架</span>
                  <span className="text-xs text-slate-400 font-mono">Q355 高强钢</span>
                </div>
              </div>
            </div>

            {/* 围护与内装 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2">
                <ChevronDown className="w-3 h-3" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900">围护与内装 / Envelope & Interior</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">UHPCC 模块外壳</span>
                  <span className="text-xs text-slate-400 font-mono">复合材料</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">气凝胶保温板</span>
                  <span className="text-xs text-slate-400 font-mono">纳米气凝胶</span>
                </div>
              </div>
            </div>

            {/* 设备与管线 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2">
                <ChevronDown className="w-3 h-3" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900">设备与管线 / MEP Systems</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">BIPV 能源舱</span>
                  <span className="text-xs text-slate-400 font-mono">晶硅/高效储能</span>
                </div>
                <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                  <span className="font-semibold text-slate-700">相变蓄热模块</span>
                  <span className="text-xs text-slate-400 font-mono">PCM 材料</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}