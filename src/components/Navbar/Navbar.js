import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
    { href: 'https://github.com/Shivang-Agarwal11', label: 'GitHub', external: true },
  ];

  const handleLink = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="nav-logo">
          <span className="prompt">~/</span>shivang
        </a>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noopener noreferrer' : undefined}
            onClick={handleLink}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
