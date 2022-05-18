import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';



export default function Header(){
    return(
        <header className={styles.header}>
            <div className="container flexgrid">
                <div className="navbrand">
                    <Link href="/">
                        <Image
                            src="/images/logo.jpeg" 
                            alt="Indian National News"
                            width={150}
                            height={80}
                        />
                    </Link>
                </div>
                <div className={styles.navigation}>
                    <Link href="news/current">
                        Current News
                    </Link>
                    <Link href="news/business">
                        Business
                    </Link>
                    <Link href="news/sports">
                        Sports 
                    </Link>
                    <Link href="news/entertainment">
                        Entertainment
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>
                </div>
            </div>
        </header>
    )
}