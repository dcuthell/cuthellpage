import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand, NavLink } from 'reactstrap';
import './styles.css';
import Logo from '../../img/logo.png';

class NavBar extends Component {
	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.toggle2 = this.toggle2.bind(this);
		this.state = {
			isOpen : false
		}
	}
	toggle(){
		this.setState({
			isOpen : !this.state.isOpen
		})
	}
	toggle2() {
		if (this.state.isOpen) {
			this.setState({
	      isOpen: false
	    });
		}
  }
  render() {
    return (
			<div className="NavBar sticky-top">
				<Navbar expand="md" className={this.props.className}>
	        <NavbarBrand href={"#"}>
	          <img id="NCBALogo" src={Logo} alt='NCBA logo'></img>
	        </NavbarBrand>
	        <NavbarToggler onClick={this.toggle}/>
	        <Collapse isOpen={this.state.isOpen} navbar>
	          <Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href={"#/About"} onClick={this.toggle2} className="menuItem">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Programs"} onClick={this.toggle2} className="menuItem">Programs</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Gallery"} onClick={this.toggle2} className="menuItem">Gallery</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Schedule"} onClick={this.toggle2} className="menuItem">Schedule</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Reviews"} onClick={this.toggle2} className="menuItem">Reviews</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Contact"} onClick={this.toggle2} className="menuItem">Contact</NavLink>
							</NavItem>
	          </Nav>
	        </Collapse>
	      </Navbar>
			</div>
    );
  }
}

NavBar.defaultProps = {
  className: "sticky-top navbar-dark bg-dark",
}

export default NavBar;
