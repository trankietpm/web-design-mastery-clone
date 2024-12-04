import React from 'react';
import Image from 'next/image';
import styles from './ProductSection.module.scss';

const ProductSection: React.FC = () => {
  const products = [
    {
      img: '/images-pet/product-1.jpg',
      title: 'Dog Trash Bag',
      description: 'Convenient and eco-friendly trash bags for easy pet waste disposal.',
      price: '$29.00 USD',
    },
    {
      img: '/images-pet/product-2.jpg',
      title: 'Pet Accessories',
      description: 'Explore our range of stylish and functional accessories for your furry friends.',
      price: '$49.00 USD',
    },
    {
      img: '/images-pet/product-3.jpg',
      title: 'Dog Food',
      description: 'Nutritious and delicious dog food to keep your pet healthy and happy.',
      price: '$79.00 USD',
    },
  ];

  return (
    <section className={styles.product} id="store">
      <div className={styles.sectionContainer}>
        <p className={styles.subheader}>Products</p>
        <h2 className={styles.header}>Featured pet products</h2>
        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <div className={styles.productCard} key={index}>
              <Image src={product.img} alt={product.title} width={352} height={352} />
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <h3>{product.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
