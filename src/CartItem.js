import React from 'react';


class CartItem extends React.Component{
    constructor (){
        super();
this.state={
    price:999,
    title:'Phone',
    qty:1,
    img:''
}
    }
    increaseQuantity=()=>{
        console.log('this',this.state)
    }
    render(){
        const{price,title,qty}=this.state;
        return(
            <div className="cart-item">
<div className="left-block">
    <img style={styles.image} />
</div>
<div className="right-block">
<div style={{fontSize:25}}>{title} </div>
<div style={{color:'#777'}}>Rs {price}</div>
<div style={{color:'#777'}}>Qty:{qty} </div>


<div className="cart-item-actions">
    {/*Buttons*/}
    <img  alt="increase" 
    className="action-icons"
    src="https://cdn-icons.flaticon.com/png/512/1008/premium/1008937.png?token=exp=1643728904~hmac=fff72f58fb79df69289885fdfd33695e"
    onClick={this.increaseQuantity}
    />
    
    <img  alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/929/929430.png"/>
    <img  alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/4442/premium/4442016.png?token=exp=1643729108~hmac=cba246ecadfa03ab983f28c809bcec4f"/>
    </div> 
</div>
            </div>
        )
    }
}
const styles={
    image: {
      height:100,
      width:100,
      BorderRadius:4,
      background:'#ccc'

    }
  }
export default CartItem;