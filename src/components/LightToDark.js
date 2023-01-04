function LightToDark({ lightToDarkThemeChanger, setLightToDarkThemeChanger }) {
  return (
    <button
      className="themeButton"
      onClick={() => {
        const newTheme = lightToDarkThemeChanger === "" ? "dark" : "";

        setLightToDarkThemeChanger(newTheme);

        //console.log(document.querySelector("#char").style.backgroundColor);
        if (
          document.querySelector("#char").style.backgroundColor === "" ||
          document.querySelector("#char").style.backgroundColor === "white"
        ) {
          document.querySelector("#char").style.color = "#61dafb";
          document.querySelector("#char").style.backgroundColor = "#282c34";
          document.querySelector("main").style.backgroundColor = "black";
          document.querySelector("body").style.backgroundColor = "black";
          document.querySelector(".charCounter").style.color = "white";
        } else if (
          document.querySelector("#char").style.backgroundColor ===
          "rgb(40, 44, 52)"
        ) {
          document.querySelector("#char").style.color = "black";
          document.querySelector("#char").style.backgroundColor = "white";
          document.querySelector("main").style.backgroundColor = "#f0f0f0";
          document.querySelector("body").style.backgroundColor = "#f0f0f0";
          document.querySelector(".charCounter").style.color = "black";
        }
      }}
    >
      {lightToDarkThemeChanger === "" ? "Light" : "Dark"} Theme
    </button>
  );
}

export default LightToDark;
