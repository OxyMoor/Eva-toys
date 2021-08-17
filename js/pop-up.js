var Els = document.getElementsByClassName("item");

for(var i=0; i < Els.length; i++){
    Els[i].addEventListener('click', function(e){
       var indx = e.target.dataset.index
       var pop = document.getElementsByClassName('pop-up'+indx)
        pop[0].style.display = "block"
        pop[0].addEventListener('click', function(e){
            e.target.style.display = "none";
        })
    })
} 

