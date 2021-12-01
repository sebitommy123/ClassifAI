import React from 'react'
import { Link } from 'react-router-dom';
import ImageHeader from '../components/imageHeader';
import NeuralNetworkInterface from '../components/neuralNetworkInterface';

import wallpaper from '../images/neuralNetwork.jpg';

import img1 from '../images/fashion/1163.jpg';
import img2 from '../images/fashion/1164.jpg';
import img3 from '../images/fashion/1165.jpg';
import img4 from '../images/fashion/1525.jpg';
import img5 from '../images/fashion/1526.jpg';
import img6 from '../images/fashion/1528.jpg';
import img7 from '../images/fashion/1529.jpg';
import img8 from '../images/fashion/1530.jpg';
import img9 from '../images/fashion/1531.jpg';
import img10 from '../images/fashion/1532.jpg';


const Fashion = () => {
  const testingSet = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div>
      <ImageHeader image={wallpaper} title="ClassiFungAI" description={(<>
        A model that classifies any article of clothing into several distinct categories using Keras and Tensorflow.
      </>)} subtext="Contributors: Lincoln"/>
      <div className="breadcrumb">
        <Link to="/">Home</Link> > ClothesifAI
      </div>
      <NeuralNetworkInterface
        endpoint={"http://localhost"}
        port={5004}
        inputDimensions={[80,60]}
        labels={['Shirts', 'Jeans', 'Watches', 'Track Pants', 'Tshirts', 'Socks', 'Casual Shoes',
 'Belts', 'Flip Flops', 'Handbags', 'Tops', 'Bra', 'Sandals', 'Shoe Accessories',
 'Sweatshirts', 'Deodorant', 'Formal Shoes', 'Bracelet', 'Lipstick', 'Flats',
 'Kurtas', 'Waistcoat', 'Sports Shoes', 'Shorts', 'Briefs', 'Sarees',
 'Perfume and Body Mist', 'Heels', 'Sunglasses', 'Innerwear Vests', 'Pendant',
 'Nail Polish', 'Laptop Bag', 'Scarves', 'Rain Jacket', 'Dresses',
 'Night suits', 'Skirts', 'Wallets', 'Blazers', 'Ring', 'Kurta Sets', 'Clutches',
 'Shrug', 'Backpacks', 'Caps', 'Trousers', 'Earrings', 'Camisoles', 'Boxers',
 'Jewellery Set', 'Dupatta', 'Capris', 'Lip Gloss', 'Bath Robe', 'Mufflers',
 'Tunics', 'Jackets', 'Trunk', 'Lounge Pants', 'Face Wash and Cleanser',
 'Necklace and Chains', 'Duffel Bag', 'Sports Sandals',
 'Foundation and Primer', 'Sweaters', 'Free Gifts', 'Trolley Bag',
 'Tracksuits', 'Swimwear', 'Shoe Laces', 'Fragrance Gift Set', 'Bangle',
 'Nightdress', 'Ties', 'Baby Dolls', 'Leggings', 'Highlighter and Blush',
 'Travel Accessory', 'Kurtis', 'Mobile Pouch', 'Messenger Bag', 'Lip Care',
 'Face Moisturisers', 'Compact', 'Eye Cream', 'Accessory Gift Set',
 'Beauty Accessory', 'Jumpsuit', 'Kajal and Eyeliner', 'Water Bottle',
 'Suspenders', 'Lip Liner', 'Robe', 'Salwar and Dupatta', 'Patiala',
 'Stockings', 'Eyeshadow', 'Headband', 'Tights', 'Nail Essentials', 'Churidar',
 'Lounge Tshirts', 'Face Scrub and Exfoliator', 'Lounge Shorts', 'Gloves',
 'Mask and Peel', 'Wristbands', 'Tablet Sleeve', 'Ties and Cufflinks',
 'Footballs', 'Stoles', 'Shapewear', 'Nehru Jackets', 'Salwar', 'Cufflinks',
 'Jeggings', 'Hair Colour', 'Concealer', 'Rompers', 'Body Lotion', 'Sunscreen',
 'Booties', 'Waist Pouch', 'Hair Accessory', 'Rucksacks', 'Basketballs',
 'Lehenga Choli', 'Clothing Set', 'Mascara', 'Toner', 'Cushion Covers',
 'Key chain', 'Makeup Remover', 'Lip Plumper', 'Umbrellas',
 'Face Serum and Gel', 'Hat', 'Mens Grooming Kit', 'Rain Trousers',
 'Body Wash and Scrub', 'Suits', 'Ipad']}
        samples={testingSet}
        sampleLabels={['Tshirts', 'Tshirts', 'Tshirts', 'Backpacks', 'Backpacks', 'Jackets', 'Tshirts', 'Jackets', 'Tshirts', 'Tshirts']}
      />
    </div>
  )
}

export default Fashion;