import images from './images/flagsExports';

export const LANGS = ['ru', 'pl', 'en']; // need to add lang maps
export const DEFAULT_LANG = LANGS[0];
export const LANG_REGEX = LANGS
    .slice(1)
    .join('|');
export const DEFAULT_LANG_ROUTE = '';
export const SCROLL_TOP_LOCKED_EVENT_NAME = 'SCROLL_TOP_LOCKED_EVENT_NAME';
export const COOKIE_AGREEMENT_NAME = 'pl-finance-cookies-agreement';
export const TOKEN_CLIENT_LOCAL_STORAGE_NAME = 'pl-finance-client-token';
// export const TOKEN_LOCAL_STORAGE_NAME = 'pl-finance-token';

export const INITIAL_BALANCE = 5000;
export const COMMISSION = 0.0125;

export const CHART_TYPES = [
    { id: 1, name: 'Candlesticks', value: 'candlesticks' },
    { id: 2, name: 'Heikinashi', value: 'heikinashi' },
    { id: 3, name: 'HLC', value: 'hlc' },
    { id: 4, name: 'Line', value: 'line' },
    { id: 5, name: 'Area', value: 'area' },
    { id: 6, name: 'Dots', value: 'dots' }
];

export const CHART_TIMEFRAMES = [
    { id: 1, label: '1', value: '1' },
    { id: 2, label: '5', value: '5' },
    { id: 3, label: '15', value: '15' },
    { id: 4, label: '30', value: '30' },
    { id: 5, label: '1h', value: '60' },
    { id: 6, label: '1d', value: 'D' },
    { id: 7, label: '1w', value: 'W' },
    { id: 8, label: '1m', value: 'M' }
];

export const COUNTRY_INFO = [
    { id: 1, name: 'ru', callingCode: '+7', flag: images.ru_flag },
    { id: 2, name: 'AS', callingCode: '+1', flag: images.as },
    { id: 3, name: 'AR', callingCode: '+54', flag: images.ar },
    { id: 4, name: 'AU', callingCode: '+61', flag: images.au },
    { id: 5, name: 'AT', callingCode: '+43', flag: images.at },
    { id: 6, name: 'BR', callingCode: '+55', flag: images.br },
    { id: 7, name: 'IO', callingCode: '+246', flag: images.io },
    { id: 8, name: 'VG', callingCode: '+1', flag: images.vg },
    { id: 9, name: 'BG', callingCode: '+359', flag: images.bg },
    { id: 10, name: 'CA', callingCode: '+1', flag: images.ca },
    { id: 11, name: 'CL', callingCode: '+56', flag: images.cl },
    { id: 12, name: 'CY', callingCode: '+357', flag: images.cy },
    { id: 13, name: 'CZ', callingCode: '+420', flag: images.cz },
    { id: 14, name: 'DK', callingCode: '+45', flag: images.dk },
    { id: 15, name: 'EE', callingCode: '+372', flag: images.ee },
    { id: 16, name: 'FI', callingCode: '+358', flag: images.fi },
    { id: 17, name: 'FR', callingCode: '+33', flag: images.fr },
    { id: 18, name: 'GE', callingCode: '+995', flag: images.ge },
    { id: 19, name: 'DE', callingCode: '+49', flag: images.de },
    { id: 21, name: 'GR', callingCode: '+30', flag: images.gr },
    { id: 22, name: 'HK', callingCode: '+852', flag: images.hk },
    { id: 23, name: 'HU', callingCode: '+36', flag: images.hu },
    { id: 24, name: 'IS', callingCode: '+354', flag: images.is },
    { id: 25, name: 'IE', callingCode: '+353', flag: images.ie },
    { id: 26, name: 'IT', callingCode: '+39', flag: images.it },
    { id: 27, name: 'JP', callingCode: '+81', flag: images.jp },
    { id: 28, name: 'LV', callingCode: '+371', flag: images.lv },
    { id: 29, name: 'LI', callingCode: '+423', flag: images.li },
    { id: 30, name: 'LT', callingCode: '+370', flag: images.lt },
    { id: 31, name: 'LU', callingCode: '+352', flag: images.lu },
    { id: 32, name: 'MO', callingCode: '+853', flag: images.mo },
    { id: 33, name: 'MT', callingCode: '+356', flag: images.mt },
    { id: 34, name: 'MD', callingCode: '+373', flag: images.md },
    { id: 35, name: 'MC', callingCode: '+377', flag: images.mc },
    { id: 36, name: 'ME', callingCode: '+382', flag: images.me },
    { id: 37, name: 'NL', callingCode: '+31', flag: images.nl },
    { id: 38, name: 'NZ', callingCode: '+364', flag: images.nz },
    { id: 39, name: 'NO', callingCode: '+47', flag: images.no },
    { id: 40, name: 'PA', callingCode: '+507', flag: images.pa },
    { id: 41, name: 'PL', callingCode: '+48', flag: images.pl },
    { id: 42, name: 'PT', callingCode: '+351', flag: images.pt },
    { id: 43, name: 'QA', callingCode: '+974', flag: images.qa },
    { id: 44, name: 'SA', callingCode: '+966', flag: images.sa },
    { id: 45, name: 'SG', callingCode: '+65', flag: images.sg },
    { id: 46, name: 'SI', callingCode: '+421', flag: images.si },
    { id: 47, name: 'SK', callingCode: '+386', flag: images.sk },
    { id: 48, name: 'ZA', callingCode: '+27', flag: images.za },
    { id: 49, name: 'SS', callingCode: '+82', flag: images.ss },
    { id: 50, name: 'ES', callingCode: '+34', flag: images.es },
    { id: 52, name: 'SE', callingCode: '+46', flag: images.se },
    { id: 53, name: 'CH', callingCode: '+41', flag: images.ch },
    { id: 54, name: 'TW', callingCode: '+886', flag: images.tw },
    { id: 55, name: 'TH', callingCode: '+66', flag: images.th },
    { id: 56, name: 'VG', callingCode: '+1', flag: images.vg },
    { id: 57, name: 'UAE', callingCode: '+971', flag: images.uae },
    { id: 58, name: 'GB', callingCode: '+44', flag: images.gb },
    { id: 59, name: 'US', callingCode: '+1', flag: images.us },
    { id: 60, name: 'VN', callingCode: '+84', flag: images.vn }
];

export const AMOUNT = [
    { id: 1, name: 'gold', value: 500 },
    { id: 2, name: 'platinum', value: 1000 },
    { id: 3, name: 'diamond', value: 5000 },
    { id: 4, name: 'vip', value: 10000 }
];

export const LANGUAGES = [
    { id: 1, langCode: 'ru', countryCode: 'ru', name: 'Russian' },
    { id: 2, langCode: 'pl', countryCode: 'PL', name: 'Polish' },
    { id: 3, langCode: 'en', countryCode: 'GB', name: 'English' }
];
