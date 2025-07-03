// localStorage-д өгөгдөл хадгалах
localStorage.setItem('name', 'baljir1');
console.log(localStorage.getItem('name'));

// sessionStorage-д өгөгдөл хадгалах
sessionStorage.setItem('name', 'baljir2');
sessionStorage.setItem('name', 'baljir200');
console.log(sessionStorage.getItem('name'));

// cookie-д өгөгдөл хадгалах
document.cookie = 'name=baljir4; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
console.log(document.cookie);
