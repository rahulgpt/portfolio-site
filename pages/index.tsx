import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import ProfileImage from "../images/profile-pic.jpg";
import Button from "../components/Button";
import Project from "../components/Project";
import VizImage from "../images/vizsort.png";
import EcomImage from "../images/ecom.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rahul Gupta - portfolio site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="my-10 mb-20 flex md:gap-24 gap-10 items-center md:flex-row flex-col-reverse">
        <div>
          <h1 className="text-[1.7rem] md:text-3xl font-semibold mb-4 md:mb-6">
            Hi there, I am Rahul
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lobortis feugiat nisi id posuere. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <p className="mb-6">
            Nulla fermentum augue sit amet felis ornare, a luctus dolor mollis.
            Phasellus sed eros velit. Suspendisse eget mauris augue. Nulla a
            elit lacus.
          </p>
          <p className="mb-6">Let&apos;s hang out on Twitter.</p>
          <Button className="mr-4 md:mr-8">View LinkedIn</Button>
          <Button secondary>View Github</Button>
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
          />
          <Project
            image={EcomImage}
            title="Sorting Vizualizer"
            description="Sorting vizualizer supports bubble, insertion, selection and quick sort."
          />
        </div>
      </section>
    </>
  );
};

export default Home;
