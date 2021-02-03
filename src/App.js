import React from "react";
import dyslexia from "./dyslexia.jpg";
import dyslexie from "./dyslexique.mp4";

import "./App.css";

function App() {
  return (
    <div className="App-header">
      <div>
        <h1 className="title red">La dyslexie</h1>
        <br />
        <p className="Definition">
          Définition: D'une façon générale, la dyslexie est définie comme un
          trouble de l'identification des mots écrits. Cette difficulté de
          lecture provient d'une atteinte constitutionnelle touchant les
          mécanismes du cerveau, ses causes sont donc d'origine neurologique et
          génétique.
        </p>
        <img src="photo-dyslexie.jpg" alt="statistique" className="image" />
        <br />
        <img src={dyslexia} alt="dyslexie" className="image" />
      </div>
      <video width={640} height={360} controls>
        <source src={dyslexie} type="video/mp4" className="image" />
      </video>
    </div>
  );
}

export default App;
