import {Resquest,Response} from "express";
import { Usuario } from "../entity/Usuario";
import { criarUsuario,lerUsuario } from "../service/usuario.service";

export const criaUsuarioControlador=async(req:Resquest,res:Response):Promise<Response>=>{
    const usuario:Usuario=await criarUsuario(req.body);
    return res.status(201).json(usuario)
}

export const lerUsuarioControler=async(req:Resquest,res:Response):Promise<Response>=>{
    const usuario:Usuario[]=await lerUsuario()
    return res.status(201).json(usuario)
}