import React from 'react';

/*const App = () => <h1>Hello React</h1>;*/

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            txt: "This is the state txt",
            cat: 0
        }
    }

    update( e ){
        this.setState({txt: e.target.value});
    }

    render(){
        let txt = this.props.txt;
        return(
            <div>
                <h1>Hello React</h1>
                <b>Bold</b>
                <h2>{txt}</h2>
                <Widget update={this.update.bind(this)}/>
                <h3>{this.state.txt}</h3>
                <h3>{this.props.txt}</h3>
            </div>
            )
    }
}

const Widget = (props) => <input type="text" onChange={props.update}/>;

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: "This is default txt"
};

export default App
