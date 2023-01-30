const Joi = require('joi')
const formidable = require('formidable')
const slug = require('slug')
const fs = require('fs')
const { request } = require('http')
const path = require('path')

const Contacto = require('../models/contactos')

exports.getContactos = async (req,res) =>{
    try {
        
        let datos = await Contacto.findAll({
            order: [['id','asc']],
            raw: true
        })

        return res.status(200).json(datos)

    } catch (error) {
        return res.status(400).json({mensaje: error.mensaje})
    }
}

exports.getContacto = async (req,res) =>{

    const {id} = req.params;

    try {
        
        let contacto = await Contacto.findOne({
            raw: true,
            where:{
                'id' : id
            }
        })

        if(!contacto){
            res.status(400).json({mensaje: "No existe contacto"})
        }

        return res.status(200).json(contacto)

    } catch (error) {
        return res.status(400).json({mensaje: error.mensaje})
    }
}