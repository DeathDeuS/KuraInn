import React, { Component } from 'react';

class Facebook extends Component {


    const base_url = "https://www.facebook.com/1907947855889011/posts/";
    let post_url;
    fb_posts = [];

    // <iframe src=`"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D" + post_url + "%26id%3D1907947855889011&width=500"` style={{border: 'none', overflow: 'hidden'}} scrolling="no" allowTransparency="true" allow="encrypted-media" width={500} height={658} frameBorder={0} />

    FB.api(
        "1907947855889011?fields=posts.order(reverse_chronological).limit(4)",
        function (response) {
            if (response && !response.error) {
                fb_posts = [];
                console.log(response);
                console.log(response.posts.data.length);

                for(let i=0; i < response.posts.data.length; i++) {
                    fb_posts.push(response.posts.data[i].id);
                    console.log(response.posts.data[i].id);
                }

            }
        }
    );

}

export default Facebook;