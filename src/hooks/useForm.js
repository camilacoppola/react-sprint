import React, { useEffect, useState } from 'react'

const useForm = (initialValues) => {
    
    
    const [form, setForm] = useState({})



    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const cambiarCampos = (producto) => {
        console.log("Hola cambio campos", producto, 'form:     ',form)
        setForm({...producto})
        
    }

    const limpiarForm = () => {
        setForm(initialValues)
    }

    return [form, handleChangeForm,limpiarForm,cambiarCampos]
}

export default useForm