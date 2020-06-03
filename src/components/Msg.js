import React, { Component } from 'react'

export default class Msg extends Component {
    render() {
        const alignSelf = this.props.from === "me" ? "align-self-start" : "align-self-end";
        return <div className={`msg border border-warning d-inline-block px-md-3 py-md-1 my-md-1 rounded-pill ${alignSelf}`}>{this.props.msgText}</div> ;
    }

    componentDidMount(){
        this.props.refce.current.scrollTo(0,this.props.refce.current.scrollHeight);
    }
}
