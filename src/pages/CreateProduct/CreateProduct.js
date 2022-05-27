import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../../components/Productos/InformacionProducto/ProductForm'
import useForm from '../../hooks/useForm'
import useIncrementOrDecrement from '../../hooks/useIncrementOrDecrement'
import actualizarProducto from '../../utils/actualizarProducto'
import guardarProducto from '../../utils/guardarProducto'

const CreateProduct = () => {
    const navigate = useNavigate()
    const handleSubmit = async(e,form) => {
        e.preventDefault()
        let {nombre,imagen,valor,stock,opcionTienda} = form
        console.log("hola")
        //limpiarForm()
        if(nombre === '' || imagen === '' || valor === '' || stock === '' || opcionTienda === ''){
            //setError({estado:true,msg:'No se pueden dejar campos vacios'})
            return
        }
        console.log("hola")
        if(Number(valor) <= 0 || Number(stock) <= 0){
            //setError({estado:true,msg:"No se pueden negativos, ni stock 0"})
            return
        }
        console.log("hola")
        await guardarProducto({
            ...form,
            imagenes:[imagen],
            stock
        })
        //setError({estado:false,msg:''})
        navigate('/')
        //console.log(imagen, ' ', nombre, ' ',valor, ' ', stock, ' ', descripcion, ' ', opcionTienda)
    }


    const [form,handleChangeForm,limpiarForm] = useForm({
        nombre:'',
        valor: 0,
        descripcion: '',
        opcionTienda: '',
        imagen: ''
    })

    let {nombre,valor, descripcion, opcionTienda, imagen} = form
    const [stock,incrementar,decrementar] = useIncrementOrDecrement(0)



    return (
        <>
            <ProductForm handleSubmit={handleSubmit} form={form} handleChangeForm={handleChangeForm}/>
        </>
      )
}

export default CreateProduct