const darkModeTheme = "#1a1a1a";
const darkModeTheme__sidebar = "#2e2d2d";
const darkModeTheme_color = "#fcfcfc";
let theme;
let themeContent;
let themeNav;
let themeColor;
let run = 1;
let run_t = 1;
function requireTheme() {
  try {
    theme = JSON.parse(document.getElementById("themefile").value);
    themeContent = theme.content;
    themeNav = theme.nav;
    themeColor = theme.text;
    sw_theme();
  } catch (error) {
    console.error("Not found", error);
  }
}
requireTheme();
function sw_theme() {
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  try {
    if (theme.content != undefined) {
      // Content
      main.style.background = themeContent;
      setTimeout(() => {
        main.style.background = themeContent;
      }, 100);

      try {
        document.body.style.background = themeContent;
      } catch (error) {
        console.warn(error);
      }
      // Nav
      try {
        sidebar.style.background = themeNav;
      } catch (e) {
        try {
          document.getElementById("drag0").style.background = themeNav;
        } catch (e) {
          if (run_t > 50) return;
          console.warn(e);
          run_t++;
          sw_theme();
        }
      }
      // Text
      main.style = `color: ${themeColor}`;
    }
  } catch (error) {
    if (run_t > 25) return;
    console.warn(error);
    setTimeout(() => {
      run_t++;
      sw_theme();
    }, 100);
  }
}
