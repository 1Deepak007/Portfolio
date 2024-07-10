import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { useEffect } from 'react';
import Loader from './components/Loader';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData, ShowLoading, HideLoading } from './redux/rootSlice';

function App() {
  const { loading } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    dispatch(ShowLoading());
    try {
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      console.log('In App.js =========================>',response);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
