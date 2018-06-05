import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div>
                <form action="https://formspree.io/your@email.com" 
                    method="POST">
                    <input type="text" name="name"/>
                    <input type="email" name="_replyto"/>
                    <input type="submit" value="Send"/>
                </form> 
            </div>
        )
    }

}