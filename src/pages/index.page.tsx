import Head from "next/head";
import Footer from "src/pageComponents/Footer";
import Header from "src/pageComponents/Header";
import Production from "src/pageBlocks/Production";
import ProductionVideo from "src/pageBlocks/ProductionVideo";
import About from "src/pageBlocks/About";
import Intro from "src/pageBlocks/Intro";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BAIKALSEA Company - Производство</title>
        <meta name="description" content="BAIKALSEA Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />
      <Intro />
      <About />
      <ProductionVideo />
      <Production />
      <Footer />
    </>
  );
}
