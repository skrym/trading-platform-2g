import request from 'superagent';
import base from './base';

export default function sendForm (payload) {
    return () => {
        return base(
            request
                .post(`${process.env.REACT_APP_API}/form/reset`)
                .send(payload)
        );
    };
}