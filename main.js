console.log("%c this website powered By Would-Art-team", "font-size:21px;font-weight: 800; background-color:black; color:#2463EB; border-radius:9px; padding-inline:32px;");
console.log("%c AT-DEV.", "font-size:21px;font-weight: 800; background-color:black; color: #ff6b6b; border-radius:9px; padding-inline:32px;");
console.log("%c AR-designer", "font-size:21px;font-weight: 800; background-color:black; color: #6bfff8; border-radius:9px; padding-inline:32px;");
console.log("%c MW-helper", "font-size:21px;font-weight: 800; background-color:black; color: #ebff6b; border-radius:9px; padding-inline:32px;");
console.log("%c  تحذير هام  لا تقم بالتلاعب بالملفات او حذف بعض الاكواد اذا قمت بالفعل فقط اعمل تحديث للصفحة", "font-size:26px;font-weight: 800; background-color:black; color: #e15f5f; border-radius:9px; padding-inline:100px;");
console.log("%c  اختصارات  ", "font-size:26px;font-weight: 800; background-color:black; color: #e15f5f; border-radius:9px; padding-inline:100px;");
console.log("%c  ctrl = تعريف || shift = تغير الوضع ||esc = اخفاء القائمة || enter = اظهار القائمة  ", "font-size:26px;font-weight: 800; background-color:black; color: #e15f5f; border-radius:9px; padding-inline:100px;");
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const header = document.getElementById('hed');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            hamburger.classList.add('active');
            navMenu.classList.add('active');
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Shift') {
            themeToggle.click();
        }
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Control') {
                window.alert('this page is developed by AT-DEV')
            }
        })
    })
    // ----- Dark / Light Mode Toggle -----
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    };

    loadTheme();
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });

    if (hamburger) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.querySelectorAll('.btn-header').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const scrollToElement = (element) => {
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    document.getElementById('home')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('about')?.addEventListener('click', () => scrollToElement(document.getElementById('info')));
    document.getElementById('plan')?.addEventListener('click', () => scrollToElement(document.getElementById('plan-con')));
    document.getElementById('btn-sec-th')?.addEventListener('click', () => scrollToElement(document.getElementById('sec-th')));
    document.getElementById('con-a')?.addEventListener('click', () => scrollToElement(document.getElementById('con')));
    document.getElementById('btn-last')?.addEventListener('click', () => scrollToElement(document.getElementById('last')));
    document.getElementById('btn-info')?.addEventListener('click', () => scrollToElement(document.getElementById('info')));
    document.getElementById('btn-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            header.style.top = '10px';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            header.style.top = '15px';
        }
    });

    document.querySelectorAll('img').forEach(img => { img.loading = 'lazy'; });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(el => { el.style.animation = 'none'; });
    }
});

  document.addEventListener('keydown', function (e) {
      if (e.key === 'Alt') {
          window.document.location.href = 'form.pdf';
    }
  });