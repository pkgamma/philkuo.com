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

      <p>你好！我是郭力銘，來自臺灣的軟體工程師和使用者體驗設計師。我對軟體開發與人本設計充滿熱情，目前正在美國伊利諾伊大學香檳分校攻讀資訊工程學位。</p>

      <p>先前任職於 <a target="_blank" rel="noreferrer" href="https://www.apple.com">Apple</a>、<a target="_blank" rel="noreferrer" href="https://www.cat.com/zh_TW/company.html">Caterpillar 集團</a>，與 <a target="_blank" rel="noreferrer" href="https://www.deepwalkresearch.com/">DeepWalk 實驗室</a>。亦曾於 <a target="_blank" rel="noreferrer" href="http://philkuo.com/c">Hack4Impact</a> 與 <a target="_blank" rel="noreferrer" href="https://menuthree.com">Menu3</a> 擔任產品設計工程師。現在，我盡心投入運行 <a target="_blank" rel="noreferrer" href="http://pkgamma.com">PKGamma 數位機構</a>，與企業客戶密切合作，開發成效出色的數位解決方案。</p>

      <p>讓我協助您或您的組織將好點子成真！歡迎透過任何服務管道與我聯絡，聊聊如何合作。如欲獲取更多資訊，亦歡迎查閱經驗與部落格頁面。</p>

      <SocialBtns />

    </Layout>
  )
}
