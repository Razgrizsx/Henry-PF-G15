import React from "react";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import Videogamescards from "../VideogameCards/VideogamesCards";
import './Main.css'
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../../redux/actions/games";
import { Link } from "react-router-dom";

import { savePage } from "../../redux/actions/games/index"


export default function Main() {

  const pages1 = useSelector(((state) => state.page))

  const [buscar, setBuscar] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(12);
  const [order, setOrder] = useState('asc')
  const [order2, setOrder2] = useState('asc')
  const [genre, setGenre] = useState('')






  const dispatch = useDispatch();
  const games = useSelector(state => state.games.allGames);

  

  useEffect(() => {
    if (games.length < 1) {
      dispatch(getAllGames());
    }
  }, [dispatch, games]);


const available = games.filter(g => g.isAvailable === true )

  let handleSelect = (e) => {
    setGenre(e.target.value)
    setCurrentPage(1)
  }

  const searcher = (e) => {
    setBuscar(e.target.value)
    setCurrentPage(1)
  }

  function handlerPrev() {
    setCurrentPage(currentPage - 1);
  }

  function handlerNext() {
    setCurrentPage(currentPage + 1);
  }

  let results = []

  if (!buscar) {
    results = available
  } else {
    results = available.filter((dato) =>
      dato.name.toLowerCase().includes(buscar.toLowerCase())
    )
  }

console.log(games)

  if (genre) {
    results.forEach((game) => {console.log(game.genres)})
   /*  results = results.filter((dato) =>
      dato.genres.toLowerCase().includes(genre.toLowerCase())
    ) */
  }

  const sorting = (e) => {
    e.preventDefault()
    if (order === 'asc') {
      results = results.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
      setOrder('dsc')
    }
    if (order === 'dsc') {
      results = results.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
      setOrder('asc')
    }
  }

  const sorting2 = (e) => {
    e.preventDefault()
    if (order2 === 'asc') {
      results = results.sort((a, b) => a.rating > b.rating ? 1 : -1);
      setOrder2('dsc')
    }
    if (order2 === 'dsc') {
      results = results.sort((a, b) => a.rating < b.rating ? 1 : -1);

      setOrder2('asc')
    }
  }

  const lastPostIndex = currentPage * postperPage;
  const firstPostIndex = lastPostIndex - postperPage;
  const currentPost = results.slice(firstPostIndex, lastPostIndex)


  //* Funcion para poder guardar la pagina en detalles

  function handlePage(e) {
    dispatch(savePage(currentPage))
  }








  return games ? (<div>
    <br />
    <div className="divcontainer">
      <label className="texto" htmlFor="title">Game Title</label>
      {<input placeholder="Buscar" type="text" value={buscar} onChange={searcher}></input>}
    </div>
    <br />
    <div className="divcontainer">
      {<div className="div">
        <button className="button" type='button' onClick={sorting}>Order by Name</button>
      </div>}
      <div className="div">
        <button className="button" type='button' onClick={sorting2}>Order by Rating</button>
      </div>
    </div>
    <div className="divcontainer">
      <label className="texto">Genres</label>
      <select name='filtro' onChange={handleSelect}>
        <option></option>
        <option>Action</option>
        <option>Indie</option>
        <option>Adventure</option>
        <option>RPG</option>
        <option>Strategy</option>
        <option>Shooter</option>
        <option>Casual</option>
        <option>Simulation</option>
        <option>Puzzle</option>
        <option>Arcade</option>
        <option>Platformer</option>
        <option>Racing</option>
        <option>Massively Multiplayer</option>
        <option>Sports</option>
        <option>Fighting</option>
        <option>Family</option>
        <option>Board Games</option>
        <option>Educational</option>
        <option>Card</option>
      </select>
    </div>
    <br />
    <div>
      
        <Videogamescards gamedata={currentPost} />
      
      <Pagination
        totalPosts={results.length} postPerPage={postperPage} setCurrentPage={setCurrentPage} currentPage={currentPage} handlerPrev={handlerPrev} handlerNext={handlerNext} />
    </div>

  </div>
  ) : <h1>Loading...</h1>
}