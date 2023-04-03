import React from "react";
import './App.css';
import PopupWithForm from "./PopupWithForm";

function App() {

  const [errors, setErrors] = React.useState({});

  return (
    <div className="App">
      <PopupWithForm name={'formulario1'} errors={errors} setErrors={setErrors}>
        <label htmlFor="input1">Input1</label>
        <input type="text" id={'input1'} required name={'name'}/>
      </PopupWithForm>
        <PopupWithForm name={'formulario2'} errors={errors} setErrors={setErrors}>
            <label htmlFor="input1">Input1</label>
            <input type="text" id={'input1'} required name={'name'}/>
        </PopupWithForm>
    </div>
  );
}

export default App;
