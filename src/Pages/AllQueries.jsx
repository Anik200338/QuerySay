import React, { useEffect, useState } from 'react';
import ALLQuerie from '../component/Allqueries/ALLQuerie';

const AllQueries = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [layout, setLayout] = useState('grid'); // Initial layout state

  useEffect(() => {
    fetch(`http://localhost:5000/AddQuery?search=${search}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItems(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [search]);

  const handleSearch = e => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  const toggleLayout = layoutType => {
    setLayout(layoutType);
  };

  return (
    <div className="mb-20 lg:p-20" data-aos="fade-down-right">
      <form onSubmit={handleSearch}>
        <div className="flex p-1 overflow-hidden border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
          <button
            onClick={() => toggleLayout('grid')}
            className="px-4 py-2 ml-4 bg-gray-700 text-gray-100 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          >
            Grid
          </button>
          <button
            onClick={() => toggleLayout('list')}
            className="px-4 py-2 ml-2 bg-gray-700 text-gray-100 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          >
            List
          </button>
        </div>
      </form>

      <div
        className={
          layout === 'grid'
            ? 'grid grid-cols-1 lg:grid-cols-3 gap-10'
            : 'gap-10'
        }
      >
        {items.map(Querie => (
          <ALLQuerie key={Querie.id} Querie={Querie} />
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
