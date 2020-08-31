import React from "react";
import "./App.css";
import Nav from "./components/Nav/nav";
import Home from "./pages/Home/index";
import Menu from "./pages/Menu/index";
import MenuItem from "./pages/Menu-item";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import LogIn from "./components/Log-in/Login";
import { SucessMessage } from "./notificationConfig";

function App() {
  //   const scroll = scrollAppear => {
  //     let aboutText = document.querySelectorAll('.about-text');
  //     aboutText.forEach(function(text){

  //     let introPosition = text.getBoundingClientRect().top;
  //     let screenPosition = window.innerHeight/1.3;

  //     if(introPosition < screenPosition){
  //       text.classList.add("about-appear");
  //   }
  //     })

  // }
  // window.addEventListener('scroll', scroll);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/menu/:name/:itemId" exact component={MenuItem} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
