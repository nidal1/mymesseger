import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from "../store/actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './InputArea.css';


class InputArea extends Component {
    constructor(props){
        super(props);
        this.contentEditable = React.createRef();
        
    }

    handleText = (activeCnt) => {
        let val = this.contentEditable.current.innerHTML;
        this.props.onGettingMsg(activeCnt,val);
        this.contentEditable.current.innerHTML = '';
        this.contentEditable.current.focus();
    }
    
    render() {
        const activeCnt = this.props.cnts.filter((el) => {
            if (el.isActive) {
                return el;
            }
        }).reduce((acc,el) => {
            return el;
        }
        );
        return (
            <div className="d-flex align-items-end Input">
                {/* <button type="button" className="btn btn-primary rounded-circle"><i className="far fa-kiss-wink-heart"/></button> */}
                <button type="button" className="button "><i className="far fa-kiss-wink-heart"/></button>
                {/* flex-grow-1 */}
                <div className= "d-flex align-items-center border inputContainer align-self-stretch rounded" >
                  <div className="inputArea align-self-center" contentEditable="true" ref={this.contentEditable} ></div>
                  <div className="placeholder" >Write a text </div>
                </div>
                <button type="button" className="button" onClick={() => this.handleText(activeCnt)}><i className="fas fa-microphone-alt" />{/*<i className="far fa-paper-plane"></i>*/}</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cnts : state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGettingMsg : (activeCnt, msg) => {
            dispatch({type:actionTypes.SET_MSG,payload : {
                activeContact : activeCnt,
                msg
            }}) 
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputArea);


