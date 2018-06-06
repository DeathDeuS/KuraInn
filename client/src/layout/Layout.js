import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
/* import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-solid/faFacebook';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'; */
 
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
                    <a href="https://www.facebook.com/KURA-INN-Mangareva-1907947855889011/" target="_blank"><i class="fab fa-facebook-f"/></a> 
                    <a><i class="fas fa-phone"/></a> 
                    <a><i class="fas fa-envelope"/></a> 
                </div>

                {/* Footer code */}
                <div class="row">
                    <div class="col-1">
                        Nom : <br/>
                        E-mail : <br/>
                        Message : <br/>
                    </div>

                    <div class="col-11">
                        <form action="https://formspree.io/your@email.com" 
                            method="POST">
                            <input type="text" name="name" required="required"/>
                            <br/>
                            <input type="email" name="_replyto" required="required"/>
                            <br/>
                            <input type="text" name="message" required="required"/>
                            <input type="submit" value="Envoyer"/>
                        </form> 
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Layout;