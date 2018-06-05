import React, { Component } from 'react';
import FontAwesome from 'https://use.fontawesome.com/releases/v5.0.13/js/all.js';

class Sidebar extends Component {
    render() {
        return(
            <div class="icon-bar">
                <a href="#"><i class="fa fas-facebook"></i></a> 
                <a href="#"><i class="fa fas-phone"></i></a> 
                <a href="#"><i class="fa fas-envelope"></i></a> 
            </div>
        )
    }

}