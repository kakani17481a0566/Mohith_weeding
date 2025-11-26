// crazy.js

document.addEventListener('DOMContentLoaded', () => {
    // Mouse Trail Effect
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = `${e.pageX}px`;
        trail.style.top = `${e.pageY}px`;

        // Random colors for trail
        const colors = ['#39ff14', '#ff00ff', '#00ffff', '#ffff00'];
        trail.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 1000);
    });

    // Runaway "Not Coming" Button
    const notComingBtn = document.getElementById('notComingButton');
    if (notComingBtn) {
        notComingBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - notComingBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - notComingBtn.offsetHeight);

            notComingBtn.style.position = 'fixed';
            notComingBtn.style.left = `${x}px`;
            notComingBtn.style.top = `${y}px`;
        });
    }

    // Glitch Text Effect on Hover for Headings
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        const originalText = heading.innerText;
        heading.addEventListener('mouseover', () => {
            let iterations = 0;
            const interval = setInterval(() => {
                heading.innerText = heading.innerText.split('')
                    .map((letter, index) => {
                        if(index < iterations) {
                            return originalText[index];
                        }
                        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                    })
                    .join('');

                if(iterations >= originalText.length){
                    clearInterval(interval);
                }

                iterations += 1 / 3;
            }, 30);
        });
    });
});
