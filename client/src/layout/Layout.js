/* ***********
Ce fichier contient les éléments permanents du site : header, footer, et sidebar.
*********** */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
 
class Layout extends Component {
    

    render() {

        function myFunction1() {
            var x = document.getElementById("top");
            if (x.className === "navtop col-md-8 col-xs-12") {
                x.className += " responsive";
                document.getElementById("top_ul").className = "w-100 m-auto";
                console.log(document.getElementById("top").className);
            } else {
                x.className = "navtop col-md-8 col-xs-12";
                document.getElementById("top_ul").className = "row w-100 m-auto";
                console.log(document.getElementById("top").className);
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

        return (
            
            <div>

                {/* Header/Navbar code */}
                <div>
                    <header className="row">
                        <div id="title" className="col-md-4 col-xs-12">
                        <img src="asset/logo.png" className />
                        </div>
                        <nav id="top" className="navtop col-md-8 col-xs-12">
                        <ul id="top_ul" className="row w-100">
                            <a href="javascript:void(0);" className="icon" onClick={myFunction1}>☰</a>
                            <li className="col"><Link to={'/'}>Accueil</Link></li>
                            <li className="col"><Link to={'/rooms'}>Bungalows</Link></li>
                            <li className="col"><Link to={'/activities'}>Activités</Link></li>
                            <li className="col"><Link to={'/mangareva'}>Mangareva</Link></li>
                        </ul>
                        </nav> 
                    </header>
                </div>

                <section>
                    { this.props.children }
                </section>

                {/* Sidebar code */}
                <div className="icon-bar sidenav" id="mySidenav" style={{display: 'block'}}>
                    <a href="https://www.facebook.com/KURA-INN-Mangareva-1907947855889011/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary sidebar-button">
                        <i className="fab fa-facebook-f"/>
                    </a> 
                    <div className="btn-group dropright" id="droprightMenuDiv">
                        <a className="btn btn-secondary dropdown-toggle sidebar-button" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-phone"/>
                        </a>
                        <div className="dropdown-menu">
                            <br/>
                            (+689) 87 72 03 31
                            <br/>
                        </div>
                    </div>                    
                    <div className="btn-group dropright" id="droprightMenuDiv">
                        <a className="btn btn-secondary dropdown-toggle sidebar-button" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-envelope"/>
                        </a>
                        <div className="dropdown-menu">
                            <br/>
                            raoulxcoralie@mail.pf
                            <br/>
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="closebtn btn btn-secondary sidebar-button" onClick={closeNav} style={{display: 'none'}}e>&times;</a>
                </div>

                <button className="btn sideMenuToggle sidebar-button" id="sideMenuToggle" onClick={openNav} style={{display: 'none'}}>
                   <i className="arrow-right"></i>
                </button>

                {/* Footer code */}
                <div className="footer">
                Pour nous contacter, veuillez remplir ce formulaire :
                    <form action="https://formspree.io/jchansin.tcc@gmail.com" 
                        method="POST">
                        <div className="row">
                            <div className="col-2">
                            Nom : 
                            </div>
                            <div className="col-10">
                                <input type="text" name="Nom" required="required"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                            Email : 
                            </div>
                            <div className="col-10">
                                <input type="email" name="Mail" required="required"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                            Objet : 
                            </div>
                            <div className="col-10">
                                <input type="text" name="Objet" required="required"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                            Message : 
                            </div>
                            <div className="col-10">
                                <textarea rows="3" cols="20" name="Message" required="required"/>
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