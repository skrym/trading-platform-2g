import request from 'superagent';
import base from './base';

export default function saveUser (user) {
    return () => {
        return base(
            request
                .post(`${process.env.REACT_APP_API}/user/signup`)
                .send(user)
        );
    };
}
