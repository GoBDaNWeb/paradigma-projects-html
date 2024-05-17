import { Fancybox } from "@fancyapps/ui";

export const fancy = () => {
  Fancybox.bind('[data-fancybox="service-gallery"]', {
    Thumbs: {
      //   showOnStart: false,
    },
    arrows: false,
    // tpl: {
    //   closeButton:
    //     '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
    //   main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
    //   <div class="fancybox__backdrop"></div>
    //   <div class="fancybox__carousel"></div>
    //   <div class="fancybox__footer"></div>
    // </div>`,
    // },
  });
};
