import getTime from './js/getTime';

setInterval(function() {
    document.body.innerHTML = getTime();
}, 1000);
