const GloabalFilter = ({ filter, setFilter }) => {
    return (
      <div>
        <span className="text-gray-500">
          Search:{""}
          <input
            type="text"
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-backgroundBlack border border-borderColor mx-10 rounded-md text-gray-500 "
          />
        </span>
      </div>
    );
  };
  
  export default GloabalFilter;
  