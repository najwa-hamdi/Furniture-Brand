let products = [
    {
        name: "Ferm Living Dou Braided Rattan",
        price: 500,
        material: "wood",
        color: "beige",
        imageClass: "imge2",
    },
    {
        name: "Nkuku Dia Natural Jute Lampshade",
        price: 660,
        material: "fabric",
        color: "beige",
        imageClass: "imge3",
    },
    {
        name: "Pendant Rattan Ceiling Light",
        price: 905,
        material: "fabric",
        color: "beige",
        imageClass: "imge4",
    },
    {
        name: "Otoro Round Glass Pendant Light",
        price: 550,
        material: "leather",
        color: "beige",
        imageClass: "imge1",
    },
  ];
  
  function displayProducts(products) {
    const productContainer = document.querySelector(".products");
    productContainer.innerHTML = ""; // Clear existing content
  
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("card", "prod"); // Ensure the correct classes are added
  
        productCard.setAttribute("data-price", product.price);
        productCard.setAttribute("data-material", product.material);
        productCard.setAttribute("data-color", product.color);
  
        productCard.innerHTML = `
            <div class="card-img ${product.imageClass}"></div>
            <div class="card-body">
                <a href="#" class="sofa2">${product.name}</a>
                <div class="like2">
                    <a href="#"><span class="icon-park-outline--like"></span></a>
                </div>
                <div class="price-container">
                    <div class="price2"><span>${product.price} LE</span></div>
                    <div class="shopping2">
                        <a href="#"><span class="mdi--cart-outline"></span></a>
                    </div>
                </div>
            </div>
        `;
  
        productContainer.appendChild(productCard);
    });
  }
  
  // Call the function to display products on page load
  window.onload = function() {
    displayProducts(products);
  };
  
  
  
  // Filtering function
  function filterProducts() {
    let priceFilter = document.getElementById("price-filter").value;
    let materialFilter = document.getElementById("material-filter").value;
    let colorFilter = document.getElementById("color-filter").value;
    let searchInputValue = document.getElementById("search-input").value.toUpperCase();
  
    let filteredProducts = products.filter(product => {
        let match = true;
  
        // Filter by price
        if (priceFilter === "low" && product.price >= 2000) match = false;
        if (priceFilter === "medium" && (product.price < 2000 || product.price > 3000)) match = false;
        if (priceFilter === "high" && product.price <= 3000) match = false;
  
        // Filter by material
        if (materialFilter !== "all" && product.material !== materialFilter) match = false;
  
        // Filter by color
        if (colorFilter !== "all" && product.color !== colorFilter) match = false;
  
        // Search by product name
        if (!product.name.toUpperCase().includes(searchInputValue)) match = false;
  
        return match;
    });
  
    displayProducts(filteredProducts);
  }
  
  // Event listeners for filter dropdowns
  document.getElementById("price-filter").addEventListener("change", filterProducts);
  document.getElementById("material-filter").addEventListener("change", filterProducts);
  document.getElementById("color-filter").addEventListener("change", filterProducts);
  
  // Show search input on icon click
  document.getElementById("search-icon").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input");
    searchInput.style.display = "block";
    searchInput.focus();
  });
  
  // Execute search when typing
  document.getElementById("search-input").addEventListener("input", filterProducts);
  
  // Initially display all products on page load
  window.onload = () => {
    displayProducts(products); // Display all products initially
  };