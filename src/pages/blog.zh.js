import React from "react"
import Layout from "../components/layout.zh"
import BG1 from "./blog/img/A01.jpg"
import BG2 from "./work/img/A02.jpg"
import BG3 from "./work/img/B01.jpg"
import BG4 from "./work/img/B02.jpg"
import SEO from '../components/seo';
import ItemCard from "../components/item-card.zh"
import Title from "../components/title.zh"

export default function Blog() {
  return (
    <Layout>
      <SEO zh title={"經驗 - 郭力銘 Philip Kuo"} />
      <Title title="經驗"/>
      <div className="grid_container">
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
