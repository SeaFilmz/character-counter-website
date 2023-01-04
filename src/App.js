import "./App.css";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [lightToDarkThemeChanger, setLightToDarkThemeChanger] = useState("");

  return (
    <body className="App">
      <header className="App-header">
        <h1>Characterz</h1>
        <p className="slogan">Learn about the text you write</p>
      </header>
      <Main
        lightToDarkThemeChanger={lightToDarkThemeChanger}
        setLightToDarkThemeChanger={setLightToDarkThemeChanger}
      />
    </body>
  );
}

export default App;
