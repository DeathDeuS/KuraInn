import React, { Component } from 'react';
import './Mangareva.css';
 
class Mangareva extends Component {
    render() {
        return (

            <div>
                <section id="slider_mangareva">
                <div id="carouselMangareva" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption d-none d-md-block slider_text_block">
                        <h5>Bienvenue </h5>
                        <p>Venez découvrir Mangareva, île mystérieuse dans l'archipel des Gambiers, berceau du catholicisme
                            en Polynésie, perle du Pacifique </p>
                        </div>
                        <img className="d-block w-100" src="asset/mangareva/mangareva.jpg" alt="bienvenue" />
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block slider_text_block">
                        <h5>Nos chambres</h5>
                        <p>sont prêtes à vous a ccueillir que vous soyez seul ou en famille.</p>
                        </div>
                        <img className="d-block w-100" src="asset/mangareva/mangareva1.jpg" alt="bungalow" />
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block slider_text_block">
                        <h5>Les activités de l'île</h5>
                        <p> Venez découvrir notre île avec ses vestiges de l''époque royale ou coloniale,nos motu,nos lagons
                            et nos perles</p>
                        </div>
                        <img className="d-block w-100" src="asset/mangareva/mangareva2.jpg" alt="activites" />
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption d-none d-md-block slider_text_block">
                        <h5>Mangareva</h5>
                        <p>...</p>
                        </div>
                        <img className="d-block w-100" src="asset/mangareva/mangareva5.jpg" alt="mangareva" />
                    </div>
                    </div>
                </div>
                </section>
                <section>
                <article className="row">
                    <div className="col-md-4 col-xs-12 m_img">
                    <img src="asset/mangareva/cathedrale.jpg" />
                    </div>
                    <div className="col-md-8 col-xs-12">
                    <div className="v-align">
                        <h2>Mangareva, une histoire de Foi</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio id nibh eleifend maximus vitae
                        ut odio. Mauris consequat, tellus ac laoreet accumsan, elit leo placerat orci, nec ullamcorper dui enim
                        vitae eros. Vestibulum molestie blandit nulla ut mollis. Proin egestas justo nunc, sed gravida neque
                        rhoncus in. In bibendum luctus quam, a mollis odio varius ac.Sed non erat porta, vulputate nulla vel,
                        pellentesque urna. Praesent eget enim et sem elementum fermentum. Pellentesque sit amet laoreet nibh.
                        Sed euismod massa eget malesuada porta. Aliquam eu nisi at sem ullamcorper venenatis vitae eu mauris.
                        Nulla eget lacus neque.</p>
                    </div>
                    </div>
                </article>
                <article className="container">
                    <h2>Ses îles et son lagon</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio id nibh eleifend maximus vitae ut
                    odio. Mauris consequat, tellus ac laoreet accumsan, elit leo placerat orci, nec ullamcorper dui enim vitae
                    eros. Vestibulum molestie blandit nulla ut mollis. Proin egestas justo nunc, sed gravida neque rhoncus in.
                    In bibendum luctus quam, a mollis odio varius ac.Sed non erat porta, vulputate nulla vel, pellentesque urna.
                    Praesent eget enim et sem elementum fermentum. Pellentesque sit amet laoreet nibh. Sed euismod massa eget
                    malesuada porta. Aliquam eu nisi at sem ullamcorper venenatis vitae eu mauris. Nulla eget lacus neque.</p>
                    <div className="row">
                    <div className="col-md-4 col-xs-12 m_img">
                        <img src="asset/mangareva/mangareva1.jpg" />
                    </div>
                    <div className="col-md-4 col-xs-12 m_img creve">
                        <img src="asset/mangareva/mangareva2.jpg" />
                    </div>
                    <div className="col-md-4 col-xs-12 m_img">
                        <img src="asset/mangareva/mangareva3.jpg" />
                    </div>
                    </div></article>
                <article>
                    <h2>Des lieux emplis d'histoires</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio id nibh eleifend maximus vitae ut
                    odio. Mauris consequat, tellus ac laoreet accumsan, elit leo placerat orci, nec ullamcorper dui enim vitae
                    eros. Vestibulum molestie blandit nulla ut mollis. Proin egestas justo nunc, sed gravida neque rhoncus in.
                    In bibendum luctus quam, a mollis odio varius ac.Sed non erat porta, vulputate nulla vel, pellentesque urna.
                    Praesent eget enim et sem elementum fermentum. Pellentesque sit amet laoreet nibh. Sed euismod massa eget
                    malesuada porta. Aliquam eu nisi at sem ullamcorper venenatis vitae eu mauris. Nulla eget lacus neque.</p>
                </article>
                <div className="row">
                    <div className="col-md-6 col-xs-12 m_img">
                    <img src="asset/mangareva/mangareva6.jpg" />
                    </div>
                    <div className="col-md-6 col-xs-12 m_img">
                    <img src="asset/mangareva/mangareva7.jpg" />
                    </div>
                </div>
            </section>
      </div>
        );
    }
}

export default Mangareva;