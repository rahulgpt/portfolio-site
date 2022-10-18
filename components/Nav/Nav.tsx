import React from "react";
import Link from "next/link";

const Nav: React.FC = () => (
  <nav className="flex justify-between py-4 md:py-8">
    <h1 className="tracking-wider cursor-pointer">RAHUL GUPTA</h1>
    <section className="flex justify-between gap-3">
      {/* <Link href="#">
        <a>Projects</a>
      </Link> */}
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <span className="w-2 h-2 bg-gray-300 rounded-full my-auto md:block hidden" />
      <a href="https://twitter.com/RHGPT" className="md:block hidden">
        Twitter
      </a>
      <a
        href="https://www.instagram.com/rahulgpt_/"
        className="md:block hidden"
      >
        Instagram
      </a>
      <a href="https://github.com/rahulgpt" className="md:block hidden">
        Github
      </a>
    </section>
  </nav>
);

export default Nav;
