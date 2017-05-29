// background control
var backgroundCheck;
var backgroundRefresh;

// background color
var bgredSlide;
var bgblueSlide;
var bggreenSlide;

// ball color
var ballredSlide;
var ballblueSlide;
var ballgreenSlide;

// gravity and wind sliders
var gravitySlider;
var windForceSlider;

/**
 * bgChange
 *
 * Event handler for check of
 * 'Background Refresh' ceheckbox
 */ 
function bgChange() {
    if (backgroundRefresh) {
        backgroundRefresh = false;
    } else {
        backgroundRefresh = true;
    }
}

/**
 * backgroundRGB
 * 
 * Creates the sliders for 
 * background RGB.
*/
function backgroundRGB() {
    // color sliders
    bgredSlide = createSlider(0, 255, 0);
    bgblueSlide = createSlider(0, 255, 0);
    bggreenSlide = createSlider(0, 255, 15);
    bgredSlide.parent("rgb-bg");
    bgblueSlide.parent("rgb-bg");
    bggreenSlide.parent("rgb-bg");

    // refresh background 
    backgroundCheck = createCheckbox('Background Refresh', true);
    backgroundCheck.parent("rgb-bg");
    backgroundCheck.changed(bgChange);
    backgroundRefresh = backgroundCheck.checked();
}

/**
 * ballRGB
 * 
 * Creates the sliders for 
 * ball RGBA.
*/
function ballRGBA() {
    // ball color sliders
    ballredSlide = createSlider(0, 255, 150);
    ballblueSlide = createSlider(0, 255, 240);
    ballgreenSlide = createSlider(0, 255, 150);
    ballalphaSlide = createSlider(0, 255, 150);
    ballredSlide.parent("ball-rgb");
    ballblueSlide.parent("ball-rgb");
    ballgreenSlide.parent("ball-rgb");
    ballalphaSlide.parent("ball-rgb");
}

/**
 * gravityandwind
 *
 * Creates sliders for gravity
 * and wind strength.
 */
function gravityandwind() {
    // gravity slider
    gravitySlider = createSlider(0, 2, 0.5, 0.05);
    gravitySlider.parent('gravityDiv');

    // wind force slider
    windForceSlider = createSlider(0, 8, 2, 0.2);
    windForceSlider.parent('windForceDiv');
}
