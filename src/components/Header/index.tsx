import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter();


  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src="/logo.svg" width="225px" height="90px" alt="DevNews!" />
        <nav>
          <Link href="/">
            <a className={asPath === '/' ? styles.active : ''}>Home</a>  
          </Link>
          <Link href="/posts">
            <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>  
          </Link>
        </nav>
      </div>
    </header>
  );
}