import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const pathsTop = [...document.querySelectorAll('path.path-anim-top')];
const pathsBottom = [...document.querySelectorAll('path.path-anim-bottom')];
const shadows = document.querySelector('.bottom-shadow-boxes');
const topShadow = document.querySelector('.bottom-shadow-box-top');

const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
});
const scrollFn = () => {
    lenis.raf();
    requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);

pathsTop.forEach(el => {
    const svgEl = el.closest('svg');
    const pathTo = el.dataset.pathTo;

    gsap.timeline({
        scrollTrigger: {
            trigger: svgEl,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    })
        .to(el, {
            ease: 'none',
            attr: { d: pathTo }
        });
});

pathsBottom.forEach(el => {
    const svgEl = el.closest('svg');
    const pathTo = el.dataset.pathTo;

    gsap.timeline({
        scrollTrigger: {
            trigger: svgEl,
            start: 0,
            end: "top top",
            scrub: true
        }
    })
        .to(el, {
            ease: 'none',
            attr: { d: pathTo }
        });
});

gsap.timeline({
    scrollTrigger: {
        trigger: shadows,
        start: 0,
        end: "top top",
        scrub: true
    }
})
    .to(shadows, {
        ease: 'none',
        top: '60px',
        width: '1160px'
    })

gsap.timeline({
    scrollTrigger: {
        trigger: topShadow,
        start: 0,
        end: "top top",
        scrub: true
    }
})
    .to(topShadow, {
        ease: 'none',
        top: '-5px'
    })
