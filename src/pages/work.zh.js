import React from "react"
import Layout from "../components/layout.zh"
import BG1 from "./work/img/A01.jpg"
import BG2 from "./work/img/A02.jpg"
import BG3 from "./work/img/B01.jpg"
import BG4 from "./work/img/B02.jpg"
import SEO from '../components/seo';
import ItemCard from "../components/item-card.zh"
import Title from "../components/title.zh"

export default function Work() {
  return (
    <Layout>
      <SEO zh title={"經驗 -  郭力銘 Philip Kuo"} />
      <Title title="經驗"/>
      <div className="grid_container">
        <ItemCard link={null} image={BG1} title="Caterpillar 公司" description="重新打造更智慧的車隊控管解決方案"/>
        <ItemCard link="https://medium.com/as-a-product-designer/ui-ux-設計案例分享-如何讓行人在夜間返家更安全-9370eb55e4e9" image={BG2} title="SafeMaps 程式" description="開發以安全為先的校園導航手機程式"/>
        <ItemCard link={null} image={BG3} title="PKGamma 數位機構" description="為中小企業開發數位解決方案"/>
        <ItemCard link={null} image={BG4} title="The Hoverboard Guys 公司" description="販售高品質懸浮滑板的新創公司"/>
      </div>
    </Layout>
  )
}
