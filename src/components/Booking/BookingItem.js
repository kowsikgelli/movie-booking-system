import React from 'react';

export default function BookingItem({item,value}){
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeBooking} = value;
    return(
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:'5rem'}} className="img-fluid "alt="movie"></img>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Movie : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center"></div>
                <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                <span className="btn btn-black mx-1" >{count}</span>
                <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeBooking(id)}>
                    x
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>total : Rs {total}</strong>
            </div>
        </div>
    )
}