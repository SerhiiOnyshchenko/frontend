import { getHeros } from '../../services/hero-api';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import Scrollup from '../../components/Scrollup/Scrollup';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import s from './HomePage.module.css';
import ModalPageEdite from '../ModalPageEdite/ModalPageEdite';
import Pagination from 'rc-pagination';

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    getHeros(countPage)
      .then(date => {
        setTotalPage(date.total);
        setMoviesList(date.heros);
        setLoading(false);
      })
      .catch(setLoading(false));
  }, [countPage, showModal]);

  return (
    <div>
      <MoviesGallery moviesList={moviesList} onOpen={setShowModal} />
      {loading && <Loader />}
      {showModal && (
        <ModalPageEdite id={showModal} onClose={() => setShowModal(false)} />
      )}
      <Pagination
        className={s.pagination}
        total={totalPage}
        pageSize={5}
        current={countPage}
        onChange={setCountPage}
        prevIcon={'Prev'}
        nextIcon={'Next'}
      />
      <Scrollup />
    </div>
  );
}
