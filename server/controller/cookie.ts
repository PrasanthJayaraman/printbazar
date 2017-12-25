export class cookieController {
    constructor() {

    }

    check(req, res, next) {
        res.send({ message: "Welcome to the API server 1.0" });
    }
}

export const check = cookieController.prototype.check;

/**
 * 
 * export class cookieController {
    constructor(){

    }

    check(req, res, next){
        res.send({message: "Welcome to the API server 1.0"});
    }
}

export const check = cookieController.prototype.check;


exports.check = function(req, res, next){
    res.send({ message: "Welcome to the API server 1.0" });
}


 */