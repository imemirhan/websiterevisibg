
var PARTICAL_COLORS = '#FFFFFF99';

const color_bg_dark = "#333344";
const color_txt_dark = "#e6e7e7";
const color_box_shadow_dark1 = "#a8a6a6";
const color_box_shadow_dark2 = "#3b3b5a";
const color_box_shadow_dark3 = "#5f5e5e";

const color_bg_light = "#e6e7e7";
const color_txt_light = "#333344";
const color_box_shadow_light1 = "#70718d";
const color_box_shadow_light2 = "#b3b3d8";
const color_box_shadow_light3 = "#51587c";



function displayMode() {
    // Get the checkbox
    var checkBox = document.getElementById("dark-light-mode");
    // Get the root element
    var r = document.querySelector(':root');

    if (checkBox.checked == true){
        console.log("YEHUU");
        r.style.setProperty('--bg-default', color_bg_light);
        r.style.setProperty('--txt-default', color_txt_light);
        r.style.setProperty('--box-shadow-default', color_box_shadow_light1);
        r.style.setProperty('--box-shadow-default', color_box_shadow_light2);
        r.style.setProperty('--box-shadow-default', color_box_shadow_light3);

        PARTICAL_COLORS = '#333331';

    } else {
        r.style.setProperty('--bg-default', color_bg_dark);
        r.style.setProperty('--txt-default', color_txt_dark);
        r.style.setProperty('--box-shadow-default', color_box_shadow_dark1);
        r.style.setProperty('--box-shadow-default', color_box_shadow_dark2);
        r.style.setProperty('--box-shadow-default', color_box_shadow_dark3);

        PARTICAL_COLORS = '#FFFFFF99';

    }
}