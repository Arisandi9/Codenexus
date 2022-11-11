---
title: "Cara Install React.js Secara Offline"
date: 2022-11-11T15:29:50+09:00
draft: false
author: "mr.panda"
keywords: "cara install react.js secara offline"
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
    image: "/img/cara-install-react-secara-offline/thumbnail.jpg"
    alt: 'cara install react secara offline' 
    
---
![cara install react secara offline](/img/cara-install-react-secara-offline/thumbnail.jpg)
React.js merupakan library javascript paling populer saat, di post kali ini kita akan mengistall react secara offline
<!--more-->



hallo selamat datang di codenexus, terdapat banyak framework dan library js yang bertebaran di internet saat ini, salah satu nya react.js 

pertama kita sepakati terlebih dahulu bahwa react.js itu sebenarnya library bukan sebuah freamework ok 😀😀

di situs resminya sendiri mengatakan bahwa react.js adalah sebuah library😀

di official documentasi react sendiri untuk dapat menggunakan react kita perlu mengistal nya lewat npx atau pun lewat cdn nya mereka, tapi masalah utama nya kedua cara ini memerlukan internet yang mana bermasalah bagi programer desa seperti saya 😅

dan akhirnya saya temukan cara untuk menginstal react.js secara offline berikut cara nya

##### 1. pertama sediakan internet

loh!!! kok internet tadi...🤬
sabar dulu guys, internet di butuhkan hanya satu kali untuk menginstal package ko, setelah ini kalian udah ga pake internet nya  ko bahkan kalau ulang dari awal .


#### 2. instal package

sebelumnya lajut ke langka yang kedua ini saya asumsi kan kalian sudah menginstal npm dan yarn di terminal kawan-kawan ya

jika sudah buka terminal nya, saya pake git bash 

lalu ketikan perintah di bawah

```npm
    npm install -g create-react-app-offline
```

maka di tunggu saja,tergantung koneksi internet nya 

#### 3. install react.js

jika sudah selesai mengistall package, langka selajutnya adalah mengistall react.js itu sendiri.

buka kembali terminal nya lalu ketikan perintah di bawah 

```npm 
    crao -n my-app
```

my-app adalah nama aplikasi react kita, kalian bebas menganti nya, lalu klik enter dan tunggu sampai selesai


udah selesai ??

coba kita jalankan react nya 

masuk ke directory nya terlebih dahlulu 

```
    cd my-app
```

lalu ketik 

```
    yarn start
```

berikut tampilan jika berhasil
![succes react](/img/cara-install-react-secara-offline/succes-react.JPG)

lalu jalankan di browser, ketik

```
 localhost:3000
 ```

 ![succes react broser](/img/cara-install-react-secara-offline/succes-react-browser.JPG)

