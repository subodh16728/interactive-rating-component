
document.getElementById('submitpage').style.display = "none";

const selectedlink = (linkNumber) =>{
  const links = document.querySelectorAll('#links a');
  console.log(links);
  links.forEach((link, index) => {
    if (index + 1 === linkNumber) {
      link.classList.add("bg-light-grey", "text-white");
    } else {
      link.classList.remove("bg-light-grey", "text-white");
    }
  });
}

clicked.addEventListener('click', () => {
  if (selectedRating == null){
    alert('Please select a rating');
  } else{
    document.getElementById('mainpage').style.display = "none";
    document.getElementById('submitpage').style.display = "flex";
  }
  
});




let selectedRating = null;

const ratingOptions = document.querySelectorAll('a.bg-medium-grey-o');

console.log(ratingOptions);
ratingOptions.forEach((option) => {
  console.log(option);
  option.addEventListener('click', () => {
    selectedRating = option.textContent;
    console.log('Selected rating:', selectedRating);
    document.getElementById('selectrating').innerHTML = `You selected ${selectedRating} out of 5`;

  });
});

