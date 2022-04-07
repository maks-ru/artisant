import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Loader from './components/Loader/Loader';
import ProductList from './components/ProductsList/ProductList';
import { IProducts } from './types/types';

function App() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [productLoader, setProductLoader] = useState(false);
  const myRef = React.createRef<HTMLInputElement>();

  function sortByProduct() {
    if (myRef.current?.checked) {
      const sort = products.filter((p) => p.quantity_available > 0);
      setProducts(sort);
    } else {
      featchProducts()
      console.log(myRef.current?.checked);
    }
  }

  useEffect(() => {
    featchProducts();
  }, []);

  async function featchProducts() {
    try {
      const response = await axios.get('https://artisant.io/api/products');
      setProducts(response.data.data.products);
    } catch (error) {
      alert(error);
    }
    setProductLoader(false);
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.product__content}>
            <div className={styles.product__content_info}>
              <h1>Explore</h1>
              <p>Buy and sell digital fashion NFT ar</p>
            </div>
            <div className={styles.product__content_sort}>
              <label htmlFor='id'>Сортировка по наличию </label>
              <input id='id' ref={myRef} onChange={sortByProduct} type='checkbox' />
            </div>
          </div>
          {productLoader ? <Loader /> : <ProductList products={products} />}
        </div>
      </div>
    </div>
  );
}

export default App;
