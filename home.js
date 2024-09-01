

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

 

const playButton = document.getElementById("play-button");
const video = document.getElementById("video");

playButton.onclick = function() {
    video.style.display = "block"; // عرض الفيديو
    video.play(); // تشغيل الفيديو
};


function showSection(sectionId, element) {
    // منع إعادة تحميل الصفحة
    event.preventDefault();

    // إخفاء كل الأقسام
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // إظهار القسم المحدد
    document.getElementById(sectionId).classList.remove('hidden');
    
    // تغيير العلامة النشطة
    const links = document.querySelectorAll('.categ a div');
    links.forEach(link => {
        link.classList.remove('active'); // إزالة النمط النشط من كل الروابط
    });
    
    element.querySelector('div').classList.add('active'); // إضافة النمط النشط للعناصر المحددة
}

const likeIcon = document.getElementById('like-icon');
const favoritesList = document.getElementById('favorites');
const productName = document.querySelector('.sofa').innerText;

likeIcon.addEventListener('click', () => {
    likeIcon.classList.toggle('liked'); // تحويل الإيقونة إلى اللون الأحمر

    const listItem = document.createElement('li');
    listItem.innerText = productName;

    // تحقق إذا كان المنتج موجود بالفعل
    if (!likeIcon.classList.contains('liked')) {
        // إذا لم يكن اللون أحمر، احذف المنتج من المفضلات
        const items = favoritesList.getElementsByTagName('li');
        for (let item of items) {
            if (item.innerText === productName) {
                favoritesList.removeChild(item);
                break;
            }
        }
    } else {
        // إذا كان اللون أحمر، أضف المنتج إلى المفضلات
        favoritesList.appendChild(listItem);
    }
});