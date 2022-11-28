 
console.log("Welcome to notes app. This is app.js");

/*




/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 

//localStorage.setItem("Movies", "1");






document.addEventListener("DOMContentLoaded" ,function(){
UpdateStatus()
})
    const UpdateStatus = ()=>{
    item = JSON.parse(localStorage.getItem("Movies"))
    //Ab = JSON.parse(item)
    if(item){
            document.getElementById("status").innerHTML = "You have watched total " + item.length + " movies"
        }

        else{
            document.getElementById("status").innerHTML = "You haven't watched any movie"   
        }

        showMovies()

      }



const Add = () =>{
  let Name = document.getElementById("NameInput").value
  let Type = document.getElementById("Type").value
  let Origin = document.getElementById("Origin").value 
  let alert = document.getElementById("alert").innerHTML
  let date = document.getElementById("date").value


  if(Name == ""){
    document.getElementById("alert").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Alert: </strong> Fill all fields<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  }
  
  if(Name != ""){
  if(alert != ""){
    document.getElementById("alert").innerHTML = ""
  }
  if(date == ""){
  DateObj = new Date
  date = DateObj.getDate() + ":" + DateObj.getMonth() + ":" + DateObj.getFullYear()
}
  
  let Movies = localStorage.getItem("Movies");
  
  if (Movies == null) {
    MoviesObj = [];
  } else {
    MoviesObj = JSON.parse(Movies)
  }
  //MoviesObj.push(Name, Type, Origin);
  MoviesObj.push([Name, Origin, Type, date]);
  localStorage.setItem("Movies", JSON.stringify(MoviesObj));
  //   console.log(notesObj);
}




showMovies()
UpdateStatus()
document.getElementById("NameInput").innerHTML = ""
  
}



// Function to show elements from localStorage
function showMovies() {
  let Movies = localStorage.getItem("Movies");
  if (Movies == null) {
    MoviesObj = [];
  } else {
    MoviesObj = JSON.parse(Movies);
  }
  let html = "";
  MoviesObj.forEach(function(element, index) {
    html += `
    <tr class="Main" >
              <th scope="row">${index+1}</th>
              <td id="MovieName" class="Names">${element[0]}</td>
              <td>${element[2]}</td>
              <td>${element[1]}</td>
              <td>${element[3]}</td>
              <td><button onclick="deleteMovie()" class="btn btn-danger">Delete</button></td>
              
              </tr>
      `;
  });
  let MovieElm = document.getElementById("Movies");
  if (MoviesObj.length != 0) {
    MovieElm.innerHTML = html;
  } else {
    MovieElm.innerHTML = `Nothing to show! Use "Add a Movie" section above to add a Movie.`;
  }
}

// Function to delete a note
function deleteMovie(index) {
  //   console.log("I am deleting", index);
  
    let Movies = localStorage.getItem("Movies");
    if (Movies == null) {
      MoviesObj = [];
    } else {
      MoviesObj = JSON.parse(Movies);
    }
  
    MoviesObj.splice(index, 1);
    localStorage.setItem("Movies", JSON.stringify(MoviesObj));
    showMovies();
    UpdateStatus()
  }




  let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
  
  let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('Main');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("td")[0].innerText.toLowerCase()
        console.log(cardTxt)
        if(cardTxt.includes(inputVal)){
            element.style.display = "table-row";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
