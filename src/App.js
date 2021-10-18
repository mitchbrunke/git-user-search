import "./App.css";
import { useState, useEffect, useRef } from "react";
import Infobox from "./components/Infobox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

//search by username
//view info about user

function App() {
  //state for user
  const [userData, setUserData] = useState(null);
  //state for form input
  const [formInput, setFormInput] = useState("");
  //state to take input and set it as the userName
  const [formData, setFormData] = useState("");
  //state for light/dark mode
  const [darkMode, setDarkMode] = useState(false);
  //useRef to get form input
  const formRef = useRef();

  //username fetch prep
  const username = formData;

  useEffect(() => {
    //function to fetch data
    const fetchData = async () => {
      await fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((err) => console.log(err));
    };

    //check if formData exists - saves hits on the API
    if (formData) {
      fetchData();
    }

    console.log("useEffect ran");

    // cleanup
    return () => {
      setFormData("");
    };
  }, [formData, username]);

  return (
    <div className="App">
      <div className="top">
        <h2>devfinder</h2>
        <p onClick={(e) => setDarkMode(!darkMode)} id="modeToggle">
          <FontAwesomeIcon icon={faAdjust} />
          {!darkMode ? <p> light </p> : <p> dark </p>}
        </p>
      </div>

      <form
        onSubmit={(e) => {
          //prevent re-render
          e.preventDefault();
          //set the username to whatever is entered in the form
          setFormData(formInput);
        }}
      >
        <input
          type="text"
          placeholder="search GitHub username..."
          onChange={(e) => setFormInput(e.target.value)}
          ref={formRef}
        />
        <button>Search</button>
      </form>

      {/* check if form data exists and render */}

      {userData && <Infobox userData={userData} />}
    </div>
  );
}

export default App;
