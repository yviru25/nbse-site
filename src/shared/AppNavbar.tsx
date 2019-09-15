import * as React from 'react';

interface AppNavbarstate{

}

export default class AppNavbarPage extends React.Component<AppNavbarstate>{

    render(){
       return(
       <div className="headerPage">  
        <div className="header-inner-pages">
        <div className="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar menu-top">
                            <ul className="menu"> 
                                <li className="home">
                                    <a href="blog.html">Blog</a>
                                    <ul className="submenu">
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li><a href="portfolio.html">Portfolio</a>
                                    <ul className="submenu">
                                        <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                    </ul>
                                </li>                                                          
                                <li><a href="event-grid.html">Events</a>
                                    <ul className="submenu">
                                        <li><a href="event-list.html">Events List</a></li>
                                        <li><a href="event-single.html">Events Single</a></li>
                                    </ul>
                                </li>                                               
                                <li><a href="course-grid.html">Courses</a>
                                    <ul className="submenu"> 
                                        <li><a href="course-list.html">Courses List</a></li>
                                        <li><a href="course-single.html">Courses Single</a></li>  
                                    </ul>
                                </li>
                                <li><a href="member.html">Member</a>
                                    <ul className="submenu"> 
                                        <li><a href="member-single.html">Members Single</a></li>
                                        <li><a href="contact.html">Contact</a></li>  
                                    </ul>
                                </li> 
                            </ul>
                        </nav>
                        
                        <div className="submenu top-search">
                            <form className="search-form">
                                <div className="input-group">
                                    <input type="search" className="search-field" placeholder="Search Here" />
                                    <span className="input-group-btn">
                                        <button type="submit"><i className="fa fa-search fa-4x"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>

                        <div className="navbar-right topnav-sidebar">
                            <ul className="textwidget">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <header id="header" className="header">
     <div className="header-wrap">
         <div className="container">
             <div className="header-wrap clearfix">
                 <div id="logo" className="logo">
                     <a href="/home" rel="home">
                         <img src={require("../assets/images/logo.png")} alt="image" />
                     </a>
                 </div>


                 <div className="nav-wrap">

                     <nav id="mainnav" className="mainnav">
                         <ul className="menu"> 
                             <li className="home">
                                 <a href="javascript:void(0)">ABOUT US</a>
                                 <ul className="submenu">
                                     <li><a href="javascript:void(0)">NBSE</a></li>
                                     <li><a href="javascript:void(0)">Advisory Committee</a></li>
                                     <li><a href="javascript:void(0)">Importance of NBSE</a></li>
                                     <li><a href="javascript:void(0)">Subjects</a></li>
                                   
                                 </ul>
                             </li>
                             <li>
                                 <a href="javascript:void(0)">REGISTRATION</a>
                                 <ul className="submenu">
                                    <li><a href="javascript:void(0)">New Student Registration</a></li>
                                     <li><a href="javascript:void(0)">School Registration</a></li>
                                     <li><a href="javascript:void(0)">Registration Fees</a></li>
                                     <li><a href="javascript:void(0)">Student Registration Form</a></li>
                                 </ul>
                             </li> 
                             <li>
                                 <a href="course-list.html">EXAM SHEDULE</a>
                                 <ul className="submenu">
                                     <li><a href="javascript:void(0)">Shedule</a></li>
                                     <li><a href="javascript:void(0)">NBSE Admit Card </a></li>
                                     <li><a href="javascript:void(0)">Marking Scheme</a></li>
                                     <li><a href="javascript:void(0)">NBSE Sample Paper</a></li>
                                     <li><a href="javascript:void(0)">CBSE Sample Papers 2019</a></li>
                                 </ul>
                             </li>                                
                             <li>
                                 <a href="">RESULT</a>
                                 <ul className="submenu">
                                     <li><a href="javascript:void(0)">Result</a></li>
                                     <li><a href="javascript:void(0)">NBSE Marksheet</a></li>
                                     <li><a href="javascript:void(0)">Re-Verification</a></li>
                                     <li><a href="javascript:void(0)">Re-Evaluation</a></li>
                                     <li><a href="javascript:void(0)">NBSE Topper Answer Sheet</a></li>
                                 </ul>
                             </li> 
                             <li>
                                 <a href="#">NBSE WINNERS</a>
                                 <ul className="submenu">
                                    <li><a href="javascript:void(0)">Awards and Recoginition</a></li>
                                    <li><a href="javascript:void(0)">Award Ceremony Pics</a></li>
                                 </ul>
                             </li>                                    
                         </ul>
                     </nav>
                 </div>
             </div>
         </div>
     </div>
 </header>
 </div>
      )
    }
}