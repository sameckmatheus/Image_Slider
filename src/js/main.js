

initializeSlider (document.querySelectorAll('img'), () => {
    document.body.classList.remove('loading');

    const el = document.getElementById('slider');
    const imgs = Array.from(el.querySelectorAll('img'));
    new DisplamentSlider ({
        parant: el,
        images: imgs
    })
});