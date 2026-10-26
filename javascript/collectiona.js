        var productContainer = document.getElementById("collections");
        var search = document.getElementById("search");

        // Select only the product cards
        var productList = productContainer.querySelectorAll(".col-lg-3");

        search.addEventListener("input", function (event) {
            var enteredValue = event.target.value.toUpperCase();

            for (var count = 0; count < productList.length; count++) {
                var productName = productList[count].querySelector("h4");

                if (productName) {
                    var name = productName.textContent.toUpperCase();

                    if (name.indexOf(enteredValue) < 0) {
                        productList[count].style.display = "none";
                    } else {
                        productList[count].style.display = "";
                    }
                }
            }
        });