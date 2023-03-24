import request from 'superagent';
import base from './base';

import setPayments from '../actions/setPayments';

export default function getPayments () {
    return dispatch => {
        return base(
            request
                .get(`${process.env.REACT_APP_API}/payments`)
        )
            .then(payments => {
                dispatch(setPayments(payments));
            });
    };
}
