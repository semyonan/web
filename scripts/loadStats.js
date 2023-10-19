
(function() {
    function calculateLoadTime() {
      const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
      return loadTime;
    }
  
    function displayLoadStats() {
      const loadStats = document.createElement('div');
      loadStats.innerHTML = `Страница загрузилась за ${calculateLoadTime()} мс`;
      document.querySelector('footer').appendChild(loadStats);
    }
  
    window.addEventListener('load', () => {
      displayLoadStats();
    });
  })();
  