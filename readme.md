# 🧠 Browser Storage — localStorage, sessionStorage, cookie

Энэ төслөөр та браузерт өгөгдөл хадгалах 3 үндсэн арга болох:

- `localStorage`
- `sessionStorage`
- `document.cookie`

гэсэн ойлголтыг кодоор туршиж сурах болно.

---

## 📁 Файл: `index.html`

```html
<!DOCTYPE html>
<html lang="mn">
<head>
  <meta charset="UTF-8">
  <title>Storage Test</title>
</head>
<body>
  <script>
    // localStorage-д хадгалах
    localStorage.setItem('name', 'baljir1');
    console.log(localStorage.getItem('name'));

    // sessionStorage-д хадгалах
    sessionStorage.setItem('name', 'baljir2');
    sessionStorage.setItem('name', 'baljir200');
    console.log(sessionStorage.getItem('name'));

    // cookie-д хадгалах
    document.cookie = 'name=baljir4; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    console.log(document.cookie);
  </script>
</body>
</html>
```

---

## 📌 Хадгалалтын төрлүүдийн ялгаа

| Төрөл | Тайлбар | Дуусах хугацаа | Браузер хаагдсаны дараа хадгалагдана уу? |
|-------|---------|----------------|----------------------------------------|
| `localStorage` | Удаан хадгалалт | Хэрэглэгч өөрөө арилгах хүртэл | ✅ Тийм |
| `sessionStorage` | Зөвхөн тухайн tab session | Tab хаагдмагц устдаг | ❌ Үгүй |
| `cookie` | Хугацаатай жижиг хадгалалт | `expires` хугацаагаар тодорхойлно | ✅ Тийм |

---

## ✅ Ашиглах тохиолдол

- `localStorage` — хэрэглэгчийн тохиргоо хадгалах (dark mode, token гэх мэт)
- `sessionStorage` — form-ийн түр өгөгдөл, логин хийж ороод tab доторх session
- `cookie` — authentication, server-рүү өгөгдөл дамжуулах, expires тохируулах шаардлагатай үед

---

---

## 🎓 Хичээлд тохирох хэллэг (Монгол оюутнуудад)

- `localStorage` = **"урт хугацааны хадгалалт"**
- `sessionStorage` = **"түр хадгалалт (tab дотор)"**
- `cookie` = **"хуучны хадгалалт, хугацаатай"**
