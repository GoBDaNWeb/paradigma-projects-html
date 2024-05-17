export const switchPageScroll = (enabled) => {
    document.body.style.overflowY =  enabled ? 'scroll' : 'hidden';
    document.body.style.position = enabled ? 'static' : 'fixed';
    document.body.style.width =  enabled ? 'auto' : '100%';
};

export const switchPageScrollDesktop = (enabled) => {
    document.body.style.overflow =  enabled ? 'scroll' : 'hidden';
    document.body.style.width =  enabled ? 'auto' : '100%';
};
