export const map = () => {
  const mapObj = document.querySelector("#map");
  if (mapObj) {
    let center = [55.849139397181, 37.26464403175793];

    function init() {
      let map = new ymaps.Map(mapObj, {
        center: center,
        zoom: 17,
      });
      if (map) {
        let placemark = new ymaps.Placemark(center, {}, {});

        map.controls.remove("geolocationControl"); // удаляем геолокацию
        map.controls.remove("searchControl"); // удаляем поиск
        // map.controls.remove("trafficControl"); // удаляем контроль трафика
        map.controls.remove("typeSelector"); // удаляем тип
        // map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
        // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
        map.controls.remove("rulerControl"); // удаляем контрол правил
        map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

        map.geoObjects.add(placemark);
      }
    }
    ymaps.ready(init);
  }
};
