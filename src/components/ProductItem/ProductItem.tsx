import React, { FC } from 'react';
import {IProducts } from '../../types/types';
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: IProducts;
  index: number;
}
const ProductItem: FC<ProductItemProps> = ({ product, index}) => {

  return (
    <div className={styles.product__card}>
      <div className={styles.card__wrapper}>
        <span className={styles.product__card_created}>created by</span>
        <h1 className={styles.product__card_title}>{product.name}</h1>
      </div>

      <div className={styles.card__bottom}>
        <div className={styles.card__avaible}>
          <span>available</span>
          <div>{product.quantity_available} of {index + 1}</div>
        </div>
        <div className={styles.card__price}>
          <span>price </span>
          <div>{product.initial_price} ETH</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
