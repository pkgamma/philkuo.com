import React from "react"
import Layout from "../components/layout.en"
import BG1 from "./blog/img/A01.jpg"
import BG2 from "./work/img/A02.jpg"
import BG3 from "./work/img/B01.jpg"
import BG4 from "./work/img/B02.jpg"
import img_minimalist_workplace from "./img/minimalist_workplace.jpg"
import img_disney_posters from "./img/disney_posters.jpg"
import img_builtworlds from "./img/builtworlds.jpg"
import SEO from '../components/seo';
import ItemCard from "../components/item-card.en"
import Title from "../components/title.en"

export default function Blog() {
  return (
    <Layout>
      <SEO title={"Blog - Philip Kuo"} />
      <Title title="Blog"/>
      <div className="grid_container">
        <ItemCard link="https://medium.com/swlh/my-digital-workspace-1790a0b0420c" image={img_minimalist_workplace} title="My Minimalist Digital Workspace" description="Sharing the beautiful, powerful apps I use everyday."/>
        <ItemCard link="https://medium.com/@pkgamma/the-story-of-creating-the-perfect-disney-themed-dorm-room-b9d8da9c1f44" image={img_disney_posters} title="Preserving Vintage Posters from Disney Parks" description="Digitally restoring the stunning Disney attraction posters."/>
        <ItemCard link="https://medium.com/@pkgamma/builtworlds-hackathon-2019-a180fddf1024" image={img_builtworlds} title="BuiltWorlds Hackathon 2019" description="Winning the hackathon with a great team."/>
        <ItemCard link={null} image={BG1} title="HackIllinois 2020" description="Making the largest hackathon in midwest happen."/>
        <ItemCard link={null} image={BG1} title="RP Tech Conference 2019" description="Marketing for a nationwide presence."/>
        <ItemCard link={null} image={BG1} title="Interconnect CRM" description="Attempt of building a business from scratch."/>
        <ItemCard link={null} image={BG1} title="TEDx" description="Curating an extraordinary TEDx event."/>
        <ItemCard link={null} image={BG1} title="Menu3" description="Building an elegant brand identity."/>
        <ItemCard link={null} image={BG1} title="The Munual" description="The manual to Model United Nations."/>
      </div>
    </Layout>
  )
}
