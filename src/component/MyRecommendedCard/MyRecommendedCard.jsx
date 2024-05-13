import React from 'react';
import { Link } from 'react-router-dom';

const MyRecommendedCard = ({ Queries, handleDelete, index }) => {
  const {
    RecommendationTitle,
    RecommendedproductName,
    Name,
    _id,
    id,
    currentDateAndTime,
    queryTitle,
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
        <td>{Name}</td>
        <th>
          <button
            onClick={() => handleDelete(_id, id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default MyRecommendedCard;
