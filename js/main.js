fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
    displayData(data)
})

/*function displayData(info)
{
    
    //var element  = document.querySelectorAll("div");
    //console.log(element[0]);
    //console.log(element[1]);
    //var newElement = document.createElement("h2")
    //console.log(newElement)
    //var newElement = document.createElement("p")
    //newElement.textContent="paragraph tag from javascript"
    //console.log(newElement)
    //var bodyElement = document.querySelector("body");
    //bodyElement.append(newElement);
    var sampleElement=document.createElement("img")
    sampleElement.src="img/1.jpg";
    //sampleElement.setAttribute("id","image");
    //sampleElement.setAttribute("alt","image");
    //sampleElement.setAttribute("class","image1 image2,image3");
    sampleElement.classList.add("class1","class2","class3");
    sampleElement.classList.remove("class3");
    var bodyElement = document.querySelector("body");
    bodyElement.append(sampleElement);
}*/
function displayData(info)
{
    var bodyElement = document.querySelector("body");
    var row = document.createElement("section");
    row.classList.add("row","justify-content-center");
    bodyElement.append(row);

    info.mobiles.map(value=>{
        var column=document.createElement("article");
        column.classList.add("col-sm-10","col-md-6","col-lg-3");
        row.append(column)

        //card
        var card = document.createElement("div");
        card.classList.add("card","mt-3");

        //card-body
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        //Image
        var imageElement=document.createElement("img");
        imageElement.src=value.image;
        imageElement.classList.add("img-responsive");
        imageElement.alt=value.name;
        //Name
        var nameElement = document.createElement("h2");
        nameElement.textContent=value.name;
        nameElement.classList.add("text-center","text-danger");
        //Price
        var price = document.createElement("p");
        price.classList.add("text-center","text-danger");
        price.textContent ="Offer-Price "+"₹"+ value.price+"/-";
        //originalprice
        var originalprice = document.createElement("p");
        originalprice.classList.add("text-center","text-danger");
        originalprice.innerHTML ="Original-Price "+"<s>₹"+ value.originalprice+"/-</s>";
        //button
        var buttonParent = document.createElement("div");
        buttonParent.classList.add("d-grid","gap-2");
        //add to cart
        var button = document.createElement("button");
        button.textContent="Add to Cart";
        button.classList.add("btn","btn-primary");
        buttonParent.append(button);
        //buynow
        var buynow = document.createElement("button");
        buynow.textContent="Buy Now";
        buynow.classList.add("btn","btn-primary");
        buttonParent.append(buynow);
        
        cardBody.append(nameElement);
        cardBody.append(price);
        cardBody.append(originalprice);
        cardBody.append(imageElement);
        cardBody.append(buttonParent);
        card.append(cardBody);
        column.append(card);


    })
}