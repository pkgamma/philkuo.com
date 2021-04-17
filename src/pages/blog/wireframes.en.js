import React from "react"
import Layout from "../../components/layout.en"
import SEO from "../../components/seo"
import Title from "../../components/title.en"

import img_iphone_wireframes from "../img/iphone_wireframes.jpg"
import img_A01 from "./img/wireframes/A01.jpg"
import img_A02 from "./img/wireframes/A02.jpg"

export default function Wireframes() {
  return (
    <Layout>

      <SEO title={"iPhone 12 Pro Wireframe Templates - Philip Kuo"} article={true}/>
      <Title title="iPhone 12 Pro Wireframe Templates" back_btn={true} />

      <article>
        <img src={img_iphone_wireframes}></img>

        <h2>About & Download</h2>
        <p>Download the wireframe templates for the latest iPhone 12 Pro for free, and use them to brainstorm design ideas for your next big project. Available in A4 and Letter paper size formats.</p>

        <p>
          <a href="/resources/iphone_12_pro_wireframes_a4.pdf">↓ Download for A4 size papers</a>
          <br></br>
          <a href="/resources/iphone_12_pro_wireframes_letter.pdf">↓ Download for Letter size papers</a>
        </p>
        
        <img src={img_A01}></img>

        <h2>Why I made this</h2>
        <p>When I first got into serious UI/UX design, the primary device on the market was the iPhone X. Back then, I remember finding all kinds of design resources online for the iPhone X since the device's design was so revolutionarily new, and designers over the world all rush to release their own mockup templates, UI libraries, and other resources for the community to utilize.</p>
        <p>Now, however, things are a little different. When I was searching for wireframe templates earlier today for the latest Apple device iPhone 12 Pro, I wasn't able to find any for download. I'd assume that the reason for this is because iPhone device sizes and display resolutions have been changing too often in the recent releases and designers don't have the capacity to put in more efforts to update the templates for the community.</p>
        <p>So, I created these up-to-date wireframe templates that are based on the latest iPhone 12 Pro model screen size and resolution, so I am able to sketch down ideas for the new mobile app project that I have recently began working on. I am hoping that this template can be helpful to others in the design community as well.</p>

        <img src={img_A02}></img>

        <h2>How I created them</h2>
        <p>The template were created in Sketch on macOS with the help of Apple's official design templates that's available on their Design Resources website. I made sure that the grids and guidelines are pixel perfect on the template by aligning them with the actual design components. I also experimented with different fades of grey for the grids and device bezels to find the most optimal ones for when the templates are printed out, so that they're visible but not distracting.</p>
        <p>I hope you enjoy this little design resource. This is my first time attempting at creating something like this, so if you have any feedback, please do let me know - I will continue to learn and improve. Cheers!</p>

      </article>

    </Layout>
  )
}
