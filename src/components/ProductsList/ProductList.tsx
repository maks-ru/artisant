import React, { FC } from 'react';
import { IProducts } from '../../types/types';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: IProducts[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <ProductItem key={product.product_id} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductList;
