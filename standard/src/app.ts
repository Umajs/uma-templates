import Ursa from '@ursajs/core';
import { Router } from '@ursajs/router';

const ursa = Ursa.instance({
    Router,
    bodyParser: { multipart: true },
    ROOT: __dirname,
    env: process.argv.indexOf('production') > -1 ? 'production' : 'development',
});

ursa.start(8058);
