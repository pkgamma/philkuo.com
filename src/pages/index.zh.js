import React from "react"
import Layout from "../components/layout.zh"
import SocialBtns from "../components/social-btns.zh"
import styles from "./index.module.scss"
import useDarkMode from 'use-dark-mode';
import SEO from '../components/seo';

export default function Home() {

  const darkMode = useDarkMode(false);

  return (
    <Layout>

      <SEO zh/>

      <div className={styles.pic}>
        <img onClick={darkMode.toggle} alt="Philip Kuo" src={'/philip_kuo.jpg'} />
      </div>

      <div className={styles.title_container}>
        <h1>
          <span>細心研製令人驚艷的</span>
          <span>人性化數位體驗</span>
        </h1>
      </div>

      <p>你好！我是郭力銘，來自臺灣的軟體工程師和使用者體驗設計師。我對軟體開發與人本設計充滿熱情，目前正在美國芝加哥的開拓重工擔任軟體工程師。</p>

      <p>我畢業於美國伊利諾伊大學香檳分校的資訊工程系，在學時曾於 Hack4Impact 為非營利組織建構解決方案，致力回饋社群。此外，我曾經於台北主辦 TEDx，亦曾擔任 HackIllinois 與 RP 研討會兩活動的關鍵籌辦人員。</p>

      <SocialBtns />

    </Layout>
  )
}
