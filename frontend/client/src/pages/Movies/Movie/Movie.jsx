import React from 'react';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { AccessTimeOutlined, Folder } from "@material-ui/icons"

import './movie.scss'

const Movie = ({ movie }) => {

  const navigate = useNavigate();
  const openMovie = (e) => {
    // dispatch(getPost(post._id, navigate));

    navigate(`/movies/${movie._id}`);
  };

  return (
    <div className='card'>
      <div className='cardAction'>
        <div >
          <img className="image" onClick={openMovie} src={movie.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsairhVA5q080vP7Niigy3bMCnGZNdzNCN4w&usqp=CAU'} alt={movie.title}  />
        </div>
        <div className='overlay'>
          <span className='title' >{movie.title || 'Black Panther'}</span>
          <span className='time'><AccessTimeOutlined className='accTimeIcon'/>{moment(movie.createdAt).fromNow()}</span>
          <span className='cre'><bold>Creator Name:</bold> {movie.creatorFirstName }</span>
        </div>
      </div>
        
       

    </div>
  );
};

export default Movie;
