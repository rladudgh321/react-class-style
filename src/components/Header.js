import { Component } from "react";
export default class Header extends Component{
    render(){
        return(
            <div>
                <h1><a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode();
                }.bind(this)}>{this.props.title}</a></h1>
            </div>
        );
    }
}