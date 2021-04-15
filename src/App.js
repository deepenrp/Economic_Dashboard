
import './css/App.css';
import real_estate_image from './images/real_estate.jpg';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={real_estate_image} alt="Real Estate" width="1100px" height="350px" />
        <p>
          Economic Dashboard
        </p>
      </div>
    </div>
  );
}

export default App;
