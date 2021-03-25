if (localStorage.getItem('oneDarkTheme') == "0" || localStorage.getItem('oneDarkTheme') == null) {
  var oneDarkTheme = true;
} else {
  var oneDarkTheme = false;
}
if (localStorage.getItem('lang') == "en-uk" || localStorage.getItem('lang') == null) {
  var lang = "en-uk";
} else if (localStorage.getItem('lang') == "dr-dg") {
  var lang = "dr-dg";
} else {
  window.alert('Error occured while trying to change language settings.');
  console.error('Error occured while trying to change language settings.');
}

function multipleFunctions(x) {
  setTheme();
  setLang();
  randomDesc(x);
}
function randomDesc(x) {
  if (x == 0 || x == 1) {
    var randomValue = Math.floor(Math.random() * 10);
    if (randomValue == 0 || randomValue == 9) {
      document.getElementById('dis_desc').innerHTML = "Click to know the terrible disasters that happened throughout 2020.";
    } else if (randomValue == 1 || randomValue == 8) {
      document.getElementById('dis_desc').innerHTML = "Hey kiddo, wanna know how bad 2020 was?";
    } else if (randomValue == 2 || randomValue == 7) {
      document.getElementById('dis_desc').innerHTML = "T'was a bad year, want to know why?";
    } else if (randomValue == 3 || randomValue == 6) {
      document.getElementById('dis_desc').innerHTML = "A recap on the worst recorded year in history.";
    } else if (randomValue == 4 || randomValue == 5) {
      document.getElementById('dis_desc').innerHTML = "Want to know why 2020 was bad?";
    } else {
      window.alert('An error occured while trying to generate descriptions for "Disasters of 2020".');
      console.error('An error occured while trying to generate descriptions for "Disasters of 2020".');
    }
  }
  if (x == 0 || x == 2) {
    var randomValue = Math.floor(Math.random() * 10);
    if (randomValue == 0 || randomValue == 9) {
      document.getElementById('mir_desc').innerHTML = "Click to know the amazing miracles that were given to us throughout 2020.";
    } else if (randomValue == 1 || randomValue == 8) {
      document.getElementById('mir_desc').innerHTML = "Wait, 2020 was good?!";
    } else if (randomValue == 2 || randomValue == 7) {
      document.getElementById('mir_desc').innerHTML = "Suprisingly enough, 2020 had some good things too, here's a list of them.";
    } else if (randomValue == 3 || randomValue == 6) {
      document.getElementById('mir_desc').innerHTML = "With every gray cloud comes a silver lining.";
    } else if (randomValue == 4 || randomValue == 5) {
      document.getElementById('mir_desc').innerHTML = "A recap on the best? recorded year in history.";
    } else {
      window.alert('An error occured while trying to generate descriptions for "Miracles of 2020".');
      console.error('An error occured while trying to generate descriptions for "Miracles of 2020".');
    }
  }
  if (x == 0 || x == 3) {
    var randomValue = Math.floor(Math.random() * 10);
    if (randomValue == 0 || randomValue == 9) {
      document.getElementById('rev_desc').innerHTML = "An honest review of 2020 by your's truly.";
    } else if (randomValue == 1 || randomValue == 8) {
      document.getElementById('rev_desc').innerHTML = "Some guy in a yellow hoodie talks about 2020.";
    } else if (randomValue == 2 || randomValue == 7) {
      document.getElementById('rev_desc').innerHTML = "Hello traveller, wish to know about 2020?";
    } else if (randomValue == 3 || randomValue == 6) {
      document.getElementById('rev_desc').innerHTML = "2020, it sure was a terrible year.";
    } else if (randomValue == 4 || randomValue == 5) {
      document.getElementById('rev_desc').innerHTML = "To be honest, 2020 has some interesting things to talk about."
    } else {
      window.alert('An error occured while trying to generate descriptions for "2020: Review".');
      console.error('An error occured while trying to generate descriptions for "2020: Review".');
    }
  }
}
function themeSettings() {
  if (document.getElementById('theme_settings').value == "oneDark") {
    oneDarkTheme = false;
  } else if (document.getElementById('theme_settings').value == "oneLight") {
    oneDarkTheme = true;
  } else {
    window.alert('Error occured while trying to change theme');
    console.error('Error occured while trying to change theme');
  }
  changeTheme();
}
function changeTheme() {
  if (oneDarkTheme) {
    oneDarkTheme = false;
    localStorage.setItem('oneDarkTheme', '1');
    localStorage.setItem('themeSettings', 'oneDark');
  } else {
    oneDarkTheme = true;
    localStorage.setItem('oneDarkTheme', '0');
    localStorage.setItem('themeSettings', 'oneLight');
  }
  setTheme();
}
function setTheme() {
  var styleVar = document.querySelector(':root').style;
  if (oneDarkTheme) {
    styleVar.setProperty('--backgroundColour', '#181a1f');
    styleVar.setProperty('--borderColour', '#181a1f');
    styleVar.setProperty('--midgroundColour', '#21252b');
    styleVar.setProperty('--midgroundColourAlt', '#3a3f4b');
    styleVar.setProperty('--foregroundColor', '#282c34');
    styleVar.setProperty('--foregroundColorAlt', '#323641');
    styleVar.setProperty('--foregroundColorAlt2', '#3e4451');
    styleVar.setProperty('--fontColour', '#abb2bf');
    styleVar.setProperty('--fontColourAlt', '#4b5263');
    styleVar.setProperty('--fontColourAlt2', '#767c86');
    styleVar.setProperty('--fontColourAlt3', 'white');
  } else {
    styleVar.setProperty('--backgroundColour', '#dbdbdc');
    styleVar.setProperty('--borderColour', '#dbdbdc');
    styleVar.setProperty('--midgroundColour', '#eaeaeb');
    styleVar.setProperty('--midgroundColourAlt', '#dbdbdc');
    styleVar.setProperty('--foregroundColor', '#fafafa');
    styleVar.setProperty('--foregroundColorAlt', '#fafafa');
    styleVar.setProperty('--foregroundColorAlt2', '#e5e5e6');
    styleVar.setProperty('--fontColour', '#383a42');
    styleVar.setProperty('--fontColourAlt', '#c2c2c3');
    styleVar.setProperty('--fontColourAlt2', '#85868b');
    styleVar.setProperty('--fontColourAlt3', 'black');
  }
}
function langSettings() {
  if (document.getElementById('lang_settings').value == "en-uk") {
    lang = "en-uk"
    localStorage.setItem('lang', 'en-uk');
  } else if (document.getElementById('lang_settings').value == "dr-dg") {
    lang = "dr-dg"
    localStorage.setItem('lang', 'dr-dg');
  } else {
    window.alert('Error occured while trying to change language settings.');
    console.error('Error occured while trying to change language settings.');
  }
  setLang();
}
function setLang() {
  var styleVar = document.querySelector(':root').style;
  if (lang == "en-uk") {
    styleVar.setProperty('--lang', "'Inconsolata', monospace, 'Monaco', 'Consolas', 'Courier New', 'Courier'");
  } else if (lang == "dr-dg") {
    styleVar.setProperty('--lang', 'DragrodNormal');
  } else {
    window.alert('Error occured while trying to change language settings.');
    console.error('Error occured while trying to change language settings.');
  }
}
