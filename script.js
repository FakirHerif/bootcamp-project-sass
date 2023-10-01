
document.addEventListener('DOMContentLoaded', function() {     // sayfa açıldığında nav-link classında bulunan tüm active classlarını kaldırmak için bu fonksiyonu kullandım
    const linkElements = document.querySelectorAll('.nav-link');
    linkElements.forEach(linkElement => {
        linkElement.classList.remove('active');
            });


    linkElements.forEach(linkElement => {       // bu fonksiyondaki amaç tıkladığım ögeye active classını eklemek ve bu sayede istediğim stili sadece tıkladığım ve active class'ı yerleşecek olan ögeye uygulayabilmek.
        linkElement.addEventListener('click', function(event) {
            linkElements.forEach(element => {
                element.classList.remove('active');     // burası bir ögeye tıkladığım zaman diğer ögedeki active class'ları siliyor, bunu eklemezsem daha önce tıkladığım ögelerde ki active class'ı silinmez bu yüzden eklemek gerekiyordu
            });
            event.target.classList.add('active');   // burası active classını ekliyor
        });
    });
});



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




document.addEventListener('DOMContentLoaded', function () {
    const linkElements = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    let isScrolling = false;

    linkElements.forEach(linkElement => {
        linkElement.addEventListener('click', function (event) {
            linkElements.forEach(element => {
                element.classList.remove('active');
            });
            event.target.classList.add('active');
        });
    });

    window.addEventListener('scroll', function () {
        if (!isScrolling) {
            window.requestAnimationFrame(function () {
                let currentSectionId = null;

                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 50) {
                        currentSectionId = section.getAttribute('id');
                    }
                });

                if (currentSectionId) {
                    linkElements.forEach(linkElement => {
                        linkElement.classList.remove('active');
                        if (linkElement.getAttribute('href').substring(1) === currentSectionId) {
                            linkElement.classList.add('active');
                        }
                    });
                }

                isScrolling = false;
            });

            isScrolling = true;
        }
    });

    // Sayfa yenilendiğinde active sınıfını kaldır
    window.addEventListener('load', function () {
        linkElements.forEach(linkElement => {
            linkElement.classList.remove('active');
        });
    });
});
