import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import Msg from './Msg';
import Messaging from './Messaging';
import InputArea from './InputArea'

import './DisplayMsg.css';
import ConversationInfos from './ConversationInfos';

export default class DisplayMsg extends Component {

    render() {
        return (
            <div className="conversationErea">
                <ConversationInfos/>
                <Messaging/>
                <InputArea/>
            </div>
        )
    }
}
