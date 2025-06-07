import Link from "next/link";
// import React from 'react';

const Header: React.FC = () => (
  <header style={{ padding: "1rem", background: "#f5f5f5" }}>
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Post</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
