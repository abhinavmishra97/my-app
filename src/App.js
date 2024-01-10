import './App.css';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
import About from './components/about';

function App() {  
  return (
    <>
      <Navbar title="textyUtils" />
      <div className="container">
        {/* <TextForm heading="Enter the text to be analyzed"/> */}
      <about/>
      </div>
    </>
  );
}

export default App;
