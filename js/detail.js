'use strict'

function renderProductById(arr) {
    let productSize = '';
    var contentRelatedPro = "";

    for (let i = 0; i < arr.size.length; i++) {
        productSize += `<span class='product-card__size'>${arr.size[i]}</span>`
        // console.log(arr.size[i]);
    }

    for (let j = 0; j < arr.relatedProducts.length; j++) {
        var productServer = arr.relatedProducts[j]
        contentRelatedPro += `
        <div class="col-12 col-sm-6 col-md-4">
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

    let content = "";

    // for (var i = 0; i < arr.length; i++) {
        // var productServer = arr[i];
        console.log(arr.id);
        content += `
        <div class="row detail_display">
                    <div class="col-7 product-card__image-box">
                        <img src="${arr.image}" alt="shoes" class="product-card__image img-fluid">
                    </div>
                    <div class="col-5"> 
                        <div class="product-card__info">
                            <h2 class="product-card__title">${arr.name}</h2>
                            <p class="product-card__subtitle">Men's Shoes</p>                            
                            <p class="product-card__price">$ ${arr.price}</p>
                            Select size:
                            <div class="product-card__size">                            
                            ${productSize} 
                            </div>
                            <button>Add to bag</button>
                            <button>Favourite</button>
                            <p class="product-card__short-desc">${arr.description}</p>
                            <p class="product-card__short-desc">Colour Shown: White/Black/White/Smoke Grey</p>
                            <p class="product-card__short-desc">alias: ${arr.alias}</p>
                            <p class="product-card__short-desc">quantity: ${arr.quantity}</p>
                        </div>
                    </div>
                </div>
                <div class="related_list">
                    <h1 class="related__product-category">
                        You Might Also Like
                    </h1>
                    ${contentRelatedPro}
                </div>`
        
    

    document.getElementById('productById').innerHTML = content;
}


function getProductById() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=1",
        method: "GET",
        // responseType: "JSON"
    })

    promise.then(function (res) {
        renderProductById(res.data.content)
    })

    promise.catch(function (err) {
        console.log(err)
    })
}

getProductById();