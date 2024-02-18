import React from "react";
import Button from "./button";

function BookComponent({ book }) {

  /*const books = [
      {
          title: "El Principito",
          author: "Antoine de Saint-Exupéry",
          genre: "Fábula",
          year: 1943
        },
        {
          title: "Cien años de soledad",
          author: "Gabriel García Márquez",
          genre: "Realismo mágico",
          year: 1967
        },
        {
          title: "Harry Potter y la piedra filosofal",
          author: "J.K. Rowling",
          genre: "Fantasía",
          year: 1997
        },
        {
          title: "1984",
          author: "George Orwell",
          genre: "Distopía",
          year: 1949
        },
        {
          title: "Orgullo y prejuicio",
          author: "Jane Austen",
          genre: "Romance",
          year: 1813
        },
        {
          title: "El señor de los anillos",
          author: "J.R.R. Tolkien",
          genre: "Fantasía",
          year: 1954
        }
  ];*/

  return (
    <div>
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.year}</p>
      {book.available ? (
        <Button name="Reservar" message="Se ha reservado un libro"></Button>
      ) : (
        <Button name="Avisar" message="alerta de aviso"></Button>
      )}
      </div>
      )
    }

export default BookComponent;