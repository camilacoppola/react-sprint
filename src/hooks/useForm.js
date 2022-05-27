import React, { useState } from 'react'

const useForm = (initialValues = {}) => {
    const [form, setForm] = useState(initialValues)
    
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const limpiarForm = () => {
        setForm(initialValues)
    }

    return [form, handleChangeForm,limpiarForm]
}

export default useForm