import React from 'react';
import { Link } from 'react-router-dom';

const ForMeCard = ({ Queries, handleDelete, index }) => {
  const {
    RecommendationTitle,
    RecommendedproductName,
    Name,
    _id,
    id,
    currentDateAndTime,
    User,
  } = Queries;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <th>{index + 1}</th>
            </div>
            <div>
              <div className="font-bold">{RecommendationTitle}</div>
            </div>
          </div>
        </td>
        <td>{RecommendedproductName}</td>
        <td>{currentDateAndTime}</td>
        <td>{User.Name}</td>
        <th>
          <div className="card-actions justify-between">
            <Link to={`/craft/${id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
        </th>
      </tr>
    </tbody>
  );
};

export default ForMeCard;
