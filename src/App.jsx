import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'eventemitter3';
import classNames from 'classnames';

// NOTE: SOMETHING STUPID
// import '../../../client/vendor';
import './css/main.scss';
import './css/DatePickerCustom.scss';

import media from './ui/hocs/media/media.jsx';
import lang from './ui/hocs/lang/lang.jsx';

import queryString from 'query-string';

import { connect } from 'react-redux';

import Header from './ui/components/Header/Header.jsx';
import CookiesAgreement from './ui/components/CookiesAgreement/CookiesAgreement';
import LeftMenu from './ui/components/LeftMenu/LeftMenu';
import Footer from './ui/components/Footer/Footer.jsx';
import ConnectionLost from './ui/components/ConnectionLost/ConnectionLost';
import MainPage from './ui/pages/MainPage/MainPage.jsx';
import NotFoundPage from './ui/components/NotFoundPage/NotFoundPage';
import AuthenticationPopup from './ui/components/AuthenticationPopup/AuthenticationPopup';
import AccountInfoPopup from './ui/components/AccountInfoPopup/AccountInfoPopup';
import PaymentsPopup from './ui/components/PaymentsPopup/PaymentsPopup';
import WithdrawSuccessPopup from './ui/components/WithdrawSuccessPopup/WithdrawSuccessPopup';

import messageWebsocketController from './services/messageWebsocket';
import assetPriceWebsocketController from './services/assetPriceWebsocket';

import { Route, Navigate, Routes } from 'react-router-dom';

import getLangRouteParts from './utils/getLangRouteParts';
import getLangFromRoute from './utils/getLangFromRoute';

import checkAuthentication from './services/checkAuthentication';
import getPrices from './services/getPrices';

import { TOKEN_CLIENT_LOCAL_STORAGE_NAME } from './constants/constants';

import styles from './App.module.scss';

const events = new EventEmitter();

const mapStateToProps = ({ application, data, charts }) => {
    return {
        lang: application.lang,
        langRoute: application.langRoute,
        authenticationFormPopup: data.authenticationFormPopup,
        user: data.user,
        accountInfoPopup: data.accountInfoPopup,
        paymentsPopup: data.paymentsPopup,
        withdrawPopup: data.withdrawPopup,
        chartSymbol: charts.chartSymbol,
        openOrders: data.openOrders
    };
};

const mapDispatchToProps = (dispatch) => ({
    checkAuthentication: payload => dispatch(checkAuthentication(payload)),
    getPrices: payload => dispatch(getPrices(payload))
});

// @lang
// @media
class App extends Component {
    static propTypes = {
        lang: PropTypes.string,
        langRoute: PropTypes.string,
        location: PropTypes.object.isRequired,
        navigation: PropTypes.func.isRequired,
        checkAuthentication: PropTypes.func.isRequired,
        getPrices: PropTypes.func.isRequired,
        user: PropTypes.object,
        authenticationFormPopup: PropTypes.object.isRequired,
        accountInfoPopup: PropTypes.bool,
        paymentsPopup: PropTypes.bool.isRequired,
        withdrawPopup: PropTypes.object.isRequired,
        openOrders: PropTypes.array.isRequired
    };

    static defaultProps = {
        langRoute: '',
        user: null,
        openOrders: []
    };

    state = {
        connectionStatus: true
    };

    componentDidMount () {
        this.props.getPrices()
            .then(prices => {
                assetPriceWebsocketController.setPrices(prices);
            });

        const queries = queryString.parse(this.props.location.search);

        if (queries.mailtoken) {
            this.props.navigation(this.props.location.pathname, { replace: true });
            localStorage.setItem(TOKEN_CLIENT_LOCAL_STORAGE_NAME, queries.mailtoken);
        }

        this.props.checkAuthentication();

        this.handleUser();
        assetPriceWebsocketController.connect();

        assetPriceWebsocketController.events.on('status', (status) => {
            this.setState({ connectionStatus: status });
        });
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.location !== nextProps.location) {
            window.scrollTo(0, 0);
        }

        if (this.props.user !== nextProps.user || this.props.openOrders !== nextProps.openOrders) {
            this.handleUser(nextProps);
        }
    };

    componentWillUnmount () {
        assetPriceWebsocketController.disconnect();
    }

    handleUser = (props = this.props) => {
        if (props.user) {
            messageWebsocketController.connect();
            assetPriceWebsocketController.setUser(props.user, props.openOrders);
        } else {
            assetPriceWebsocketController.setUser(null, []);
            messageWebsocketController.disconnect();
        }
    };

    render () {
        const { authenticationFormPopup, accountInfoPopup, paymentsPopup, withdrawPopup } = this.props;
        const { connectionStatus } = this.state;

        return <main>
            <div className={styles.page}>
                <Header events={events} />
                <CookiesAgreement />
                <div className={styles.pageContentContainer}>
                    <LeftMenu events={events} />
                        {/* {!connectionStatus && <ConnectionLost />} */}
                    <MainPage events={events} />
                </div>
                <AuthenticationPopup isVisible={authenticationFormPopup.isPopup} activeIndex={authenticationFormPopup.activeIndex} />
                <AccountInfoPopup isVisible={accountInfoPopup} />
                <PaymentsPopup isVisible={paymentsPopup} />
                <WithdrawSuccessPopup isVisible={withdrawPopup.visible} amount={withdrawPopup.amount} />
                <div className={classNames(styles.outsideClick, {
                    [styles.outsideClickActive]: authenticationFormPopup.isPopup || accountInfoPopup || paymentsPopup || withdrawPopup.visible
                })} />
                <Footer events={events} />
            </div>
        </main>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(lang(media(App)));
