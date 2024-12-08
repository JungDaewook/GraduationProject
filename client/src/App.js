import logo from './logo.svg';
import './App.css';
import EntireContainer from "./view/EntireContainer";
import {RemoveScroll} from "react-remove-scroll";

function App() {
    return (
        <div className="App">
            {/*<RemoveScroll>*/}
            {/*</RemoveScroll>*/}
            <EntireContainer/>
        </div>
    );
}

export default App;
