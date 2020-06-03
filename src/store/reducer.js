import * as actionTypes from './actions';
import Contact from '../components/Contact';

const initState = {
    contacts : [],
    lastMsgtype : undefined,
};

const reducer = (state = initState , action) => {
    let contacts;
    switch (action.type) {
        case actionTypes.CREATE_CONTACTS:
            contacts = [];
            for (let index = 0; index < 10; index++) {
                contacts.push({
                id : index,
                isActive : index == 0 ? true : false,
                contactName : `user ${index}`,
                contactImg : "https://via.placeholder.com/50x50.png",
                unreadMsg : {
                    totalUnreadMsg : Math.floor((Math.random() * 6) + 1),
                    unreadMsgArr : []
                },
                msg : []
                })
                
            }
            return {
                ...state,
                contacts
            }
        case actionTypes.SET_ACTIVE_ITEAM:
            contacts = [...state.contacts];
            let contactIsActive = contacts[action.iteamId].isActive;
            if (contactIsActive) {
                return {
                    ...state
                }
            }
            contacts.forEach((cnt, index) => {
                if (cnt.id === action.iteamId) {
                    return;
                }
                cnt.isActive = false;
            });
            contacts[action.iteamId].isActive = true;
            return {
                ...state,
                contacts
            }
        case actionTypes.SET_MSG:
            contacts = [...state.contacts];
            const cnt = contacts[action.payload.activeContact.id];
            cnt.msg.push({
                from:"me",
                body:action.payload.msg
            });
            contacts[action.payload.activeContact.id] = cnt;
            return {
                ...state,
                contacts
            }
    }
    return state;
}

export default reducer;
