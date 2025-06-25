const datas = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
];

const extentions = document.querySelector('.extentions')
const btn_group = document.querySelector('.btn-group');

datas.forEach(data => {
    let extention = document.createElement('div');
    let div_content = `<div class="extention">
        <div class="extention-info">
          <img src="${data.logo}" alt="image">
          <div class="extention-detail">
            <h4 class="extention-name">${data.name}</h4>
            <p>${data.description}</p>
          </div>
        </div>
        <div class="active-remove">
          <button class="remove">Remove</button>
          <div class="toggle"><p class="round"></p></div>
        </div>
      </div>`;
    extention.innerHTML = div_content;
    extention.querySelector('.toggle').addEventListener('click', () => {

    })
    extentions.appendChild(extention)
})

const theme = document.querySelector('.theme');
const moon = theme.querySelector('.img1');
const sun  = theme.querySelector('.img2')
const dark_logo = document.querySelector('.logo');
const light_logo = document.querySelector('.white-logo');
theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    sun.classList.toggle('sun');
    moon.classList.toggle('moon');
    light_logo.classList.toggle('white-logo');
    dark_logo.classList.toggle('dark')

})
let all_btn = btn_group.querySelector('.one');
let active_btn = btn_group.querySelector('.two');
let inactive_btn = btn_group.querySelector('.three');

all_btn.addEventListener('click', () => {
    inactive_btn.classList.remove('active');
    active_btn.classList.remove('active');
    all_btn.classList.add('active');
})

active_btn.addEventListener('click', () => {
    inactive_btn.classList.remove('active');
    all_btn.classList.remove('active');
    active_btn.classList.add('active');
})

inactive_btn.addEventListener('click', () => {
    all_btn.classList.remove('active');
    active_btn.classList.remove('active');
    inactive_btn.classList.add('active');
})

