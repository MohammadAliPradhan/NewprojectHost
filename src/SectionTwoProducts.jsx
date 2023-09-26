import React from 'react';
import './SectionTwoProducts.css';

export default function SectionTwoProducts(props) {
  const [clkBtn, setClkBtn] = React.useState()

  function handleEventListener(event){
    setClkBtn((oldState)=>{
      oldState = "hi"
    })
  }
  return (
    <>
    <div className="product">
      <img className="product-img" src={props.image} alt="" />
      <div className="pSomething">
        <button onClick={handleEventListener} className='paraSomething'>{props.price}</button>
      </div>
    </div>
    </>
  );
}
