
import  Routes  from './pages/Routes';
import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
        <Routes/>
        <ToastContainer/>
    </>
  );
}

export default App;
