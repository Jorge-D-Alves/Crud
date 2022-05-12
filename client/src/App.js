import React, {useState} from "react";
import './App.css';

function App() {

  const [values, setValues] = useState();
  console.log(values);
  const handleChangeValues = (value) => {
    setValues((pervValue) => ({
      ...pervValue,
      [value.target.name]: value.target.value,
    }));

  };

  const handleClickButton = () => {
    console.log(values);
  }

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

    </div>
  );
}

export default App;
