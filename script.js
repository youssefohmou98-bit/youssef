// ========== قاعدة البيانات المشتركة ==========
function getStudents() {
    let d = localStorage.getItem('amazighData');
    if (d) {
        let p = JSON.parse(d);
        if (p.students && p.students.length > 0) return p.students;
    }
    return [
        { id: 1, name: 'فاطمة أمال', class: 'الثانية 2', email: 'fatima@amazigh.ma', password: '123456', familyCode: 'AMZ-2024-FA', dojoPoints: 45, progress: 85, avatar: '👧' },
        { id: 2, name: 'إبراهيم أيت علي', class: 'الثانية 2', email: 'brahim@amazigh.ma', password: '123456', familyCode: 'AMZ-2024-IB', dojoPoints: 38, progress: 72, avatar: '👦' },
        { id: 3, name: 'سكينة أوعلي', class: 'الثانية 1', email: 'soukaina@amazigh.ma', password: '123456', familyCode: 'AMZ-2024-SK', dojoPoints: 32, progress: 68, avatar: '👧' },
        { id: 4, name: 'ياسين أيت باها', class: 'الثانية 2', email: 'yassine@amazigh.ma', password: '123456', familyCode: 'AMZ-2024-YS', dojoPoints: 28, progress: 60, avatar: '👦' },
        { id: 5, name: 'مريم أزناك', class: 'الثانية 1', email: 'maryam@amazigh.ma', password: '123456', familyCode: 'AMZ-2024-MR', dojoPoints: 25, progress: 55, avatar: '👧' }
    ];
}

function saveStudents(students) {
    let d = localStorage.getItem('amazighData');
    let p = d ? JSON.parse(d) : {};
    p.students = students;
    localStorage.setItem('amazighData', JSON.stringify(p));
}

function logout() {
    localStorage.removeItem('userType');
    localStorage.removeItem('userName');
    localStorage.removeItem('studentId');
    localStorage.removeItem('familyCode');
    window.location.href = 'login.html';
}

function setLang(l) {
    localStorage.setItem('language', l);
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.lang === l) b.classList.add('active');
    });
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
}

document.addEventListener('DOMContentLoaded', function() {
    let lang = localStorage.getItem('language') || 'ar';
    setLang(lang);
});