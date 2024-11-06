import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  // //마운트 될 때 한번만 ..
  // useEffect(() => {
  //   const storedCountries = localStorage.getItem("countries");
  //   if (storedCountries) {
  //     setCountries(JSON.parse(storedCountries));
  //   }
  // }, []);

  // //변경된거 저장
  // useEffect(() => {
  //   localStorage.setItem("countries", JSON.stringify(countries));
  // }, [countries]);

  return (
    <div>
      <MedalForm countries={countries} setCountries={setCountries} />
      <MedalList countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
