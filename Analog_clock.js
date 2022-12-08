const deg = 6;
let mn = document.querySelector('#mn');
let hr = document.querySelector('#hr');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * deg;
    let s = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(h) + (m / 12)}deg)`;
    mn.style.transform = `rotateZ(${(m)}deg)`;
    sc.style.transform = `rotateZ(${(s)}deg)`;
}, 1000)

let dark = document.querySelector('.dark');
let clock = document.querySelector('.clock');
let flag = true;
dark.addEventListener("click", () => {
    if (flag == true) {
        document.body.style.backgroundColor = '#E6DDC4';
        dark.style.border = '1px solid #E6DDC4';
        clock.style.border = '1px solid #E6DDC4';
        flag = false;
    }
    else{
        document.body.style.backgroundColor = '#090c18';
        dark.style.border = '1px solid #090c18';
        clock.style.border = '1px solid #090c18';
        flag = true;
    }
})
