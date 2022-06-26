import axios from "axios";
import Head from "next/head";
import PizzaList from "../component/PizzaList";
import Slider from "../component/Slider";
import styles from "../styles/Home.module.css";

export default function Home({ pizzas }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Restaurant in Bangladesh</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList pizzas={pizzas} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzas: res.data,
    },
  };
};
