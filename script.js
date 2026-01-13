const goTopBtn = document.querySelector("[data-go-top]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  });

  const bar = document.getElementById("bar");
  const nav = document.getElementById("navbar-list");
  const close = document.getElementById("close");

  if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
  }
  if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
  }

  const closeIcon = document.getElementById('close-icon');
  const navSearch = document.getElementById('nav-search');
  const SearchBar = document.getElementById('search-bar');

  if(navSearch){
    navSearch.addEventListener('click', (e)=>{
      e.preventDefault();
      SearchBar.classList.add('active');
    })
  }
  if(closeIcon){
    closeIcon.addEventListener('click', (e)=>{
      e.preventDefault();
        SearchBar.classList.remove('active');
    })
  }
  const closeIcon2 = document.getElementById('close-icon');
  const navSearch2 = document.getElementById('nav-search2');
  const SearchBar2 = document.getElementById('search-bar');

  if(navSearch2){
    navSearch2.addEventListener('click', (e)=>{
      e.preventDefault();
      SearchBar2.classList.add('active');
    })
  }
  if(closeIcon2){
    closeIcon2.addEventListener('click', (e)=>{
      e.preventDefault();
        SearchBar2.classList.remove('active');
    })
  }
