// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return(
    <div>
        <BrowserRouter>
          <Header />
            <Route exact path="/" component={ Login }/>
            <Route path="/register" component={ Register }/>
            <Route path="/home" component={ Home }/>
          {/* <Footer /> */}
        </BrowserRouter>
    </div>
  )
}

// class App extends React.Component {
//   render(){
//     return(
//       <div>
//         <Header />
//         <BrowserRouter>
//           <Header />
//             <Switch>
//               <Route exact path="/login" component={ Login }/>
//             </Switch>
//           <Footer />
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

export default App;
