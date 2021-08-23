import  React , {Component} from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import {ButtonContainer} from './Button'
export default class Navbar extends Component{
    render(){
        return(
            <NavWrapper className="navbar navrbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/' className="nav-link">
                    Home
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Movies</Link>
                    </li>
                </ul>
                <Link to="/bookings" className="ml-auto">
                    <ButtonContainer><span className="mr-2">My Bookings</span></ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`;
