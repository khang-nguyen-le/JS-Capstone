'use strict'

function renderProduct(arr) {
    var content = "";

    for (var i = 0; i < arr.length; i++) {
        var productServer = arr[i]
        content += `
        <div class="col-4">
                <div class="product-card">
                    <a href="#" class="product-card__link-overlay"></a>
                    <div class="product-card__image-box">
                        <img src="${productServer.image}" alt="shoes" class="product-card__image img-fluid">
                    </div>
                    <div class="product-card__info">
                        <h2 class="product-card__title">${productServer.name}</h2>
                        <p class="product-card__subtitle">Men's Shoes</p>
                        <p class="product-card__short-desc">${productServer.shortDescription}</p>
                        <p class="product-card__price">$ ${productServer.price}</p>
                    </div>
                </div>
            </div>
        `
    }

    document.querySelector('.products').innerHTML = content;
}

function getProduct() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        // responseType: "JSON"
    })

    promise.then(function (res) {
        renderProduct(res.data.content)
    })

    promise.catch(function (err) {
        console.log(err)
    })
}

getProduct()