function highlight() {
    //Write your code here

    var strong = document.getElementsByTagName('strong');
    
    for(var i in strong){
        strong[i].style.color = 'green';
    }


}


function return_normal() {
    //Write your code here
   

    var strong = document.getElementsByTagName('strong');
    
    for(var i in strong){
        strong[i].style.color = 'black';
    }

}
