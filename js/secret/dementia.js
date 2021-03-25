var what = ["huh?", "who?", "where?", "what?", "ḍ̶̜̰̹̖̣̄̓͝e̷̪̰͉̠͙̔̓̾m̵̹̲̱̤̦̆̈́́̎͘̚͜e̶̡̫̩̼̱̠͊͌ń̶̺͇͔̗̩͝t̴̞̞̅̆̃̑̕͘i̴͎͚̱͖̬̳̋̉ą̵͕̼̣̰̈́̒͘", "I forgot", "HUH?!", "WHO are you?", "WHERE am I?!", "WHAT is this?!", "D̶̨̖͕̗̻̈́̿͜E̷̡̧̝̖͎̊́̇̅̌ͅM̸̝̗͇̼̹͕̀̓͌̏̾͜E̶̮̘̯̔̃̓̋͋̓͜N̷͎̘̘̣̽͛͗͜T̵̫͐̓͝Ì̴̺̩͖̫͚͓̱̾̀̈̒̆͝Ą̸̬̻̩̤̤̇̆", "I can't remember."]
var who = ["I don't know.", "I- can't remember.", "What's going on?", "Huh?!", "I have no idea.", "*giberish*"];

function dementia(x) {
  var secretValue = Math.floor(Math.random() * 20);
  if (x == 3) {
    if (secretValue == 0) {
      var staticImage = "url('../images/secret/dementia.gif')"
      document.getElementById('album_desc').innerHTML = "There was a lot of empty space here, so why not listen to my favourite ḍ̶̜̰̹̖̣̄̓͝e̷̪̰͉̠͙̔̓̾m̵̹̲̱̤̦̆̈́́̎͘̚͜e̶̡̫̩̼̱̠͊͌ń̶̺͇͔̗̩͝t̴̞̞̅̆̃̑̕͘i̴͎͚̱͖̬̳̋̉ą̵͕̼̣̰̈́̒͘ song.";
      document.getElementById('album_title').innerHTML = "Everywhere at The End of Time - The Caretaker";
      document.getElementById('album_cov').src = "../images/secret/everywhere_at_the_end_of_time.png";
      document.getElementById('album_cov').alt = "The Caretaker - Everywhere at The End of Time Album Cover";
      document.getElementById('album_src').setAttribute("src", "../mmfiles/secret/dementia.mp3");

      document.getElementsByTagName('BODY')[0].style.backgroundImage = staticImage;
      document.getElementById('content').style.opacity = "0.6";
      var randomTitle = Math.floor(Math.random() * 12);
      document.getElementById('title').innerHTML = what[randomTitle];
    } else {
      document.getElementById('album_desc').innerHTML = "There was a lot of empty space here, so why not listen to my favourite Lo-Fi song.";
      document.getElementById('album_title').innerHTML = "Ji-Eun's Sunset - City Girl";
      document.getElementById('album_cov').src = "../images/neon_impasse.jpg";
      document.getElementById('album_cov').alt = "City Girl - Neon Impasse Album Cover";
      document.getElementById('album_src').setAttribute("src", "../mmfiles/ji_eun's_sunset_by_city_girl.ogg");
    }
  } else if (x == 0) {
    if (secretValue == 0) {
      var staticImage = "url('images/secret/dementia.gif')"
      document.getElementsByTagName('BODY')[0].style.backgroundImage = staticImage;
      document.getElementById('content').style.opacity = "0.6";
      var randomTitle = Math.floor(Math.random() * 12);
      document.getElementById('title').innerHTML = what[randomTitle];
    }
  } else {
    if (secretValue == 0) {
      var staticImage = "url('../images/secret/dementia.gif')"
      document.getElementsByTagName('BODY')[0].style.backgroundImage = staticImage;
      document.getElementById('content').style.opacity = "0.6";
      var randomTitle = Math.floor(Math.random() * 12);
      document.getElementById('title').innerHTML = what[randomTitle];
    }
  }
}
