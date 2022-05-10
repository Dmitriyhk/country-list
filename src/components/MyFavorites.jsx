import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArrCountries, delCountry } from "../store/slices/favoritesSlice";

const MyFavorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("fav"));
    dispatch(addArrCountries({ arr }));
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favorites));
  }, [favorites]);

  const delFavorites = (index) => {
    dispatch(delCountry({ countryId: index }));
  };
  return (
    <div className="myFavorites">
      <h4>My Favorites:</h4>
      {favorites.map((el, index) => (
        <div className="myFavorites-country">
          <span className="myFavorites-country__text">
            {index + 1}. {el}
          </span>
          <span
            className="myFavorites-country__close"
            onClick={() => delFavorites(index)}
          >
            &times;
          </span>
        </div>
      ))}
    </div>
  );
};

export default MyFavorites;
