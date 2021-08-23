import React from 'react';
import BookingItem from './BookingItem';
export default function BookingList({value}){
    const {bookings} = value;
    return(
        <div className="container-fluid">
            {bookings.map(item=>{
                return (<BookingItem key={item.id} item={item} value={value} />)
            })}
        </div>
    )
}