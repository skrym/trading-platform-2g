import request from 'superagent';
import base from './base';

import { TOKEN_CLIENT_LOCAL_STORAGE_NAME } from '../constants/constants';

import setUser from '../actions/setUser';
import _uniqBy from 'lodash.uniqby';

export default function getOrders (page, perPage, closedOrders = []) {
    return dispatch => {
        const token = localStorage.getItem(TOKEN_CLIENT_LOCAL_STORAGE_NAME);

        return base(
            request
                .get(`${process.env.REACT_APP_API}/order/all`)
                .query({ token, page, perPage })
        )
            .then(payload => {
                if (closedOrders.length) {
                    payload.closedOrders = _uniqBy(closedOrders.concat(payload.closedOrders), (item) => item.id);
                }

                return dispatch(setUser(payload));
            });
    };
}
