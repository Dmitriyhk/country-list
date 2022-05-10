import { useDispatch } from "react-redux";
import { setCountry } from "../store/slices/countrySlice";

const SearchResults = ({ data, error, isLoading }) => {
  const dispatch = useDispatch();

  return (
    !isLoading && (
      <div className="searchResults">
        {error ? (
          <span>No data</span>
        ) : (
          <div>
            {data.map((country, index) => (
              <div key={index} className="searchResults-name">
                <span className="searchResults-name__text">
                  {country?.name?.official}
                </span>
                <img
                  onClick={() => {
                    dispatch(setCountry({ country }));
                  }}
                  className="searchResults-name__favorites"
                  src="go.svg"
                  alt="go"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default SearchResults;
