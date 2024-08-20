import React from "react";
import { LayoutProps } from "../../types";
import './style.css';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/swlogo.png" width={100} alt="Star Wars Logo" />
        </div>
        <div className="navbar-links">
          {/* <a href="/">Characters</a> */}
          {/* <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search characters..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </nav>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p>&copy; 2024 Star Wars App. All Rights Reserved. J.Chege</p>
      </footer>
    </div>
  );
};

export default Layout;
