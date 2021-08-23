import  React , {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { MovieConsumer } from '../context';

export default class Movie extends Component{
    render(){
        const {id,title,img,inCart,price} = this.props.movie;
        return(
            <MovieWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                 <div className="card">
                     <MovieConsumer>
                         {value=>(
                             <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
                             <Link to="/details">
                                 <img src={img} alt="movie name" className="card-img-top"></img>
                             </Link>
                             <button className="cart-btn" disabled={inCart?true:false} onClick={()=>value.addToBookings(id)}>
                             {inCart?(<p className="text-capitalize mb-0" disabled>{" "} go to Bookings</p>):<h4>book now</h4>}
                             </button>
                         </div>
                         )}
                    
                    </MovieConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue  mb-0">
                            <span className="mr-1">Rs</span>
                            {price}
                        </h5>
                    </div>
                 </div>
            </MovieWrapper>
        )
    }
}

const MovieWrapper = styled.div`

`;