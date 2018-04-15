import React, { Component } from 'react'

class NewsletterArchiveItem extends Component {
    render() {
        return (
            <div className="archive-item">
                <div className="archive-item__title">
                    {this.props.item.title}
                </div>
                <div className="archive-item__date">
                    {this.props.item.date}
                </div>
            </div>
        )
    }
}

export default NewsletterArchiveItem;