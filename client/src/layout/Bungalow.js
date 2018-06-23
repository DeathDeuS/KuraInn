import React, { Component } from 'react';
import './Bungalow.css';

class Bungalow extends Component {

    render() {

              return (
            
            <div>
                <section id="bungalow1">
                    <div className="container">
                        <div className="row">
                            <h2 className="col-10">Bungalow 1</h2>

                            <div className="col-10 m-auto" style={{height: 400}}>
                                {/*  CAROUSSEL */}
                                {/* <Carousel>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/bungalow1.jpg" />
                                        <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/salon1.jpg" />
                                        <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/terrasse1.jpg" />
                                        <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/cuisine1.jpg" />
                                        <Carousel.Caption>
                                        <h3>Fourth slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/wc1.jpg" />
                                        <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/lit1.jpg" />
                                        <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>; */}

                            </div>

                            <aside className="col-9">Texte description chambre pour donner envie</aside>

                            {/*  ----------------------- FORM MODAL  -------------------------------  */}
                            <button type="button" className="btn btn-primary  col-6" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" style={{margin: 'auto', marginTop: 25}}>Réservez ce bungalow</button>
                            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                                <input className="form-control" id="recipient-name" type="text" />
                                                </div>
                                                <div className="form-group">
                                                <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                <textarea className="form-control" id="message-text" defaultValue={""} />
                                                </div>
                                            </form>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Send message</button>
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
                                {/*  CAROUSSEL */}
                                {/* <Carousel>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/bungalow2.jpg" />
                                        <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/salon2.jpg" />
                                        <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/terrasse2.jpg" />
                                        <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/cuisine2.jpg" />
                                        <Carousel.Caption>
                                        <h3>Fourth slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/wc2.jpg" />
                                        <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width={900} height={500} alt="900x500" src="asset/bungalow/lit2.jpg" />
                                        <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>; */}
                            </div>
                            <aside className="col-9">Texte description chambre pour donner envie</aside>


                            {/*  ----------------------- FORM MODAL  -------------------------------  */}
                            <button type="button" className="btn btn-primary col-6" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" style={{margin: 'auto', marginTop: 25}}>Réservez ce bungalow</button>
                            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                
                                <div className="modal-dialog" role="document">

                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                                <input className="form-control" id="recipient-name" type="text" />
                                                </div>
                                                <div className="form-group">
                                                <label htmlFor="message-text" className="col-form-label">Message:</label>
                                                <textarea className="form-control" id="message-text" defaultValue={""} />
                                                </div>
                                            </form>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Send message</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* jQuery */}
                {/* FlexSlider */}
                {/* Syntax Highlighter */}
                {/* Optional FlexSlider Additions */}
      </div>

        );
    }
}

export default Bungalow;