/**
 * Created by trainees on 3/15/2017.
 */
import React from 'react'


class ChildUtilNew extends React.Component{
    render(){
        return(
            <div>
                <Buttons>
                    <button value="A">A</button>
                    <button value="B">B</button>
                    <button value="C">C</button>
                </Buttons>
            </div>
        )
    }
}


class Buttons extends React.Component{
    constructor(){
        super();
        this.state = {selected: 'None'};
    }

    selectItem(selected){
        this.setState({selected});
    }

    render(){
        let fn = child => React.cloneElement(child,{
            onClick: this.selectItem.bind(this, child.props.value)
        });
        let items = React.Children.map(this.props.children, fn);
        return(
            <div>
                <h2>
                    You have selected: {this.state.selected}
                </h2>
                {items}
            </div>
        )
    }
}

export default ChildUtilNew