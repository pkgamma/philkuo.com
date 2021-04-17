import React from "react"
import Layout from "../components/layout.zh"
import BG1 from "./blog/img/A01.jpg"
import BG2 from "./work/img/A02.jpg"
import BG3 from "./work/img/B01.jpg"
import BG4 from "./work/img/B02.jpg"
import img_minimalist_workplace from "./img/minimalist_workplace.jpg"
import img_disney_posters from "./img/disney_posters.jpg"
import img_builtworlds from "./img/builtworlds.jpg"
import img_iphone_wireframes from "./img/iphone_wireframes.jpg"
import SEO from '../components/seo';
import ItemCard from "../components/item-card.zh"
import Title from "../components/title.zh"

export default function Blog() {
  return (
    <Layout>
      <SEO zh title={"部落格 - 郭力銘 Philip Kuo"} />
      <Title title="部落格"/>
      <div className="grid_container">
        <ItemCard link="wireframes" image={img_iphone_wireframes} title="iPhone 12 Pro 線搞圖模板" description="提供給設計與工程師社群的免費資源"/>
        <ItemCard link="https://medium.com/swlh/my-digital-workspace-1790a0b0420c" image={img_minimalist_workplace} title="我的極簡數位工作站" description="分享我最常使用的幾個軟體 (英文)"/>
        <ItemCard link="https://medium.com/@pkgamma/the-story-of-creating-the-perfect-disney-themed-dorm-room-b9d8da9c1f44" image={img_disney_posters} title="數位修復迪士尼樂園之中古海報" description="利用科技蒐集保留這些極具歷史的藝術海報 (英文)"/>
        <ItemCard link="https://medium.com/@pkgamma/builtworlds-hackathon-2019-a180fddf1024" image={img_builtworlds} title="BuiltWorlds 黑客松 2019" description="與完美團隊在芝加哥贏得這活動的故事 (英文)"/>
        <ItemCard link={null} image={BG1} title="HackIllinois 黑客松 2020" description="舉辦美國中部最具規模的開發競賽活動"/>
        <ItemCard link={null} image={BG1} title="RP 科技論壇 2019" description="為全美國透過多管道行銷這個活動"/>
        <ItemCard link={null} image={BG1} title="Interconnect 客戶關係管理程式" description="與朋友打造這個科技新創公司"/>
        <ItemCard link={null} image={BG1} title="TEDx 活動" description="精彩匯聚各方講者分享新知與靈感"/>
        <ItemCard link={null} image={BG1} title="Menu3 新創公司" description="建立優雅時髦的品牌形象"/>
        <ItemCard link={null} image={BG1} title="The Munual 非營利組織" description="透過科技讓更多學生體驗模擬聯合國活動"/>
      </div>
    </Layout>
  )
}
