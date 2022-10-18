import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import ProfileImage from "../images/profile-pic.jpg";
import Button from "../components/Button";
import Project from "../components/Project";
import VizImage from "../images/vizsort.png";
import EcomImage from "../images/ecom.png";
import StrapImage from "../images/strap.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rahul Gupta | rahulgpt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="my-10 mb-20 flex md:gap-24 gap-10 items-center md:flex-row flex-col-reverse">
        <div>
          <h1 className="text-[1.7rem] md:text-3xl font-semibold mb-4 md:mb-6">
            Hi there, I am Rahul
          </h1>
          <p className="mb-6">
            I am currently studying for my bachelors in Computer Science at
            AIETM jaipur. From my childhood I was really into computers and
            wanted to learn more about them. So I took Computer Science and
            embarked on a journey to become a <strong>software engineer</strong>
            .
          </p>
          <p className="mb-6">
            I am always up to learn new and interesting stuff. After trying many
            things, I really liked <strong>web</strong> and{" "}
            <strong>low level</strong> development. The last three years I spent
            learning and building my programming skills and to grow more as a
            software engineer I am{" "}
            <strong>looking for full time opportunities</strong> to gain
            industry experience.
          </p>
          <a
            href="https://www.linkedin.com/in/rahulgpt28/"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="mr-4 md:mr-8">View LinkedIn</Button>
          </a>
          <a
            href="https://github.com/rahulgpt"
            target="_blank"
            rel="noreferrer"
          >
            <Button secondary>View Github</Button>
          </a>
        </div>
        <Image
          src={ProfileImage}
          className="rounded-full w-32 h-32 md:w-40 md:h-40"
        />
      </main>

      <section className="mb-16">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <Project
            image={VizImage}
            title="Sorting Vizualizer"
            description="Sorting vizualizer supports bubble, insertion, selection and quick sort."
            href="https://vizsort.netlify.app"
          />
          <Project
            image={EcomImage}
            title="Patterns"
            description="Patterns is an Ecommerce Webapp designed to sell and buy digital prints."
            href="https://patterns-wa.herokuapp.com"
          />
          <Project
            image={StrapImage}
            title="Strap"
            description="Cli tool for generating react components."
            href="https://github.com/rahulgpt/strap"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
