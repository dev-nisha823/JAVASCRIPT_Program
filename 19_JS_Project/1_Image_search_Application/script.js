// unsplash api accesskey
const accessKey = "tuOvSG9oDiZLo41kqChWfTP7EW1t_FGe9t6iio5r4yY";

// accessing html elements
const searchForm = document.querySelector("#search-form");
const searchImage = document.querySelector("#search-img");
const searchResults = document.querySelector("#search-results");
const show_more_btn = document.querySelector("#showMore-btn");

let inputData = "";
// bydefault pageNumber is 1
let page = 1;

async function searchImages(){
    // entering any image name into input form
    inputData = searchImage.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12`;

    // getting image response
    const response = await fetch(url);
    const data = await response.json();

    // print the data
    // console.log(data);

    if(page === 1){
        searchResults.innerHTML = "";
    }
    // creating image and link to image 
    const results = data.results;
    results.map((result)=> {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        // add link to a tag
        imageLink.href = result.links.html;
        // redirecting to unsplash website when clicking on the link
        imageLink.target = "_blank";
        // placing the image inside a tag
        imageLink.appendChild(image);
        // showing a tag in searchResults
        searchResults.appendChild(imageLink);
    })
     show_more_btn.style.display = "block";
}

searchForm.addEventListener("submit", (e)=>{
    // prevent it from submitting a form.
    e.preventDefault();
    page = 1;
    searchImages();
})

show_more_btn.addEventListener("click", () => {
    page++;
    searchImages();
})