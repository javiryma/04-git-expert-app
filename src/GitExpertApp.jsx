import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GitExpertApp = () => {
    
    const [categories,setCategories]=useState(['One Punch']) 
    const onNewCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
    }

    return (
        <>
            {/* Titulo */}
            <h1>GitExpertApp</h1>


            {/* Imput */}            
            <AddCategory 
                onNewCategory={event=> onNewCategory(event)}
            />
            
               
            {
                categories.map((category) => (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    
                ))
            }        

        </>
    )
}
