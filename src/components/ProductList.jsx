import ProductCard from './ProductCard';
import { products } from '../data/products';
import styles from './ProductList.module.css';

const ProductList = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          Vitamin<span className={styles.logoAccent}>Horse</span>
        </h1>
        <p className={styles.subtitle}>
          Suplementos de Alta Performance
        </p>
      </header>

      {products.length > 0 ? (
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          Nenhum produto disponível no momento.
        </div>
      )}
    </div>
  );
};

export default ProductList;
