const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {

    const target = +counter.dataset.target;

    let count = 0;

    const update = () => {

        const increment = target / 120;

        if(count < target){
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
        }else{
            counter.innerText = target + "+";
        }
    };

    update();
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            runCounter(entry.target);

            observer.unobserve(entry.target);
        }
    });

},{threshold:0.5});

counters.forEach(counter=>{
    observer.observe(counter);
});