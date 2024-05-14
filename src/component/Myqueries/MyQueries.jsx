import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import AllMyQueries from './AllMyQueries';

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const [control, setcontrol] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    if (user?.email)
      fetch(
        `https://assignment-11-server-pink-eight.vercel.app/Query/${user?.email}`,
        {
          credentials: 'include',
        }
      )
        .then(res => res.json())
        .then(data => {
          // Sort items by timestamp in descending order
          // const sortedItems = data.sort(
          //   (a, b) => new Date(b.data.timestamp) - new Date(b.data.timestamp)
          // );
          setItems(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err); // Set error if fetch fails
          setLoading(false); // Set loading to false after fetch fails
        });
  }, [user?.email, control]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-pink-eight.vercel.app/delete/${id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your card has been deleted.', 'success');
              setcontrol(!control);
            }
          });
      }
    });
  };

  if (loading)
    return (
      <div className="flex justify-center mt-5">
        <div className="flex flex-col  gap-4 w-52">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    ); // Show loading message if data is being fetched
  if (error) return <div>Error: {error.message}</div>; // Show error message if fetch fails
  if (items.length === 0)
    return (
      <div className="flex justify-center mt-5 font-bold text-5xl">
        No queries found.
      </div>
    ); // Show message if no queries found

  return (
    <div>
      {/* Render filtered items */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 lg:p-20"
        // data-aos="fade-down-right"
      >
        {items.map(Queries => (
          <AllMyQueries
            key={Queries.id}
            Queries={Queries}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyQueries;
