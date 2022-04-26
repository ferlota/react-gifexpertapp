import { React }    from "react";
import { useState } from "react";
import AddCategory  from "./components/AddCategory";
import GifGrid      from "./components/GifGrid";

const GifExpertApp = () => {

    const[ categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <button>Agregar Categoria</button>

        <ol>
            {
                categories.map( category  => (
                   <GifGrid
                        key={ category } 
                        category={ category }
                    />
                ))
            }
        </ol>
        </>


    );
}

export default GifExpertApp;