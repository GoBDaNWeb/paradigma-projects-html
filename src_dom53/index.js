import './assets/styles/index.scss';
import IMask from "imask";

//Определение ОС
let ua = navigator.userAgent.toLowerCase();
let isAndroid = ua.indexOf("android") > -1;

//вычисление высоты экрана в зависимости от ОС
const windowHeightDependUserAgent = isAndroid ? window.outerHeight : window.innerHeight;

window.addEventListener('resize', () => {

    // Перерасчет высоты экрана для десктопных устройств при ресайзе
    let windowHeightDependUserAgentOnResize = isAndroid ? window.outerHeight : window.innerHeight;

    if (window.innerWidth >= 1024) {
        let vh = windowHeightDependUserAgentOnResize * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    let vh = windowHeightDependUserAgentOnResize * 0.01;
    document.documentElement.style.setProperty('--vhForModal', `${vh}px`);
});

let vh = windowHeightDependUserAgent * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vhForModal', `${vh}px`);



const modalShow = () => {

    const callModal = document.querySelectorAll('.btn-call'),
        modalConst = document.querySelectorAll('.modal'),
        modalClose = document.querySelectorAll('.modal-close'),
        bodyDoc = document.querySelector('body');

    callModal.forEach(item => {
        item.addEventListener('click', (e)=> {
            e.preventDefault()
            modalConst.forEach(i=> {
                if (i.getAttribute('id') == item.getAttribute('data-modal')) {
                    i.classList.add('active')
                    bodyDoc.classList.add('hidden')
                }
            })
        
        })
    })
    modalConst.forEach(i=> {
        i.addEventListener('click', (event)=> {
            if (event.target === i) {
                i.classList.remove('active')
                bodyDoc.classList.remove('hidden')
            }
        })
    })
    
    modalClose.forEach(i=> {
        i.addEventListener('click', ()=> {
            i.closest('.modal').classList.remove('active')
            bodyDoc.classList.remove('hidden')
        })
    })

}

const phones = document.querySelectorAll("input[type='tel']")
console.log('phones',phones)
  if(phones) {
    phones.forEach((el) => {
        IMask(el, {
          mask: "+7 (000) 000-00-00",
        });
      });
  }
modalShow()