import React, { Component } from 'react';
import addBodyContainer from '../HOC/addBodyContainer';

class NewsletterBodyContent extends Component { 
    render() {
        return (
            <div>
                <div className="newsletter-body__image">
                    <img src="http://via.placeholder.com/960x258" alt="newsletter content image"/>
                    <div>New Years Resolutions</div>
                </div>
                <div className="newsletter-body__body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis tortor non nulla rhoncus, vitae hendrerit felis commodo. Sed a nulla mi. Nam ultricies, libero eu eleifend tempor, ante justo commodo justo, vitae ultrices lacus nulla non ante. Nullam vel ultricies eros. Aenean ex purus, consequat non mauris vitae, hendrerit fringilla ex. In auctor, ante eu euismod molestie, lorem neque dapibus arcu, vel vestibulum mi lorem quis ex. Nullam molestie sapien dolor, ut pretium ante tempus at. Pellentesque varius, tellus eu porta laoreet, sapien dui consectetur metus, at semper tellus felis nec felis. Vestibulum luctus diam id felis porta convallis. Curabitur pellentesque egestas pharetra. In quis tempus neque, eget posuere ligula. Etiam tincidunt lorem sed mauris faucibus consectetur. Quisque laoreet lorem id consequat pharetra. Phasellus enim ligula, posuere interdum arcu sed, condimentum aliquam nibh. Aliquam sem nunc, pharetra sit amet libero vel, euismod ornare erat. Nulla in justo sed felis maximus lacinia vitae sit amet lectus.</p>
                </div>
            </div>
        )        
    }
}

export default addBodyContainer(NewsletterBodyContent);