import request from 'superagent';
import base from './base';

import { TOKEN_CLIENT_LOCAL_STORAGE_NAME } from '../constants/constants';

export default function saveMoneyOutput (output) {
    return () => {
        const token = localStorage.getItem(TOKEN_CLIENT_LOCAL_STORAGE_NAME);

        return base(
            request
                .post(`${process.env.REACT_APP_API}/output/new`)
                .send(output)
                .query({ token })
        );
    };
}
