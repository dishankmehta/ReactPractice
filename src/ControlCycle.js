/**
 * Created by trainees on 3/14/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'

class ControlCycle extends React.Component{
    constructor(){
        super();
        this.state = {increasing: false}
    }

    update(){
        ReactDOM.render(<ControlCycle val={this.props.val+1}/>,document.getElementById('root'))
    }

    componentWillReceiveProps(nextProps){
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 === 0;
    }

    render(){
        console.log(this.state.increasing);
        return(
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }

    componentDidUpdate(prevProps, preState){
        console.log(`prevProps: ${prevProps.val}`);
    }
}

ControlCycle.defaultProps = {val:0};

export default ControlCycle