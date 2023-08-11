var menu = document.getElementById('menu');
var isMobile = false; // Biến để theo dõi trạng thái responsive

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 767) {
  isMobile = true;
  menu.style.display = 'none'; // Ẩn menu trên thiết bị di động
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 767) {
    if (!isMobile) {
      isMobile = true;
      menu.style.display = 'none'; // Ẩn menu trên thiết bị di động
    }
  } else {
    if (isMobile) {
      isMobile = false;
      menu.style.display = 'block'; // Hiện menu trở lại trên giao diện máy tính
    }
  }
});

function showMenu() {
  if (isMobile) {
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
}
// open search
var btn_search = document.getElementById('search');
var isMobi = false; 

if (window.innerWidth <= 479) {
  isMobi = true;
  btn_search.style.display = 'none'; 
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 479) {
    if (!isMobi) {
      isMobi = true;
      btn_search.style.display = 'none'; 
    }
  } else {
    if (isMobi) {
      isMobi = false;
      btn_search.style.display = 'block'; 
    }
  }
});

function showSearch() {
  if (isMobi) {
    if (btn_search.style.display === 'none') {
      btn_search.style.display = 'block';
    } else {
      btn_search.style.display = 'none';
    }
  }
}

// click open close aside
var isTablet = false; // Biến để theo dõi trạng thái responsive
var isTablet2 = false; 
var isTablet3 = false; 
var isTablet4 = false; 
var rules = document.getElementById('rules');
var help = document.getElementById('help');
var policy = document.getElementById('policy');
var chungNhan = document.getElementById('chung-nhan');
var i1 = document.getElementById('i1');
var i2 = document.getElementById('i2');
var i3 = document.getElementById('i3');
var i4 = document.getElementById('i4');

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 767) {
  isTablet = true;
  rules.style.display = 'none'; 
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 767) {
    if (!isTablet) {
      isTablet = true;
      rules.style.display = 'none';
    }
  } else {
    if (isTablet) {
      isTablet = false;
      rules.style.display = 'block'; 
    }
  }
});


function openRules(){
  if(isTablet){
    if(rules.style.display === 'none'){
      rules.style.display = 'block';
      i1.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      rules.style.display = 'none';
      i1.className = "fa-solid fa-chevron-down";
    }
  }
}

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 767) {
  isTablet2 = true;
  help.style.display = 'none'; 
}

// Đăng ký sự kiện resize để xử lý responsive
window.addEventListener('resize', function() {
  if (window.innerWidth <= 767) {
    if (!isTablet2) {
      isTablet2 = true;
      help.style.display = 'none'; 
    }
  } else {
    if (isTablet2) {
      isTablet2 = false;
      help.style.display = 'block';
    }
  }
});

function openHelp(){
  if(isTablet2){
    if(help.style.display === 'none'){
      help.style.display = 'block';
      i2.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      help.style.display = 'none';
      i2.className = "fa-solid fa-chevron-down";
    }
  }
}

// Kiểm tra kích thước màn hình ban đầu
if (window.innerWidth <= 767) {
  isTablet3 = true;
  policy.style.display = 'none'; 
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 767) {
    if (!isTablet3) {
      isTablet3 = true;
      policy.style.display = 'none';
    }
  } else {
    if (isTablet3) {
      isTablet3 = false;
      policy.style.display = 'block'; 
    }
  }
});

function openPolicy(){
  if(isTablet3){
    if(policy.style.display === 'none'){
      policy.style.display = 'block';
      i3.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      policy.style.display = 'none';
      i3.className = "fa-solid fa-chevron-down";
    }
  }
}

if (window.innerWidth <= 767) {
  isTablet4 = true;
  chungNhan.style.display = 'none'; 
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 767) {
    if (!isTablet4) {
      isTablet4 = true;
      chungNhan.style.display = 'none'; 
    }
  } else {
    if (isTablet4) {
      isTablet4 = false;
      chungNhan.style.display = 'block'; 
    }
  }
});

function openChungNhan(){
  if(isTablet4){
    if(chungNhan.style.display === 'none'){
      chungNhan.style.display = 'block';
      i4.className = "fa-solid fa-chevron-down fa-rotate-180";
    }else{
      chungNhan.style.display = 'none';
      i4.className = "fa-solid fa-chevron-down";
    }
  }
}

