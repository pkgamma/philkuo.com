import React from "react"
import Layout from "../../components/layout.zh"
import SEO from "../../components/seo"
import Title from "../../components/title.zh"

import img_iphone_wireframes from "../img/iphone_wireframes.jpg"
import img_A01 from "./img/wireframes/A01.jpg"
import img_A02 from "./img/wireframes/A02.jpg"

export default function Wireframes() {
  return (
    <Layout>

      <SEO title={"iPhone 12 Pro 線搞圖設計模板 - 郭力銘 Philip Kuo"} article={true} />
      <Title title="iPhone 12 Pro 線搞圖設計模板" back_btn={true} />

      <article>
        <img src={img_iphone_wireframes}></img>

        <h2>關於與下載連結</h2>
        <p>歡迎由此免費下載最新版 iPhone 12 Pro 的線搞圖模板，讓你在思考你下一個專案的設計時，能更加輕鬆草擬畫下你的好點子！提供 A4 和美國 Letter 紙張尺寸格式。</p>

        <p>
          <a href="/resources/iphone_12_pro_wireframes_a4.pdf">↓ 下載 A4 尺寸的線搞圖模板</a>
          <br></br>
          <a href="/resources/iphone_12_pro_wireframes_letter.pdf">↓ 下載美國 Letter 大小的線搞圖模板</a>
        </p>

        <img src={img_A01}></img>

        <h2>我為什麼要做這個</h2>
        <p>當我剛開始進行認真的 UI/UX 設計時，市場上的主要設備還是 iPhoneX。那時，我記得在網路上可以找到 iPhone X 的各種設計資源，因為該設備的設計非常新穎，因此世界各地的設計師都急於發布自己的模型模板，UI 資源和其他設計資源，以供社群免費使用。</p>
        <p>但是，現在情況有所不同了。當我今天早些時候在搜尋最新 iPhone 12 Pro 的線搞圖模板時，我找不到任何可下載的模板。我認為這是因為 iPhone 設備的尺寸和顯示解析度在最近幾年的版本中變化太大，而設計師沒有那麼多時間一直為社區更新現有的模板了。</p>
        <p>因此，我基於最新的 iPhone 12 Pro 型號螢幕尺寸和解析度設計了這些最新的線框模板，因此我能夠為我最近開始從事的新專案草擬設計想法。我希望這個模板也可以對設計社群的其他人有所幫助！您可以在上面下載它們。</p>
        
        <img src={img_A02}></img>

        <h2>我是如何建立這模板的</h2>
        <p>我是使用 macOS 上的 Sketch 軟體，並藉助 Apple 的官方設計模板（可在其設計資源網站上找到）創建的。我透過將網格與實際設計組件對齊來確保它們在模板上是完美的。我還對網格和設備邊框進行了不同程度的灰色顏色漸變實驗，以找到當列印模板時最適合的灰階顏色，以使它們可見，但又不會太突兀。</p>
        <p>我希望你喜歡這個小設計資源。這是我第一次嘗試製作這種資源提供給大眾，因此，如果您有任何想法，請務必要告訴我，我將繼續學習和改進！</p>

      </article>

    </Layout>
  )
}
