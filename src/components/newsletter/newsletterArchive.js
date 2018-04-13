import React, { Component } from 'react'
import NewsletterArchiveItem from './newsletterArchiveItem';

class NewsletterArchive extends Component {
    render() {
        return (
            <div className="newsletter-archive">
                <div className="archive__title">
                    Archive
                </div>
                <ul>
                    <NewsletterArchiveItem/>
                    <NewsletterArchiveItem/>
                    <NewsletterArchiveItem/>
                </ul>
            </div>
        )
    }
}

export default NewsletterArchive;