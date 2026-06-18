document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const percentageText = document.getElementById('percentage');
    const loadingOverlay = document.getElementById('loading-overlay');


    const minLoadTime = 15000;
    const maxLoadTime = 20000;
    const randomLoadTime = Math.random() * (maxLoadTime - minLoadTime) + minLoadTime;

    console.log('`Loading will take ${randomLoadTime / 1000} seconds.`');

    let startTime = Date.now();
    let interval = setInterval(() => {
        const elepsedTime = Date.now() - startTime;

        const progress = Math.min((elepsedTime / randomLoadTime) * 100, 100);

        progressBar.style.width = progress + '%';
        percentageText.textContent = Math.floor(progress) + '%';

        if (progress >= 100) {
            clearInterval(interval);
            console.log("Loading progress reached 100%.");

            window.location.href = 'http://127.0.0.1:8080/first-project/Firs-Page/'
        }
    }, 50);

});


