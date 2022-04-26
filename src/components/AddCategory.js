import { React }    from "react";
import { useState } from "react";
import PropTypes    from 'prop-types';

const AddCategory = ({ setCategories }) =>{

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){
            setCategories( cats => [...cats, inputValue]);///Tambien podria enviar las categorias como props
            setinputValue('');
        }
    }

    return(
           <form onSubmit={ handleSubmit }>
           <p>Ingrese la nueva categoria: 
               <input
                    type="text" 
                    value={ inputValue }
                    onChange={ handleInputChange }
                    placeholder="Nombre Categoria"
                />
            </p>
            </form>
           );

}



AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
}

export default AddCategory;