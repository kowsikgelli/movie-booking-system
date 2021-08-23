import  React , {Component} from 'react';
import { MovieConsumer } from '../context';
import {Link} from 'react-router-dom';
import { ButtonContainer } from './Button';
import { inc } from 'semver';

export default class Details extends Component{
    render(){
        return(
            <MovieConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart} = value.detailMovie;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <img src={img} className="img-fluid" alt="movie"></img>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>movie: {title}</h2>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>Rs</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Some info about movie</p>
                                    <p className="text-muted lead">{info}</p>

                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back To Movie</ButtonContainer>
                                        </Link>
                                        <ButtonContainer disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToBookings(id)
                                        }}>
                                            {inCart?'In Bookings':'Add to Bookings'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </MovieConsumer>
        )
    }
}