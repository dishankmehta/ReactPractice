import React from 'react';

/*const App = () => <h1>Hello React</h1>;*/

class App extends React.Component{
    render(){
        let txt = this.props.txt;
        return(
            <div>
                <h1>Hello React</h1>
                <b>Bold</b>
                <h2>{txt}</h2>
            </div>
            )
    }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: "This is default txt"
};

export default App