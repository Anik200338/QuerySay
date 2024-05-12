import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import MyRecommendedCard from '../component/MyRecommendedCard/MyRecommendedCard';

const MyRecommmendation = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const [control, setcontrol] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myRecommended/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItems(data);
      });
  }, [user, control]);

  const handleDelete = (id, id2) => {
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
        fetch(`http://localhost:5000/myDelete?id=${id}&id2=${id2}`, {
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
          <MyRecommendedCard
            key={Queries.id}
            Queries={Queries}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecommmendation;
