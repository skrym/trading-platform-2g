import request from 'superagent';
import base from './base';

export default function getPrices () {
    return () => {
        return base(
            request
                .get(`${process.env.REACT_APP_API}/data/prices`)
        );
    };
}
