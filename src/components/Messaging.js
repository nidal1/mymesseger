import React, { Component } from 'react';
import { connect } from 'react-redux';
import Msg from './Msg';

class Messaging extends Component {
    constructor(props){
        super(props);
        this.messagingEreaRef = React.createRef();
    }
    render() {
        const activeCnt = this.props.cnts.filter((el) => {
            if (el.isActive) {
                return el;
            }
        }).reduce((acc,el) => {
            return el;
        });
        const relativeMsg = activeCnt.msg.map((el, index) => {
            return(
                <Msg 
                key={index}
                from={el.from}
                msgText={el.body}
                refce = {this.messagingEreaRef}/>
            )
            
        }
        )
        return (
            <div className="messagingErea ">
                <div className="overScoll d-flex flex-column" id="style-4"  ref={this.messagingEreaRef }>
                    {relativeMsg}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cnts : state.contacts
    }
};

export default connect(mapStateToProps)(Messaging);

