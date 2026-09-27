import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers } from 'lucide-react';
import { OrbitalSystem } from './OrbitalSystem';
import { NodeInspectorModal } from './NodeInspectorModal';
import { ConsultationModal } from './ConsultationModal';
import { PolySolutionsSection } from './PolySolutionsSection';
import { OrbitalSystemCloneSection } from './OrbitalSystemCloneSection';
import { SystemNodeId } from '../data/systemsData';
import { useCMS } from '../context/CMSContext';
import { defaultSystemsHero } from '../data/defaultContent';

export const SystemsArchitectureSection: React.FC = () => {
  const { data } = useCMS();
  const heroConfig = data.systemsHero || defaultSystemsHero;
  const heroImageUrl = heroConfig.imageUrl || '/images/boardroom_meeting.jpg';
  const heroImageAlt = heroConfig.imageAlt || 'IP3 High-Level Advisory & Boardroom Deliberation Session';

  const [selectedStoryNodeId, setSelectedStoryNodeId] = useState<SystemNodeId | null>(null);
  const [inspectedNodeId, setInspectedNodeId] = useState<SystemNodeId | null>(null);
  const [activeStoryThemeIndex, setActiveStoryThemeIndex] = useState<number>(0);
  const [isStoryOpen, setIsStoryOpen] = useState<boolean>(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationDomain, setConsultationDomain] = useState<SystemNodeId | null>(null);

  const themeNodeMap: Record<number, SystemNodeId> = {
    0: 'institutions',
    1: 'policy',
    2: 'technology',
    3: 'evidence',
    4: 'finance',
    5: 'delivery',
  };

  const handleSelectNode = (nodeId: SystemNodeId) => {
    setSelectedStoryNodeId(nodeId);
    setInspectedNodeId(nodeId);
  };

  const handleThemeChange = (index: number) => {
    setActiveStoryThemeIndex(index);
    if (themeNodeMap[index]) {
      setSelectedStoryNodeId(themeNodeMap[index]);
    }
  };

  const handleCloseStory = () => {
    setIsStoryOpen(false);
    setSelectedStoryNodeId(null);
  };

  const handleOpenConsultation = (domain?: SystemNodeId) => {
    setConsultationDomain(domain || 'core');
    setIsConsultationOpen(true);
  };

  return (
    <div className="relative w-full bg-[#050a12] text-slate-100 selection:bg-[#ff7e67]/30 selection:text-[#ff9d8c]">
      
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-teal-950/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#ff7e67]/5 rounded-full blur-[160px]" />
      </div>

      {/* Hero Systems Architecture & Orbital Section */}
      <section
        id="systems-hero"
        className="relative w-full min-h-[90vh] flex flex-col justify-center pt-16 sm:pt-20 pb-0 px-4 sm:px-6 lg:px-10 z-10 bg-[#050a12]"
      >
        <div className="flex flex-col items-start w-full my-auto py-4">
          {/* Header Block: Headline, Narrative & Right-Side Boardroom Visual (like reference image) */}
          <div
            id="systems-hero-header-block"
            className="flex flex-col items-start text-left w-full space-y-6 mb-8 sm:mb-12"
          >
            {/* Two-column layout: Left (Typography & CTA) & Right (Boardroom Visual) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
              {/* Left Column: Eyebrow, Headline, Description, Buttons */}
              <div className="lg:col-span-7 flex flex-col justify-between items-start text-left space-y-6">
                <div className="space-y-4 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2"
                  >
                    <span
                      id="systems-hero-badge"
                      className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#38d9c0] uppercase"
                    >
                      BUILT FOR COMPLEX MANDATES
                    </span>
                  </motion.div>

                  <motion.h2
                    id="systems-hero-headline"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-serif font-normal text-white tracking-[-0.03em] py-1.5 overflow-visible w-full text-left max-w-full"
                  >
                    <span
                      style={{ fontSize: '102px', width: '526px' }}
                      className="block max-w-full text-slate-100 font-normal leading-[0.95] tracking-[-0.04em] mb-1 sm:mb-2"
                    >
                      From evidence 
                    </span>
                    <span
                      style={{ fontSize: '103px', width: '500px' }}
                      className="block max-w-full text-[#38d9c0] font-normal italic leading-[1.0] tracking-[-0.03em]"
                    >
                     to decisions. 
                    </span>
                    <span
                      className="block text-2xl sm:text-3xl text-[#ff7e67] font-normal italic leading-snug tracking-[-0.02em] mt-3"
                    >
                      From decisions to delivery.
                    </span>
                  </motion.h2>

                  <motion.p
                    id="systems-hero-description"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed font-normal text-left max-w-full pt-1"
                    style={{ fontFamily: 'var(--font-body)', width: '500px' }}
                  >
                    Turning complex policy challenges into implementable, investable solutions.
                  </motion.p>
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-3.5 w-auto pt-2"
                >
                  <button
                    id="btn-discuss-assignment"
                    onClick={() => handleOpenConsultation('core')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff694f] text-[#050a12] font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-[#ff7e67]/20 hover:shadow-xl hover:shadow-[#ff7e67]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
                  >
                    <span>Discuss an Assignment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    id="btn-explore-capabilities"
                    onClick={() => {
                      setIsStoryOpen(true);
                      const diagram = document.querySelector('#systems-hero');
                      if (diagram) {
                        window.scrollBy({ top: 350, behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#081220] hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 font-semibold text-sm sm:text-base tracking-wide transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
                  >
                    <span>Explore Our Capabilities</span>
                    <Layers className="w-4 h-4 text-[#38d9c0]" />
                  </button>
                </motion.div>
              </div>

              {/* Right Column: Boardroom Conference Image (as shown in reference image) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-none overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900/60 group h-full min-h-[340px] sm:min-h-[440px]"
                >
                  <img
                    src={heroImageUrl}
                    alt={heroImageAlt}
                    className="w-full h-full object-cover object-center rounded-none transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle ambient gradient overlay and border matching dark palette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-none pointer-events-none" />
                </motion.div>
              </div>
            </div>

            {/* Reassurance Bar */}
            <motion.div
              id="reassurance-bar"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#f5f5f5] border border-gray-200/90 shadow-sm flex flex-nowrap items-center justify-start gap-2 sm:gap-3 text-xs sm:text-[13px] font-medium tracking-wide whitespace-nowrap max-w-full overflow-x-auto no-scrollbar"
            >
              {[
                'Policy & Economic Advisory',
                'Project Preparation',
                'Development Finance',
                'Institutional Reform',
                'MEL & Impact',
                'Digital & Responsible AI',
              ].map((item, idx, arr) => (
                <React.Fragment key={item}>
                  <span className="cursor-default whitespace-nowrap text-[#000000]">
                    {item}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-slate-400 select-none font-bold">·</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Duplicated Header Block */}
          <div
            id="systems-hero-header-block-duplicate"
            className="flex flex-col items-start text-left w-full space-y-6 mb-8 sm:mb-12 pt-8 border-t border-slate-800/60"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span
                id="systems-hero-badge-duplicate"
                className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#38d9c0] uppercase"
              >
                POLICY • ECONOMICS • DEVELOPMENT FINANCE • IMPLEMENTATION
              </span>
            </motion.div>

            <motion.h2
              id="systems-hero-headline-duplicate"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-normal text-white tracking-[-0.03em] py-1.5 overflow-visible w-full text-left max-w-full"
            >
              <span
                style={{ fontSize: '102px', width: '500px' }}
                className="block max-w-full text-slate-100 font-normal leading-[0.95] tracking-[-0.04em] mb-1 sm:mb-2"
              >
                From evidence 
              </span>
              <span
                style={{ fontSize: '103px', width: '500px' }}
                className="block max-w-full text-[#38d9c0] font-normal italic leading-[1.0] tracking-[-0.03em]"
              >
               to decisions. 
              </span>
            </motion.h2>

            {/* Left Column: Narrative paragraph & Action Buttons */}
            <div className="flex flex-col items-start space-y-5 max-w-xl pb-2">
              <motion.p
                id="systems-hero-description-duplicate"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed font-normal text-left max-w-full"
                style={{ fontFamily: 'var(--font-body)', width: '500px' }}
              >
                Turning complex policy challenges into implementable, investable solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-3.5 w-auto"
              >
                <button
                  id="btn-discuss-assignment-duplicate"
                  onClick={() => handleOpenConsultation('core')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff694f] text-[#050a12] font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-[#ff7e67]/20 hover:shadow-xl hover:shadow-[#ff7e67]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
                >
                  <span>Discuss an Assignment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="btn-explore-capabilities-duplicate"
                  onClick={() => {
                    setIsStoryOpen(true);
                    const diagram = document.querySelector('#systems-hero');
                    if (diagram) {
                      window.scrollBy({ top: 350, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#081220] hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 font-semibold text-sm sm:text-base tracking-wide transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Our Capabilities</span>
                  <Layers className="w-4 h-4 text-[#38d9c0]" />
                </button>
              </motion.div>
            </div>

            {/* Reassurance Bar */}
            <motion.div
              id="reassurance-bar-duplicate"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#f5f5f5] border border-gray-200/90 shadow-sm flex flex-nowrap items-center justify-start gap-2 sm:gap-3 text-xs sm:text-[13px] font-medium tracking-wide whitespace-nowrap max-w-full overflow-x-auto no-scrollbar"
            >
              {[
                'Policy & Economic Advisory',
                'Project Preparation',
                'Development Finance',
                'Institutional Reform',
                'MEL & Impact',
                'Digital & Responsible AI',
              ].map((item, idx, arr) => (
                <React.Fragment key={item}>
                  <span className="cursor-default whitespace-nowrap text-[#000000]">
                    {item}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-slate-400 select-none font-bold">·</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
          

          {/* Full-width Diagram: IP3 Center Hub + 4 Connected Cards (image.png layout) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex items-center justify-center relative"
          >
            <OrbitalSystem
              onSelectNode={handleSelectNode}
              selectedNodeId={selectedStoryNodeId}
              onExploreCapabilities={() => {
                setIsStoryOpen(true);
                const diagram = document.querySelector('#poly-solutions-master-section') || document.querySelector('#systems-hero');
                if (diagram) {
                  diagram.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* What Clients Hire IP3 to Deliver Section */}
      <section
        id="client-deliverables-section"
        className="relative w-full pt-0 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-10 z-10 bg-[#050a12] border-t border-slate-800/80"
      >
        <div className="flex flex-col items-start text-left w-full space-y-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#38d9c0] uppercase">
              WHAT WE DO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-[49px] font-bold text-white tracking-normal sm:tracking-tight leading-snug sm:leading-[1.2] md:leading-[1.25] py-1.5 overflow-visible w-full text-left max-w-full"
          >
            <span className="block w-auto text-3xl sm:text-4xl md:text-[54px]">What clients hire IP3 to deliver.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <motion.div
            id="policy-strategy-advisory-paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#081322]/90 border border-slate-800 p-6 sm:p-7 hover:border-[#38d9c0]/50 hover:bg-[#0a182b] transition-all duration-300 hover:shadow-xl hover:shadow-[#38d9c0]/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#38d9c0]/10 text-[#38d9c0] border border-[#38d9c0]/20 tracking-wider">
                  01
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Strategy &amp; Advisory
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                Policy, Economics &amp; Strategy Advisory
              </h3>
              <div className="mb-5 p-3.5 rounded-xl bg-transparent">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff7e67] font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e67]" />
                  Client Problem / Need
                </div>
                <p className="text-[22px] text-slate-300 italic font-normal leading-relaxed" style={{ fontSize: '22px' }}>
                  &ldquo;We need to understand the problem and choose a defensible course of action.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#38d9c0] font-semibold mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0]" />
                Key Deliverables
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Diagnostics, modeling, political-economy analysis, and regulatory reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Sector strategies, fiscal and cost-benefit analysis, and reform road maps</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            id="program-project-design-paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#081322]/90 border border-slate-800 p-6 sm:p-7 hover:border-[#38d9c0]/50 hover:bg-[#0a182b] transition-all duration-300 hover:shadow-xl hover:shadow-[#38d9c0]/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#38d9c0]/10 text-[#38d9c0] border border-[#38d9c0]/20 tracking-wider">
                  02
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Program Design
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                Program &amp; Project Design
              </h3>
              <div className="mb-5 p-3.5 rounded-xl bg-transparent">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff7e67] font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e67]" />
                  Client Problem / Need
                </div>
                <p className="text-[22px] text-slate-300 italic font-normal leading-relaxed" style={{ fontSize: '22px' }}>
                  &ldquo;We have a mandate or funding window but need an implementable program.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#38d9c0] font-semibold mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0]" />
                Key Deliverables
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Feasibility studies, theories of change, concept notes, and results frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Implementation and financing plans, risk registers, and project-preparation support</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            id="finance-capital-mobilization-paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#081322]/90 border border-slate-800 p-6 sm:p-7 hover:border-[#38d9c0]/50 hover:bg-[#0a182b] transition-all duration-300 hover:shadow-xl hover:shadow-[#38d9c0]/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#38d9c0]/10 text-[#38d9c0] border border-[#38d9c0]/20 tracking-wider">
                  03
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Capital Mobilization
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                Development Finance &amp; Private Capital Mobilization
              </h3>
              <div className="mb-5 p-3.5 rounded-xl bg-transparent">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff7e67] font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e67]" />
                  Client Problem / Need
                </div>
                <p className="text-[22px] text-slate-300 italic font-normal leading-relaxed" style={{ fontSize: '22px' }}>
                  &ldquo;Public funding is insufficient; how do we make this investable?&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#38d9c0] font-semibold mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0]" />
                Key Deliverables
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Investment cases, blended-finance strategies, PPP advisory, and financial models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Bankability assessments, climate-finance pipelines, market sounding, and de-risking</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            id="institutions-governance-delivery-paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#081322]/90 border border-slate-800 p-6 sm:p-7 hover:border-[#38d9c0]/50 hover:bg-[#0a182b] transition-all duration-300 hover:shadow-xl hover:shadow-[#38d9c0]/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#38d9c0]/10 text-[#38d9c0] border border-[#38d9c0]/20 tracking-wider">
                  04
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Governance &amp; Delivery
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                Institutions, Governance &amp; Delivery
              </h3>
              <div className="mb-5 p-3.5 rounded-xl bg-transparent">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff7e67] font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e67]" />
                  Client Problem / Need
                </div>
                <p className="text-[22px] text-slate-300 italic font-normal leading-relaxed" style={{ fontSize: '22px' }}>
                  &ldquo;A policy exists, but institutions cannot implement it consistently.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#38d9c0] font-semibold mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0]" />
                Key Deliverables
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Institutional diagnostics, governance frameworks, and PFM reform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Delivery models, process redesign, capacity development, and change management</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            id="mel-impact-paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#081322]/90 border border-slate-800 p-6 sm:p-7 hover:border-[#38d9c0]/50 hover:bg-[#0a182b] transition-all duration-300 hover:shadow-xl hover:shadow-[#38d9c0]/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#38d9c0]/10 text-[#38d9c0] border border-[#38d9c0]/20 tracking-wider">
                  05
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  MEL &amp; Impact
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                Monitoring, Evaluation, Learning &amp; Impact
              </h3>
              <div className="mb-5 p-3.5 rounded-xl bg-transparent">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff7e67] font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e67]" />
                  Client Problem / Need
                </div>
                <p className="text-[22px] text-slate-300 italic font-normal leading-relaxed" style={{ fontSize: '22px' }}>
                  &ldquo;We need to know what is working, why, for whom, and whether it can scale.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#38d9c0] font-semibold mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0]" />
                Key Deliverables
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>MEL frameworks, baselines, process and impact evaluations, and learning agendas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Outcome harvesting, real-time dashboards, and adaptive management systems</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            id="data-digital-ai-paragraph"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#081322]/90 border border-slate-800 p-6 sm:p-7 hover:border-[#38d9c0]/50 hover:bg-[#0a182b] transition-all duration-300 hover:shadow-xl hover:shadow-[#38d9c0]/5 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#38d9c0]/10 text-[#38d9c0] border border-[#38d9c0]/20 tracking-wider">
                  06
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Data &amp; Responsible AI
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                Data, Digital &amp; Responsible AI
              </h3>
              <div className="mb-5 p-3.5 rounded-xl bg-transparent">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#ff7e67] font-semibold mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e67]" />
                  Client Problem / Need
                </div>
                <p className="text-[22px] text-slate-300 italic font-normal leading-relaxed" style={{ fontSize: '22px' }}>
                  &ldquo;We need to modernize systems without creating new governance, exclusion or accountability risks.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#38d9c0] font-semibold mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0]" />
                Key Deliverables
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>DPI diagnostics, digital-government strategies, and data governance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38d9c0] mt-1.5 shrink-0" />
                  <span>Interoperability standards, AI readiness and governance, and inclusive service design</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Orbital System (Built for Complexity) Section */}
      <OrbitalSystemCloneSection />

      {/* Unified Poly-Solutions Architecture & Eight Systems Master Section */}
      <PolySolutionsSection
        isOpen={isStoryOpen}
        onClose={handleCloseStory}
        activeThemeIndex={activeStoryThemeIndex}
        onThemeChange={handleThemeChange}
      />

      {/* Node Inspector Modal */}
      <NodeInspectorModal
        nodeId={inspectedNodeId}
        onClose={() => setInspectedNodeId(null)}
        onSelectAnotherNode={(nodeId) => setInspectedNodeId(nodeId)}
        onConsultDomain={(nodeId) => handleOpenConsultation(nodeId)}
      />

      {/* Strategic Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialDomain={consultationDomain}
      />
    </div>
  );
};
