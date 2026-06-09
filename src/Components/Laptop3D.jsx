import { useState, useEffect } from "react";

const Laptop3D = () => {
  const [activeKey, setActiveKey] = useState(0);

  // Keyboard active key typing simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKey(Math.floor(Math.random() * 44));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Key array sizes
  const keysRow1 = Array(12).fill(0);
  const keysRow2 = Array(12).fill(0);
  const keysRow3 = Array(11).fill(0);
  const keysRow4 = Array(9).fill(0);

  return (
    <div className="w-full h-[320px] flex items-center justify-center relative select-none">
      {/* 3D Wrapper */}
      <div className="w-[300px] h-[300px] relative laptop-3d-wrapper">
        
        {/* Holographic Pedestal Base */}
        <div
          className="absolute"
          style={{
            width: "280px",
            height: "280px",
            transform: "rotateX(90deg) translateZ(-60px)",
            transformStyle: "preserve-3d",
            left: "calc(50% - 140px)",
            top: "calc(50% - 140px)",
          }}
        >
          {/* Glowing rings */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.2)] animate-pulse"></div>
          <div className="absolute inset-6 rounded-full border border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.2)]"></div>
          <div className="absolute inset-12 rounded-full border-2 border-cyan-400/10 blur-xs animate-ping duration-[4000ms]"></div>
          <div className="absolute inset-16 rounded-full bg-cyan-500/5 blur-lg"></div>
        </div>

        {/* 3D Laptop Model */}
        <div className="w-full h-full laptop-3d-model">
          
          {/* Cyber Hinge Connection (Glowing cylinder at back edge of base) */}
          <div
            className="absolute bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400 rounded-full border border-cyan-300/30 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
            style={{
              width: "180px",
              height: "10px",
              left: "calc(50% - 90px)",
              top: "calc(50% - 5px)",
              transform: "translateZ(-80px)",
            }}
          />
          
          {/* ================= KEYBOARD BASE ================= */}
          <div
            style={{
              position: "absolute",
              width: "240px",
              height: "160px",
              left: "calc(50% - 120px)",
              top: "calc(50% - 80px)",
              transform: "rotateX(90deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Keyboard Top Face */}
            <div
              className="absolute inset-0 bg-slate-800 border-2 border-cyan-400/50 rounded-md p-2 flex flex-col justify-between shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              style={{ transform: "translateZ(4px)" }}
            >
              {/* Keyboard Grid */}
              <div className="flex flex-col space-y-1 bg-slate-950/60 p-1 rounded-sm border border-cyan-500/10">
                {/* Row 1 */}
                <div className="flex justify-between">
                  {keysRow1.map((_, i) => {
                    const isLit = activeKey === i;
                    return (
                      <div
                        key={i}
                        className={`h-[7px] w-[14px] rounded-2xs transition-all duration-100 ${
                          isLit
                            ? "bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)] border border-cyan-300"
                            : "bg-slate-900 border border-slate-700/50"
                        }`}
                      />
                    );
                  })}
                </div>
                {/* Row 2 */}
                <div className="flex justify-between">
                  {keysRow2.map((_, i) => {
                    const isLit = activeKey === i + 12;
                    return (
                      <div
                        key={i}
                        className={`h-[7px] w-[14px] rounded-2xs transition-all duration-100 ${
                          isLit
                            ? "bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)] border border-cyan-300"
                            : "bg-slate-900 border border-slate-700/50"
                        }`}
                      />
                    );
                  })}
                </div>
                {/* Row 3 */}
                <div className="flex justify-between">
                  {keysRow3.map((_, i) => {
                    const isLit = activeKey === i + 24;
                    return (
                      <div
                        key={i}
                        className={`h-[7px] ${i === 0 || i === 10 ? "w-[20px]" : "w-[13px]"} rounded-2xs transition-all duration-100 ${
                          isLit
                            ? "bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)] border border-cyan-300"
                            : "bg-slate-900 border border-slate-700/50"
                        }`}
                      />
                    );
                  })}
                </div>
                {/* Row 4 */}
                <div className="flex justify-between">
                  {keysRow4.map((_, i) => {
                    const isLit = activeKey === i + 35;
                    const isSpace = i === 4;
                    return (
                      <div
                        key={i}
                        className={`h-[7px] ${isSpace ? "w-[50px]" : "w-[12px]"} rounded-2xs transition-all duration-100 ${
                          isLit
                            ? "bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)] border border-cyan-300"
                            : "bg-slate-900 border border-slate-700/50"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Trackpad */}
              <div className="w-16 h-7 bg-slate-950 border border-cyan-500/20 rounded-xs mx-auto shadow-[inset_0_0_4px_rgba(0,0,0,0.8)]" />
            </div>

            {/* Keyboard Bottom Face */}
            <div
              className="absolute inset-0 bg-slate-900 border-2 border-slate-700 rounded-md shadow-[0_0_25px_rgba(0,0,0,0.9)]"
              style={{ transform: "translateZ(-4px) rotateY(180deg)" }}
            />

            {/* Keyboard Edges (Thickness) */}
            {/* Front Edge */}
            <div
              className="absolute bottom-0 left-0 bg-slate-800 border-t border-cyan-400/40"
              style={{
                width: "100%",
                height: "8px",
                transformOrigin: "bottom center",
                transform: "translateZ(-4px) rotateX(-90deg)",
              }}
            />
            {/* Back Edge */}
            <div
              className="absolute top-0 left-0 bg-slate-900 border-b border-slate-700"
              style={{
                width: "100%",
                height: "8px",
                transformOrigin: "top center",
                transform: "translateZ(-4px) rotateX(90deg)",
              }}
            />
            {/* Left Edge */}
            <div
              className="absolute top-0 left-0 bg-slate-800 border-r border-slate-700"
              style={{
                width: "8px",
                height: "100%",
                transformOrigin: "left center",
                transform: "translateZ(-4px) rotateY(-90deg)",
              }}
            />
            {/* Right Edge */}
            <div
              className="absolute top-0 right-0 bg-slate-800 border-l border-slate-700"
              style={{
                width: "8px",
                height: "100%",
                transformOrigin: "right center",
                transform: "translateZ(-4px) rotateY(90deg)",
              }}
            />
          </div>

          {/* ================= SCREEN LID ================= */}
          <div
            style={{
              position: "absolute",
              width: "240px",
              height: "150px",
              left: "calc(50% - 120px)",
              top: "calc(50% - 150px)",
              transformOrigin: "bottom center",
              transform: "translateZ(-80px) rotateX(-15deg)", // OPENED LAPTOP VIEW (tilt 15deg back from vertical)
              transformStyle: "preserve-3d",
            }}
          >
            {/* Screen Front Face (Active UI Dashboard Display) */}
            <div
              className="absolute inset-0 bg-slate-950 border-2 border-cyan-400 rounded-t-md overflow-hidden flex flex-col justify-between shadow-[0_0_25px_rgba(6,182,212,0.5)]"
              style={{ transform: "translateZ(2px)" }}
            >
              {/* Mockup UI Header */}
              <div className="flex items-center justify-between px-3 py-1 bg-slate-900/90 border-b border-cyan-500/30 relative z-20">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                </div>
                <span className="text-[8px] text-cyan-300/80 font-mono font-bold uppercase tracking-wider">
                  NexaSoft Dashboard
                </span>
                <span className="w-3"></span>
              </div>

              {/* Image & Interactive Elements */}
              <div className="relative flex-1 w-full overflow-hidden">
                <img
                  src="/dashboard-ui.png"
                  alt="NexaSoft Dashboard UI"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Glowing Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                {/* Small overlay terminal log in corner */}
                <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/80 border border-cyan-500/30 rounded-xs p-1 text-[7px] font-mono text-cyan-300 leading-tight">
                  <div className="flex items-center space-x-1.5 text-cyan-400">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></span>
                    <span>$ status: ACTIVE | core load: 24% | compile: OK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Screen Back Face (Cover with NexaSoft Logo) */}
            <div
              className="absolute inset-0 bg-slate-800 border-2 border-cyan-400/50 rounded-t-md flex flex-col items-center justify-center p-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              style={{ transform: "translateZ(-2px) rotateY(180deg)" }}
            >
              <div className="w-full max-w-[150px] aspect-video flex items-center justify-center relative">
                {/* Glow behind the logo */}
                <div className="absolute inset-0 bg-cyan-400/10 rounded-full blur-md animate-pulse"></div>
                <img
                  src="/logo1.png"
                  alt="NexaSoft Logo"
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                />
              </div>
            </div>

            {/* Screen Edges (Thickness) */}
            {/* Top Edge */}
            <div
              className="absolute top-0 left-0 bg-slate-900 border-b border-slate-800"
              style={{
                width: "100%",
                height: "4px",
                transformOrigin: "top center",
                transform: "translateZ(-2px) rotateX(-90deg)",
              }}
            />
            {/* Bottom Edge */}
            <div
              className="absolute bottom-0 left-0 bg-slate-900 border-t border-slate-800"
              style={{
                width: "100%",
                height: "4px",
                transformOrigin: "bottom center",
                transform: "translateZ(-2px) rotateX(90deg)",
              }}
            />
            {/* Left Edge */}
            <div
              className="absolute top-0 left-0 bg-slate-900 border-r border-slate-800"
              style={{
                width: "4px",
                height: "100%",
                transformOrigin: "left center",
                transform: "translateZ(-2px) rotateY(90deg)",
              }}
            />
            {/* Right Edge */}
            <div
              className="absolute top-0 right-0 bg-slate-900 border-l border-slate-800"
              style={{
                width: "4px",
                height: "100%",
                transformOrigin: "right center",
                transform: "translateZ(-2px) rotateY(-90deg)",
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Laptop3D;
