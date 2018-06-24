import React, { Component } from 'react';
import './Presentation.css';
 
class Presentation extends Component {
    render() {
      return (

        <div>

          <section id="slider_accueil">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
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
                    <p>Venez découvrir Mangareva, île mystérieuse dans l'archipel des Gambiers, berceau du catholicisme en Polynésie, perle du Pacifique </p>
                  </div>
                  <img className="d-block w-100" src="asset/slider_accueil/bienvenue.jpg" alt="bienvenue" />
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-none d-md-block slider_text_block">
                    <h5>Nos chambres</h5>
                    <p>sont prêtes à vous accueillir que vous soyez seul ou en famille.</p>
                  </div>
                  <img className="d-block w-100" src="asset/slider_accueil/bungalow.jpg" alt="bungalow" />
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-none d-md-block slider_text_block">
                    <h5>Les activités de l'île</h5>
                    <p> Venez découvrir notre île avec ses vestiges de l''époque royale ou coloniale,nos motu,nos lagons et nos perles</p>
                  </div>
                  <img className="d-block w-100" src="asset/slider_accueil/activites.jpg" alt="activites" />
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-none d-md-block slider_text_block">
                    <h5>Mangareva</h5>
                    <p>...</p>
                  </div>
                  <img className="d-block w-100" src="asset/slider_accueil/mangareva.jpg" alt="mangareva" />
                </div>
              </div>
            </div>
          </section>


          <section id="presentation " className=" text-center">

            <div className="container">
              <h2>Kura Inn pour une expérience inoubliable</h2>
              <br />
              <img className="img_p_home " src="../../asset/s1.jpg" />
              <br />
              <br />
              <article className="col-50">
                <em>Présentation de la pension</em> : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis
                felis fermentum, lacinia nulla sed, feugiat tellus. Nulla facilisi. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Donec bibendum nibh eu magna semper, et placerat elit
                pharetra. Fusce at pulvinar orci. Sed aliquam lectus eget lectus accumsan auctor. Nunc et pharetra neque,
                nec tincidunt magna. Vestibulum sed hendrerit lectus. In leo libero, tincidunt nec cursus vitae, ultrices
                in enim. Pellentesque sed lobortis dui. Aenean sed pellentesque purus, eu vulputate velit. Phasellus scelerisque
                diam nec orci vehicula blandit nec nec tellus. Nullam faucibus pellentesque dolor a fermentum. Cras eu dictum
                mauris, at eleifend orci.</article>
              <hr />
            </div>

            <div className="parallax" style={{
              background:'url(asset/parallax1.jpg)',
              backgroundAttachment: 'fixed', 
              backgroundPositionY: '-100px', 
              backgroundSize: 'cover', 
              height : 500, 
              backgroundRepeat: 'no-repeat'}}>
            </div>

            <div className="container">
              <br />
              <h2>Les membres de l'équipe vous souhaitent la bienvenue</h2>
              <br />

              <div id="presentation_picture_manager" className="row ">
                <br />
                {/* photos gérants */}
                <div className="presentation_card col-md-6 col-xs-12">
                  <br />
                  <img className="img-round shadowbox" src="../../asset/avatar_girl.jpg" />
                  {/* <div class="img-round" style="background:url(../../asset/avatar_girl.jpg) no-repeat center;"></div> */}
                  <h4>Mlle Beatrice Laureen</h4>
                  <p>gérante de la pension</p>
                </div>
                <div className="presentation_card col-md-6 col-xs-12">
                  <br />
                  <img className=" img-round shadowbox" src="../../asset/avatar_boy.jpg" />
                  {/* <div class="img-round" style="background:url(../../asset/avatar_boy.jpg) no-repeat center; "></div> */}
                  <h4>M lorio</h4>
                  <p>fille de la gérante</p>
                </div>
                <br />
                <br />
                <article className="col-50">
                  <em>Présentation personnel </em>: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis
                  felis fermentum, lacinia nulla sed, feugiat tellus. Nulla facilisi. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Donec bibendum nibh eu magna semper, et placerat
                  elit pharetra. Fusce at pulvinar orci. Sed aliquam lectus eget lectus accumsan auctor. Nunc et pharetra
                  neque, nec tincidunt magna. </article>
              </div>

              <hr />
            </div>

            <div className="parallax" style={{
              background:'url(asset/parallax2.jpg)',
              backgroundAttachment: 'fixed', 
              backgroundPositionY: '-100px', 
              backgroundSize: 'cover', 
              height : 500, 
              backgroundRepeat: 'no-repeat'}}>
            </div>
            
            <br />
            <h2>Mangareva, perle du pacifique</h2>
            <br />
            
            {/* 16:9 aspect ratio */}
            <div className="row">
              <div className="col-md-10 col-xs-12 m-auto">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Z63rJLapeAQ" />
                </div>
              </div>
            </div>

          </section>

        </div>
        
        );
    }
}

export default Presentation;