---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
author: "mr.panda"
categories: 
- news
- Programing
- tips&trick
- css
tags:
- css
- html
- javascript
year: "{{ dateFormat "2006" .Date }}"
month: "{{ dateFormat "2006/01" .Date }}"
cover:
    image: "/img/1.jpg"
    alt: 'First post' 
    caption: "first post"
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
<!--more-->

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.