let current_url = document.location.href;
console.log(current_url)
    document.querySelectorAll(".navbar li a").forEach(function(e){
       console.log(e.href)
       if(e.href == current_url){
          e.classList += " current";
       }
       
    });