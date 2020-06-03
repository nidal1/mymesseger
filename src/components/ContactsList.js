import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionTypes from "../store/actions";
import './ContactsList.css';
import Contact from './Contact';

class ContactsList extends Component {

    constructor(props){
        super(props);
        this.props.onCreateContacts();
        
    }
    render() {
        const contacts = this.props.cnts.map((el) => {
            return (<Contact 
                key = {el.id}
                isActive = {el.isActive}
                clicked ={() => this.props.onSetActiveIteamlist(el.id)}
                imgSrc = {el.contactImg}
                contactName = {el.contactName}
                totalUnreadMsg = {el.unreadMsg.totalUnreadMsg}
            />);
        });
        return (

            <ul className="list-group ">
                <li className="list-group-item active">Cras justo odio </li>
                {contacts}
                
          </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cnts : state.contacts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateContacts : () => {
            dispatch({type : actionTypes.CREATE_CONTACTS})
        },
        onSetActiveIteamlist : (iteamId) => {
            dispatch({type : actionTypes.SET_ACTIVE_ITEAM, iteamId : iteamId})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactsList);
