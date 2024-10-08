# About limaMenit.net (Dapat juga diakses melalui https://yourlifeproject.id/limamenit/)

Telat masuk kelas karena lama antri di kantin?? Atau kehabisan makanan favorit di kantin sekolah? limaMenit.net adalah sebuah website yang merupakan solusi untuk memesan makanan di kantin sekolah yang **cepat dan sehat.** Murid dapat memesan makanan kantin sehari sebelumnya sehingga keesokan harinya makanan dapat langsung disiapkan dan disantap di jam istirahat.

**limaMenit.net** bukan sekedar website pemesanan, namun menyediakan beberapa fitur menarik yang mendukung **Pola Makan yang Berkelanjutan** seperti:
+ __Zero waste__ karena murid memesan secukupnya dan kantin juga akan menyiapkan makanan secukupnya berdasarkan pesanan
+ Sistem point yang memotivasi murid untuk __memesan sayur dan buah lokal__ yang memiliki point yang lebih tinggi. Point dapat ditukarkan dengan berbagai hadiah yang menarik
+ __Perhitungan  total kalori__ dari makanan yang dipesan sehingga murid dapat mengetahui apakah pesanannya sudah memenuhi kebutuhan kalori anak sekolah
+ __Pengingat untuk memesan sayur dan buah__ jika belum memasukannya di dalam menu pesanan
+ __Informasi gizi__ untuk setiap menu

### Homepage
Homepage terdiri dari:
+ About us: sekilas info mengenai limaMenit.net
+ Testimoni: beberapa testimoni dari murid, guru dan pemilik kantin mengenai keunggulan limaMenit.net
+ Artikel: studi literatur mengenai Pola Makan Berkelanjutan
+ Login box: karena masih merupakan website contoh, boleh memasukkan NIS (Nomor Induk Siswa) berupa angka dan password apa saja. Namun jika tidak memasukkan NIS dan password, akan muncul pesan error. Ketika di-submit, maka hasilnya tidak bisa diambil di server karena dalam program javascript js/indexjs.js sudah dilakukan preventDefault ketika disubmit.
![Home-Desktop](README.md%20asset/Home-Desktop.png)
![Home-Mobile](README.md%20asset/Home-1-Mobile.png)
![Home-Mobile](README.md%20asset/Home-2-Mobile.png)

### Order Page
Berbagai menu dapat dipilih di Order Page. Menu dibagi dalam kategori makanan pokok, lauk, sayur dan buah. Setiap menu memiliki point dan detail informasi gizi. ![Menu_Detail-Desktop.png](README.md%20asset/Menu_Detail-Desktop.png) Point lebih besar diberikan kepada pemesan buah dan sayur lokal. Terdapat pula perhitungan total kalori, total harga dan total point. 
Berdasarkan total kalori akan ada pesan yang memotivasi pemesanan makanan sehat sebagai berikut:
+ Jika total kalori > 600 kkal
  “Wow kamu lagi lapar banget ya? Imbangi dengan olahraga ya buat bakar kalorinya”
+ Jika total kalori 300-600 kkal
  “Selamat makan =)”
+ Jika total kalori <300 kkal
  “Ga mau nambah lagi nih?”
+ Kalau belum memesan sayur dan buah
  “Yakin ga mau tambah sayur dan buah?”
Jika pesanan sudah dikonfirmasi, akan masuk ke halaman yang berisi pesan bahwa pesanan telah berhasil dilakukan.
Informasi detail mengenai point dapat diakses jika menekan tombol **Tukarkan Point >>** pada total point.
![Order-Desktop.png](README.md%20asset/Dashboard-1-Desktop.png)
![Order-Desktop.png](README.md%20asset/Dashboard-2-Desktop.png)
![Order-Mobile.png](README.md%20asset/Dashboard-1-Mobile.png)
![Order-Mobile.png](README.md%20asset/Dashboard-2-Mobile.png)
![Order-Mobile.png](README.md%20asset/Dashboard-3-Mobile.png)

### Detail Info Point
Terdapat info total point dan pesan motivasi untuk memesan buah dan sayur lokal.
Berbagai hadiah ditawarkan jika sudah mengumpulkan point sebagai berikut:
+ 500 point Free Fruit
+ 1000 point Free chocolate/ strawberry milk
+ 5000 point Cinema Ticket
Jika point sudah ditukarkan ke kantin, maka total point akan berkurang
![Point-Desktop.png](README.md%20asset/Point-Desktop.png)
![Point-Mobile.png](README.md%20asset/Point-1-Mobile.png)
![Point-Mobile.png](README.md%20asset/Point-2-Mobile.png)

### Lembar Pesanan Telah Berhasil Dilakukan
![Order-Desktop.png](README.md%20asset/Order-Desktop.png)
![Order-Mobile.png](README.md%20asset/Order-Mobile.png)

# Bukti Google Lighthouse
![index.html Google Lighthouse](README.md%20asset/index-Google%20Lighthouse.png)
![dashboard.html Google Lighthouse](README.md%20asset/dashboard-Google%20Lighthouse.png)
![point.html Google Lighthouse](README.md%20asset/point-Google%20Lighthouse.png)
![order.html Google Lighthouse](README.md%20asset/order-Google%20Lighthouse.png)
