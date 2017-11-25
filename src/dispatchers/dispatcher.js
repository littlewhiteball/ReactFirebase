import { v4 as uuid } from 'uuid';

var listeners = {};

function register(callback) {
    const id = uuid();
    listeners[id] = callback;
    return id;
}
function dispatch(payload) {
    console.info('Dispatching..', payload);
    for (const id in listeners) {
        const listener = listeners[id];
        listener(payload);
    }
}

export default {
    register, dispatch
}
