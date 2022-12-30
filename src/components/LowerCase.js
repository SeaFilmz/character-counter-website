function LowerCase() {
  return (
    <button
      className="lowerCaseButton"
      onClick={(event) => {
        const string = document.querySelector("#char").value;
        const stringLowerCase = string.toLowerCase();

        document.querySelector("#char").value = stringLowerCase;
      }}
    >
      Lower Case
    </button>
  );
}

export default LowerCase;
