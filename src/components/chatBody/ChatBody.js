import React, {Component} from 'react';
import ChatContent from '../chatContent/ChatContent';
import ChatList from '../chatList/ChatList';
import "./chatBody.css";

export default class ChatBody extends Component {
    render() {
        return (
            <div className="main__chatbody">
                <ChatList/>
                <ChatContent/>
            </div>
        );
    }
}