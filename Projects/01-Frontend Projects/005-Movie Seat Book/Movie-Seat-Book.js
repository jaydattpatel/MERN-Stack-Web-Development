//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];

let totalSelectedSeat = 0;
let moviePrice = 0;
let totalPrice = 0;

function countTotalPrice(){
 
 totalSelectedSeat = document.querySelectorAll('#seatCont .selected').length;
 totalPrice = moviePrice * totalSelectedSeat;
 document.querySelector('#numberOfSeat').textContent = totalSelectedSeat;
 document.querySelector('#totalPrice').textContent = `$${totalPrice}`;

}

function removeSelectedSeatsHolder(){
    document.querySelector("#selectedSeatsHolder").innerHTML = `<span class="noSelected">No Seat Selected</span>`;
}

function updateSelectedSeatsHolder() {

    let selectedSeatsHolder = document.querySelector("#selectedSeatsHolder");
    selectedSeatsHolder.innerHTML = ``;
    let selectedSeats = document.querySelectorAll('#seatCont .selected');
    selectedSeats.forEach((seat) => {
        const seatHolder = document.createElement("div");
        seatHolder.classList.add("selectedSeat");
        selectedSeatsHolder.appendChild(seatHolder);
        seatHolder.innerHTML = seat.getAttribute("data-seatId");
    });
}

// Use moviesList array for displaing the Name in the dropdown menu

let selectMovieID = document.querySelector('#selectMovie');

let flag = true;
for(let movie of moviesList){
    let option = document.createElement('option');
    option.textContent = `${movie.movieName} $${movie.price}`;
    selectMovieID.appendChild(option);
    if(flag){
        document.querySelector("#movieName").textContent = movie.movieName;
        document.querySelector("#moviePrice").textContent = `$ ${movie.price}`
        moviePrice = movie.price;
        flag = false;
    }
}

selectMovieID.addEventListener("input", (event) => {
    let movieDetails = event.target.value.split(" ");
    document.querySelector("#movieName").textContent = movieDetails[0];
    document.querySelector("#moviePrice").textContent = movieDetails[1];
    let price = Number(movieDetails[1].split('$')[1]);
    moviePrice = price;
    countTotalPrice();

  });


document.querySelector('#selectMovie option').selected = true;

//Add eventLister to each unoccupied seat
let allSeat = document.querySelectorAll('#seatCont .seat');


let seatCounter = 0;
for(let seat of allSeat){

    seat.setAttribute("data-seatId",++seatCounter);

    if(seat.classList.contains('occupied')){
        continue;
    }
    seat.addEventListener('click',()=>{
        if(! seat.classList.contains('occupied')){
            if(seat.classList.contains('selected')){
                seat.classList.remove('selected');
            }else{
                seat.classList.add('selected');
            }
            countTotalPrice();
            updateSelectedSeatsHolder();
        }
    });
}


//Add eventLsiter to continue Button
document.querySelector('#cancelBtn').addEventListener('click',(event)=>{
    let selectedSeats = document.querySelectorAll('#seatCont .selected');
    for(let seat of selectedSeats){
        seat.classList.remove("selected");
    }
    countTotalPrice();
    removeSelectedSeatsHolder();

});

//Add eventListerner to Cancel Button
document.querySelector('#proceedBtn').addEventListener('click',(event)=>{
    if(!totalSelectedSeat){
        alert("Oops no seat Selected");
    }else{
        alert("Yayy! Your Seats have been booked");
    }

    let selectedSeats = document.querySelectorAll('#seatCont .selected');
    for(let seat of selectedSeats){
        seat.classList.replace("selected","occupied");
    }

    countTotalPrice();
    removeSelectedSeatsHolder();

});


