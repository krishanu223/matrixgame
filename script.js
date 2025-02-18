document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});