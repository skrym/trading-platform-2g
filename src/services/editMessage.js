import request from 'superagent';
import base from './base';

import { TOKEN_CLIENT_LOCAL_STORAGE_NAME } from '../constants/constants';

export default function editMessage (id) {
    return () => {
        const token = localStorage.getItem(TOKEN_CLIENT_LOCAL_STORAGE_NAME);

        return base(
            request
                .put(`${process.env.REACT_APP_API}/message/visit`)
                .send(id)
                .query({ token })
        );
    };
}
