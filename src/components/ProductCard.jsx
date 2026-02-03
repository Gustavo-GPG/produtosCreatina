import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, image, price, url } = product;

  const formatPrice = (value) => {
    return value.toFixed(2).replace('.', ',');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={name}
          className={styles.productImage}
          loading="lazy"
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{name}</h3>

        <div className={styles.priceContainer}>
          <div className={styles.currentPrice}>
            {formatPrice(price)}
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buyButton}
        >
          COMPRAR
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
