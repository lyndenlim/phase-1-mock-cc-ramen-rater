//Handles displaying and appending existing ramen to page
function displayRamen(){
    //Fetch data from API
    return fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => {
        const ramen = data 
        const ramenDivBar = document.querySelector("#ramen-menu")
        //Iterate through each ramen in data obj to display and append to div bar
        ramen.forEach(ramen => {
            const ramenImg = document.createElement("img")
            ramenImg.src = ramen.image
            ramenImg.id = ramen.id
            ramenDivBar.appendChild(ramenImg)
            //Add event listener to each ramen img to be able to replace placeholders
            ramenImg.addEventListener("click", e => {
                document.querySelector(".detail-image").src = ramen.image
                document.querySelector(".name").textContent = ramen.name
                document.querySelector(".restaurant").textContent = ramen.restaurant
                document.querySelector("#rating-display").textContent = ramen.rating
                document.querySelector("#comment-display").textContent = ramen.comment
            })
        })
    })
}
//Handles creating a new ramen and appending to page
function createNewRamen(){
    const newRamenForm = document.querySelector("#new-ramen")
    const ramenDivBar = document.querySelector("#ramen-menu")
    newRamenForm.addEventListener("submit", e => {
        e.preventDefault()
        //Stores event listener values into obj for easier referencing
        const newRamenObj = {name: e.target[0].value,
        restaurant: e.target[1].value, 
        image: e.target[2].value,
        rating: e.target[3].value,
        comment: e.target[4].value}
        //Creates new img element for each new ramen addition
        const newRamenImg = document.createElement("img")
        newRamenImg.src = newRamenObj.image
        ramenDivBar.append(newRamenImg)
        //Adds event listeners to each new ramen and updates placeholders to reflect accordingly
        newRamenImg.addEventListener("click", e => {
            document.querySelector(".detail-image").src = newRamenObj.image
            document.querySelector(".name").textContent = newRamenObj.name
            document.querySelector(".restaurant").textContent = newRamenObj.restaurant
            document.querySelector("#rating-display").textContent = newRamenObj.rating
            document.querySelector("#comment-display").textContent = newRamenObj.comment
        })
        newRamenForm.reset()
    })
}

displayRamen()
createNewRamen()