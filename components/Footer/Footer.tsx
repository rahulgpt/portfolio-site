import React from "react";

const Footer: React.FC = () => (
  <div className="mb-8">
    <hr className="h-1 bg-gray-100 mb-5" />
    <div className="flex flex-col md:flex-row justify-between">
      <p className="text-gray-700 text-sm mb-2 md:mb-0">
        Built with Next, Tailwind and Vercel 🍀
      </p>
      <div className="flex gap-3">
        <a href="https://twitter.com/RHGPT">Twitter</a>
        <a href="https://www.instagram.com/rahulgpt_/">Instagram</a>
        <a href="https://github.com/rahulgpt">Github</a>
      </div>
    </div>
  </div>
);

export default Footer;
