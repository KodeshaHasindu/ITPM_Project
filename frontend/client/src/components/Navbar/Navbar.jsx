import React from 'react';
import { ArrowDropDown, Menu } from "@material-ui/icons";
import { useState } from 'react';
import "./navBar.scss";
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png'; 
import { useDispatch } from 'react-redux';
import { getMoviesBySearch } from '../../actions/movies';
import style from "./Navbar.module.css";


const Navbar = () => {

  
    const dispatch = useDispatch();
  
    const [search, setSearch] = useState('');
    const [tags] = useState([]);
    const navigate  = useNavigate();
  
    const searchMovie = () => {
      if (search.trim() || tags) {
        dispatch(getMoviesBySearch({ search, tags: tags.join(',') }));
        navigate(`/movies/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        window.scrollTo(0, 0);
      } else {
        navigate('/');
      }
    };
  
    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        searchMovie();
      }
    };

    const [open, setOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);


    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}> 
            <div className="container">
            <Menu className='iconMenu' onClick={() => setOpen(!open)}/>
                <div className="left">
                    <Link to="/" >
                        <img component={Link} to="/" src={logo} alt="Logo" />
                        </Link>
                    <Link to="/movies" className='link'>
                    <span>Home</span>
                    </Link>
                    <Link to="/movies"  className='link'>
                    <span>Education</span>
                    </Link>
                    <Link to="/"  className='link'>
                    <span>Financial Support</span>
                    </Link>
                    <Link to="/aboutus"  className='link'>
                    <span>About</span>
                    </Link>
                   
                </div>
                <div className="right">
                    <div className='search'>
                        <span >
                            <input onKeyDown={handleKeyPress} className='serInput'  
                            placeholder="Search" name="search" 
                            value={search} onChange={(e) => setSearch(e.target.value)} />
                        </span> 
                        <span >  
                            <button onClick={searchMovie} className='searchButton'>Search</button>
                        </span>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt=""></img>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>  
                </div>
            </div>
        <ul  className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <div className='search'>
                        <span >
                            <input onKeyDown={handleKeyPress} className='serInput'  
                            placeholder="Search" name="search" 
                            value={search} onChange={(e) => setSearch(e.target.value)} />
                        </span> 
                        <span >  
                            <button onClick={searchMovie} className='searchButton' >Search</button>
                        </span>
                    </div>
        <Link to="/series" className='link'>
            
                    <span>රුපවාහිනී කතාමාලා</span>
                    </Link>
                    <Link to="/movies"  className='link'>
                    <span>චිත්‍රපට</span>
                    </Link>
                    <div className="category">
                        <span className='cate'>වර්ගීකරණය<ArrowDropDown className="icon" /></span>
                        <div className="options">
                        <Link to="/tags/Romance/"  className='link'>
                            <span>Romance</span>
                        </Link>
                        <Link to="/tags/Action/"  className='link'>
                            <span>Action</span>
                        </Link>
                        <Link to="/tags/Sci-Fi/"  className='link'>
                            <span>Sci-Fi</span>
                        </Link>
                        <Link to="/tags/Adventure/"  className='link'>
                            <span>Adventure</span>
                        </Link>
                        </div>
                    </div>
                    <Link to="/aboutus"  className='link'>
                    <span>අපි ගැන</span>
                    </Link>
                    
      </ul>
        </div>
    );
};

export default Navbar
