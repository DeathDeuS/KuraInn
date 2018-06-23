import React, { Component } from 'react';
import './Activites.css';
 
class Activites extends Component {
    render() {
        return (

            <div>
                <br/>
                <br/>
                <div className="container w-75">
                    <h2>Nos activités</h2>
                    <p>Petit paragraphe d'introduction : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio id
                    nibh eleifend maximus vitae ut odio. Mauris consequat, tellus ac laoreet accumsan, elit leo placerat orci, nec
                    ullamcorper dui enim vitae eros. Vestibulum molestie blandit nulla ut mollis. Proin egestas justo nunc, sed gravida
                    neque rhoncus in. In bibendum luctus quam, a mollis odio varius ac. Sed non erat porta, vulputate nulla vel,
                    pellentesque urna. Praesent eget enim et sem elementum fermentum. Pellentesque sit amet laoreet nibh. Sed euismod
                    massa eget malesuada porta. Aliquam eu nisi at sem ullamcorper venenatis vitae eu mauris. Nulla eget lacus neque.</p>

                    {/* ------------  ACTIVITES --------------*/}

                    {/*     1     */}
                    <div className=" activity_card row ">
                    <div className="col-lg-4 col-md-4 col-xs-12 p-0 info_activity">
                        <h3>Sortie Motu</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio id nibh eleifend maximus vitae
                        ut odio. Mauris consequat, tellus ac laoreet accumsan, elit leo placerat orci, nec ullamcorper dui enim
                        vitae eros. Vestibulum molestie blandit nulla ut mollis. Proin egestas justo nunc, sed gravida neque
                        rhoncus in. In bibendum luctus quam, a mollis odio varius ac.</p>
                        <span>Payant</span>
                    </div>
                    <div className="col-lg-8 col-md-8 p-0 card_img">
                        <img src="../../asset/activites/activite1.jpg" />
                    </div>
                    </div>

                    {/*     2     */}
                    <div className=" activity_card row ">
                    <div className="col-md-8 p-0 card_img">
                        <img src="../../asset/activites/activite2.jpg" />
                    </div>
                    <div className="col-md-4 col-xs-12 p-0 info_activity">
                        <h3>Visite des vestiges</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio id nibh eleifend maximus vitae
                        ut odio. Mauris consequat, tellus ac laoreet accumsan, elit leo placerat orci, nec ullamcorper dui enim
                        vitae eros. Vestibulum molestie blandit nulla ut mollis. Proin egestas justo nunc, sed gravida neque
                        rhoncus in. In bibendum luctus quam, a mollis odio varius ac.</p>
                        <span>Payant</span>
                    </div>
                    </div>

                    {/*     3     */}
                    <div className=" activity_card row ">
                    <div className="col-md-4 col-xs-12 p-0 info_activity">
                        <h3>Plongée sous-marine</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio id nibh eleifend maximus
                        vitae ut odio. Mauris consequat, tellus ac laoreet accumsan, elit leo placerat orci, nec ullamcorper
                        dui enim vitae eros. Vestibulum molestie blandit nulla ut mollis. Proin egestas justo nunc, sed gravida
                        neque rhoncus in. In bibendum luctus quam, a mollis odio varius ac.</p>
                        <span>Gratuit</span>
                    </div>
                    <div className="col-md-8 p-0 card_img">
                        <img src="../../asset/activites/activite3.jpg" />
                    </div>
                    </div>

                    {/*     4     */}
                    <div className=" activity_card row ">
                    <div className="col-md-8 p-0 card_img">
                        <img src="../../asset/activites/activite4.jpg" />
                    </div>
                    <div className="col-md-4 col-xs-12 p-0 info_activity">
                        <h3>Randonnée, tour de l'île à pied ou à vélo</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio id nibh eleifend maximus vitae
                        ut odio. Mauris consequat, tellus ac laoreet accumsan, elit leo placerat orci, nec ullamcorper dui enim
                        vitae eros. Vestibulum molestie blandit nulla ut mollis. Proin egestas justo nunc, sed gravida neque
                        rhoncus in. In bibendum luctus quam, a mollis odio varius ac.</p>
                        <span>Gratuit</span>
                    </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Activites;