import React from 'react';
import {Link} from 'react-router-dom';
export default function BookingTotals({value}){
    const {bookingsSubTotal,bookingsTax,bookingsTotal,clearBookings} = value; 
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearBookings()}>
                                Clear Bookings
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal :</span>
                            <strong>Rs {bookingsSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">booking tax :</span>
                            <strong>Rs {bookingsTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">bookings total :</span>
                            <strong>Rs {bookingsTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}