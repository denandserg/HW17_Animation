const centreY = 100;


const loaderDotAnimation = (dot, delay, timestamp) => {
    console.log(timestamp);
    dot.setAttribute("cy", centreY + 30 * (Math.sin(timestamp/120 - delay)));
    requestAnimationFrame(loaderDotAnimation.bind(null, dot, delay));
};

const initAnimation = (id, delay) => {
    const dot = document.getElementById(id);
    loaderDotAnimation(dot, delay);
};

initAnimation("c1", 0);
initAnimation("c2", 1);
initAnimation("c3", 2);
initAnimation("c4", 2);
initAnimation("c5", 1);
initAnimation("c6", 0);