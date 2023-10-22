var categories = document.getElementsByClassName('categorie')
var products = document.getElementsByClassName('product')

function categorieFilters(){
    var nchecked = 0;
    for(var j = 0; j < categories.length; j++){
        var categorie = categories[j]
        if(categorie.checked){
            nchecked++
        }
    }
    if(nchecked==0){
        for(var i = 0; i < products.length; i++){
            var product = products[i]
            product.style.visibility = 'visible';
        }
    }else{
        for(var i = 0; i < products.length; i++){
            var product = products[i]
            product.style.visibility = 'hidden';
        }
        for(var j = 0; j < categories.length; j++){
            var categorie = categories[j]
            if(categorie.checked){
                for(var i = 0; i < products.length; i++){
                    var product = products[i]
                    if(product.getElementsByClassName('productCategorie')[0].textContent == categorie.name){
                        product.style.visibility = "visible";
                    }
                }
            }
        }
    }
}

