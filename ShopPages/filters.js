var products = document.getElementsByClassName('product')

var AllCategories = []
for(var i = 0; i < products.length; i++){
    var product = products[i]
    c = product.getElementsByClassName('productCategorie')[0].textContent
    if (!AllCategories.includes(c)){
        AllCategories.push(c)
    }
}

for (var i = 0; i < AllCategories.length; i++) {
    c = AllCategories[i]
    code = "<div>"
    code += "<input class='categorie' name='"+c+"' onchange='categorieFilters()' type='checkbox' id='"+c +"Box'"
    code += "<label for='"+c+"Box'>"+c+"</label>"
    code+="</div>"
    document.getElementById('Categories').innerHTML += code;
}
var categories = document.getElementsByClassName('categorie')

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

