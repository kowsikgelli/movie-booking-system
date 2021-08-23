import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storeMovies,detailMovie } from './data';
const MovieContext = React.createContext();
class DataProvider extends React.Component{
    state ={
        movies:[],
        detailMovie : detailMovie,
        bookings:[],
        bookingsSubTotal:0,
        bookingsTax:0,
        bookingsTotal:0
    }
    componentDidMount(){
        this.setMovies();
    }
    
    setMovies =()=>{
        let tempMovies = [];
        storeMovies.forEach(item=>{
            const singleItem = {...item};
            tempMovies = [...tempMovies,singleItem];

        })
        this.setState(()=>{
            return {movies:tempMovies}
        })
    }
    getItem=(id)=>{
        const movie = this.state.movies.find(item=>item.id === id);
        return movie;
    }
    handleDetail = (id)=>{
        const movie = this.getItem(id);
        this.setState(()=>{
            return {detailMovie:movie}
        })
    }
    addToBookings = (id)=>{
        let tempMovies = [...this.state.movies];
        const index = tempMovies.indexOf(this.getItem(id));
        const movie = tempMovies[index];
        movie.inCart = true;
        movie.count = 1;
        const price = movie.price;
        movie.total = price;

        this.setState(()=>{
            return {movies:tempMovies,bookings:[...this.state.bookings,movie]};
        },()=>{this.addTotals()})
    }
    increment =(id)=>{
        let tempBookings = [...this.state.bookings]
        const selectedMovie = tempBookings.find(item=>item.id === id);
        const index = tempBookings.indexOf(selectedMovie);
        const movie = tempBookings[index];

        movie.count = movie.count+1;
        movie.total = movie.count * movie.price;

        this.setState(()=>{
            return{
                bookings:[...tempBookings]
            }
        },()=>{
            this.addTotals();
        })
    }
    decrement = (id)=>{
        let tempBookings = [...this.state.bookings]
        const selectedMovie = tempBookings.find(item=>item.id === id);
        const index = tempBookings.indexOf(selectedMovie);
        const movie = tempBookings[index];

        movie.count = movie.count-1;
        if(movie.count === 0){
            this.removeBooking(id);
        }else{
            movie.total = movie.count*movie.price;
            this.setState(()=>{
                return{
                    bookings:[...tempBookings]
                }
            },()=>{
                this.addTotals();
            })
        }

    }
    removeBooking = (id)=>{
        let tempMovies = [...this.state.movies];
        let tempBookings = [...this.state.bookings];

        tempBookings = tempBookings.filter(item=>item.id !== id);
        const index = tempMovies.indexOf(this.getItem(id));
        let removedMovie = tempMovies[index];
        removedMovie.inCart = false;
        removedMovie.count = 0;
        removedMovie.total = 0;

        this.setState(()=>{
            return{
                bookings:[...tempBookings],
                movies:[...tempMovies],
            }
        },()=>{this.addTotals()})

    }
    clearBookings = ()=>{
        this.setState(()=>{
            return {bookings:[]}
        },()=>{
            this.setMovies();
            this.addTotals();
        })
    }
    addTotals = ()=>{
        let subTotal = 0;
        this.state.bookings.map(item=>{
            subTotal += item.total;
        })
        let tempTax = subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal+tax;
        this.setState(()=>{
            return{
                bookingsSubTotal:subTotal,
                bookingsTax:tax,
                bookingsTotal:total
            }
        })
    }
    render(){
        return(
            <MovieContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToBookings:this.addToBookings,
                increment:this.increment,
                decrement:this.decrement,
                removeBooking:this.removeBooking,
                clearBookings:this.clearBookings
            }}>
                {this.props.children}
            </MovieContext.Provider>
        )
    }
} 

const MovieConsumer = MovieContext.Consumer;

export {DataProvider,MovieConsumer};