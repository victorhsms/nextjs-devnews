import SEO from "../components/SEO";
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import homeImage from '../../public/home.svg';

export default function Home() {
  return (
    <>
      <SEO title="Dev News!" excludeTitleSuffix/>
      
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Dev!</span>
          <h1>
            Boas vindas ao <br />
            <span>Dev</span> News!
          </h1>
          <p>
            Um blog com conteúdos extremamente <br />
            <span>relevantes para o seu aprendizado</span>
          </p>
        </section>

        <Image src={homeImage} alt="Home image" />
      </main>
    </>
  )
}
