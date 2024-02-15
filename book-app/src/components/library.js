import React from "react";
import { useState,useEffect } from "react";

function LibraryComponent(){
    const [library, setLibrarys] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3030/library')
        .then ((response)=>{
            return response.json()
        })
        .then((library)=> {
            setLibrarys(library)
        })
    },[])
}

export default LibraryComponent;