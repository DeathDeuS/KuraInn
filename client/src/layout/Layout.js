/* ***********
Ce fichier contient les éléments permanents du site : header, footer, et sidebar.
*********** */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import './Presentation.js';
// import '../facebook/facebook';
 
class Layout extends Component {
    

    render() {

        function myFunction1() {
            console.log('myfunction');
            var x = document.getElementById("top");
            if (x.className === "navtop") {
                x.className += " responsive";
                document.getElementById("top_ul").className = "w-100 m-0";
                console.log(document.getElementById("top_ul").className);
            } else {
                x.className = "navtop";
                document.getElementById("top_ul").className = "row w-100 m-0";
            }
        }

        // Affiche la sidebar
        function openNav() {
            document.getElementById("mySidenav").style.display = "block";
            document.getElementById("sideMenuToggle").style.display = "none";

        }

        // Cache la sidebar
        function closeNav() {
            document.getElementById("mySidenav").style.display = "none";
            document.getElementById("sideMenuToggle").style.display = "block";

        } 

        console.log('hello layout');
        return (
            
            <div>

                {/* Header/Navbar code */}
                <div>
                    <header className="row">
                        <div id="title" className="col-4 logo">
                        <img src="asset/logo.png" className="w-100" />
                        </div>
                        <nav id="top" className="navtop col-8">
                        <ul id="top_ul" className="row w-100 m-0">
                            <a href="javascript:void(0);" style={{fontSize: 25}} className="icon" onClick={myFunction1}>&#9776;</a>
                            <li className="col"><a href="home.html">Accueil</a></li>
                            <li className="col"><a href="room.html">Chambres</a></li>
                            <li className="col"><a href="activities">Activités</a></li>
                            <li className="col"><a href="Mangareva">Mangareva</a></li>
                        </ul>
                        </nav> 
                    </header>
                </div>

                <section>
                    { this.props.children }
                </section>

                {/* Sidebar code */}
                <div class="icon-bar sidenav" id="mySidenav" style={{display: 'none'}}>
                    <a href="https://www.facebook.com/KURA-INN-Mangareva-1907947855889011/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary sidebar-button">
                        <i class="fab fa-facebook-f"/>
                    </a> 
                    <div class="btn-group dropright" id="droprightMenuDiv">
                        <a class="btn btn-secondary dropdown-toggle sidebar-button" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-phone"/>
                        </a>
                        <div class="dropdown-menu">
                            <br/>
                            (+689) 87 72 03 31
                            <br/>
                        </div>
                    </div>                    
                    <div class="btn-group dropright" id="droprightMenuDiv">
                        <a class="btn btn-secondary dropdown-toggle sidebar-button" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-envelope"/>
                        </a>
                        <div class="dropdown-menu">
                            {/* <a class="dropdown-item" href="#">Action</a> */}
                            <br/>
                            raoulxcoralie@mail.pf
                            <br/>
                        </div>
                    </div>
                    <a href="javascript:void(0)" class="closebtn btn btn-secondary sidebar-button" onClick={closeNav}>&times;</a>
                </div>

                <button class="btn sideMenuToggle sidebar-button" id="sideMenuToggle" onClick={openNav}>
                    Bouton
                </button>

                {/* Footer code */}
                <div class="footer">
                Pour nous contacter, veuillez remplir ce formulaire :
                    <form action="https://formspree.io/jchansin.tcc@gmail.com" 
                        method="POST">
                        <div class="row">
                            <div class="col-2">
                            Nom : 
                            </div>
                            <div class="col-10">
                                <input type="text" name="name" required="required"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                            Email : 
                            </div>
                            <div class="col-10">
                                <input type="email" name="_replyto" required="required"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                            Objet : 
                            </div>
                            <div class="col-10">
                                <input type="text" name="name" required="required"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                            Message : 
                            </div>
                            <div class="col-10">
                                <textarea rows="5" cols="18" name="message" required="required"/>
                                <input type="submit" value="Envoyer"/>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>

            
            
        );
    }
}

export default Layout;