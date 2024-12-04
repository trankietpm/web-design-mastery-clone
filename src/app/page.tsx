import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.homePageTitle}>Welcome to the Home Page</h1>
      <Link href="/TravelToor" className={styles.homePageLink}>Go to TravelToor</Link>
      <Link href="/Pet" className={styles.homePageLink}>Go to Pet</Link>
    </div>
  );
}


