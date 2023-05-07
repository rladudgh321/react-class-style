import { Component } from "react";
export default class Update extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:this.props.title,
            desc:this.props.desc
        }
    }
    render(){
        return(
            <div>
                <h2>Update</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    this.props.onUpdate(title, desc);
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={function(e){
                        // debugger;
                        e.preventDefault();
                        this.setState({
                            title:e.target.value
                        })
                    }.bind(this)} /></p>
                    <p><textarea name="desc" placeholder="desc" value={this.state.desc} onChange={function(e){
                        // debugger;
                        e.preventDefault();
                        this.setState({
                            desc:e.target.value
                        })
                    }.bind(this)} /></p>
                    <p><input type="submit" value="update" /></p>
                </form>
            </div>
        );
    }
}