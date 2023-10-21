
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry.intersectionRect)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left-to-right');
        } else {
            entry.target.classList.remove('show-left-to-right');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-left-to-right');
console.log(hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));