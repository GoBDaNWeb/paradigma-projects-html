const initYMap = () => {
    if(ymaps) {
        ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("contacts-map", {
                center: [59.892002994046656,30.519691156736194],
                zoom: 18
            });
    
            var myPlacemark = new ymaps.Placemark([59.892002994046656,30.519691156736194], {}, {
              iconLayout: 'default#image',
              iconImageHref: '/images/map-icon.png',
              iconImageSize: [71, 99],
            //   iconImageSize: document.body.clientWidth <= 768 ? [40, 52] : [60, 79],
              iconImageOffset: [-14, -40],
     
          });
            // document.querySelector('#full-map').addEventListener('click', ()=> {
            //     myMap.container.enterFullscreen()
            // } )
            myMap.behaviors.disable('scrollZoom'); // Отключение зум колесиком мыши
            myMap.geoObjects.add(myPlacemark);
        }
    }
}

export default initYMap;