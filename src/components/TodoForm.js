import React, {useState} from 'react';

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = () => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const {title, description} = formValues;

    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }
        setFormValues(changedFormValues);
    }

    return (
        <div>
            <h1>Nueva Tarea</h1>
            <form>
                <input
                    type='text'
                    placeholder='Titulo'
                    className='form-control'
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />

                <textarea 
                    placeholder='Descripción' 
                    className='form-control mt-2'
                    value={description}
                    name='description'
                    onChange={handleInputChange}
                />
                <button 
                    className='btn btn-primary btn-block mt-2'
                >
                    Agregar Tarea
                </button>
            </form>
        </div>
    );
}

export default TodoForm;