import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetCountresByNameQuery } from "../store/slices/countryApiSlices";
import { removeCountry, setCountry } from "../store/slices/countrySlice";
import CountryInformation from "./CountryInformation";
import SearchResults from "./SearchResults";

const MainContent = ({ countryName }) => {
  const { data, error, isLoading } = useGetCountresByNameQuery(countryName);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.length === 1) {
      dispatch(setCountry({ country: data[0] }));
    } else {
      dispatch(removeCountry());
    }
  }, [data]);
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <div className="mainContent">
        <CountryInformation error={error} />
        <SearchResults isLoading={isLoading} data={data} error={error} />
      </div>
    </>
  );
};

export default MainContent;
