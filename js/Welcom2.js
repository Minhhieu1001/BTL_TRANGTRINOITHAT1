document.addEventListener('DOMContentLoaded', function() {
  let progressBar = document.getElementById('progressBar');
  let progressLabel = document.getElementById('progressLabel');
  let progress = 0;

  function updateProgress() {
    progress+=1;
    progressBar.style.width = progress + '%';
    progressLabel.textContent = progress + '%';
    if (progress < 100) {
      requestAnimationFrame(updateProgress);
    }
  }

  requestAnimationFrame(updateProgress);
});