/* eslint-disable quote-props */
export default {
    'static': {
        options: {
            root: './static',
            opts: {
            },
        },
    },
    'status': true,
    'test': true,
    'views': {
        enable: true,
        name: 'views',
        options: {
            root: './views',
            opts: {
                map: { html: 'nunjucks' },
            },
        },
    },
};
