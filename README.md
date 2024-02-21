# embersense-be
Backend | Capstone Project DTETI | Embersense - Pendeteksi Dini Kebakaran Hutan

## Overview
Backend ini memiliki 1 fungsi utama, yaitu mensubscribe mqtt data sensor, melakukan validasi, lalu menyimpannya ke Firebase Firestore.
```
MQTT Broker (berisi data sensor) -> embersense-be -> Firebase Firestore
```

Backend ini tidak memiliki Rest API karena Firebase Firestore telah memiliki library untuk mengambil datanya secara mudah dari frontend.

## How to run
1. Clone repository ini
2. Buat file `.env` dari template file `.env.example`
3. Jalankan `npm install`
4. Jalankan `npm run dev`
