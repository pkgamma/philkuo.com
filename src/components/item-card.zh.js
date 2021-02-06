import React from "react"
import { Link } from "gatsby"
import styles from "./item-card.module.scss"

const ItemCard = ({ link, image, title, description }) => {

  return (
    <div>
      <Link to={link} className={styles.item}>
        <img src={image}></img>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        {!link && (
          <p className={styles.construction}>詳細介紹頁面建置中</p>
        )}
      </Link>
    </div>
  )
}

export default ItemCard