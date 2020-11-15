import './App.css';
import House from './components/House';

function App() {
    return (
        <div className="App">
            <House house="House 1" cat="Tom" dog="Spike"></House>
            <House house="House 2" cat="Tom" dog="Spike"></House>
        </div>
    );
}

export default App;
