/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Importance } from "./components/Importance";
import { Context } from "./components/Context";
import { Concept } from "./components/Concept";
import { Design } from "./components/Design";
import { Tech } from "./components/Tech";
import { Fabrication } from "./components/Fabrication";
import { Footer } from "./components/Footer";
import { ProjectMgmt } from "./components/ProjectMgmt";

export default function App() {
  const [isProjectMgmtOpen, setIsProjectMgmtOpen] = useState(false);

  return (
    <div className="font-sans antialiased">
      <Navbar onOpenProjectMgmt={() => setIsProjectMgmtOpen(true)} />
      <ProjectMgmt 
        isOpen={isProjectMgmtOpen} 
        onClose={() => setIsProjectMgmtOpen(false)} 
      />
      <main>
        <Hero />
        <Importance />
        <Context />
        <Concept />
        <Design />
        <Tech />
        <Fabrication />
      </main>
      <Footer />
    </div>
  );
}

