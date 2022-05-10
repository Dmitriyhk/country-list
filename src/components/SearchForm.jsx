const SearchForm = ({ countryName, setCountryName }) => {
  return (
    <div className="searchForm">
      <input
        className="searchForm-input"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default SearchForm;
