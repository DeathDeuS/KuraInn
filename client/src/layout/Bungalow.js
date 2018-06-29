import React, { Component } from 'react';
import './Bungalow.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Bungalow extends Component {

    render() {

        return (
            
            <div>

                <section id="bungalow1">
                    <div className="container">
                        <div className="row">
                            <h2 className="col-10">Bungalow 1</h2>

                            <div className="col-10 m-auto" style={{height: 400}}>

                                <section id="slider_bungalow1">
                                    <div id="carouselBungalow" className="carousel slide carousel-fade" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselBungalow" data-slide-to={0} className="active" />
                                            <li data-target="#carouselBungalow" data-slide-to={1} />
                                            <li data-target="#carouselBungalow" data-slide-to={2} />
                                            <li data-target="#carouselBungalow" data-slide-to={3} />
                                            <li data-target="#carouselBungalow" data-slide-to={4} />
                                            <li data-target="#carouselBungalow" data-slide-to={5} />
                                        </ol>

                                        <div className="carousel-inner">

                                            <div className="carousel-item active">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/bungalow1.jpg" alt="bienvenue" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/salon1.jpg" alt="bungalow" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/terrasse1.jpg" alt="activites" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/cuisine1.jpg" alt="mangareva" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/wc1.jpg" alt="mangareva" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/lit1.jpg" alt="mangareva" />
                                            </div>

                                        </div>
                                    </div>
                                </section>

                            </div>

                            <aside className="col-9">Texte description chambre pour donner envie</aside>

                            {/*  ----------------------- FORM MODAL  -------------------------------  */}
                            <button type="button" className="btn btn-primary  col-6" data-toggle="modal" data-target="#modalForm1" data-whatever="@mdo" style={{margin: 'auto', marginTop: 25}}>Réservez ce bungalow</button>
                            <div className="modal fade" id="modalForm1" tabIndex={-1} role="dialog" aria-labelledby="modalFormLabel1" aria-hidden="true">
                            
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <h5 className="modal-title" id="modalFormLabel1">Demande de réservation</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <form action="https://formspree.io/jchansin.tcc@gmail.com" method="POST" id="bookingForm1">

                                                <div className="form-group">
                                                    <select className="custom-control custom-select" type="text" name="Bungalow choisi" required="required">
                                                        <option selected="Bungalow 1">Bungalow 1</option>
                                                        <option value="Bungalow 2">Bungalow 2</option>
                                                    </select>   
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="datepicker1" className="col-form-label">Date :</label>
                                                    <input className="form-control" id="datepicker1" width="276" name="Date"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="recipient-name" className="col-form-label">Nom :</label>
                                                    <input className="form-control" id="recipient-name1" type="text" name="Nom" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="recipient-mail" className="col-form-label">E-mail :</label>
                                                    <input className="form-control" id="recipient-mail1" type="email" name="Mail"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                    <textarea className="form-control" id="message-text1" name="Message"/>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                                            <button type="submit" className="btn btn-primary" form="bookingForm1">Envoyer</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bungalow2">
                    <div className="container">
                        <div className="row">
                            <h2 className="col-10">Bungalow 2</h2>
                            <div className="col-10 m-auto carousel1" style={{height: 400}}>

                                <section id="slider_bungalow2">
                                    <div id="carouselBungalow2" className="carousel slide carousel-fade" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselBungalow2" data-slide-to={0} className="active" />
                                            <li data-target="#carouselBungalow2" data-slide-to={1} />
                                            <li data-target="#carouselBungalow2" data-slide-to={2} />
                                            <li data-target="#carouselBungalow2" data-slide-to={3} />
                                            <li data-target="#carouselBungalow2" data-slide-to={4} />
                                            <li data-target="#carouselBungalow2" data-slide-to={5} />
                                        </ol>

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/bungalow2.jpg" alt="bienvenue" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/salon2.jpg" alt="bungalow" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/terrasse2.jpg" alt="activites" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/cuisine2.jpg" alt="mangareva" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/wc2.jpg" alt="mangareva" />
                                            </div>

                                            <div className="carousel-item">
                                                <div className="carousel-caption d-none d-md-block slider_text_block">
                                                </div>
                                                <img className="d-block w-100" src="asset/bungalow/lit2.jpg" alt="mangareva" />
                                            </div>

                                        </div>
                                    </div>
                                </section>


                            </div>
                            <aside className="col-9">Texte description chambre pour donner envie</aside>


                            {/*  ----------------------- FORM MODAL  -------------------------------  */}
                            <button type="button" className="btn btn-primary col-6" data-toggle="modal" data-target="#modalForm2" data-whatever="@mdo" style={{margin: 'auto', marginTop: 25}}>Réservez ce bungalow</button>
                            <div className="modal fade" id="modalForm2" tabIndex={-1} role="dialog" aria-labelledby="modalFormLabel2" aria-hidden="true">
                                
                                <div className="modal-dialog" role="document">

                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="modalFormLabel2">Demande de réservation</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <form action="https://formspree.io/jchansin.tcc@gmail.com" method="POST" id="bookingForm2">

                                                <div className="form-group">
                                                    <select className="custom-control custom-select" type="text" name="Bungalow choisi" required="required">
                                                        <option selected="Bungalow 2">Bungalow 2</option>
                                                        <option value="Bungalow 1">Bungalow 1</option>
                                                    </select>   
                                                </div>

                                                 <div className="form-group">
                                                    <label htmlFor="datepicker2" className="col-form-label">Date :</label>
                                                    <input className="form-control" id="datepicker2" width="276" name="Date"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="recipient-name" className="col-form-label">Nom :</label>
                                                    <input className="form-control" id="recipient-name2" type="text" name="Nom" required="required"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="recipient-mail" className="col-form-label">E-mail :</label>
                                                    <input className="form-control" id="recipient-mail2" type="email" name="Mail" required="required"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="message-text" className="col-form-label">Message :</label>
                                                    <textarea className="form-control" id="message-text2" name="Message" required="required"/>
                                                </div>
                                       
                                            </form>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                                            <button type="submit" className="btn btn-primary" form="bookingForm2">Envoyer</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
      </div>

        );
    }
}

export default Bungalow;