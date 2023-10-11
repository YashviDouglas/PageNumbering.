const listItems = document.querySelectorAll(`.contact-item`);
const totalList = listItems.length;
const itemPerPage = 10;
// fetch total number of pages
let numberOfPages = Math.floor(totalList / itemPerPage);
if (totalList % itemPerPage != 0) {
    numberOfPages = numberOfPages + 1;
}
// generate html for pagination 
let paginationHtml = '<ul>';
for (i = 1; i <= numberOfPages; i++) {
    paginationHtml = paginationHtml + '<li><a onclick="generatePageData(' + i + ')" style="cursor:pointer">' + i + '</a></li>';
}
paginationHtml = paginationHtml + "</ul>";
document.getElementsByClassName("pagination")[0].innerHTML = paginationHtml;

//generating data for first page
for (i = itemPerPage; i < totalList; i++) {
    listItems[i].style.display = "none";
}

// function for generating page data based on page number
function generatePageData(pageNumber) {
    let firstIndex = (pageNumber * itemPerPage - (itemPerPage - 1)) - 1;
    let lastIndex = (pageNumber * itemPerPage) - 1;

    for (i = 0; i < totalList; i++) {
        listItems[i].style.display = "none";
    }
    for (i = firstIndex; i <= lastIndex; i++) {
        if (listItems[i]) {
            listItems[i].style.display = "block";
        }
    }
}