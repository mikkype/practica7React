import React from "react";
import { useState,useEffect } from "react";

function LibraryComponent(){

    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch('http://localhost:3030/library')
        .then ((response)=>{
            return response.json()
        })
        .then((books)=> {
            setBooks(books)
        })
    },[])

    return (
        <>
        <h2>Book List</h2>
        </>
    )
}

export default LibraryComponent;