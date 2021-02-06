import React from "react"
import Layout from "../components/layout.zh"
import SocialBtns from "../components/social-btns"
import styles from "./index.module.scss"
import useDarkMode from 'use-dark-mode';
import SEO from '../components/seo';

export default function Home() {

  const darkMode = useDarkMode(false);

  return (
    <Layout>

      <SEO title={"郭力銘 - 使用者體驗工程師"}/>

      <div className={styles.pic}>
        <img onClick={darkMode.toggle} alt="Philip Kuo" src={'/philip_kuo.jpg'} />
      </div>

      <div className={styles.title_container}>
        <h1>
          <span>細心研製令人驚艷的</span>
          <span>人性化數位體驗</span>
        </h1>
      </div>

      <p>嗨，我是郭力銘。我是來自臺灣的軟體工程師和使用者體驗設計師，對軟體開發與人本設計充滿熱情；目前正在伊利諾伊大學香檳分校攻讀資訊工程學位。</p>

      <p>現於美國 <a target="_blank" rel="noreferrer" href="https://www.cat.com/zh_TW/company.html">Caterpillar 卡特彼勒</a>的數位部門擔任軟體工程師，並曾於 <a target="_blank" rel="noreferrer" href="https://www.deepwalkresearch.com/">DeepWalk Research</a> 擔任產品企劃，和於 <a target="_blank" rel="noreferrer" href="http://philkuo.com/c">Hack4Impact</a> 及 <a target="_blank" rel="noreferrer" href="https://menuthree.com">menu3</a> 擔任產品設計工程師。我亦持續盡心投入運行 <a target="_blank" rel="noreferrer" href="http://pkgamma.com">PKGamma 數位機構</a>，與我的客戶密切合作，開發成效出色的數位解決方案。</p>

      <SocialBtns />

    </Layout>
  )
}
