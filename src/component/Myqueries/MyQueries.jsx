import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import AllMyQueries from './AllMyQueries';

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const [control, setcontrol] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/Query/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // Sort items by timestamp in descending order
        // const sortedItems = data.sort(
        //   (a, b) => new Date(b.data.timestamp) - new Date(b.data.timestamp)
        // );
        setItems(data);
      });
  }, [user, control]);

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
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE',
        })
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
  return (
    <div>
      {/* Render filtered items */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 lg:p-20"
        data-aos="fade-down-right"
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
