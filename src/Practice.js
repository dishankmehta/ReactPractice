/**
 * Created by trainees on 3/14/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Practice extends React.Component{

    constructor(){
        super();
        this.state = {currentEvent: '---'};
        this.update = this.update.bind(this);
        this.state = {a: ''};
        this.update_new = this.update_new.bind(this);
    }

    update(e){
        this.setState({currentEvent: e.type});
    }

    update_new(e){
        this.setState({
            a: ReactDOM.findDOMNode(this.a).value,
            b: this.refs.b.value
        })
    }

    render(){
        return(
            <div>
                <Button>I <Heart/> React</Button>
                <Title text="123456"/>
                <textarea cols="30" rows="10" onKeyPress={this.update}/>
                <h1>{this.state.currentEvent}</h1>
                <hr/>
                <Input ref={component => this.a = component} update_new={this.update_new}/>
                {this.state.a}
                <hr/>
                <input ref="b" type="text" onChange={this.update_new}/>
                {this.state.b}
            </div>
        )
    }
}

const Button = props => <button>{props.children}</button>;
const Title = props => <h1>Title: {props.text}</h1>;

Title.propTypes={
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`);
        }
        if(props[propName].length < 6){
            return new Error(`${propName} is too short`);
        }
    }
};

class Input extends React.Component{
    render(){
        return <input type="text" onChange={this.props.update_new}/>
    }
}

class Heart extends React.Component{
    render(){
        return <span>&hearts;</span>
    }
}

export default Practice