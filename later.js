
document.addEventListener("DOMContentLoaded" ,function(){
    UpdateStatus()
})

const UpdateStatus = ()=>{
    item = JSON.parse(localStorage.getItem("LaterMovies"))
    //Ab = JSON.parse(item)
    if(item){
            document.getElementById("status").innerHTML = "You have total " + item.length + " movies in later list"
        }

        else{
            document.getElementById("status").innerHTML = "You don't have any movie in later list"   
        }

        showMovies()
      }





const Add = () =>{
  let Name = document.getElementById("NameInput").value
  let Type = document.getElementById("Type").value
  let Origin = document.getElementById("Origin").value 
  let alert = document.getElementById("alert").innerHTML


  if(Name == ""){
    document.getElementById("alert").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Alert: </strong> Fill all fields<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  }
  
  if(Name != ""){
  if(alert != ""){
    document.getElementById("alert").innerHTML = ""
  }
  
  
  let Movies = localStorage.getItem("LaterMovies");
  
  if (Movies == null) {
    MoviesObj = [];
  } else {
    MoviesObj = JSON.parse(Movies)
  }
  //MoviesObj.push(Name, Type, Origin);
  MoviesObj.push([Name, Origin, Type]);
  localStorage.setItem("LaterMovies", JSON.stringify(MoviesObj));
  //   console.log(notesObj);
}




showMovies()
UpdateStatus()
document.getElementById("NameInput").innerHTML = ""
  
}



// Function to show elements from localStorage
function showMovies() {
  let Movies = localStorage.getItem("LaterMovies");
  if (Movies == null) {
    MoviesObj = [];
  } else {
    MoviesObj = JSON.parse(Movies);
  }
  let html = "";
  MoviesObj.forEach(function(element, index) {
    html += `
    <tr class="Main">
              <th scope="row">${index+1}</th>
              <td id="MovieName" class="Names">${element[0]}</td>
              <td id="MovieType">${element[2]}</td>
              <td id="MovieOrigin">${element[1]}</td>
              <td><button onclick="WatchedMovie()" class="btn btn-danger">Watched</button></td>
              
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
function WatchedMovie(index) {
  //   console.log("I am deleting", index);
  
/*
  
  
*/

let MovieName = document.getElementById("MovieName").innerText
let MovieType = document.getElementById("MovieType").innerText
let MovieOrigin = document.getElementById("MovieOrigin").innerText
let WatchedDate = new Date
let MovieDate = WatchedDate.getDate() + ":" + WatchedDate.getMonth() + ":" + WatchedDate.getFullYear()


let Movieslist = localStorage.getItem("Movies");
  
  if (Movieslist == null) {
    MoviesObj = [];
  } else {
    MoviesObj = JSON.parse(Movieslist)
  }
  //MoviesObj.push(Name, Type, Origin);
  MoviesObj.push([MovieName, MovieOrigin, MovieType, MovieDate]);
  localStorage.setItem("Movies", JSON.stringify(MoviesObj));

    let Movies = localStorage.getItem("LaterMovies");
    if (Movies == null) {
      MoviesObj = [];
    } else {
      MoviesObj = JSON.parse(Movies);
    }
  
    MoviesObj.splice(index, 1);
    localStorage.setItem("LaterMovies", JSON.stringify(MoviesObj));
    showMovies();
    UpdateStatus()






  }



  
  let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
  
  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName('Names');
  let main = document.getElementsByClassName("Main")
  Array.from(main).forEach(function(element, index){
      //let cardTxt = element.innerHTML
      let cardTxt = element.getElementsByTagName("td")[0].innerText.toLowerCase()
        if(cardTxt.includes(inputVal)){
            element.style.display = "table-row";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
