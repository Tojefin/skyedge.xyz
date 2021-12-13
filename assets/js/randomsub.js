const subs = ["на чиле на раслабоне", "опять работа?", "дело сделано", "привет старый", "я ненавижу преступность", "эй скороход", "я преисполнился а ты?", "написать подпись", "обнови страницу", "3301", "¯\\_(ツ)_/¯", "да да я", "у меня джип в Москве", "хотя покемоны классные", "бать те нормально?", "меня снимаешь?", "здесь съёмка видео запрещена", "kinofree.", "edagen.", "dis.", "vk.", "палку давай! ПАЛКУ!", "made by Tojefin"];

window.onload = async function() {
  document.getElementById('subtitle').innerHTML = randomitem(subs);
  return console.log('Вообще-то можно просто у меня спросить, что тут и как -_-');
}

function randomitem(list) {
  var id = Math.floor(Math.random()*list.length);
  return list[id];
}
