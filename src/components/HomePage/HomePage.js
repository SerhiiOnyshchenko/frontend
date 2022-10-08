import { getHeros } from '../../services/hero-api';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import './HomePage.css';
import ModalPageEdite from '../ModalPageEdite/ModalPageEdite';
import Pagination from 'rc-pagination';
import Appbar from './../AppBar/AppBar';

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    featchHeros(countPage);
  }, [countPage]);

  const featchHeros = async page => {
    try {
      const date = await getHeros(page);
      setTotalPage(date.total);
      setMoviesList(date.heros);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Appbar featchList={setCountPage} />
      <div className="box">
        <div>
          <MoviesGallery moviesList={moviesList} onOpen={setShowModal} />
        </div>
        {loading && <Loader />}
        {showModal && (
          <ModalPageEdite
            id={showModal}
            onClose={() => {
              setShowModal(false);
              setCountPage(1);
            }}
          />
        )}

        <Pagination
          className="pagination"
          total={totalPage}
          pageSize={5}
          current={countPage}
          onChange={page => setCountPage(page)}
          prevIcon={'Prev'}
          nextIcon={'Next'}
        />
      </div>
    </>
  );
}
