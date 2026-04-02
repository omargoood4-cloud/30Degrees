import os
import re

html_path = r"C:\Users\omar2\Desktop\30Degrees\30Degrees.html"
css_path = r"C:\Users\omar2\Desktop\30Degrees\30Degrees.css"
js_path = r"C:\Users\omar2\Desktop\30Degrees\30Degrees.js"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Scripts
html = html.replace('<script src="30Degrees.js"></script>', '<script src="translations.js"></script>\n    <script src="30Degrees.js"></script>')

# 2. Toggle button
html = html.replace('<div class="nav-actions">\n                <button class="btn btn-primary" onclick="window.location.href=\'#contact\'">', '<div class="nav-actions">\n                <button id="langToggle" data-target-lang="en" class="btn btn-outline" style="padding: 8px 15px; margin-left: 10px; margin-right: 10px;"><i class="fas fa-globe"></i> EN</button>\n                <button class="btn btn-primary" onclick="window.location.href=\'#contact\'">')

# 3. Slider controls
html = re.sub(r'<!-- أزرار التحكم -->\s*<div class="slider-controls">.*?</div>', '', html, flags=re.DOTALL)

# 4. Form
form_old = '''<form id="contact-form">
                        <div class="form-group">
                            <input type="text" placeholder="الاسم الكامل" required>
                        </div>
                        
                        <div class="form-group">
                            <input type="email" placeholder="البريد الإلكتروني" required>
                        </div>
                        
                        <div class="form-group">
                            <input type="tel" placeholder="رقم الهاتف" required>
                        </div>
                        
                        <div class="form-group">
                            <select required>
                                <option value="">نوع الخدمة المطلوبة</option>
                                <option value="supervision">الإشراف على التنفيذ</option>
                                <option value="studies">الدراسات الفنية</option>
                                <option value="design">التصميم الهندسي</option>
                                <option value="consultation">الاستشارات الفنية</option>
                                <option value="audit">التدقيق والاختبارات</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <textarea placeholder="رسالتك..." rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i> إرسال الرسالة
                        </button>
                    </form>'''
form_new = '''<form id="contact-form">
                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="الاسم الكامل" data-i18n-placeholder="contact_name" required>
                        </div>
                        
                        <div class="form-group">
                            <input type="email" name="email" placeholder="البريد الإلكتروني" data-i18n-placeholder="contact_email" required>
                        </div>
                        
                        <div class="form-group">
                            <input type="tel" name="phone" placeholder="رقم الهاتف" data-i18n-placeholder="contact_phone" required>
                        </div>
                        
                        <div class="form-group">
                            <select name="service" required>
                                <option value="" data-i18n="form_service">نوع الخدمة المطلوبة</option>
                                <option value="supervision" data-i18n="form_service_sup">الإشراف على التنفيذ</option>
                                <option value="studies" data-i18n="form_service_std">الدراسات الفنية</option>
                                <option value="design" data-i18n="form_service_des">التصميم الهندسي</option>
                                <option value="consultation" data-i18n="form_service_con">الاستشارات الفنية</option>
                                <option value="audit" data-i18n="form_service_aud">التدقيق والاختبارات</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <textarea name="message" placeholder="رسالتك..." data-i18n-placeholder="contact_message" rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane"></i> <span data-i18n="contact_send">إرسال الرسالة</span>
                        </button>
                    </form>'''
html = html.replace(form_old, form_new)

# 5. Adding data-i18n simple replaces
reps = {
    'class="active">الرئيسية</a>': 'class="active" data-i18n="nav_home">الرئيسية</a>',
    'href="#about">من نحن</a>': 'href="#about" data-i18n="nav_about">من نحن</a>',
    'href="#services">خدماتنا</a>': 'href="#services" data-i18n="nav_services">خدماتنا</a>',
    'href="#partners">شركاؤنا</a>': 'href="#partners" data-i18n="nav_partners">شركاؤنا</a>',
    'href="#gallery">معرض الأعمال</a>': 'href="#gallery" data-i18n="nav_gallery">معرض الأعمال</a>',
    'href="#testimonials">التزكيات</a>': 'href="#testimonials" data-i18n="nav_testimonials">التزكيات</a>',
    '">اتصل بنا</a>': ' data-i18n="nav_contact">اتصل بنا</a>',
    ' اتصل الآن\n': ' <span data-i18n="nav_call">اتصل الآن</span>\n',
    ' شركة ثلاثون درجة للاستشارات الهندسية </h1>': ' <span data-i18n="hero_title1">شركة ثلاثون درجة للاستشارات الهندسية </span></h1>',
    ' 30Degree For Engineering Consultancy</h1>': ' <span data-i18n="hero_title2">30Degree For Engineering Consultancy</span></h1>',
    '>WE MAKE IT REAL</h2>': ' data-i18n="hero_tagline">WE MAKE IT REAL</h2>',
    ' احصل على استشارة\n': ' <span data-i18n="hero_btn">احصل على استشارة</span>\n',
    '<h2 class="section-title">من نحن</h2>': '<h2 class="section-title" data-i18n="about_title">من نحن</h2>',
    '<p class="section-subtitle">شركة ثلاثون درجة للاستشارات الهندسية</p>': '<p class="section-subtitle" data-i18n="about_subtitle">شركة ثلاثون درجة للاستشارات الهندسية</p>',
    '<h2 class="section-title">خدماتنا</h2>': '<h2 class="section-title" data-i18n="services_title">خدماتنا</h2>',
    '<h2 class="section-title">شركاؤنا</h2>': '<h2 class="section-title" data-i18n="partners_title">شركاؤنا</h2>',
    '<h2 class="section-title">معرض أعمالنا</h2>': '<h2 class="section-title" data-i18n="gallery_title">معرض أعمالنا</h2>',
    '<h2 class="section-title">التزكيات</h2>': '<h2 class="section-title" data-i18n="testimonials_title">التزكيات</h2>',
    '<h2 class="section-title">اتصل بنا</h2>': '<h2 class="section-title" data-i18n="contact_title">اتصل بنا</h2>',
}

for k, v in reps.items():
    html = html.replace(k, v)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)


### CSS MODIFICATION ###
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

css_old = """/* Partners Slider Styles */
.partners-slider-container {
    position: relative;
    overflow: hidden;
    padding: 40px 0 60px;
    margin: 0 auto;
    max-width: 1200px;
}

.partners-slider-track {
    overflow: hidden;
    position: relative;
}

.partners-slider {
    display: flex;
    gap: 20px;
    transition: transform 0.5s ease;
    cursor: grab;
}


.partner-slide {
    flex: 0 0 calc(25% - 15px); /* 4 شعارات */
    box-sizing: border-box;
    transition: transform 0.5s ease;
}
.partner-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 20px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid var(--medium-gray);
    position: relative;
}

.partner-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
    border-color: var(--secondary-color);
}

.partner-logo {
    height: 70px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.partner-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.partner-card h3 {
    font-size: 1rem;
    color: var(--dark-color);
    font-weight: 600;
    margin-bottom: 5px;
    line-height: 1.4;
}

.partner-desc {
    font-size: 0.85rem;
    color: var(--gray-color);
    margin-top: 5px;
}

/* أزرار التحكم */
.slider-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
}

.slider-btn {
    background-color: var(--secondary-color);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.slider-btn:hover {
    background-color: rgb(12, 130, 151);
    transform: scale(1.1);
}

.slider-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
}"""

css_new = """/* Partners Slider Styles */
.partners-slider-container {
    position: relative;
    overflow: hidden;
    padding: 40px 0 60px;
    margin: 0 auto;
    max-width: 1200px;
    direction: ltr; /* Ensure continuous scroll works */
}

.partners-slider-track {
    overflow: hidden;
    position: relative;
    width: 100%;
}

.partners-slider {
    display: flex;
    gap: 20px;
    width: max-content;
    animation: marquee 30s linear infinite;
}

.partners-slider:hover {
    animation-play-state: paused;
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 10px)); }
}

.partner-slide {
    flex: 0 0 250px;
    box-sizing: border-box;
}

.partner-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 20px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid var(--medium-gray);
    position: relative;
}

.partner-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
    border-color: var(--secondary-color);
}

.partner-logo {
    height: 70px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.partner-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.partner-card h3 {
    font-size: 1rem;
    color: var(--dark-color);
    font-weight: 600;
    margin-bottom: 5px;
    line-height: 1.4;
}

.partner-desc {
    font-size: 0.85rem;
    color: var(--gray-color);
    margin-top: 5px;
}"""

if css_old in css:
    css = css.replace(css_old, css_new)
else:
    print("Could not find CSS block")

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)

### JS MODIFICATION ###
with open(js_path, 'r', encoding='utf-8') as f:
    js = f.read()

js_slider_old = """document.addEventListener('DOMContentLoaded', function() {
    const partnersSlider = document.getElementById('partnersSlider');
    const prevBtn = document.getElementById('prevPartner');
    const nextBtn = document.getElementById('nextPartner');

    let currentIndex = 0;
    const visibleCount = 4;
    let isAnimating = false;
    let autoPlayInterval;

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
        img.alt = partner.name;
        img.loading = 'lazy';
        
        logoDiv.appendChild(img);
        
        const title = document.createElement('h3');
        title.textContent = partner.name;
        
        const desc = document.createElement('p');
        desc.className = 'partner-desc';
        desc.textContent = partner.nameEn;
        
        card.appendChild(logoDiv);
        card.appendChild(title);
        card.appendChild(desc);
        
        slide.appendChild(card);
        return slide;
    }

    // عرض أول 4 شعارات
    function renderInitialSlides() {
        partnersSlider.innerHTML = '';
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % partners.length;
            partnersSlider.appendChild(createSlideElement(partners[index]));
        }
    }

    // تحريك لليمين
    function moveToRight() {
        if (isAnimating) return;
        isAnimating = true;

        const firstSlide = partnersSlider.firstElementChild;
        if (!firstSlide) return;
        
        firstSlide.style.transform = `translateX(-${firstSlide.offsetWidth + 20}px)`;
        firstSlide.style.transition = 'transform 0.5s ease';

        setTimeout(() => {
            partnersSlider.removeChild(firstSlide);
            const nextIndex = (currentIndex + visibleCount) % partners.length;
            partnersSlider.appendChild(createSlideElement(partners[nextIndex]));
            currentIndex = (currentIndex + 1) % partners.length;
            isAnimating = false;
        }, 500);
    }

    // تحريك لليسار
    function moveToLeft() {
        if (isAnimating) return;
        isAnimating = true;

        const lastSlide = partnersSlider.lastElementChild;
        if (!lastSlide) return;
        
        lastSlide.style.transform = `translateX(${lastSlide.offsetWidth + 20}px)`;
        lastSlide.style.transition = 'transform 0.5s ease';

        setTimeout(() => {
            partnersSlider.removeChild(lastSlide);
            const prevIndex = (currentIndex - 1 + partners.length) % partners.length;
            partnersSlider.insertBefore(createSlideElement(partners[prevIndex]), partnersSlider.firstChild);
            currentIndex = (currentIndex - 1 + partners.length) % partners.length;
            isAnimating = false;
        }, 500);
    }

    // التشغيل التلقائي
    function startAutoPlay() {
        autoPlayInterval = setInterval(moveToRight, 3000);
    }

    // إيقاف التشغيل التلقائي عند التفاعل
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // الأزرار
    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        moveToRight();
        startAutoPlay();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        moveToLeft();
        startAutoPlay();
    });

    // دعم السحب واللمس
    if (partnersSlider) {
        let startX = 0, isDragging = false;
        
        partnersSlider.addEventListener('mousedown', e => {
            isDragging = true;
            startX = e.clientX;
            stopAutoPlay();
            partnersSlider.style.cursor = 'grabbing';
        });
        
        partnersSlider.addEventListener('mousemove', e => {
            if (!isDragging) return;
            const diff = e.clientX - startX;
            partnersSlider.style.transform = `translateX(${diff}px)`;
        });
        
        partnersSlider.addEventListener('mouseup', e => {
            if (!isDragging) return;
            const diff = e.clientX - startX;
            partnersSlider.style.transform = 'translateX(0)';
            isDragging = false;
            partnersSlider.style.cursor = 'grab';
            
            if (diff > 50) moveToLeft();
            if (diff < -50) moveToRight();
            
            startAutoPlay();
        });
        
        partnersSlider.addEventListener('mouseleave', () => {
            if (isDragging) {
                partnersSlider.style.transform = 'translateX(0)';
                isDragging = false;
                partnersSlider.style.cursor = 'grab';
                startAutoPlay();
            }
        });

        // دعم اللمس
        partnersSlider.addEventListener('touchstart', e => {
            isDragging = true;
            startX = e.touches[0].clientX;
            stopAutoPlay();
        });
        
        partnersSlider.addEventListener('touchmove', e => {
            if (!isDragging) return;
            const diff = e.touches[0].clientX - startX;
            partnersSlider.style.transform = `translateX(${diff}px)`;
        });
        
        partnersSlider.addEventListener('touchend', e => {
            if (!isDragging) return;
            partnersSlider.style.transform = 'translateX(0)';
            isDragging = false;
            
            const diff = e.changedTouches[0].clientX - startX;
            if (diff > 50) moveToLeft();
            if (diff < -50) moveToRight();
            
            startAutoPlay();
        });
    }

    // بدء التشغيل
    renderInitialSlides();
    startAutoPlay();
});"""

js_slider_new = """document.addEventListener('DOMContentLoaded', function() {
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
        if (!partnersSlider) return;
        partnersSlider.innerHTML = '';
        const allPartners = [...partners, ...partners]; // Duplicate for seamless infinite marquee loop
        allPartners.forEach(partner => {
            partnersSlider.appendChild(createSlideElement(partner));
        });
    }

    renderSlides();
    
    // Make available globally for translation re-renders
    window.renderPartners = renderSlides;
});"""

js = js.replace(js_slider_old, js_slider_new)

js_form_old = """// تهيئة نموذج الاتصال
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // جمع بيانات النموذج
        const formData = {
            name: this.querySelector('input[type="text"]').value,
            email: this.querySelector('input[type="email"]').value,
            phone: this.querySelector('input[type="tel"]').value,
            service: this.querySelector('select').value,
            message: this.querySelector('textarea').value
        };
        
        // التحقق من البيانات
        if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
            showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }
        
        // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
        console.log('بيانات النموذج:', formData);
        
        // عرض رسالة النجاح
        showNotification('تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت.', 'success');
        
        // إعادة تعيين النموذج
        this.reset();
        
        // إرسال إشعار (محاكاة)
        simulateFormSubmission(formData);
    });
}"""

js_form_new = """// تهيئة نموذج الاتصال
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
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
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        try {
            const formData = new FormData(this);
            // formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Ensure the user replaces this in HTML
            
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                showNotification(lang === 'en' ? 'Message sent successfully!' : 'تم إرسال رسالتك بنجاح! سنقوم بالرد عليك في أقرب وقت.', 'success');
                this.reset();
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
}"""

js = js.replace(js_form_old, js_form_new)

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js)

print("Modification complete!")
