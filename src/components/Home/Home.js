import React from 'react';
import { data } from '../../data';

const TerminalCard = () => (
  <div className="terminal-card animate-fade-in-up delay-5">
    <div className="terminal-topbar">
      <span className="tdot r" />
      <span className="tdot y" />
      <span className="tdot g" />
      <span className="terminal-filename">shivang@sap ~ $</span>
    </div>
    <div className="terminal-body">
      <div><span className="t-prompt">$ </span><span className="t-cmd">whoami</span></div>
      <span className="t-output"><span className="t-hl">shivang_agarwal</span> — AI &amp; Backend Engineer</span>
      <span className="t-blank" />
      <div><span className="t-prompt">$ </span><span className="t-cmd">cat stack.json</span></div>
      <span className="t-output">{'{'}</span>
      <span className="t-output">&nbsp;&nbsp;<span className="t-hl">"role"</span>: <span className="t-cmt">"SAP · IPR team"</span>,</span>
      <span className="t-output">&nbsp;&nbsp;<span className="t-hl">"ai"</span>: <span className="t-cmt">"Agentic AI, RAG, LLMs"</span>,</span>
      <span className="t-output">&nbsp;&nbsp;<span className="t-hl">"backend"</span>: <span className="t-cmt">"Java CAP, Python, Node"</span>,</span>
      <span className="t-output">&nbsp;&nbsp;<span className="t-hl">"cloud"</span>: <span className="t-cmt">"SAP BTP, AWS"</span></span>
      <span className="t-output">{'}'}</span>
      <span className="t-blank" />
      <div><span className="t-prompt">$ </span><span className="t-cmd">ls shipped/</span></div>
      <span className="t-output">autogen_reflection/&nbsp;&nbsp;&nbsp;rag_pipeline/</span>
      <span className="t-output">hana_vector_db/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;llm_masking/</span>
      <span className="t-blank" />
      <div><span className="t-prompt">$ </span><span className="t-cursor" /></div>
    </div>
  </div>
);

const Home = () => {
  const { header } = data;

  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />
      <div className="hero-glow-2" />
      <div className="container">
        <div className="hero-layout">
          <div>
            <p className="hero-prompt-line animate-fade-in-up delay-1">
              OPEN TO OPPORTUNITIES &middot; BANGALORE, INDIA
            </p>
            <h1 className="hero-name animate-fade-in-up delay-2">
              Shivang<br />
              <span className="accent">Agarwal</span>
            </h1>
            <p className="hero-title-line animate-fade-in-up delay-3">
              Application Engineer <span className="at"> @ </span><span className="co">SAP</span>
              &nbsp;&middot;&nbsp;
              M.Tech <span className="at"> @ </span><span className="co">BITS Pilani</span>
            </p>
            <p className="hero-desc animate-fade-in-up delay-3">
              I build AI systems that ship to production — LLM orchestration pipelines,
              agentic reflection architectures, and RAG on SAP BTP.
              Currently leading AI use cases for Intelligent Product Recommendation at SAP.
            </p>
            <div className="hero-tags animate-fade-in-up delay-4">
              {['Agentic AI', 'RAG', 'SAP AI Core', 'Java CAP', 'HANA Vector DB', 'Python', 'mTLS'].map(tag => (
                <span key={tag} className="hero-tag">{tag}</span>
              ))}
            </div>
            <div className="hero-actions animate-fade-in-up delay-5">
              <a href={`mailto:${header.contact.email}`} className="btn-primary">
                Say Hello ↗
              </a>
              <a
                href={header.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <TerminalCard />
        </div>
      </div>
    </section>
  );
};

export default Home;
