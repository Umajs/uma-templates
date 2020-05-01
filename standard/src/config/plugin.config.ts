export default {
    static: {
        options: {
            root: './static',
        },
    },
    status: true,
    views: {
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
