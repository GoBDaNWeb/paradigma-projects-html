export const fancyboxSliders = () => {
  const layouts = document.querySelectorAll('[data-fancybox^="layout-"]');

  layouts.forEach((layout) => {
    const layoutAttrName = layout.getAttribute("data-fancybox");
    Fancybox.bind(`[data-fancybox=${layoutAttrName}]`, {
      Thumbs: {
        showOnStart: false,
      },
      Toolbar: {
        display: {
          left: [],
          middle: ["zoomIn", "zoomOut"],
          right: ["close"],
        },
      },
    });
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      showOnStart: false,
    },
    Carousel: {
      Navigation: {
        nextTpl:
          '<button class="f-button custom-fancy-next-btn" title="{{NEXT}}" data-fancybox-next></button>',
        prevTpl:
          '<button class="f-button custom-fancy-prev-btn" title="{{PREV}}" data-fancybox-prev></button>',
      },
    },
    Toolbar: {
      display: {
        left: [],
        right: ["close"],
      },
    },
  });

  Fancybox.bind('[data-fancybox="kingisepp"]', {
    Thumbs: {
      showOnStart: false,
    },
    Carousel: {
      Navigation: {
        nextTpl:
          '<button class="f-button custom-fancy-next-btn" title="{{NEXT}}" data-fancybox-next></button>',
        prevTpl:
          '<button class="f-button custom-fancy-prev-btn" title="{{PREV}}" data-fancybox-prev></button>',
      },
    },
    Toolbar: {
      display: {
        left: [],
        middle: ["zoomIn", "zoomOut"],
        right: ["close"],
      },
    },
  });
};
