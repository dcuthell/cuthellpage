import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavbarBrand, NavLink } from 'reactstrap';
import './styles.css';

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
						<h1>Cuthell.com</h1>
	        </NavbarBrand>
	        <NavbarToggler onClick={this.toggle}/>
	        <Collapse isOpen={this.state.isOpen} navbar>
	          <Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href={"#/David"} onClick={this.toggle2} className="menuItem">David</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Samuel"} onClick={this.toggle2} className="menuItem">Samuel</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={"#/Erik"} onClick={this.toggle2} className="menuItem">Erik</NavLink>
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
