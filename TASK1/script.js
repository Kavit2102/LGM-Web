let searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', ()=>{
    if(document.getElementById('searchbar').style.top = '-70px'){
        document.getElementById('searchbar').style.top = '75px';
    }
    else if(document.getElementById('searchbar').style.top = '75px'){
        document.getElementById('searchbar').style.transition = '0.5s';
        document.getElementById('searchbar').style.top = '-70px';
    }
})