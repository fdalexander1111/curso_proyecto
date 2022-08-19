import express from 'express';

let administrator = true;

function permissions(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    if(!administrator){
        res.json({
            'status':'ok',
            'message' : 'No tiene permiso para ejercer esta accion',
            'code':'403',
        });

        return;
    }
    next();
}

export  { permissions }; 