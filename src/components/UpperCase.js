function UpperCase() {
  return (
    <button
      onClick={(event) => {
        const string = document.querySelector("#char").value;
        const stringUpperCase = string.toUpperCase();

        document.querySelector("#char").value = stringUpperCase;
      }}
    >
      Upper Case
    </button>
  );
}

export default UpperCase;
