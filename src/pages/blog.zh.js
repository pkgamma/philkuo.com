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
        <ItemCard link={null} image={BG1} title="HackIllinois 2020" description="Making the Largest Hackathon in Midwest Happen"/>
        <ItemCard link={null} image={BG1} title="RP Tech Conference 2019" description="Marketing for a Nationwide Presence"/>
        <ItemCard link={null} image={BG1} title="Interconnect CRM" description="Attempt of Building a Business from Scratch"/>
        <ItemCard link={null} image={BG1} title="TEDx" description="Curating an Extraordinary TEDx Event"/>
        <ItemCard link={null} image={BG1} title="Menu3" description="Building an Elegant Brand Identity"/>
        <ItemCard link={null} image={BG1} title="The Munual" description="The Manual to Model United Nations"/>
      </div>
    </Layout>
  )
}
