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
            product.style.display = 'block';
        }
    }else{
        for(var i = 0; i < products.length; i++){
            var product = products[i]
            product.style.display = 'none';
        }
        for(var j = 0; j < categories.length; j++){
            var categorie = categories[j]
            if(categorie.checked){
                for(var i = 0; i < products.length; i++){
                    var product = products[i]
                    if(product.getElementsByClassName('productCategorie')[0].textContent == categorie.name){
                        product.style.display = 'block';
                    }
                }
            }
        }
    }
    var nvisible = 0
    for(var i = 0; i < products.length; i++){
        var product = products[i]
        if(product.style.display == 'block'){
            nvisible++
        }
    }
    document.getElementById("nProduct").textContent = nvisible;

}

categorieFilters()

function clearFilters(){
    for(var j = 0; j < categories.length; j++){
        var categorie = categories[j]
        categorie.checked = false;
    }
    categorieFilters();
}

