import { userDao  } from '../src/daos/index';
import { Document, Types } from "mongoose";


    export async function getById(req:any , res:any){
        
        try {

            let user_id:any = new Types.ObjectId(req.params.id);
            const user:object = await userDao.getById(user_id);
    
            if(user){
    
                res.json({
                    'status':'ok',
                    'message' : 'Producto enviado correctamente',
                    'code':'200',
                    'product': user
                });
            }else{
                res.status(400).json({
                    'status':'nok',
                    'message' : 'Producto no encontrado',
                    'code':'400',
                    'product': null
                });
            }
            
        } catch (error:any) {

            res.status(400).json({error: error.message});
        }
    }

    export async function save(req:any , res:any){
        
        try {

            const user = req.body;
            const result = await userDao.save(user);
            console.log(result);
            if(result){

                res.json({
                    'status':'ok',
                    'message' : 'usuario creado correctamente',
                    'code':'200',
                    'result': result
                });
            }else{
                res.status(400).json({
                    'status':'nok',
                    'message' : 'No se pudo crear al usuario',
                    'code':'400',
                    'result': null
                });
            }
            
        } catch (err : any) {
            console.log(err);
            res.status(400).json({error: err.message});
        }
        
    }

    export async function login(req:any, res:any){

     // vista de login
     console.log("vista de login");
    }

    export async function saveLogin(req:any, res:any){

        if(req.body.username){
            req.session.username = req.body.username;
            res.redirect('/api/carrito/');
            console.log("se inicio session");
        }
    }

    export async function signup(req:any, res:any){

        //vista de registro
        console.log("vista de registro");
    }

    export async function signupSave(req:any, res:any){

        //vista de registro
        console.log("vista de registro");
    }

    export async function logout(req:any, res:any){

        //vista de logout

    }

    export async function postLogout(req:any, res:any){

        req.session.destroy((err : any) => {
            if(err) {
              res.send("Error al cerrar sesion");
            } else {
                res.render("logout");
            }
        });

    }
 

   


