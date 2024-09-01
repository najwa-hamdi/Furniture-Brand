function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src;
}


let count = 1; // المتغير لتخزين العدد الحالي

const numDisplay = document.querySelector('.num'); // تحديد العنصر الذي يعرض العدد

document.getElementById('add').addEventListener('click', (event) => {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة
    count++; // زيادة العدد
    numDisplay.innerText = count; // تحديث العرض
});

document.getElementById('miuns').addEventListener('click', (event) => {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة
    if (count > 1) { // التأكد من أن العدد لا يقل عن 1
        count--; // تقليل العدد
        numDisplay.innerText = count; // تحديث العرض
    }
});
function addToCart(product) {
    // الحصول على السلة من Local Storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // إضافة المنتج إلى السلة
    cart.push(product);
    
    // تحديث السلة في Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // إظهار رسالة للمستخدم
    alert(`${product.name} أُضيف إلى السلة!`);
    
    // طباعة تفاصيل المنتج في وحدة التحكم
    console.log('Product added:', product.name);
    console.log('Price:', product.price);
    console.log('Image:', product.image);
}