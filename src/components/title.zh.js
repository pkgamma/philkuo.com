import React from "react"
import styles from "./title.module.scss"
import { Link } from "gatsby"
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Title = ({ title, back_btn }) => {

  return (
    <div className={styles.title_container}>

      {back_btn && (
        <Link to=".." className={styles.back}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
      上一頁
        </Link>
      )}

      {back_btn ? (<h1 className={styles.back_title_adjust}>{title}</h1>) : (<h1>{title}</h1>)}

    </div>
  )
}

export default Title