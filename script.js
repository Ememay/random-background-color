/* 
    1 : get the change color btn
    2 : when the btn clicked function run
    3 : build an array and vaiable to hold info
    4 : build 4 piece of color code
    5 : choose random hex and insert it into @colorcode
    6 : insert the hex code in btn and body background
*/

// 1
const changecolorbtn = document.querySelector('.changecolorbtn');
// 2
changecolorbtn.addEventListener('click', () => {
    // 3
    let colorarray = [];
    let colorcode = '';
    // 4
    for (let i = 0; i < 3; i++) {
        // 5
        colorarray.push(Math.floor(Math.random() * (255 + 0) - 0));
        colorcode += colorarray[i].toString(16);
    }
    // 6
    changecolorbtn.textContent = `#${colorcode}`;
    document.body.style.backgroundColor = `#${colorcode}`
})