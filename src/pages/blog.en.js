import React from "react"
import Layout from "../components/layout.en"
import BG1 from "./blog/img/A01.jpg"
import BG2 from "./work/img/A02.jpg"
import BG3 from "./work/img/B01.jpg"
import BG4 from "./work/img/B02.jpg"
import img_minimalist_workplace from "./img/minimalist_workplace.jpg"
import SEO from '../components/seo';
import ItemCard from "../components/item-card.en"
import Title from "../components/title.en"

export default function Blog() {
  return (
    <Layout>
      <SEO title={"Blog - Philip Kuo"} />
      <Title title="Blog"/>
      <div className="grid_container">
        <ItemCard link="https://medium.com/swlh/my-digital-workspace-1790a0b0420c" image={img_minimalist_workplace} title="My Minimalist Digital Workspace" description="Sharing the Beautiful, Powerful Apps I Use Everyday"/>
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
