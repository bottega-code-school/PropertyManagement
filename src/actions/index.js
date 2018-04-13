import { FETCH_NEWSLETTERS } from './types';

export function fetchNewsletters() {
    return {
        type: FETCH_NEWSLETTERS,
        payload: [
            {
                title: 'Happy Holidays!',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam tortor ante, lobortis tincidunt quam gravida iaculis. Nunc nec ex suscipit, aliquam purus et, hendrerit libero. Curabitur posuere efficitur ligula. Etiam laoreet quam at libero hendrerit, varius gravida lectus faucibus. Nam pulvinar magna magna, a pharetra dolor rutrum non. Morbi suscipit at diam eu viverra. Cras vestibulum dictum pharetra. Ut a ullamcorper leo, vitae convallis nibh. Maecenas viverra diam ante, ut semper ipsum accumsan eget. Ut non blandit eros. Ut nunc ante, eleifend id tincidunt id, ultricies eu est. Phasellus aliquet sapien scelerisque diam scelerisque, varius aliquam turpis fermentum. Pellentesque ornare imperdiet leo. Donec porta ipsum ipsum, sed hendrerit libero interdum et. Duis egestas mollis rhoncus.',
                image: 'http://via.placeholder.com/960x258',
                date: '12/25/2030'
            },
            {
                title: 'Season of Thanksgiving',
                body: 'In hac habitasse platea dictumst. Nulla cursus eleifend justo, et porttitor libero luctus nec. Aliquam vel pulvinar nunc, a gravida nunc. Aliquam venenatis, mi in convallis ullamcorper, libero ex eleifend nulla, in efficitur magna arcu facilisis ex. Sed congue pellentesque nibh sit amet suscipit. Nulla ut elit mollis, commodo purus sit amet, vehicula mi. Donec non lacus eros. Suspendisse eget libero eget neque semper condimentum vel in sem. Nullam sit amet volutpat purus. Morbi auctor maximus arcu, nec blandit purus. Nulla sit amet orci ut orci consectetur ultricies sed vel massa.',
                image: 'http://via.placeholder.com/960x258',
                date: '11/15/2030'
            },
            {
                title: 'Spooky Stuff Mane',
                body: 'Integer at nulla odio. Morbi vitae sagittis nisl. Cras in metus euismod tortor imperdiet molestie. Proin elementum ligula quam, eget bibendum nibh tincidunt a. Praesent at lobortis nisi. Proin felis nisi, luctus at odio malesuada, semper aliquam dolor. Integer id fermentum ipsum, ac aliquam nulla. Quisque tempor enim ac pulvinar sollicitudin. Maecenas tempor laoreet mi eu volutpat. Quisque convallis, odio et laoreet mattis, nunc tortor imperdiet augue, auctor volutpat dolor enim nec sem. Mauris tincidunt nisi a pellentesque consectetur.',
                image: 'http://via.placeholder.com/960x258',
                date: '07/15/2030'
            },
            {
                title: 'Summers End',
                body: 'Proin eu ante odio. Ut iaculis, orci volutpat sodales molestie, orci nisl consectetur velit, et interdum erat metus dapibus metus. Maecenas eget laoreet lectus, vel luctus ante. Vestibulum eu dui efficitur, dapibus lacus nec, consequat enim. Pellentesque leo massa, fringilla non tincidunt in, porttitor sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis a blandit erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse ac congue nulla, vel bibendum sapien. Suspendisse dignissim imperdiet vulputate. Nam sollicitudin metus et neque ullamcorper, sit amet cursus lorem maximus. Phasellus pulvinar tincidunt volutpat. Etiam eu nisl ac urna scelerisque interdum at ut lorem.',
                image: 'http://via.placeholder.com/960x258',
                date: '06/15/2030'
            }
        ]
    }
}