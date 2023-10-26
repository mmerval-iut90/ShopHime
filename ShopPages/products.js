for (var i = 0; i < products.length; i++) {
    code = "<div class='product'>"
    product = products[i]
    code += "<div class='productImage' style='background-image:"+ 'url("'+product[0]+'")'+";'></div>"
    code += "<p class='productName'>"+product[1]+"</p>"
    code += "<div class='price'><p class='productPrice'>"+product[2]+"</p><p class='unite'>$</p></div>"
    code += "<p class='productCategorie' hidden>"+product[3]+"</p>"
    code += "</div>"
    document.getElementById("ProductGrid").innerHTML += code;
}