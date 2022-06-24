import Head from "next/head";
import Footer from "../component/Footer";
import PizzaList from "../component/PizzaList";
import Slider from "../component/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Restaurant in Bangladesh</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList />
      <Footer />
    </div>
  );
}
