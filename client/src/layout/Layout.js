import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
 
class Layout extends Component {
    render() {
        return (
            
            <div>
                {/* Header/Navbar code */}
                <div>
                    Header here
                </div>

                <section>
                    { this.props.children }
                </section>

                {/* Sidebar code */}
                <div class="icon-bar">
                    <a href="https://www.facebook.com/KURA-INN-Mangareva-1907947855889011/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary sidebar-button">
                        <i class="fab fa-facebook-f"/>
                    </a> 
                    <div class="btn-group dropright" id="droprightMenuDiv">
                        <a class="btn btn-secondary dropdown-toggle sidebar-button" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-phone"/>
                        </a>
                        <div class="dropdown-menu">
                            {/* <a class="dropdown-item" href="#">Action</a> */}
                            Numéro de téléphone ici
                        </div>
                    </div>                    <div class="btn-group dropright" id="droprightMenuDiv">
                        <a class="btn btn-secondary dropdown-toggle sidebar-button" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-envelope"/>
                        </a>
                        <div class="dropdown-menu">
                            {/* <a class="dropdown-item" href="#">Action</a> */}
                            Adresse mail là
                        </div>
                    </div>
                </div>

                {/* Footer code */}
                <div class="footer">
                Pour nous contacter, veuillez remplir ce formulaire :
                    <form action="https://formspree.io/your@email.com" 
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
                            Prénom : 
                            </div>
                            <div class="col-10">
                                <input type="email" name="_replyto" required="required"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                            Message : 
                            </div>
                            <div class="col-10">
                                <input type="text" name="message" required="required"/>
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