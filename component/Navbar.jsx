import Link from 'next/link'
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link
              href={`/`}
            >
              <a>Home</a>
            </Link>        
          </li>
          <li className={styles.listItem}>
            <Link href={`/products`}>
              <a>Products</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={`/events`}>
              <a>Events</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={`/blogs`}>
              <a>Blogs</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href={`/contact`}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href={`/cart`}>
            <a>
              <Image  src="/img/cart.png" alt="" width="30px" height="30px" />
            </a> 
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;