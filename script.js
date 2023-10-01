
/* document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
    });
    console.log(links);
}); 

SİLME İŞLEMİ ÇALIŞIYOR AMA EKLEME İŞLEMİ ÇALIŞMIYOR - BUNU DAHA SONRA DENE

*/ 

document.querySelectorAll('.nav-link').forEach(link => {    //navlink classlarının hepsini seçtim
    link.addEventListener('click', function (e) {   //navlinkler için bir listener oluşturdum ve tıkladığında fonksiyon çalışacak
        e.preventDefault(); // sayfanın refresh olmasını engelledim
        const targetId = this.getAttribute('href').substring(1); // tıklanan navbar item'ının href'inden id'yi aldım ve # işaretini kaldırdım
        const targetElement = document.getElementById(targetId); // tıklananın hedefinde olan html ögesini buldum

        targetElement.scrollIntoView({  // kaydırma işlemi gerçekleştirdim
            behavior: 'smooth' // bir kaydırma efekti ekledim ve bunu stil dosyamın içine en başa ekledim, düzgün görüntülenmesi için
        });
    });
});
