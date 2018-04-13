import React, { Component } from 'react';

import addHeaderNav from '../HOC/addHeaderNav';

import NewsletterBodyContent from './newsletterBodyContent';


class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter">
                <div className="newsletter__sidebar">
                    {/* box component */}
                    {/* archive component */}


                </div>
                <div className="newsletter__body-content">
                    <NewsletterBodyContent/>
                </div>
            </div>
        )
    }
}

export default addHeaderNav(Newsletter, 'newsletter');