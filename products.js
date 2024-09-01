let products = [
  {
      name: "Nevada Brown Leather Two Seater Sofa",
      price: 2000,
      material: "wood",
      color: "beige",
      imageClass: "imge2",
  },
  {
      name: "Bella Sofa 2 Seater",
      price: 3295,
      material: "fabric",
      color: "red",
      imageClass: "imge3",
  },
  {
      name: "Didsbury Sofa 2 Seater",
      price: 2525,
      material: "fabric",
      color: "brown",
      imageClass: "imge4",
  },
  {
      name: "Lily Sofa 3 Seater",
      price: 3850,
      material: "leather",
      color: "beige",
      imageClass: "imge1",
  },
  {
      name: "Penny Sofa 3 Seater",
      price: 4100,
      material: "fabric",
      color: "beige",
      imageClass: "imge5",
  },
  {
      name: "Hugo Chesterfield Sofa",
      price: 4500,
      material: "wood",
      color: "green",
      imageClass: "imge6",
  },
  {
    name: "Harry Chesterfield Sofa",
    price: 3855,
    material: "wood",
    color: "beige",
    imageClass: "imge7",
  },
  {
    name: "Rowan Corner Sofa",
    price: 4800,
    material: "leather",
    color: "green",
    imageClass: "imge8",
  },
  {
    name: "Chorlton Corner Sofa",
    price: 4355,
    material: "fabric",
    color: "red",
    imageClass: "imge9",
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

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.popup-close');
  const popupBtn = document.getElementById('popup-btn');

  // Show the pop-up when the page loads
  popup.style.display = 'block';

  // Close the pop-up when the close button is clicked
  closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  // Close the pop-up when the "Get Started" button is clicked
  popupBtn.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  // Close the pop-up if the user clicks outside of the pop-up content
  window.addEventListener('click', (event) => {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  });
});






// Select all elements with the class 'like2'
const likeButtons = document.querySelectorAll('.like2');

// Iterate over each 'like2' element
likeButtons.forEach(button => {
  // Add a click event listener to each button
  button.addEventListener('click', function() {
    // Toggle the 'added' class on the button
    this.classList.toggle('added');
  });
});






document.addEventListener('DOMContentLoaded', () => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Function to update heart icon based on wishlist status
  function updateHeartIcon() {
      document.querySelectorAll('.product-card').forEach(card => {
          const productId = card.getAttribute('data-id');
          const heartIcon = card.querySelector('.material-symbols--favorite');
          if (wishlist.includes(productId)) {
              heartIcon.classList.add('wishlisted');
          } else {
              heartIcon.classList.remove('wishlisted');
          }
      });
  }

  // Event listener for adding/removing from wishlist
  document.querySelectorAll('.wishlist-btn').forEach(button => {
      button.addEventListener('click', () => {
          const productCard = button.closest('.card prod');
          const productId = productCard.getAttribute('data-id');
          const heartIcon = button.querySelector('.material-symbols--favorite');

          if (wishlist.includes(productId)) {
              // Remove from wishlist
              const index = wishlist.indexOf(productId);
              if (index > -1) {
                  wishlist.splice(index, 1);
              }
              heartIcon.classList.remove('wishlisted');
          } else {
              // Add to wishlist
              wishlist.push(productId);
              heartIcon.classList.add('wishlisted');
          }

          // Update localStorage and heart icon
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
      });
  });

  // Initialize heart icons based on wishlist data
  updateHeartIcon();
});






document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.shopping2 a');

  cartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default link behavior

          const productCard = button.closest('.card.prod');
          const productName = productCard.querySelector('.sofa2').textContent;
          const productPrice = productCard.getAttribute('data-price');
          const productMaterial = productCard.getAttribute('data-material');
          const productColor = productCard.getAttribute('data-color');
          const productImageClass = productCard.querySelector('.card-img').classList[1]; // Get the image class

          // Get cart from localStorage or initialize it
          let cart = JSON.parse(localStorage.getItem('cart')) || [];

          // Add product to cart
          cart.push({
              name: productName,
              price: productPrice,
              material: productMaterial,
              color: productColor,
              imageClass: productImageClass
          });

          // Save updated cart to localStorage
          localStorage.setItem('cart', JSON.stringify(cart));

          alert('Product added to cart!');
      });
  });
});
button.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Cart icon clicked");  // This should print in the console when clicked
  // Continue with adding to cart logic
});
console.log(cartButtons); 