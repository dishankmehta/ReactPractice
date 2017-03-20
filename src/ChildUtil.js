/**
 * Created by trainees on 3/15/2017.
 */
import React from 'react'

class ChildUtil extends React.Component{
    render(){
        return(
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        )
    }
}


class Parent extends React.Component{
    render(){
        //let items = React.Children.map(this.props.children, child => child);
        let items = React.Children.toArray(this.props.children);
        console.log(items);
        return null;
    }
}

export default ChildUtil