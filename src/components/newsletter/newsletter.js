import React, { Component } from 'react';

import addHeaderNav from '../HOC/addHeaderNav';

import NewsletterBodyContent from './newsletterBodyContent';
import InfoBox from '../infoBox';
import NewsletterArchive from './newsletterArchive';

class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter">
                <div className="newsletter__sidebar">
                    <InfoBox/>
                    <NewsletterArchive/>


                </div>
                <div className="newsletter__body-content">
                    <NewsletterBodyContent/>
                </div>
            </div>
        )
    }
}

export default addHeaderNav(Newsletter, 'newsletter');