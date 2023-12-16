function fetchData() {
    document.getElementById("aside-preloader").style.display = "block";
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => {
        
        let filteredData;
        if (Math.random() < 0.5) {
            filteredData = data.filter(comment => comment.id >= 100);
        } else {
            filteredData = data.filter(comment => comment.id <= 200);
        }

        renderData(filteredData[0]);
        })
        .catch(error => {
            console.log(error)
        document.getElementById("description").innerHTML = '<p>⚠ Что-то пошло не так: ' + error.message + '</p>';
        })
        .finally(() => {
        document.getElementById("aside-preloader").style.display = "none";
        });
}

function renderData(data) {
   document.getElementById("image").src = data.url;
   document.getElementById("description").textContent = data.title;
}  
  
window.addEventListener('load', () =>{
    fetchData();
});
  