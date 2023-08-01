const SliderControl =  function (opts) {
    let vertex = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;

};

initializeSlider (document.querySelectorAll('img'), () => {
    document.body.classList.remove('loading');

    const el = document.getElementById('slider');
    const imgs = Array.from(el.querySelectorAll('img'));
    new DisplamentSlider ({
        parant: el,
        images: imgs
    })
});