import React, {useState, useEffect} from "react";
import './App.css';
import Axios from "axios";
import Card from "./componets/cards";

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleChangeValues = (value) => {
    setValues((pervValue) => ({
      ...pervValue,
      [value.target.name]: value.target.value,
    }));

  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", { // enviando dados
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(()=>{
    Axios.get("http://localhost:3001/getCards")
    .then((response)=>{
      console.log(response)
      setListGames(response.data);
    })
  }, [])

  return (
    <div className="App--container">
      <div className='register--container'>
        <h1 className="register--title">Scrim Shop</h1>
        <input 
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input 
          type="text"
          name="cost"
          placeholder="preco"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input 
          type="text"
          name="category"
          placeholder="Categoria"
          className="register--input"
          onChange={handleChangeValues}
        />
        <button className="register--button" 
        onClick={() => handleClickButton()}>
          Cadastrar
        </button>
      </div>
      { typeof listGames !== "undefined" &&
      listGames.map((value) => {
        return <Card key={value.id} />
      })}

    </div>
  );
}

export default App;
