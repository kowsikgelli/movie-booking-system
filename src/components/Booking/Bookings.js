import  React , {Component} from 'react';
import Title from '../Title';
import BookingColumns from './BookingColumns';
import EmptyBooking from './EmptyBooking';
import { MovieConsumer } from '../../context';
import BookingList from './BookingList';
import BookingTotals from './BookingTotals';
export default class Bookings extends Component{
    render(){
        return(
            <section>
                <MovieConsumer>
                    {value => {
                        const {bookings} = value;
                        if(bookings.length>0){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="Bookings"></Title>
                                    <BookingColumns />
                                    <BookingList value={value}/>
                                    <BookingTotals value={value} />
                                </React.Fragment>
                            )
                        }else{
                            return (<EmptyBooking />)
                        }
                    }}                
                </MovieConsumer>
            </section>
        )
    }
}