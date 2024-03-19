import Image from "next/image";
import styles from "./page.module.css";
import { PopulateQuestions } from "./components/questions"

// async function getThemKeys(){
//   const key1 = await middleware("middleblom")
//   const key2 = await middleware("middletre")
//   const key3 = await middleware("fyssa1")
//   const key4 = await middleware("ekki alvöru lykill")
//   console.log(key1, key2, key3, key4)
//   return key1
// }

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <PopulateQuestions question="middleblom"></PopulateQuestions> */}
        <p>
          Get started by editing&nbsp;

          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            ${}
          </p>
      </div>
    </main>
  );
}
