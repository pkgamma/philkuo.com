import React from "react"
import Layout from "../components/layout.en"
import BG1 from "./work/img/A01.jpg"
import BG2 from "./work/img/A02.jpg"
import BG3 from "./work/img/B01.jpg"
import BG4 from "./work/img/B02.jpg"
import SEO from '../components/seo';
import ItemCard from "../components/item-card.en"
import Title from "../components/title.en"

export default function Work() {
  return (
    <Layout>
      <SEO title={"Work - Philip Kuo"} />
      <Title title="Work"/>
      <div className="grid_container">
        <ItemCard link={null} image={BG1} title="Caterpillar Inc." description="Robust Fleet Management Solutions"/>
        <ItemCard link="https://uxdesign.cc/ui-ux-case-study-helping-people-feel-safe-walking-at-night-at-u-of-illinois-2f36db9a2951?gi=6f471069ee6b" image={BG2} title="SafeMaps" description="Campus Navigation App that Put Safety First"/>
        <ItemCard link={null} image={BG3} title="PKGamma Digital Agency" description="Digital Solutions for Small Businesses"/>
        <ItemCard link={null} image={BG4} title="The Hoverboard Guys" description="Successful Premium Hoverboards Startup"/>
      </div>
    </Layout>
  )
}
