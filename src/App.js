import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
      <div className='Header'>
        <div className='Title'>Who's My Representative?</div>
      </div>
      <div className='Selector-container'>
        <div className='Select-container-rep'>
        <button className='Select-rep-btn'>Select One</button>
        </div>
        <div className='Select-container-state'>
        <button className='Select-state-btn'>Select State</button>
        </div>
        <button className='Submit-button'>SUBMIT</button>
      </div>
      <div className='List-container'>
        <div className='List-title-container'>
        <div className='List-title'>List /</div>
        <div className='Info-title'>Info</div>
        </div>
      <div className='Listings-container'>
        <div className='Listings-title'>Name
        </div>
      </div>
      </div>

     
      
      </div>
    </div>
  );
}

export default App;
