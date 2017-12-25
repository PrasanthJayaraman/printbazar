import * as express from 'express';
import { check } from './controller/cookie';

let router = express.Router();

router.get('/check', check);

export default router;



/**
 * 
 * import { cookieController } from './controller/cookie';

export class AppRoutes {
    constructor(app) {
        return (app) => {
            app.get('/api/check', cookieController.check);
        }
    }
}


var cookieController = require("./controller/cookie");

exports.module = function routes(app){
    app.get('/api/check', cookieController.check);
}

 */