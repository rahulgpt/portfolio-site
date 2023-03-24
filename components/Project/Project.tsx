import React from "react";
import Arrow from "../../images/arrow.svg";
import Image, { StaticImageData } from "next/future/image";

interface IProject {
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
  browserHead?: boolean;
}

const BrowserHead: React.FC = () => (
  <div className="flex justify-between items-center py-2 px-5 bg-gray-200 rounded-t-md">
    <div className="flex gap-2">
      <div className="w-3 h-3 bg-gray-300 rounded-full" />
      <div className="w-3 h-3 bg-gray-300 rounded-full" />
      <div className="w-3 h-3 bg-gray-300 rounded-full" />
    </div>

    <div className="bg-white w-2/3 h-4 rounded-sm" />

    <Image src={Arrow} className="pointer-events-none" />
  </div>
);

const Project: React.FC<IProject> = ({
  image,
  title,
  description,
  href,
  browserHead = false,
}) => {
  return (
    <div>
      <div className="mb-5">
        {browserHead && <BrowserHead />}
        <div className="">
          <Image src={image} />
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="mb-2 text-sm">{description}</p>
      {href !== "#" && (
        <a
          className={`underline umami--click--${title}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default Project;
