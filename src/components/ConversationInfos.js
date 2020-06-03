import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from "../store/actions";

class ConversationInfos extends Component {
    
    render() {
        const activeCnt = this.props.cnts.filter((el) => {
            if (el.isActive) {
                return el;
            }
        }).reduce((acc,el) => {
            return el;
        }
        )
        return (
            <div className="conversationInfos">
                <p>{activeCnt.contactName}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cnts : state.contacts
    }
}


export default connect(mapStateToProps)(ConversationInfos);
