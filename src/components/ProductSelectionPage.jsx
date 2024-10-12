import React, { useState } from 'react';
import Header from '../shared/Header';
import ProductListing from './ProductListing';


const ProductSelectionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Header openModal={openModal} />
      
      <div className="container mx-auto p-6">
      <ProductListing />
      </div>
    </div>
  );
};

export default ProductSelectionPage;