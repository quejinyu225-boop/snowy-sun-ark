import { motion, AnimatePresence } from "motion/react";
import { X, Share2, Printer, Download } from "lucide-react";
import { useState } from "react";

interface ProjectMgmtProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = "main" | "toilet";

export function ProjectMgmt({ isOpen, onClose }: ProjectMgmtProps) {
  const [activeTab, setActiveTab] = useState<Tab>("main");

  const tabs = [
    { id: "main", label: "主体建筑设计" },
    { id: "toilet", label: "免维护旱厕设计" },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-slate-50 flex flex-col"
      >
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold text-slate-800 tracking-tight">项目模型管理</h1>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`px-4 py-1.5 text-xs font-medium transition-all rounded-sm ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Share2 className="w-4 h-4 text-slate-500" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Printer className="w-4 h-4 text-slate-500" />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Download className="w-4 h-4 text-slate-500" />
            </button>
            <div className="w-px h-4 bg-slate-200 mx-1" />
            <button 
              onClick={onClose}
              className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-slate-50 p-12 flex justify-center">
          <div className="w-full max-w-7xl min-h-full">
            {activeTab === "main" && <MainBuildingDiagram />}
            {activeTab === "toilet" && <ToiletDiagram />}
          </div>
        </main>

        {/* Footer */}
        <footer className="h-10 border-t border-slate-200 bg-white flex items-center justify-center text-[10px] text-slate-400 font-mono tracking-widest uppercase shrink-0">
          © 2025 Master Design Project. All rights reserved.
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}

function MainBuildingDiagram() {
  return (
    <div className="space-y-16 py-8">
      {/* Structural System */}
      <div className="border border-blue-200 border-dashed rounded-lg p-12 bg-blue-50/20 relative">
        <div className="flex flex-col items-center gap-12">
          <SystemNode label="结构构件系统" type="root" />
          <div className="grid grid-cols-3 gap-16 w-full">
            <div className="flex flex-col items-center gap-8 group">
              <SystemNode label="基础及基座" type="primary" />
              <div className="flex gap-4">
                <SystemNode label="横向构件" type="secondary" />
                <SystemNode label="竖向构件" type="secondary" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 group">
              <SystemNode label="集装箱体" type="primary" />
              <div className="flex gap-4">
                <SystemNode label="横向构件" type="secondary" />
                <SystemNode label="竖向构件" type="secondary" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 group">
              <SystemNode label="轻钢结构主体" type="primary" />
              <div className="flex gap-4">
                <SystemNode label="横向构件" type="secondary" />
                <SystemNode label="竖向构件" type="secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Envelope System */}
        <div className="border border-slate-200 border-dashed rounded-lg p-12 bg-white relative">
          <div className="flex flex-col items-center gap-12">
            <SystemNode label="围护构件系统" type="root" />
            <div className="flex gap-12">
              <div className="flex flex-col items-center gap-8">
                <SystemNode label="屋顶" type="primary" />
                <SystemNode label="光伏玻璃栏杆" type="secondary" />
              </div>
              <SystemNode label="外墙" type="primary" />
              <SystemNode label="楼层面" type="primary" />
            </div>
          </div>
        </div>

        {/* Interior System */}
        <div className="border border-slate-200 border-dashed rounded-lg p-12 bg-white relative">
          <div className="flex flex-col items-center gap-12">
            <SystemNode label="内装构件系统" type="root" />
            <div className="flex gap-8">
               <div className="flex flex-col items-center gap-8">
                 <SystemNode label="硬装" type="primary" />
                 <div className="flex gap-4">
                    <SystemNode label="地板" type="secondary" />
                    <SystemNode label="隔墙" type="secondary" />
                 </div>
               </div>
               <div className="flex flex-col items-center gap-8">
                 <SystemNode label="软装" type="primary" />
                 <div className="flex gap-4">
                    <SystemNode label="家具" type="secondary" />
                    <SystemNode label="装饰" type="secondary" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment System */}
      <div className="border border-blue-200 border-dashed rounded-lg p-12 bg-blue-50/20 relative">
        <div className="flex flex-col items-center gap-12">
          <SystemNode label="设备与管线构件系统" type="root" />
          <div className="grid grid-cols-3 gap-12 w-full">
            <div className="flex flex-col items-center gap-8 border border-slate-100 rounded p-6 bg-white/50">
              <SystemNode label="电力系统" type="primary" />
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-4">
                   <SystemNode label="光伏发电" type="secondary" />
                   <SystemNode label="光伏板" type="tertiary" />
                </div>
                <div className="flex flex-col items-center gap-4">
                   <SystemNode label="风力发电" type="secondary" />
                   <SystemNode label="涡轮筒" type="tertiary" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 border border-slate-100 rounded p-6 bg-white/50">
              <SystemNode label="储能系统" type="primary" />
              <div className="flex gap-3">
                <SystemNode label="充电控制器" type="tertiary" />
                <SystemNode label="电池架" type="tertiary" />
                <SystemNode label="蓄电池" type="tertiary" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 border border-slate-100 rounded p-6 bg-white/50">
              <SystemNode label="蓄热系统" type="primary" />
              <div className="flex gap-4">
                <SystemNode label="蓄热体" type="tertiary" />
                <SystemNode label="加热系统" type="tertiary" />
              </div>
            </div>
          </div>
          <div className="flex gap-12 w-full justify-center">
             <div className="flex flex-col items-center gap-8 border border-slate-100 rounded p-6 bg-white/50 min-w-[200px]">
                <SystemNode label="空气换热系统" type="primary" />
                <div className="flex gap-4">
                  <SystemNode label="回风管" type="tertiary" />
                  <SystemNode label="送风管" type="tertiary" />
                </div>
             </div>
             <div className="flex flex-col items-center gap-8 border border-slate-100 rounded p-6 bg-white/50 min-w-[200px]">
                <SystemNode label="水系统" type="primary" />
                <div className="flex gap-4">
                  <SystemNode label="进水管" type="tertiary" />
                  <SystemNode label="排水管" type="tertiary" />
                </div>
             </div>
             <div className="flex flex-col items-center gap-8 border border-slate-100 rounded p-6 bg-white/50 min-w-[200px]">
                <SystemNode label="照明系统" type="primary" />
                <SystemNode label="灯具" type="tertiary" />
             </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="border border-slate-200 border-dashed rounded-lg p-12 bg-white relative max-w-2xl w-full">
            <div className="flex flex-col items-center gap-8">
              <SystemNode label="环境与装饰构件系统" type="root" />
              <div className="flex gap-12">
                <SystemNode label="装饰门头" type="tertiary" />
                <SystemNode label="可变幕墙" type="tertiary" />
                <SystemNode label="室外家具" type="tertiary" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function ToiletDiagram() {
  return (
    <div className="space-y-16 py-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Structure */}
        <div className="border border-blue-200 border-dashed rounded-lg p-12 bg-blue-50/20 relative">
          <div className="flex flex-col items-center gap-12">
            <SystemNode label="结构构件系统" type="root" />
            <div className="flex gap-12">
              <div className="flex flex-col items-center gap-8">
                <SystemNode label="基础" type="primary" />
                <div className="flex gap-4">
                  <SystemNode label="地螺丝基础" type="secondary" />
                  <SystemNode label="楼板" type="secondary" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-8">
                <SystemNode label="上部结构" type="primary" />
                <div className="flex gap-4">
                  <SystemNode label="檩条" type="secondary" />
                  <SystemNode label="桁架" type="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Envelope */}
        <div className="border border-slate-200 border-dashed rounded-lg p-12 bg-white relative">
          <div className="flex flex-col items-center gap-12">
            <SystemNode label="围护构件系统" type="root" />
            <div className="flex gap-8">
              <SystemNode label="外墙" type="tertiary" />
              <SystemNode label="屋顶" type="tertiary" />
              <SystemNode label="楼层面" type="tertiary" />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-blue-200 border-dashed rounded-lg p-12 bg-blue-50/20 relative">
        <div className="flex flex-col items-center gap-12">
          <SystemNode label="设备与管线构件系统" type="root" />
          <div className="grid grid-cols-4 gap-8 w-full">
            <div className="flex flex-col items-center gap-6 border border-slate-100 rounded p-6 bg-white/50">
              <SystemNode label="电力系统" type="primary" />
              <div className="flex flex-col gap-3">
                 <SystemNode label="光伏系统" type="tertiary" />
                 <SystemNode label="桥架" type="tertiary" />
                 <SystemNode label="控制电箱" type="tertiary" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 border border-slate-100 rounded p-6 bg-white/50">
              <SystemNode label="通风系统" type="primary" />
              <div className="flex gap-3">
                 <SystemNode label="管道" type="tertiary" />
                 <SystemNode label="设备" type="tertiary" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 border border-slate-100 rounded p-6 bg-white/50">
              <SystemNode label="粪尿收集系统" type="primary" />
              <SystemNode label="水箱" type="tertiary" />
            </div>
            <div className="flex flex-col items-center gap-6 border border-slate-100 rounded p-6 bg-white/50">
              <SystemNode label="照明系统" type="primary" />
              <SystemNode label="灯具" type="tertiary" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="border border-slate-200 border-dashed rounded-lg p-12 bg-white relative">
          <div className="flex flex-col items-center gap-10">
            <SystemNode label="内装系统" type="root" />
            <div className="flex gap-12 items-start">
               <div className="flex flex-col items-center gap-6">
                  <SystemNode label="硬装" type="primary" />
                  <div className="flex gap-4">
                     <SystemNode label="地板" type="secondary" />
                     <SystemNode label="隔墙" type="secondary" />
                     <SystemNode label="明装 (无吊顶)" type="secondary" />
                  </div>
               </div>
               <SystemNode label="软装" type="tertiary" />
            </div>
          </div>
        </div>
        <div className="border border-slate-200 border-dashed rounded-lg p-12 bg-white relative">
          <div className="flex flex-col items-center gap-10">
             <SystemNode label="环境与装饰系统" type="root" />
             <div className="flex gap-12">
                <SystemNode label="藏式传统装饰构件" type="tertiary" />
                <SystemNode label="台阶和平台" type="tertiary" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemNode({ label, type }: { label: string; type: "root" | "primary" | "secondary" | "tertiary" }) {
  const styles = {
    root: "bg-slate-800 text-white shadow-xl px-10 py-4 text-sm font-bold min-w-[160px]",
    primary: "bg-blue-400/30 text-blue-900 border border-blue-200 px-6 py-2.5 text-[11px] font-bold min-w-[120px] shadow-sm",
    secondary: "bg-blue-100 text-blue-800 border border-blue-100 px-4 py-2 text-[10px] font-semibold min-w-[100px]",
    tertiary: "bg-slate-200 text-slate-700 px-3 py-1.5 text-[9px] font-medium min-w-[80px]",
  };

  return (
    <div className={`flex items-center justify-center text-center rounded-sm transition-all hover:scale-105 active:scale-95 ${styles[type]}`}>
      {label}
    </div>
  );
}