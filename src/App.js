import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog'
import Home from './components/Home'
import Category from './components/Category'
import Tag from './components/Tag'
import CategoryFilter from './components/CategoryFilter'
import Search from './components/Search'
import TagFilter from './components/TagFilter'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import configData from "./config.json";
import axios from "axios";

function App() {

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }


  function handleSubscribe(event){
    event.preventDefault();

 
   let email =  event.target.email.value;
   if(isValidEmail(email)){
    axios.post(configData.SERVER_URL+"subscribe/", {
      email: email
    })
    .then(function (serverResponse) {
      alert(serverResponse.data.response);
      event.target.reset();
    })
    .catch(function (error) {
      console.log(error);
    });


   }
   else{
    alert('Enter a valid email id..!');
   }




    }


  return (
    <BrowserRouter>

    <div className="site-wrap">
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>


      <div className="header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 d-flex">
            <a href="/" className="site-logo">
              Tech Vlog
            </a>

            <a href="#" className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                className="icon-menu h3"></span></a>

          </div>
          <div className="col-12 col-lg-6 ml-auto d-flex">
            <div className="ml-md-auto top-social d-none d-lg-inline-block">
              <a href="https://www.facebook.com/techvlogyt" className="d-inline-block p-3"><span className="icon-facebook"></span></a>
                <a href="https://twitter.com/techvlogyt" className="d-inline-block p-3"><span className="icon-twitter"></span></a>
                <a href="http://instagram.com/techvlogyt" className="d-inline-block p-3"><span className="icon-instagram"></span></a>
            </div>
            <form action="/react-blog/search/" className="search-form d-inline-block" method="GET">

              <div className="d-flex">
                <input type="text" className="form-control"  name="title" placeholder="Search..."/>
                <button type="submit" className="btn btn-secondary" ><span className="icon-search"></span></button>
              </div>
            </form>

            
          </div>
          <div className="col-6 d-block d-lg-none text-right">
            
          </div>
        </div>
      </div>
      


      
      <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">

      <div className="container">
        <div className="d-flex align-items-center">
          
          <div className="mr-auto">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li className="active">
                
                  <Link to={'/react-blog/'} className="nav-link text-left">Home</Link>
                </li>
                <li>                 
                  <Link to={'/react-blog/category/'} className="nav-link text-left">Categories</Link>
                </li>
                <li>
                  <Link to={'/react-blog/tag/'} className="nav-link text-left">Tag</Link>
                </li>
               
              </ul>                                                                                                                                                                                                                                                                                         
            </nav>

          </div>
         
        </div>
      </div>

    </div>
    
    </div>

    <div className="site-section">
      <div className="container">
             
          <Routes>       
            <Route path="/react-blog/" element={<Home />} exact />
            <Route path="/react-blog/blog/:blogSlug" element={<Blog />}  />       
            <Route path="/react-blog/category/" element={<Category />}  />  
            <Route path="/react-blog/category/:categorySlug" element={<CategoryFilter />}  /> 
            <Route path="/react-blog/tag/" element={<Tag />}  /> 
            <Route path="/react-blog/tag/:tagSlug" element={<TagFilter />}  />
            <Route path="/react-blog/search/" element={<Search />}  />
            
          </Routes>
      
      </div>
    </div>
       



      <div className="site-section subscribe bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto mt-2">
              <h2>Newsletter Subscribe</h2>
              <p>Subscribe to our newsletter for the most up-to-date Social Media and Android tips and tricks.</p>

              <div className="d-flex">
                <form action="#" className="container align-items-center" id="newsLetterForm" onSubmit={handleSubscribe}>
                  <div className="row">
                    <div className="col-xs-8">
                      <input type="email" className="form-control email" name="email" required placeholder="Enter your email"/>
                    </div>
                    <div className="col-xs-2 ml-2 mt-2">
                      <button className="btn btn-secondary" id="newsLetterSubmit" aria-label="submit" type="submit"><span
                          className="icon-paper-plane"></span></button>
                    </div>


                  </div>


                </form>

              </div>

            </div>
            <div className="col-lg-6 mr-auto mt-2">

              <h2>Connect With Us</h2>

              <div className="ml-md-auto   d-lg-inline-block">
                <a href="https://twitter.com/techvlogyt" className="d-inline-block p-3"><span className="icon-twitter"></span></a>
                <a href="http://instagram.com/techvlogyt_" className="d-inline-block p-3"><span
                    className="icon-instagram"></span></a>
                <a href="https://www.facebook.com/techvlogyt" className="d-inline-block p-3"><span
                    className="icon-facebook"></span></a>
              </div>

            </div>

          </div>


          <div className="col-md-12">
            <hr/>
          </div>

          <div className="row">
            <div className="col-sm-4"> </div>
            <div className="col-sm-4"> </div>
            <div className="col-sm-4">


            </div>

          </div>

        </div>
      </div>




      
      <div className="footer">
        <div className="container">


          <div className="row">
            <div className="col-12">
              <div className="copyright">
                <p>
                  
                Developed by <a href="https://www.linkedin.com/in/madhanumk/" target='_blank'><u>Madhan Umk</u></a>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

   
 

    </BrowserRouter>
   
  );
}

export default App;
