import React from "react";
import SHOP_DATA from "../../data/ShopData";
import CollectionPreview from "../../components/collection/collection-preview";
const ShopPage =()=> {
    var collections=SHOP_DATA
  
   
     
      return (
        <div className='shop-page'>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      );
    
  }
  
  export default ShopPage;
  