import React, { FC } from 'react'
import styles from './Loader.module.scss'


const Loader: FC = () => {
  return (
    <div className={styles.lds__dual_ring}></div>
  )
}

export default Loader