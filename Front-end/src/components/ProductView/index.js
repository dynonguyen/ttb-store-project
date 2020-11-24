

import React from 'react';
import './index.scss';



function format2(n) {
  var fi =   n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return fi.slice(0,fi.length-3);
}

function ProductView(props){
return (
        <div className="product-view">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="product image" 
            className="image-no" style={{
              width: 294,
              height:200
          }}></img>
      
          <div className="content" style={{
            'padding-left': 10,
          }}>
            <div className="name" style={{
               height: 100,
               fontSize: 20,
               textOverflow:'ellipsis',
               overflow: 'hidden',
               wordBreak:'keep-all',
            }}><strong>{props.item.name}</strong></div>
            <div className="initial-price" style={{
              'text-decoration': 'line-through',
              color:'#999',
              'font-size': 18,
            }}>{format2(props.item.initialPrice)}đ</div>
            <div className="price" style={{
              height: 20,
              'font-size': 18,
              'font-weight': 500
            }}>{format2(props.item.price)}đ</div>
            <div className="remaining" style={{
                'padding-top':10,
                color: 'red',
                'padding-bottom':10,
            }}>{props.item.remaining}</div>
           
          </div>
        </div>
);
}
export default ProductView;