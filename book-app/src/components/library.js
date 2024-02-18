import React from "react";
import { useState, useEffect } from "react";
import BookComponent from "./book";

function LibraryComponent() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/books')
            .then((response) => {
                return response.json()
            })
            .then((books) => {
                setBooks(books)
            })
    }, [])

    return (

        <div>
            <div className="booklist">
                <h2>Book List</h2>

            </div>
            <div className="list">
                {


                    books.map((book, index) => {
                        return (
                            <BookComponent book={book} key={index}></BookComponent>
                        );
                    })
                }
            </div>
        </div >
    )
}

export default LibraryComponent;