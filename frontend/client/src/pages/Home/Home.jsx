import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Pagination from '../../components/pagination/Pagination';
import "./home.scss";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [ setCurrentId] = useState(0);

  const [tags] = useState([]);

  return (

    <div className='main-content'>
      <div className='adsAndMovie'>
        <div className='content'>
          <div className='movie'>
            {/*get all movies*/}
            <Movies setCurrentId={setCurrentId} />
          </div>

          {/*pagination without search and category*/}
          {(!searchQuery && !tags.length) && (
            <div className='pag'>
              <Pagination page={page} />
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default Home;