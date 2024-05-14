import React, { useEffect, useState } from 'react';
import ALLQuerie from '../component/Allqueries/ALLQuerie';
import { Helmet } from 'react-helmet-async';

const AllQueries = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [gridColumns, setGridColumns] = useState(3); // Initial grid column count
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    setLoading(true); // Set loading to true when starting to fetch data
    fetch(
      `https://assignment-11-server-pink-eight.vercel.app/AddQuery?search=${search}`
    )
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, [search]);

  const handleSearch = e => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  const setGridColumnsCount = columns => {
    setGridColumns(columns);
  };

  return (
    <div className="mb-20 lg:p-20" data-aos="fade-down-right">
      <Helmet>
        <title>QuerySay | Queries</title>
      </Helmet>
      <div className="flex lg:flex-row flex-col mb-10">
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden w-auto border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter ProductName"
              aria-label="Enter ProductName"
            />
            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div className=" ml-5 mr-5 flex flex-col mt-5 lg:mt-0 lg:flex-row  gap-5">
          <button
            onClick={() => setGridColumnsCount(1)}
            className="btn btn-active btn-primary"
          >
            1 Column Grid
          </button>
          <button
            onClick={() => setGridColumnsCount(3)}
            className="btn btn-active btn-primary"
          >
            3 Column Grid
          </button>
        </div>
      </div>

      {loading ? ( // Render loader if loading is true
        <div className="flex justify-center mt-5">
          <div className="flex flex-col  gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      ) : (
        <div className={`grid grid-cols-1 lg:grid-cols-${gridColumns} gap-10`}>
          {items.map(Querie => (
            <ALLQuerie key={Querie.id} Querie={Querie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllQueries;
