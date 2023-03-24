import request from 'superagent';
import base from './base';

import { TOKEN_CLIENT_LOCAL_STORAGE_NAME } from '../constants/constants';

export default function getMessageHistory () {
    return () => {
        const token = localStorage.getItem(TOKEN_CLIENT_LOCAL_STORAGE_NAME);

        return base(
            request
                .get(`${process.env.REACT_APP_API}/message/history`)
                .query({ token })
        );
    };
}
