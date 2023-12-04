import {AppDataSource} from "../data-source"
import { Usuario } from "../entity/Usuario"
import { Repository } from "typeorm"

export const criarUsuario=async(data:Usuario):Promise<Usuario>=>{
    const repo:Repository<Usuario>=AppDataSource.getRepository(Usuario)
    const usuario:Usuario=await repo.save(data)
    return usuario
}

export const lerUsuario=async():Promise<Usuario[]>=>{
    const repo:Repository<Usuario>=AppDataSource.getRepository(Usuario)
    const usuario:Usuario[]=await repo.find();
    return usuario
}

  