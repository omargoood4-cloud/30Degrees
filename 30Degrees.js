// بيانات المشاريع
let projects = [
    {
        id: 1,
        title: "مركز تجاري - جدة",
        category: "commercial",
        description: "تصميم وتنفيذ أنظمة السلامة المتكاملة لمجمع تجاري كبير بمنطقة جدة. تضمن المشروع توفير أنظمة إنذار الحريق، الإطفاء التلقائي، والتهوية في حالة الطوارئ. تم التركيز على تصميم مسارات إخلاء واضحة وأنظمة إنذار مبكر لحماية الزوار والعاملين.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        year: "2023",
        location: "جدة، المملكة العربية السعودية",
        area: "15,000 متر مربع",
        duration: "8 أشهر",
        challenges: "تعدد الطوابق وازدحام الزوار، تعدد المخارج والمداخل، تنوع المتاجر والمساحات",
        solutions: "تصميم أنظمة سلامة متعددة الطوابق مع نقاط إخلاء استراتيجية، أنظمة إنذار متطورة، توزيع معدات الإطفاء بكثافة مناسبة",
        services: "تصميم هندسي، إشراف على التنفيذ، اختبار الأنظمة، تدريب الكوادر"
    },
    {
        id: 2,
        title: "مستشفى خاص - الرياض",
        category: "hospitals",
        description: "أنظمة سلامة متكاملة لمستشفى خاص مع التركيز على السلامة من الحرائق وحماية المرضى والطواقم الطبية في حالات الطوارئ. تم تصميم أنظمة خاصة للأقسام الحرجة مثل غرف العمليات والعناية المركزة.",
        image: "https://images.unsplash.com/photo-1516549655669-df6654e447de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        year: "2022",
        location: "الرياض، المملكة العربية السعودية",
        area: "8,000 متر مربع",
        duration: "6 أشهر",
        challenges: "حساسية البيئة الطبية ووجود أجهزة طبية حساسة، صعوبة إخلاء المرضى ذوي الحالات الحرجة",
        solutions: "أنظمة إطفاء متخصصة لا تؤثر على الأجهزة الطبية، تصميم غرف عازلة للحريق، أنظمة إنذار صوتي ومرئي",
        services: "دراسات فنية، تصميم مخططات، تدريب الطواقم، صيانة دورية"
    },
    {
        id: 3,
        title: "فندق خمس نجوم - مكة",
        category: "hotels",
        description: "تصميم أنظمة إنذار وإطفاء حريق متقدمة لفندق خمس نصائح، مع مراعاة خصوصية النزلاء وسلامتهم. تم تزويد جميع الغرف والممرات والمرافق المشتركة بأنظمة إنذار واستشعار دخان متطورة.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        year: "2023",
        location: "مكة المكرمة، المملكة العربية السعودية",
        area: "12,000 متر مربع",
        duration: "10 أشهر",
        challenges: "كثافة النزلاء وتنوع المرافق، خصوصية الغرف الفندقية، المساحات الواسعة والمتعددة الطوابق",
        solutions: "أنظمة متكاملة مع إجراءات إخلاء مخصصة لكل منطقة، أجهزة إنذار في كل غرفة، أنظمة إطفاء أوتوماتيكية",
        services: "تصميم هندسي، إعداد دراسات السلامة، الاختبارات الدورية، تدريب العاملين"
    },
    {
        id: 4,
        title: "مصنع مواد بناء - الدمام",
        category: "industrial",
        description: "أنظمة سلامة صناعية متطورة مع إجراءات الوقاية من الحريق والانفجارات في بيئة صناعية معقدة. تم تصميم أنظمة خاصة للتعامل مع المواد القابلة للاشتعال والمناطق ذات الخطورة العالية.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        year: "2021",
        location: "الدمام، المملكة العربية السعودية",
        area: "25,000 متر مربع",
        duration: "12 أشهر",
        challenges: "وجود مواد قابلة للاشتعال وبيئة صناعية خطرة، مساحات كبيرة ومفتوحة، تنوع العمليات الصناعية",
        solutions: "أنظمة إطفاء متخصصة لمناطق التصنيع والتخزين، أنظمة إنذار مبكر للدخان والغازات، تصميم مناطق عازلة",
        services: "تحليل المخاطر، تصميم الأنظمة، التدريب العملي، الصيانة الوقائية"
    },
    {
        id: 5,
        title: "مجمع سكني - المدينة المنورة",
        category: "residential",
        description: "تطبيق معايير كود البناء السعودي لمشروع سكني متكامل، مع أنظمة سلامة مخصصة للمباني السكنية. تم تزويد كل وحدة سكنية بأجهزة إنذار واستشعار دخان فردية.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        year: "2023",
        location: "المدينة المنورة، المملكة العربية السعودية",
        area: "20,000 متر مربع",
        duration: "9 أشهر",
        challenges: "تنوع الوحدات السكنية وتعدد السكان، خصوصية المساكن، توزيع السكان المختلف",
        solutions: "أنظمة مركزية مع تحكم محلي في كل وحدة سكنية، أجهزة إنذار في كل شقة، أنظمة إطفاء في المناطق المشتركة",
        services: "تصميم مخططات، إشراف تنفيذ، توعية السكان، صيانة دورية"
    },
    {
        id: 6,
        title: "برج مكتبي - الخبر",
        category: "commercial",
        description: "تصميم مخططات هندسية متكاملة لبرج مكتبي حديث، مع أنظمة سلامة متطورة للطوابق العالية. تم تركيز على أنظمة الإخلاء العمودي والسلالم الآمنة.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        year: "2022",
        location: "الخبر، المملكة العربية السعودية",
        area: "10,000 متر مربع",
        duration: "7 أشهر",
        challenges: "الطوابق العالية، كثافة الموظفين، صعوبة الإخلاء الرأسي",
        solutions: "أنظمة إخلاء متطورة، سلالم آمنة مضغوطة، أنظمة إنذار متطورة، أنظمة اتصال طوارئ",
        services: "التصميم الهندسي، الدراسات الفنية، الاستشارات التقنية، التدقيق الهندسي"
    },
    {
        id: 7,
        title: "مركز تسوق - جدة",
        category: "commercial",
        description: "تطبيق أنظمة السلامة المتكاملة لمركز تسوق حديث مع مراعاة الكثافة السكانية العالية وتنوع المتاجر.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        year: "2022",
        location: "جدة، المملكة العربية السعودية",
        area: "18,000 متر مربع",
        duration: "8 أشهر"
    },
    {
        id: 8,
        title: "مستشفى حكومي - الرياض",
        category: "hospitals",
        description: "تطوير أنظمة السلامة لمستشفى حكومي كبير مع التركيز على حماية المرضى والكوادر الطبية والأجهزة الحساسة.",
        image: "https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        year: "2021",
        location: "الرياض، المملكة العربية السعودية",
        area: "15,000 متر مربع",
        duration: "11 أشهر"
    }
];

// بيانات الشركاء بصيغة JPG
const partners = [
    { logo: "img23.jpg", name: "", nameEn: "Partner 1", darkBg: false },
    { logo: "img26.jpg", name: "", nameEn: "Partner 2", darkBg: false },
    { logo: "img29.jpg", name: "", nameEn: "Partner 3", darkBg: false },
    { logo: "img32.jpg", name: "", nameEn: "Partner 4", darkBg: false },
    { logo: "img35.jpg", name: "", nameEn: "Partner 5", darkBg: false },
    { logo: "img38.jpg", name: "", nameEn: "Partner 6", darkBg: false },
    { logo: "img41.jpg", name: "", nameEn: "Partner 7", darkBg: false },
    { logo: "img44.jpg", name: "", nameEn: "Partner 8", darkBg: false },
    { logo: "img47.jpg", name: "", nameEn: "Partner 9", darkBg: false },
    { logo: "img50.jpg", name: "", nameEn: "Partner 10", darkBg: false },
    { logo: "img53.jpg", name: "", nameEn: "Partner 11", darkBg: false },
    { logo: "img56.jpg", name: "", nameEn: "Partner 12", darkBg: false },
    { logo: "img59.jpg", name: "", nameEn: "Partner 12", darkBg: false },
    { logo: "img60.jpg", name: "", nameEn: "Partner 12", darkBg: false },
    { logo: "img61.jpg", name: "", nameEn: "Partner 12", darkBg: false },
    { logo: "img62.jpg", name: "", nameEn: "Partner 12", darkBg: false },
    { logo: "img63.jpg", name: "", nameEn: "Partner 13", darkBg: false }
];

document.addEventListener('DOMContentLoaded', function() {
    const partnersSlider = document.getElementById('partnersSlider');

    // إنشاء عنصر الشريحة
    function createSlideElement(partner) {
        const slide = document.createElement('div');
        slide.className = 'partner-slide';
        
        const card = document.createElement('div');
        card.className = 'partner-card';
        
        const logoDiv = document.createElement('div');
        logoDiv.className = `partner-logo ${partner.darkBg ? 'dark-bg' : ''}`;
        
        const img = document.createElement('img');
        img.src = partner.logo;
        img.alt = partner.nameEn || partner.name;
        img.loading = 'lazy';
        
        logoDiv.appendChild(img);
        
        const title = document.createElement('h3');
        const lang = document.documentElement.lang || 'ar';
        title.textContent = lang === 'en' ? partner.nameEn : partner.name;
        
        card.appendChild(logoDiv);
        card.appendChild(title);
        
        slide.appendChild(card);
        return slide;
    }



    // عرض الشعارات بشكل مضاعف للتمرير المستمر
    function renderSlides() {
        if (!partnersSlider || partners.length === 0) return;
        partnersSlider.innerHTML = '';
        const allPartners = [...partners, ...partners, ...partners]; // Duplicate 3 times for a seamless loop
        allPartners.forEach(partner => {
            partnersSlider.appendChild(createSlideElement(partner));
        });
    }
    renderSlides();
    // Make available globally for translation re-renders
    window.renderPartners = renderSlides;
});

// الترجمة العربية للتصنيفات
const categoryLabels = {
    all: "الكل",
    commercial: "تجارية",
    residential: "سكنية",
    industrial: "صناعية",
    hospitals: "مستشفيات",
    hotels: "فنادق"
};

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeGallery();
    initializeContactForm();
    initializeNewsletter();
    loadProjectsFromLocalStorage();
    
    // إضافة تأثير الظل لشريط التنقل عند التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // تحديث الروابط النشطة أثناء التمرير
    window.addEventListener('scroll', updateActiveSection);
    
    // تهيئة الصفحة بالانتقال السلس للقسم النشط
    updateActiveSection();
});

// تهيئة التنقل
function initializeNavigation() {
    // التنقل السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // إغلاق القائمة المتنقلة إذا كانت مفتوحة
                document.querySelector('.nav-links').classList.remove('active');
                
                // التمرير السلس
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // تحديث الرابط النشط
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // تبديل القائمة المتنقلة
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// تحديث الرابط النشط في التنقل
function updateActiveNavLink(targetId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// تحديث القسم النشط أثناء التمرير
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
}

// تهيئة معرض الأعمال
function initializeGallery() {
    displayProjects(projects.slice(0, 6));
    setupFilterButtons();
    setupLoadMore();
}

// عرض المشاريع
function displayProjects(projectsToShow) {
    const container = document.getElementById('projects-container');
    
    projectsToShow.forEach(project => {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
    });
}

// إنشاء بطاقة مشروع
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.category;
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-overlay">
                <button class="view-project" data-id="${project.id}">
                    <i class="fas fa-expand"></i> عرض التفاصيل
                </button>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <span class="project-category">${categoryLabels[project.category] || project.category}</span>
                <span class="project-year">${project.year}</span>
            </div>
        </div>
    `;
    
    // إضافة حدث النقر لفتح التفاصيل
    const viewButton = card.querySelector('.view-project');
    viewButton.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectModal(project.id);
    });
    
    // إضافة حدث النقر للبطاقة نفسها
    card.addEventListener('click', () => {
        openProjectModal(project.id);
    });
    
    return card;
}

// إعداد أزرار الفلترة
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة النشاط من جميع الأزرار
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('span').style.color = '';
            });
            
            // إضافة النشاط للزر الحالي
            this.classList.add('active');
            this.querySelector('span').style.color = 'white';
            
            // فلترة المشاريع
            const filter = this.dataset.filter;
            filterProjects(filter);
        });
    });
}

// فلترة المشاريع
function filterProjects(filter) {
    const container = document.getElementById('projects-container');
    const loadMoreBtn = document.getElementById('load-more');
    
    // مسح المحتوى الحالي
    container.innerHTML = '';
    
    let filteredProjects;
    
    if (filter === 'all') {
        filteredProjects = projects.slice(0, 6);
        loadMoreBtn.style.display = 'block';
    } else {
        filteredProjects = projects.filter(project => project.category === filter);
        loadMoreBtn.style.display = 'none';
    }
    
    // عرض المشاريع المفلترة
    displayProjects(filteredProjects);
    
    // إذا لم توجد مشاريع، عرض رسالة
    if (filteredProjects.length === 0) {
        container.innerHTML = `
            <div class="no-projects" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-folder-open" style="font-size: 4rem; color: #ddd; margin-bottom: 20px;"></i>
                <h3 style="color: #666; margin-bottom: 10px;">لا توجد مشاريع في هذا التصنيف</h3>
                <p style="color: #999;">جرب تصنيفاً آخر لعرض المشاريع</p>
            </div>
        `;
    }
}

// إعداد زر "عرض المزيد"
function setupLoadMore() {
    const loadMoreBtn = document.getElementById('load-more');
    let visibleCount = 6;
    
    loadMoreBtn.addEventListener('click', function() {
        visibleCount += 3;
        const container = document.getElementById('projects-container');
        
        // عرض المزيد من المشاريع
        const moreProjects = projects.slice(0, visibleCount);
        container.innerHTML = '';
        displayProjects(moreProjects);
        
        // إخفاء الزر إذا تم عرض كل المشاريع
        if (visibleCount >= projects.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
}

// فتح نافذة عرض المشروع
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        
        <h2 class="modal-project-title">${project.title}</h2>
        
        <p class="modal-project-description">${project.description}</p>
        
        <div class="modal-project-details">
            <div class="detail-item">
                <h4><i class="fas fa-tag"></i> التصنيف</h4>
                <p>${categoryLabels[project.category] || project.category}</p>
            </div>
            
            <div class="detail-item">
                <h4><i class="fas fa-calendar-alt"></i> سنة الإنجاز</h4>
                <p>${project.year}</p>
            </div>
            
            <div class="detail-item">
                <h4><i class="fas fa-map-marker-alt"></i> الموقع</h4>
                <p>${project.location || 'جدة، المملكة العربية السعودية'}</p>
            </div>
            
            <div class="detail-item">
                <h4><i class="fas fa-ruler-combined"></i> المساحة</h4>
                <p>${project.area || 'يحدد حسب المشروع'}</p>
            </div>
            
            ${project.duration ? `
            <div class="detail-item">
                <h4><i class="fas fa-clock"></i> المدة</h4>
                <p>${project.duration}</p>
            </div>
            ` : ''}
        </div>
        
        ${project.challenges ? `
        <div class="project-challenges">
            <h4><i class="fas fa-exclamation-triangle"></i> التحديات</h4>
            <p>${project.challenges}</p>
        </div>
        ` : ''}
        
        ${project.solutions ? `
        <div class="project-solutions">
            <h4><i class="fas fa-check-circle"></i> الحلول المقدمة</h4>
            <p>${project.solutions}</p>
        </div>
        ` : ''}
        
        ${project.services ? `
        <div class="project-services">
            <h4><i class="fas fa-tasks"></i> الخدمات المقدمة</h4>
            <p>${project.services}</p>
        </div>
        ` : ''}
    `;
    
    // إظهار النافذة
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // إعداد زر الإغلاق
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => closeProjectModal();
    
    // إغلاق النافذة عند النقر خارج المحتوى
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    };
    
    // إغلاق النافذة بمفتاح Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

// إغلاق نافذة عرض المشروع
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// تهيئة نموذج الاتصال
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    // Set initial timestamp for Time Trap
    const timestampInput = document.getElementById('form-timestamp');
    if (timestampInput) {
        timestampInput.value = Date.now();
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn.innerHTML;
        const lang = document.documentElement.lang || 'ar';
        
        // التحقق من البيانات
        const requiredInputs = this.querySelectorAll('[required]');
        let isValid = true;
        requiredInputs.forEach(input => {
            if (!input.value.trim()) isValid = false;
        });

        if (!isValid) {
            showNotification(lang === 'en' ? 'Please fill all required fields' : 'يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }

        // 1. Honeypot check (Bot detection)
        const honeypot = this.querySelector('input[name="botcheck"]');
        if (honeypot && honeypot.checked) {
            showNotification(lang === 'en' ? 'Spam detected!' : 'تم اكتشاف نشاط مريب!', 'error');
            return;
        }

        // 2. Time Trap check (minimum 3 seconds to submit)
        const timeInput = this.querySelector('#form-timestamp');
        if (timeInput && timeInput.value) {
            const timeElapsed = Date.now() - parseInt(timeInput.value, 10);
            if (timeElapsed < 3000) {
                showNotification(lang === 'en' ? 'You are filling the form too quickly.' : 'أنت تقوم بملء النموذج بسرعة كبيرة (سلوك روبوت محتمل).', 'error');
                return;
            }
        }

        // 3. Rate Limiting (Prevent multiple submissions within 10 seconds)
        const lastSubmitTime = localStorage.getItem('lastFormSubmitTime');
        if (lastSubmitTime) {
            const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime, 10);
            if (timeSinceLastSubmit < 10000) {
                const remaining = Math.ceil((10000 - timeSinceLastSubmit) / 1000);
                showNotification(lang === 'en' ? `Please wait ${remaining}s before sending again.` : `الرجاء الانتظار ${remaining} ثواني قبل المحاولة مرة أخرى.`, 'error');
                return;
            }
        }

        // 4. Advanced Validation (Email Format & Message Length)
        const emailInput = this.querySelector('input[name="email"]');
        if (emailInput && !validateEmail(emailInput.value)) {
            showNotification(lang === 'en' ? 'Please enter a valid email address.' : 'الرجاء إدخال بريد إلكتروني صحيح.', 'error');
            emailInput.focus();
            return;
        }

        const messageInput = this.querySelector('textarea[name="message"]');
        if (messageInput && messageInput.value.trim().length < 10) {
            showNotification(lang === 'en' ? 'Message is too short, please provide more details.' : 'الرسالة قصيرة جداً، يرجى كتابة تفاصيل أوفى.', 'error');
            messageInput.focus();
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        try {
            const formData = new FormData(this);
            
            // جلب توكن reCAPTCHA v2 Invisible
            if (typeof grecaptcha !== 'undefined') {
                try {
                    const token = await new Promise((resolve) => {
                        window.recaptchaCallback = function(t) {
                            resolve(t);
                        };
                        grecaptcha.execute();
                    });
                    
                    if (token) {
                        formData.append('g-recaptcha-response', token);
                    }
                } catch (e) {
                    console.error('reCAPTCHA error:', e);
                }
            }
            
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                showNotification(lang === 'en' ? 'Message sent successfully!' : 'تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت.', 'success');
                this.reset();
                
                // لم نعد بحاجة إلى عمل reset مع v3 بنفس الطريقة
                
                // Update rate limiting and time trap
                localStorage.setItem('lastFormSubmitTime', Date.now());
                if (timeInput) {
                    timeInput.value = Date.now();
                }
            } else {
                showNotification(data.message || (lang === 'en' ? 'Something went wrong' : 'حدث خطأ ما'), 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification(lang === 'en' ? 'Could not connect to the server' : 'حدث مشكلة في الاتصال بالخادم', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
        }
    });
}

// محاكاة إرسال النموذج
function simulateFormSubmission(formData) {
    // يمكن استبدال هذا الكود بإرسال حقيقي إلى الخادم
    setTimeout(() => {
        console.log('تم إرسال البيانات إلى الخادم:', formData);
    }, 1000);
}

// تهيئة نموذج النشرة البريدية
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (!validateEmail(email)) {
            showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
            return;
        }
        
        // هنا يمكنك إضافة كود الاشتراك في النشرة
        console.log('اشتراك في النشرة:', email);
        
        // عرض رسالة النجاح
        showNotification('شكراً لاشتراكك في نشرتنا الإخبارية!', 'success');
        
        // إعادة تعيين الحقل
        emailInput.value = '';
    });
}

// التحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// عرض الإشعارات
function showNotification(message, type = 'info') {
    // إنصراف العنصر للإشعار
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // إضافة الأنماط
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        z-index: 9999;
        animation: slideInLeft 0.3s ease;
        max-width: 400px;
    `;
    
    // إضافة الأنيميشن
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutLeft {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(-100%); opacity: 0; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 5px;
        }
    `;
    document.head.appendChild(style);
    
    // إضافة إلى الصفحة
    document.body.appendChild(notification);
    
    // إعداد زر الإغلاق
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.onclick = () => {
        notification.style.animation = 'slideOutLeft 0.3s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    };
    
    // إغلاق تلقائي بعد 5 ثواني
    setTimeout(() => {
        if (notification.parentNode) {
            closeBtn.click();
        }
    }, 5000);
}

// تحميل المشاريع من التخزين المحلي
function loadProjectsFromLocalStorage() {
    const savedProjects = localStorage.getItem('thirtyDegreesProjects');
    if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        projects = [...parsedProjects, ...projects];
    }
}

// حفظ المشاريع في التخزين المحلي
function saveProjectsToLocalStorage() {
    localStorage.setItem('thirtyDegreesProjects', JSON.stringify(projects));
}

// إضافة مشروع جديد (للمسؤول)
function addNewProject(projectData) {
    const newProject = {
        id: projects.length + 1,
        ...projectData
    };
    
    projects.unshift(newProject); // إضافة في البداية
    saveProjectsToLocalStorage();
    
    // إعادة عرض المشاريع
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    filterProjects(activeFilter);
    
    showNotification('تم إضافة المشروع بنجاح!', 'success');
}

// وظيفة مساعدة: استعراض المشاريع حسب التصنيف
function browseByCategory(category) {
    const button = document.querySelector(`[data-filter="${category}"]`);
    if (button) {
        button.click();
        window.scrollTo({
            top: document.getElementById('gallery').offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

// دالة النماذج للمسؤول (يمكن استدعاؤها من وحدة التحكم)
window.addProject = addNewProject;
window.browseCategory = browseByCategory;
window.showMessage = showNotification;