// Small script: calculate reading time from data-words attribute
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.read-time').forEach(el => {
    const words = Number(el.dataset.words) || 300;
    const mins = Math.max(1, Math.round(words / 220)); // ~220 wpm
    el.textContent = • ${mins} min read;
  });
});