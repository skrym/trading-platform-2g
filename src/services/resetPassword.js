import request from 'superagent';
import base from './base';

export default function resetPassword (payload) {
    return () => {
        return base(
            request
                .post(`${process.env.REACT_APP_API}/user/reset`)
                .send(payload)
        );
    };
}
