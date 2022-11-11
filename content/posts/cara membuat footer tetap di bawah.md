---
title: "Cara Membuat Footer Tetap Di Bawah"
date: 2022-11-07T10:25:56+09:00
draft: false
author: "mr.panda"
keywords: "cara membuat footer tetap dibawah, buat footer tetap di bawah, sticky footer, membuat footer tetap di bawah"
categories: 
- news
- Programing
- tips&trick
- css
tags:
- css
- html
- javascript
year: "2022"
month: "2022/11"
cover:
    image: "/img/footer-tetap-dibawah/thumbnail.jpg"
    alt: 'cara membuat footer tetap di bawah' 
---


![thumbnail](/img/footer-tetap-dibawah/thumbnail.jpg)
Bagaiman Cara membuat footer dari website kita tetap berada di posisi bawah ??
<!--more-->

biasanya kerangka website terdiri atas header, body , dan footer, pada footer kita ( developer web ) kerap kali mendapat masalah ketika melakukan coding pada website, masalah yang terdapat pada foooter adalah posisi footer yang akan selalu mengikuti banyak content pada website kita 

contoh 

![footer tidak berada di posisi bawah](/img/footer-tetap-dibawah/1.jpg)

di gambar terdapat space yang cukup besar di bawah, bagaiman cara mengatasi nya

oo iya untuk code website di atas kalian dapat melihat di bawah ini 

```html
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Helloapps</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <div class="logo">Helloapps</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="container">
        <main>
            <h1>My Post</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatibus eius quis eum dignissimos. Qui ut non excepturi possimus autem, vero tempora, beatae aliquam rerum impedit veritatis dolor porro! Illum!</p>
            
        </main>
    </div>

    <footer>
        <div class="container">
            <span>Copyrigt &copy; 2022</span>
            <span>Helloapps</span>
        </div>
    </footer>
</body>
</html>
```

```css
    * {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color:inherit;
}

ul {
    list-style: none;
}

:root {
    --primary-color: rgb(53, 138, 102);
}

body {
    font-family: "poppins";
}

.container {
    width: 90%;
    max-width: 1024px;
    margin-inline:auto;
}

header {
    background-color: var(--primary-color);
    color:white;
    text-align: center;
}

nav .logo {
    font-size: 2rem;
    font-weight: 500;
    padding-top: .5rem;
}

nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    padding: 1rem 0;
}

/* footer */
footer {
    background-color: var(--primary-color);
    color:white;
    padding:1.5rem;
    font-size: 1.2rem;
    text-align: center;
    
}

```

oke sekarang bagaiman cara untuk membuat footer untuk tetap berada di bawah, bahkan ketika kontent kita tidak banyak 

sebenarnya cara nya sangat gampang 😁😁
kita cuma perlu menambah sedikit css
pertama - tama kita ketik css di bawah pada taq body
jangan kuatir nanti akan di jelaskan

```css
 body {
      font-family: "poppins";
      min-height: 100vh;
      display:flex;
      flex-direction: column;
 }
```

lalu tambahkan ubah pada bagiant footer seperti berikut

```css
    footer {
    background-color: var(--primary-color);
    color:white;
    padding:1.5rem;
    font-size: 1.2rem;
    text-align: center;
    margin-top:auto;
    }
```

lalu save maka footer  akan tetap berada di bawah, bahkan ketika kontent tidak banyak
![footer tidak berada di posisi bawah](/img/footer-tetap-dibawah/2.JPG)

#### Penjelesaan

pertama kita berikan display: flex pada body dan flex-direction : column agar child body tidak
berjejeran tapi turun kebawah, lalu berikan min-height : 100vh supaya tinggi body harus 100% terhadap viewport

ketika kita memberikan display flex, pada parent ( atau body) maka kita bisa mengatur  tataletak child (anak dari body : header, nav , main , footer) melalui margin, disini kita menggunakan margin-top : auto maka footer akan selalu tetap di bawah apa pun yang terjadi.

itu saja mungkin blog kali ini ,
see you ini next blog good bye 😁😁😁
