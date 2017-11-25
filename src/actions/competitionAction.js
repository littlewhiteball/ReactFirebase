import dispatcher from './../dispatchers/dispatcher';

function add(competition) {
    dispatcher.dispatch({
        payload: competition,
        type: "competition:add"
    });
}

function remove(competition) {
    dispatcher.dispatch({
        payload: competition,
        type: "competition:remove"
    });
}

function buy(competition) {
    dispatcher.dispatch({
        payload: competition,
        type: "competition:buy"
    });
}

function unbuy(competition) {
    dispatcher.dispatch({
        payload: competition,
        type: "competition:unbuy"
    });
}

export default {
    add, remove, buy, unbuy
}
