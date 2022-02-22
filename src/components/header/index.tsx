import Image from "next/image";
import logo from '../../assets/images/logo.svg'
import styles from './styles.module.scss';

export const Header = () => {
  return <>
  <header className={styles.header}>
    <div className={styles.content}>
      <Image height={30} width={108} src={logo} alt="ig.news" />
      <nav>
        <a href="home">home</a>
        <a href="posts">posts</a>
      </nav>
    </div>
  </header>
  </>;
}
