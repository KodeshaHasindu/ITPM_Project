import React, { useEffect } from 'react';
import { AccessTimeOutlined } from '@material-ui/icons/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, Link } from 'react-router-dom';


import { getMovie, getMoviesBySearch } from '../../actions/movies';
import  './movieDetails.scss';
import { saveAs } from "file-saver";


const Movie = () => {
  const saveFile = () => {
    saveAs(
      `${movie.subFile}`,
      "example.pdf"
    );
  };

  const { movie } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movie) {
      dispatch(getMoviesBySearch({ search: 'none', tags: movie?.tags.join(',') }));
    }
  }, [dispatch, movie]);

  if (!movie) return null;

  return (
    <div className='main-content1'>
      <div className='content'>
      <div className='post'>
        <div className='imageSection'>
          <span className='title1'>{movie.title}</span>
          <span className="postTime">
           <AccessTimeOutlined className="access"/>
           {moment(movie.createdAt).fromNow()}
          </span>
          <video controls style={{ width: '860px', height: '490px' }}>
               <source className='media' src={movie.trailer || 'http://beingcovers.com/media/facebook-cover/Pirates-of-The-Caribbean-Movie-facebook-covers-3681.jpg'} alt={movie.title} />
        </video>
        </div>
        <div className='section1'>
          <div className='moviedetails'>
            
            <span className='duration'><label>Video Uploder Name: </label>{movie.creatorFirstName}</span>
            <span className='email'><label>Email: </label>{movie.Email}</span>
     
          </div>
          <span className='desc1'>{movie.desc}</span>
          
        </div>
      </div>
      
      </div>
     
      
    </div>
  );
};

export default Movie;
