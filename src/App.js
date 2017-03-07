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

export default App