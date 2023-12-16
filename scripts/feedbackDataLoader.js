function fetchData() {
    document.getElementById("preloader").style.display = "block";
    fetch('https://jsonplaceholder.typicode.com/comments')
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

        renderData(filteredData);
        })
        .catch(error => {
            console.log(error)
        document.getElementById("section3").innerHTML = '<p>⚠ Что-то пошло не так: ' + error.message + '</p>';
        })
        .finally(() => {
        document.getElementById("preloader").style.display = "none";
        });
}

function renderData(data) {
    var tableContent = "<table>";

    for (var j = -1; j < data.length; j++) {
        for(var i = -1; i < 1; i++) {
            if (i === -1 && j === -1) {
                tableContent += "<th>Клиенты</th>";
            } else if (j === -1 && i === 0) {
                tableContent += "<th>Отзывы</th>";
            } else if (i === -1) {
                tableContent += "<td>" + data[j].email +"</td>";
            } else {
                tableContent += "<td>" + data[j].body +"</td>";
            }
        }
        tableContent += "</tr>";
    }
    

    tableContent += "</table>";

    document.getElementById("section3").innerHTML = tableContent;
}  
  
window.addEventListener('load', () =>{
    fetchData();
});