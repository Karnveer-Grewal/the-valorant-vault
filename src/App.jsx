import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
      </div>
    </BrowserRouter>
  );
};

export default App;
