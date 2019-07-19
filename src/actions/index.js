import {SET_ACTIVE_USER_ID} from "../constants/action-types";
import {SET_TYPING_VALUE} from "../constants/action-types";
import {SEND_MESSAGE} from "../constants/action-types";
import {DELETE_MESSAGE} from "../constants/action-types";

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
});

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});

export const deleteMessage = (numb, activeUserId) => ({
    type: DELETE_MESSAGE,
    payload: {
        numb,
        activeUserId
    }
});
