import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
   
    const onSubmit = (event) => {

        event.preventDefault();
        const inputValueTrim = inputValue.trim();
        if(inputValueTrim.length < 1) return;
        onNewCategory(inputValueTrim);
        //setCategories(categories=>[ inputValue,...categories])
        setInputValue('');
    }
    
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"     
                placeholder="Buscar Gift"
                value={inputValue}
                onChange={(event)=>onInputChange(event)} />
                
        </form>
    )
}
