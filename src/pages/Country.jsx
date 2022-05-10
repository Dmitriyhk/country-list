import { useState } from "react";
import MainContent from "../components/MainContent";
import MyFavorites from "../components/MyFavorites";
import SearchForm from "../components/SearchForm";

const Country = () => {
  const [countryName, setCountryName] = useState("");

  return (
    <div className="country">
      <SearchForm countryName={countryName} setCountryName={setCountryName} />
      {countryName && <MainContent countryName={countryName} />}
      <MyFavorites />
    </div>
  );
};

export default Country;
