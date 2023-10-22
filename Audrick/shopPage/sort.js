function ascendingPriceSort(){
    var prices = document.getElementsByClassName("productPrice");
    var tab_prices = [];
    for (var i = 0; i < prices.length; i++) {
        tab_prices.push(prices[i]);
    }
    for (var i = 0; i < prices.length; i++) {
        var minElement = 0;
        var minPrice = parseInt(tab_prices[0].textContent);
        for (var j = 1; j < tab_prices.length; j++) {
            price = parseInt(tab_prices[j].textContent)
            if(price<minPrice){
                minElement = j;
                minPrice = price;
            }
        }
        
        var product = tab_prices[minElement].parentNode;
        tab_prices.splice(minElement,1);
        product.style.order = i;
    }
}

function descendingPriceSort(){
    var prices = document.getElementsByClassName("productPrice");
    var tab_prices = [];
    for (var i = 0; i < prices.length; i++) {
        tab_prices.push(prices[i]);
    }
    for (var i = 0; i < prices.length; i++) {
        var maxElement = 0;
        var maxPrice = parseInt(tab_prices[0].textContent);
        for (var j = 1; j < tab_prices.length; j++) {
            price = parseInt(tab_prices[j].textContent)
            if(price>maxPrice){
                maxElement = j;
                maxPrice = price;
            }
        }
        var product = tab_prices[maxElement].parentNode;
        tab_prices.splice(maxElement,1);
        product.style.order = i;
    }
}

function popularSort(){
    var products = document.getElementsByClassName('product');
    for(var i = 0; i < products.length; i++){
        var product = products[i]
        product.style.order = 0; 
    }
}

function changeSort() {
    var selectElement = document.getElementById("SelectSortType");
    var selectedValue = selectElement.value;
    if (selectedValue === "ascendingPrice") {
        ascendingPriceSort();
    } else if (selectedValue === "descendingPrice") {
        descendingPriceSort();
    } else if (selectedValue === "popular") {
        popularSort();
    }
}

changeSort()