document.addEventListener('DOMContentLoaded', () => {
  const enterButton = document.getElementById('enterBtn');
  const paragraph = document.getElementById('status');

  enterButton.addEventListener('click', () => {
    paragraph.innerHTML = '<h1>Entered Metaverse</h1>';
  });
});