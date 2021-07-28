import React, { Component } from 'react'
import './Nav.css'
class Nav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
    
    componentDidMount(){
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                this.setState({
                    show:true
                })
            }
            else{
                this.setState({
                    show:false
                })
            }
        })

    }
    


    render() {
        return (
            <div className={`nav ${this.state.show && "nav__black"}`}>
                <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" alt="Netflix Logo">
                </img>
                <button className="nav__signin">Sign In</button>
            </div>
        )
    }
}

export default Nav
