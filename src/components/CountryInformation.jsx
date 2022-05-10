import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../store/slices/countrySlice";
import { addCountry, delCountry } from "../store/slices/favoritesSlice";

const CountryInformation = ({ error }) => {
  const countryData = useSelector((state) => state.country.country);
  const favorites = useSelector((state) => state.favorites.favorites);

  const [imgPath, setImgPath] = useState("star.svg");

  useEffect(() => {
    countryData &&
      (favorites.indexOf(countryData.name.official) === -1
        ? setImgPath("star.svg")
        : setImgPath("starFill.svg"));
  }, [countryData, favorites]);

  const dispatch = useDispatch();

  const addOrRemoveFavorites = () => {
    if (favorites.indexOf(countryData.name.official) === -1) {
      dispatch(addCountry({ favorites: countryData.name.official }));
    } else {
      dispatch(
        delCountry({
          countryId: favorites.indexOf(countryData.name.official),
        })
      );
    }
  };

  const getCountry = async (code) => {
    const response = await axios.get(`
    https://restcountries.com/v3.1/alpha/${code}`);

    dispatch(setCountry({ country: response.data[0] }));
  };

  return (
    countryData &&
    !error && (
      <div className="countryInformation">
        <div className="countryInformation-header">
          <h1 className="countryInformation-header__name">
            {countryData?.name?.official}
          </h1>
          <img
            className="countryInformation-header__favorites"
            onClick={addOrRemoveFavorites}
            src={imgPath}
            alt="star"
          />
        </div>
        <div className="countryInformation-content">
          <img
            className="countryInformation-content__flag"
            src={countryData?.flags?.png}
            alt="flag"
          />
          <div className="countryInformation-content__right">
            <div>
              <span>Code: </span>
              <span className="countryInformation-code">
                {countryData.cca3}
              </span>
            </div>
            <div className="countryInformation-languages">
              <span>Languages: </span>
              {Object.values(countryData?.languages).map((lang, index) => (
                <>
                  <span>{lang}</span>
                  {Object.values(countryData?.languages).length !==
                    index + 1 && <span>, </span>}
                </>
              ))}
            </div>
            {countryData?.borders?.length > 0 && (
              <div className="countryInformation-borders">
                <span>Borders: </span>
                {countryData?.borders &&
                  countryData.borders.map((country, index) => (
                    <>
                      <span
                        className="countryInformation-borders__country"
                        onClick={() => getCountry(country)}
                      >
                        {country}
                      </span>
                      {countryData.borders.length !== index + 1 && (
                        <span>, </span>
                      )}
                    </>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CountryInformation;
