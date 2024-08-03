//rotas Gabarito

import {Router} from "express"
import Gabarito from "../entities/Gabarito.js"
import GabaritoModel from "../models/GabaritoModel.js"

export default class GabaritoRoutes {
    constructor(db){
        this.db = new GabaritoModel(db)
    }

    routes(){
        const router = Router()

        router.get('/',(req,res) => {
            const gabaritos = this.db.findAll()
            res.json(gabaritos)
        })

        /*router.post('/',(req,res) => {
            const novoGabarito = req.body

            this.db.create(novoGabarito)
            res.json(novoGabarito)
        })*/

        //rota FindById
        /*
        router.get('/:codGabarito',(req,res) => { //codGbarito é um parametro
            const {codGabarito} = req.params //extrai o codigo que foi colocado como parametro

            //validação:
            if(!codGabarito || codGabarito == "") return res.status(400).json({erro: 'Código gabarito obrigatório'})

            const gabarito = this.db.findById(Number(codGabarito)) //chama o método findById e tranforma o codigo inserido em um numero
            if(!gabarito) return res.status(404).json({erro: "Gabarito não encontrada"}) //mensagem de erro caso não ache um gabarito

            res.json(gabarito)
        })

        //rota Delete
        router.delete('/:codGabarito',(req,res) => {
            const {codGabarito} = req.params //extrai o codigo que foi colocado como parametro
            
            //validação:
            if(!codGabarito || codGabarito == "") return res.status(400).json({erro: 'Código gabarito obrigatório'})

            const deletar = this.db.delete(Number(codGabarito)) //chama o método Delete
            if(!deletar) return res.status(404).json({erro: "Erro ao deletar"}) //mensagem de erro

            res.json({ mensagem: 'Gabarito removido com sucesso' })
        })

        //rota Update
        router.put('/:cod',(req,res) => {
            const {cod} = req.params //extrai o codigo que foi colocado como parametro
            const {codGabarito, resp1, resp2, resp3, resp4 , resp5, codMateria, dataProva} = req.body //extrai os dados que foram colocados no corpo da requisição

            //validação:
            if(!codGabarito || codGabarito == "") return res.status(400).json({erro: 'Código gabarito obrigatório'})
            if(!codMateria || codMateria == "") return res.status(400).json({erro: 'Código matéria obrigatório'})
            if(!dataProva || dataProva == "") return res.status(400).json({erro: 'Data da Prova obrigatória'})

            const gabarito = new Gabarito(codGabarito, resp1,resp2,resp3,resp4,resp5, codMateria, dataProva) //cria um novo gabarito atualizando os dados
            this.db.update(cod,gabarito) //atualiza gabarito

            res.json(gabarito)
        })*/
        return router
    }
}