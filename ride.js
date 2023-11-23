var location = document.getElementById("location");
var destination = document.getElementById("destination");

//declare all options to manipulate

function loc() {
  // BagongNayon
  // Barangca
  // Calantipay
  // Catulinan
  // Concepcion
  // Hinukay
  // Makinabang
  // Matangtubig
  // Pagala
  // Paitan
  // Piel
  // Pinagbarilan
  // Poblacion
  // Sabang
  // SanJose
  // SanRoque
  // StaBarbara
  // StoCristo
  // StoNiÑo
  // Subic
  // Sulivan
  // Tangos
  // Tarcan
  // Tiaong
  // Tibag
  // Tilapayong
  // VirgenDelasFlores
}

function picklocation() {
  var location = document.getElementById("location");
  var x = location.selectedIndex;
  var y = location.options;
  
  var bagongnayon = document.getElementById("bagongnayon");
  var barangca = document.getElementById("barangca");
  var calantipay = document.getElementById("calantipay");
  var catulinan = document.getElementById("catulinan");
  var concepcion = document.getElementById("concepcion");
  var hinukay = document.getElementById("hinukay");
  var makinabang = document.getElementById("makinabang");
  var matangtubig = document.getElementById("matangtubig");
  var pagala = document.getElementById("pagala");
  var paitan = document.getElementById("paitan");
  var piel = document.getElementById("piel");
  var pinagbarilan = document.getElementById("pinagbarilan");
  var poblacion = document.getElementById("poblacion");
  var sabang = document.getElementById("sabang");
  var sanjose = document.getElementById("sanjose");
  var sanroque = document.getElementById("sanroque");
  var santabarbara = document.getElementById("santabarbara");
  var santocristo = document.getElementById("santocristo");
  var santonino = document.getElementById("santonino");
  var subic = document.getElementById("subic");
  var sulivan = document.getElementById("sulivan");
  var tangos = document.getElementById("tangos");
  var tarcan = document.getElementById("tarcan");
  var tiaong = document.getElementById("tiaong");
  var tibag = document.getElementById("tibag");
  var tilapayong = document.getElementById("tilapayong");
  var vdf = document.getElementById("vdf");
  
  if (x[y].index == 0) {
    bagongnayon.innerHTML = "Bagong Nayon - 10 Pesos";
  }

  
}