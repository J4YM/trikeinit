//declare all options to manipulate

function picklocation() {
  var location = document.getElementById("location");
  var destination = document.getElementById("destination");
  var x = location.options[location.selectedIndex].value;
  var y = destination.options[destination.selectedIndex].value;
  
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
  var santoniño = document.getElementById("santonino");
  var subic = document.getElementById("subic");
  var sulivan = document.getElementById("sulivan");
  var tangos = document.getElementById("tangos");
  var tarcan = document.getElementById("tarcan");
  var tiaong = document.getElementById("tiaong");
  var tibag = document.getElementById("tibag");
  var tilapayong = document.getElementById("tilapayong");
  var vdf = document.getElementById("vdf");

  var book = document.getElementById("booknow");

  //Change Location Text per Options Selected
  if (x == 1/*Bagong Nayon */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(0.5);
    barangca.text = "Barangca - " + multiply(4.1);
    calantipay.text = "Calantipay - " + multiply(5.2);
    catulinan.text = "Catulinan - "+ multiply(4.2);
    concepcion.text = "Concepcion - "+ multiply(2);
    hinukay.text = "Hinukay - " + multiply(5.3);
    makinabang.text = "Makinabang - " + multiply(5.8);
    matangtubig.text = "Matangtubig - " + multiply(6.3);
    pagala.text = "Pagala - " + multiply(6.3);
    paitan.text = "Paitan - " + multiply(6.3);
    piel.text = "Piel - " + multiply(2.5);
    pinagbarilan.text = "Pinagbarilan - " + multiply(2.9);
    poblacion.text = "Poblacion - " + multiply(1.1);
    sabang.text = "Sabang - " + multiply(2.5);
    sanjose.text = "San Jose - " + multiply(2.1);
    sanroque.text = "San Roque - " + multiply(4.2);
    santabarbara.text = "Santa Barbara - " + multiply(3.7);
    santocristo.text = "Santo Cristo - " + multiply(1.1);
    santoniño.text = "Santo Niño - " + multiply(1.7);
    subic.text = "Subic - " + multiply(1.3);
    sulivan.text = "Sulivan - " + multiply(5.2);
    tangos.text = "Tangos - " + multiply(1.2);
    tarcan.text = "Tarcan - " + multiply(4.1);
    tiaong.text = "Tiaong - " + multiply(2.9);
    tibag.text = "Tibag - " + multiply(1.2);
    tilapayong.text = "Tilapayong - " + multiply(4.8);
    vdf.text = "Virgen Delas Flores - " + multiply(2.3);
  } 
  else if (x == 2 /* Barangca */) {
    bagongnayon.text = "Bagong Nayon -  " + multiply(4.1);
    barangca.text = "Barangca - " + multiply(0.5);
    calantipay.text = "Calantipay - " + multiply(8.3);
    catulinan.text = "Catulinan - " + multiply(7.3);
    concepcion.text = "Concepcion - " + multiply(6.3);
    hinukay.text = "Hinukay - " + multiply(4.8);
    makinabang.text = "Makinabang - " + multiply(10.4);
    matangtubig.text = "Matangtubig - " +multiply(8.7);
    pagala.text = "Pagala - " + multiply(6.3);
    paitan.text = "Paitan - " + multiply(3);
    piel.text = "Piel - " + multiply(4.9);
    pinagbarilan.text = "Pinagbarilan - " + multiply(6.3);
    poblacion.text = "Poblacion - " + multiply(5.9);
    sabang.text = "Sabang - " + multiply(2.8);
    sanjose.text = "San Jose - " + multiply(5.8);
    sanroque.text = "San Roque - " + multiply(3.2);
    santabarbara.text = "Santa Barbara - " + multiply(8.7);
    santocristo.text = "Santo Cristo - " + multiply(4.8);
    santoniño.text = "Santo Niño - " + multiply(3.7);
    subic.text = "Subic - " + multiply(4.4);
    sulivan.text = "Sulivan - " + multiply(7.6);
    tangos.text = "Tangos - " + multiply(4.2);
    tarcan.text = "Tarcan - " + multiply(10);
    tiaong.text = "Tiaong - " + multiply(6.8);
    tibag.text = "Tibag - " + multiply(5.2);
    tilapayong.text = "Tilapayong - " + multiply(7.1);
    vdf.text = "Virgen Delas Flores - " + multiply(6.3);
  } 
  else if (x == 3/* Calantipay */) {
    bagongnayon.text = "Bagong Nayon - "+ multiply(5.2);
    barangca.text = "Barangca - "+ multiply(8.3);
    calantipay.text = "Calantipay - "+ multiply(0.5);
    catulinan.text = "Catulinan - "+ multiply(2.9);
    concepcion.text = "Concepcion - "+ multiply(4.3);
    hinukay.text = "Hinukay - "+ multiply(8.5);
    makinabang.text = "Makinabang - "+ multiply(8.3);
    matangtubig.text = "Matangtubig - "+ multiply(2.3);
    pagala.text = "Pagala - " + multiply();
    paitan.text = "Paitan - "+ multiply(8.9);
    piel.text = "Piel - "+ multiply(4.8);
    pinagbarilan.text = "Pinagbarilan - "+ multiply(2.9);
    poblacion.text = "Poblacion - "+ multiply(6.1);
    sabang.text = "Sabang - "+ multiply(8.5);
    sanjose.text = "San Jose - "+ multiply(5.7);
    sanroque.text = "San Roque - "+ multiply(5.9);
    santabarbara.text = "Santa Barbara - "+ multiply(7.2);
    santocristo.text = "Santo Cristo - "+ multiply(6.3);
    santoniño.text = "Santo Niño - "+ multiply(6.1);
    subic.text = "Subic - "+ multiply(6.5);
    sulivan.text = "Sulivan - "+ multiply(2.3);
    tangos.text = "Tangos - "+ multiply(5.3);
    tarcan.text = "Tarcan - "+ multiply(8);
    tiaong.text = "Tiaong - "+ multiply(5.4);
    tibag.text = "Tibag - "+ multiply(6.9);
    tilapayong.text = "Tilapayong - "+ multiply(3.5);
    vdf.text = "Virgen Delas Flores - "+ multiply(5.1);
  }
  else if (x == 4/*Catulinan */) {
    bagongnayon.text = "Bagong Nayon - "+ multiply(4.2);
    barangca.text = "Barangca - "+ multiply(7.3);
    calantipay.text = "Calantipay - "+ multiply(2.9);
    catulinan.text = "Catulinan - "+ multiply(0.5);
    concepcion.text = "Concepcion - "+ multiply(3.3);
    hinukay.text = "Hinukay - "+ multiply(7.5);
    makinabang.text = "Makinabang - "+ multiply(7.3);
    matangtubig.text = "Matangtubig -"+ multiply(2.6);
    pagala.text = "Pagala - "+ multiply(1.3);
    paitan.text = "Paitan - "+ multiply(6.8);
    piel.text = "Piel - "+ multiply(2.6);
    pinagbarilan.text = "Pinagbarilan - "+ multiply(1.1);
    poblacion.text = "Poblacion - "+ multiply(4.3);
    sabang.text = "Sabang - "+ multiply(6.7);
    sanjose.text = "San Jose - "+ multiply(3.6);
    sanroque.text = "San Roque - "+ multiply(3.7);
    santabarbara.text = "Santa Barbara - "+ multiply(5.4);
    santocristo.text = "Santo Cristo - "+ multiply(4);
    santoniño.text = "Santo Niño - "+ multiply(4);
    subic.text = "Subic - "+ multiply(4.7);
    sulivan.text = "Sulivan - "+ multiply(0.5);
    tangos.text = "Tangos - "+ multiply(3.2);
    tarcan.text = "Tarcan - "+ multiply(6.2);
    tiaong.text = "Tiaong - "+ multiply(3.6);
    tibag.text = "Tibag - "+ multiply(4.5);
    tilapayong.text = "Tilapayong - "+ multiply(1.7);
    vdf.text = "Virgen Delas Flores - "+ multiply(3.3);
  }
  else if (x == 5/* Concepcion */) {
    bagongnayon.text = "Bagong Nayon - "+ multiply(2.8);
    barangca.text = "Barangca - "+ multiply(6.4);
    calantipay.text = "Calantipay - "+ multiply(3.4);
    catulinan.text = "Catulinan - "+ multiply(3.3);
    concepcion.text = "Concepcion - "+ multiply(0.5);
    hinukay.text = "Hinukay - "+ multiply(7.6);
    makinabang.text = "Makinabang - "+ multiply(4.4);
    matangtubig.text = "Matangtubig - "+ multiply(3.2);
    pagala.text = "Pagala - " + multiply(2.8);
    paitan.text = "Paitan - "+ multiply(8);
    piel.text = "Piel - "+ multiply(3.1);
    pinagbarilan.text = "Pinagbarilan - "+ multiply(1.4);
    poblacion.text = "Poblacion - "+ multiply(2);
    sabang.text = "Sabang - "+ multiply(5.1);
    sanjose.text = "San Jose - "+ multiply(1.3);
    sanroque.text = "San Roque - "+ multiply(5.4);
    santabarbara.text = "Santa Barbara - "+ multiply(3);
    santocristo.text = "Santo Cristo - "+ multiply(1.3);
    santoniño.text = "Santo Niño - "+ multiply(5);
    subic.text = "Subic - "+ multiply(2.4);
    sulivan.text = "Sulivan - "+ multiply(2.1);
    tangos.text = "Tangos - "+ multiply(3.7);
    tarcan.text = "Tarcan - "+ multiply(4.6);
    tiaong.text = "Tiaong - "+ multiply(1.3);
    tibag.text = "Tibag - "+ multiply(2.2);
    tilapayong.text = "Tilapayong - "+ multiply(3.9);
    vdf.text = "Virgen Delas Flores - "+ multiply(1);
  }
  else if (x == 6/* Hinukay */) {
    bagongnayon.text = "Bagong Nayon - "+ multiply(6.5);
    barangca.text = "Barangca - "+ multiply(4.8);
    calantipay.text = "Calantipay - "+ multiply(8.5);
    catulinan.text = "Catulinan - "+ multiply(7.5);
    concepcion.text = "Concepcion - "+ multiply(7.6);
    hinukay.text = "Hinukay - "+ multiply(0.5);
    makinabang.text = "Makinabang - "+ multiply(11.6);
    matangtubig.text = "Matangtubig - "+ multiply(10);
    pagala.text = "Pagala - " + multiply(5.9);
    paitan.text = "Paitan - "+ multiply(3.4);
    piel.text = "Piel - "+ multiply(5.1);
    pinagbarilan.text = "Pinagbarilan - "+ multiply(8.1);
    poblacion.text = "Poblacion - "+ multiply(6.7);
    sabang.text = "Sabang - "+ multiply(7.6);
    sanjose.text = "San Jose - "+ multiply(7);
    sanroque.text = "San Roque - "+ multiply(3.3);
    santabarbara.text = "Santa Barbara - "+ multiply(9.8);
    santocristo.text = "Santo Cristo - "+ multiply(6.5);
    santoniño.text = "Santo Niño - "+ multiply(3);
    subic.text = "Subic - "+ multiply(6.6);
    sulivan.text = "Sulivan - "+ multiply(6.9);
    tangos.text = "Tangos - "+ multiply(4.4);
    tarcan.text = "Tarcan - "+ multiply(11.3);
    tiaong.text = "Tiaong - "+ multiply(8.1);
    tibag.text = "Tibag - "+ multiply(6.6);
    tilapayong.text = "Tilapayong - "+ multiply(7.4);
    vdf.text = "Virgen Delas Flores - "+ multiply(7.6);
  }
  else if (x == 7/*Makinabang   */) {
    bagongnayon.text = "Bagong Nayon - "+ multiply(8);
    barangca.text = "Barangca - "+ multiply(10.4);
    calantipay.text = "Calantipay - "+ multiply(8.3);
    catulinan.text = "Catulinan - "+ multiply(7.3);
    concepcion.text = "Concepcion - "+ multiply(4.4);
    hinukay.text = "Hinukay - "+ multiply(10);
    makinabang.text = "Makinabang - "+ multiply(0.5);
    matangtubig.text = "Matangtubig - "+ multiply(7.2);
    pagala.text = "Pagala - " + multiply(6.8);
    paitan.text = "Paitan - "+ multiply(12);
    piel.text = "Piel - "+ multiply(7.1);
    pinagbarilan.text = "Pinagbarilan - "+ multiply(5.4);
    poblacion.text = "Poblacion - "+ multiply(4.9);
    sabang.text = "Sabang - "+ multiply(9.1);
    sanjose.text = "San Jose - "+ multiply(3.9);
    sanroque.text = "San Roque - "+ multiply(9.4);
    santabarbara.text = "Santa Barbara - " +multiply(2.8);
    santocristo.text = "Santo Cristo - "+multiply(6.9);
    santoniño.text = "Santo Niño - "+multiply(9);
    subic.text = "Subic - "+multiply(5.6);
    sulivan.text = "Sulivan - "+multiply(6.1);
    tangos.text = "Tangos - "+ multiply(7.7);
    tarcan.text = "Tarcan - "+ multiply(3.8);
    tiaong.text = "Tiaong - "+ multiply(3.9);
    tibag.text = "Tibag - "+ multiply(5.1);
    tilapayong.text = "Tilapayong - "+ multiply(7.9);
    vdf.text = "Virgen Delas Flores - "+ multiply(3.6);
  }
  else if (x == 8/*Matangtubig */) {
    bagongnayon.text = "Bagong Nayon - "+ multiply(6.3);
    barangca.text = "Barangca - " + multiply(8.7);
    calantipay.text = "Calantipay - " + multiply(2.8);
    catulinan.text = "Catulinan - " + multiply(2.6);
    concepcion.text = "Concepcion - " + multiply(3.2);
    hinukay.text = "Hinukay - " + multiply(10);
    makinabang.text = "Makinabang - " + multiply(7.2);
    matangtubig.text = "Matangtubig - " + multiply(0.5);;
    pagala.text = "Pagala - " + multiply();
    paitan.text = "Paitan - " + multiply(10.4);
    piel.text = "Piel - "+multiply(5.5);
    pinagbarilan.text = "Pinagbarilan - "+multiply(1.9);
    poblacion.text = "Poblacion - "+multiply(5.1);
    sabang.text = "Sabang - " + multiply(7.5);
    sanjose.text = "San Jose - "+multiply(4.4);
    sanroque.text = "San Roque - " + multiply(7.8);
    santabarbara.text = "Santa Barbara - " + multiply(6.1);
    santocristo.text = "Santo Cristo - " + multiply(4.8);
    santoniño.text = "Santo Niño - " + multiply(7.4);
    subic.text = "Subic - " + multiply(6.5);
    sulivan.text = "Sulivan - "; + multiply(2.2)
    tangos.text = "Tangos - " + multiply(6);
    tarcan.text = "Tarcan - " + multiply(4.1);
    tiaong.text = "Tiaong - " + multiply(4.4);
    tibag.text = "Tibag - " + multiply(5.3);
    tilapayong.text = "Tilapayong - " + multiply(4);
    vdf.text = "Virgen Delas Flores - " + multiply(4.1);
  }
  else if (x == 9/* Pagala  */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(3.1);
    barangca.text = "Barangca - " + multiply(5.5);
    calantipay.text = "Calantipay - " + multiply(3.4);
    catulinan.text = "Catulinan - " + multiply(1.3);
    concepcion.text = "Concepcion - " + multiply(2.8);
    hinukay.text = "Hinukay - " + multiply(5.9);
    makinabang.text = "Makinabang - " + multiply(3.6);
    matangtubig.text = "Matangtubig - " + multiply(6.8);
    pagala.text = "Pagala - " + multiply(0.5);
    paitan.text = "Paitan - " + multiply(6.2);
    piel.text = "Piel - " + multiply(1.5);
    pinagbarilan.text = "Pinagbarilan - " + multiply(2.4);
    poblacion.text = "Poblacion - " + multiply(3.3);
    sabang.text = "Sabang - " + multiply(4.2);
    sanjose.text = "San Jose - " + multiply(2.7);
    sanroque.text = "San Roque - " + multiply(3.4);
    santabarbara.text = "Santa Barbara - " + multiply(5.1);
    santocristo.text = "Santo Cristo - " + multiply(2.1);
    santoniño.text = "Santo Niño - " + multiply(3.2);
    subic.text = "Subic - " + multiply(3.2);
    sulivan.text = "Sulivan - " + multiply(1.8);
    tangos.text = "Tangos - " + multiply(1.9);
    tarcan.text = "Tarcan - " + multiply(6.5);
    tiaong.text = "Tiaong - " + multiply(3.3);
    tibag.text = "Tibag - " + multiply(3.2);
    tilapayong.text = "Tilapayong - " + multiply(3);
    vdf.text = "Virgen Delas Flores - " + multiply(2.9);
  }
  else if (x == 10/* Paitan */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(5.6);
    barangca.text = "Barangca - " + multiply(3);
    calantipay.text = "Calantipay - " + multiply(8.9);
    catulinan.text = "Catulinan - " + multiply(8);
    concepcion.text = "Concepcion - " + multiply(6.8);
    hinukay.text = "Hinukay - " + multiply(3.4);
    makinabang.text = "Makinabang - " + multiply(10.4);
    matangtubig.text = "Matangtubig - " + multiply(12);
    pagala.text = "Pagala - " + multiply();
    paitan.text = "Paitan - " + multiply(0.5);
    piel.text = "Piel - " + multiply(5.5);
    pinagbarilan.text = "Pinagbarilan - " + multiply(8.5);
    poblacion.text = "Poblacion - " + multiply(7.1);
    sabang.text = "Sabang - " + multiply(5.6);
    sanjose.text = "San Jose - " + multiply(7.6);
    sanroque.text = "San Roque - " + multiply(3.9);
    santabarbara.text = "Santa Barbara - " + multiply(10.2);
    santocristo.text = "Santo Cristo - " + multiply(6.7);
    santoniño.text = "Santo Niño - " + multiply(3.4);
    subic.text = "Subic - " + multiply(7);
    sulivan.text = "Sulivan - " + multiply(7.3);
    tangos.text = "Tangos - " + multiply(4.8);
    tarcan.text = "Tarcan - " + multiply(11.7);
    tiaong.text = "Tiaong - " + multiply(8.5);
    tibag.text = "Tibag - " + multiply(7);
    tilapayong.text = "Tilapayong - " + multiply(7.8);
    vdf.text = "Virgen Delas Flores - " + multiply(8);
  }
  else if (x == 11/* Piel */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(2.5);
    barangca.text = "Barangca - " + multiply(4.9);
    calantipay.text = "Calantipay - " + multiply(6.5);
    catulinan.text = "Catulinan - " + multiply(3.1);
    concepcion.text = "Concepcion - " + multiply(2.6);
    hinukay.text = "Hinukay - " + multiply(10);
    makinabang.text = "Makinabang - " + multiply(5.5);
    matangtubig.text = "Matangtubig - " + multiply(7.1);
    pagala.text = "Pagala - " + multiply();
    paitan.text = "Paitan - " + multiply(5.5);
    piel.text = "Piel - " + multiply(0.5);
    pinagbarilan.text = "Pinagbarilan - " + multiply(3.6);
    poblacion.text = "Poblacion - " + multiply(2.8);
    sabang.text = "Sabang - " + multiply(3.6);
    sanjose.text = "San Jose - " + multiply(2.9);
    sanroque.text = "San Roque - " + multiply(2.6);
    santabarbara.text = "Santa Barbara - " + multiply(6.1);
    santocristo.text = "Santo Cristo - " + multiply(1.9);
    santoniño.text = "Santo Niño - " + multiply(2.4);
    subic.text = "Subic - " + multiply(2.7);
    sulivan.text = "Sulivan - " + multiply(4.4);
    tangos.text = "Tangos - " + multiply(1.1);
    tarcan.text = "Tarcan - " + multiply(6.8);
    tiaong.text = "Tiaong - "+ multiply(4.3);
    tibag.text = "Tibag - " + multiply(2.7);
    tilapayong.text = "Tilapayong - " + multiply(4.5);
    vdf.text = "Virgen Delas Flores - " + multiply(3.6);
  }
  else if (x == 12/*Pinagbarilan  */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(4.4);
    barangca.text = "Barangca - " + multiply(6.8);
    calantipay.text = "Calantipay - " + multiply(2.9);
    catulinan.text = "Catulinan - " + multiply(1.4);
    concepcion.text = "Concepcion - " + multiply(1.1);
    hinukay.text = "Hinukay - " + multiply(8.1);
    makinabang.text = "Makinabang - " + multiply(1.9);
    matangtubig.text = "Matangtubig - " + multiply(5.4);
    pagala.text = "Pagala - " + multiply(2.4);
    paitan.text = "Paitan - " + multiply(8.5);
    piel.text = "Piel - " + multiply(3.6);
    pinagbarilan.text = "Pinagbarilan - " + multiply(0.5);
    poblacion.text = "Poblacion - " + multiply(3.2);
    sabang.text = "Sabang - " + multiply(5.6);
    sanjose.text = "San Jose - " + multiply(2.5);
    sanroque.text = "San Roque - " + multiply(5.9);
    santabarbara.text = "Santa Barbara - " + multiply(4.2);
    santocristo.text = "Santo Cristo - " + multiply(2.9);
    santoniño.text = "Santo Niño - " + multiply(5.5);
    subic.text = "Subic - " + multiply(3.6);
    sulivan.text = "Sulivan - " + multiply(0.75);
    tangos.text = "Tangos - " + multiply(4.1);
    tarcan.text = "Tarcan - " + multiply(5);
    tiaong.text = "Tiaong - " + multiply(2.5);
    tibag.text = "Tibag - " + multiply(3.4);
    tilapayong.text = "Tilapayong - " + multiply(2.6);
    vdf.text = "Virgen Delas Flores - " + multiply(2.2);
  } //Naka Comment yung wala pang values para mag run paren for testing
  else if (x == 13/* Poblacion  */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(3.3);
    barangca.text = "Barangca - " + multiply(5.7);
    calantipay.text = "Calantipay - " + multiply(6.1);
    catulinan.text = "Catulinan - " + multiply(4.3);
    concepcion.text = "Concepcion - " + multiply(2);
    hinukay.text = "Hinukay - " + multiply(6.7);
    makinabang.text = "Makinabang - " + multiply(4.9);
    matangtubig.text = "Matangtubig - " + multiply(5.1);
    pagala.text = "Pagala - " + multiply(3.3);
    paitan.text = "Paitan - " + multiply(7.1);
    piel.text = "Piel - " + multiply(3.6);
    pinagbarilan.text = "Pinagbarilan - " + multiply(3.2);
    poblacion.text = "Poblacion - " + multiply(0.5);
    sabang.text = "Sabang - " + multiply(3.2);
    sanjose.text = "San Jose - " + multiply(1);
    sanroque.text = "San Roque - " + multiply(4.5);
    santabarbara.text = "Santa Barbara - " + multiply(3.5);
    santocristo.text = "Santo Cristo - " + multiply(1.2);
    santoniño.text = "Santo Niño - " + multiply(4.2);
    subic.text = "Subic - " + multiply(1.1);
    sulivan.text = "Sulivan - " + multiply(4.2);
    tangos.text = "Tangos - " + multiply(2.9);
    tarcan.text = "Tarcan - " + multiply(6.2);
    tiaong.text = "Tiaong - " + multiply(1.8);
    tibag.text = "Tibag - " + multiply(0.65);
    tilapayong.text = "Tilapayong - " + multiply(6);
    vdf.text = "Virgen Delas Flores - " + multiply(1.3);
  }
  else if (x == 14/* Sabang */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(1.4);
    barangca.text = "Barangca - " + multiply(2.8);
    calantipay.text = "Calantipay - " + multiply(8.5);
    catulinan.text = "Catulinan - " + multiply(6.7);
    concepcion.text = "Concepcion - " + multiply(5.1);
    hinukay.text = "Hinukay - " + multiply(7.6);
    makinabang.text = "Makinabang - " + multiply(9.1);
    matangtubig.text = "Matangtubig - " + multiply(7.5);
    pagala.text = "Pagala - " + multiply(4.2);
    paitan.text = "Paitan - " + multiply(5.6);
    piel.text = "Piel - " + multiply(3.6);
    pinagbarilan.text = "Pinagbarilan - " + multiply(5.6); 
    poblacion.text = "Poblacion - " + multiply(3.2);
    sabang.text = "Sabang - " + multiply(6.3);
    sanjose.text = "San Jose - " + multiply(3.4);
    sanroque.text = "San Roque - " + multiply(6.1);
    santabarbara.text = "Santa Barbara - " + multiply(6.3);
    santocristo.text = "Santo Cristo - " + multiply(3.8);
    santoniño.text = "Santo Niño - " + multiply(5);
    subic.text = "Subic - " + multiply(2.1);
    sulivan.text = "Sulivan - " + multiply(6.3);
    tangos.text = "Tangos - " + multiply(3.6);
    tarcan.text = "Tarcan - " + multiply(8.8);
    tiaong.text = "Tiaong - " + multiply(4.5);
    tibag.text = "Tibag - " + multiply(2.9);
    tilapayong.text = "Tilapayong - " + multiply(7.3);
    vdf.text = "Virgen Delas Flores - " + multiply(4);
  } 
  else if (x == 15/* San Jose*/) {
    bagongnayon.text = "Bagong Nayon - " + multiply(3.6);
    barangca.text = "Barangca - " + multiply(6.1);
    calantipay.text = "Calantipay - " + multiply(5.4);
    catulinan.text = "Catulinan - " + multiply(3.6);
    concepcion.text = "Concepcion - " + multiply(1.3);
    hinukay.text = "Hinukay - " + multiply(7);
    makinabang.text = "Makinabang - " + multiply(3.9);
    matangtubig.text = "Matangtubig - " + multiply(4.4);
    pagala.text = "Pagala - " + multiply(2.7);
    paitan.text = "Paitan - " + multiply(7.6);
    piel.text = "Piel - " + multiply(2.8);
    pinagbarilan.text = "Pinagbarilan - " + multiply(2.5);
    poblacion.text = "Poblacion - " + multiply(1.5);
    sabang.text = "Sabang - " + multiply(3.4);
    sanjose.text = "San Jose - " + multiply(0.5);
    sanroque.text = "San Roque - " + multiply();
    santabarbara.text = "Santa Barbara - " + multiply(2.6);
    santocristo.text = "Santo Cristo - " + multiply(0.95);
    santoniño.text = "Santo Niño - " + multiply(4.7);
    subic.text = "Subic - " + multiply(1.6);
    sulivan.text = "Sulivan - " + multiply(3.3);
    tangos.text = "Tangos - " + multiply(3.4);
    tarcan.text = "Tarcan - " + multiply(5.3);
    tiaong.text = "Tiaong - " + multiply(0.85);
    tibag.text = "Tibag - " + multiply(1.2);
    tilapayong.text = "Tilapayong - " + multiply(5.1);
    vdf.text = "Virgen Delas Flores - " + multiply(0.35);
  }
  else if (x == 16/* San Roque */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(4.3);
    barangca.text = "Barangca - " + multiply(3.2);
    calantipay.text = "Calantipay - " + multiply(6);
    catulinan.text = "Catulinan - " + multiply(3.7);
    concepcion.text = "Concepcion - " + multiply(5.4);
    hinukay.text = "Hinukay - " + multiply(3.3);
    makinabang.text = "Makinabang - " + multiply(9.4);
    matangtubig.text = "Matangtubig - " + multiply(7.8);
    pagala.text = "Pagala - " + multiply(3.4);
    paitan.text = "Paitan - " + multiply(3.9);
    piel.text = "Piel - " + multiply(2.6);
    pinagbarilan.text = "Pinagbarilan - " + multiply(5.9);
    poblacion.text = "Poblacion - " + multiply(4.5);
    sabang.text = "Sabang - " + multiply(6.1);
    sanjose.text = "San Jose - " + multiply(5.2);
    sanroque.text = "San Roque - " + multiply(0.5);
    santabarbara.text = "Santa Barbara - " + multiply(8);
    santocristo.text = "Santo Cristo - " + multiply(3.8);
    santoniño.text = "Santo Niño - " + multiply(1.4);
    subic.text = "Subic - " + multiply(4.5);
    sulivan.text = "Sulivan - " + multiply(5.9);
    tangos.text = "Tangos - " + multiply(3.4);
    tarcan.text = "Tarcan - " + multiply(9.1);
    tiaong.text = "Tiaong - " + multiply(7.1);
    tibag.text = "Tibag - " + multiply(5.4);
    tilapayong.text = "Tilapayong - " + multiply(6.3);
    vdf.text = "Virgen Delas Flores - " + multiply(7);
  }
  else if (x == 17/*Santa Barbara*/) {
    bagongnayon.text = "Bagong Nayon - " + multiply(6.2);
    barangca.text = "Barangca - " + multiply(8.6);
    calantipay.text = "Calantipay - " + multiply(7.2);
    catulinan.text = "Catulinan - " + multiply(5.4);
    concepcion.text = "Concepcion - " + multiply(3);
    hinukay.text = "Hinukay - " + multiply(9.8);
    makinabang.text = "Makinabang - " + multiply(2.8);
    matangtubig.text = "Matangtubig - " + multiply(6.1);
    pagala.text = "Pagala - " + multiply(5.1);
    paitan.text = "Paitan - " + multiply(10.2);
    piel.text = "Piel - " + multiply(6.1);
    pinagbarilan.text = "Pinagbarilan - " + multiply(4.2);
    poblacion.text = "Poblacion - " + multiply(3.5);
    sabang.text = "Sabang - " + multiply(6.3);
    sanjose.text = "San Jose - " + multiply(2.6);
    sanroque.text = "San Roque - " + multiply();
    santabarbara.text = "Santa Barbara - " + multiply(0.5);
    santocristo.text = "Santo Cristo - " + multiply(3.5);
    santoniño.text = "Santo Niño - " + multiply(7.3);
    subic.text = "Subic - " + multiply(4.1);
    sulivan.text = "Sulivan - " + multiply(5);
    tangos.text = "Tangos - " + multiply(5.8);
    tarcan.text = "Tarcan - " + multiply(4.1);
    tiaong.text = "Tiaong - " + multiply(2.2);
    tibag.text = "Tibag - " + multiply(3.7);
    tilapayong.text = "Tilapayong - " + multiply(6.8);
    vdf.text = "Virgen Delas Flores - " + multiply(2.2);
  }
  else if (x == 18/*Santo Cristo */) {
    bagongnayon.text = "Bagong Nayon - " + multiply(2.7);
    barangca.text = "Barangca - " + multiply(5.1);
    calantipay.text = "Calantipay - " + multiply(5.8);
    catulinan.text = "Catulinan - " + multiply(4);
    concepcion.text = "Concepcion - " + multiply(1.3);
    hinukay.text = "Hinukay - " + multiply(6.5);
    makinabang.text = "Makinabang - " + multiply(6.9);
    matangtubig.text = "Matangtubig - " + multiply(4.8);
    pagala.text = "Pagala - " + multiply(2.1);
    paitan.text = "Paitan - " + multiply(6.7);
    piel.text = "Piel - " + multiply(1.9);
    pinagbarilan.text = "Pinagbarilan - " + multiply(2.9);
    poblacion.text = "Poblacion - " + multiply(1.2);
    sabang.text = "Sabang - " + multiply(3.8);
    sanjose.text = "San Jose - " + multiply(0.95);
    sanroque.text = "San Roque - " + multiply(3.8);
    santabarbara.text = "Santa Barbara - " + multiply(3.5);
    santocristo.text = "Santo Cristo - " + multiply(0.5);
    santoniño.text = "Santo Niño - " + multiply(3.7);
    subic.text = "Subic - " + multiply(1.5);
    sulivan.text = "Sulivan - " + multiply(4);
    tangos.text = "Tangos - " + multiply(5.6);
    tarcan.text = "Tarcan - " + multiply(1.7);
    tiaong.text = "Tiaong - " + multiply(3.2);
    tibag.text = "Tibag - " + multiply(4.7);
    tilapayong.text = "Tilapayong - " + multiply(5.9);
    vdf.text = "Virgen Delas Flores - " + multiply(3.2);
  }
  else if (x == 19/*Santo Niño*/) {
    bagongnayon.text = "Bagong Nayon - " + multiply(3.9);
    barangca.text = "Barangca - " + multiply(2.7);
    calantipay.text = "Calantipay - " + multiply(5.9);
    catulinan.text = "Catulinan - " + multiply(4);
    concepcion.text = "Concepcion - " + multiply(5);
    hinukay.text = "Hinukay - " + multiply(3);
    makinabang.text = "Makinabang - " + multiply(9);
    matangtubig.text = "Matangtubig - " + multiply(7.4);
    pagala.text = "Pagala - " + multiply(3.2);
    paitan.text = "Paitan - " + multiply(3.4);
    piel.text = "Piel - " + multiply(2.4);
    pinagbarilan.text = "Pinagbarilan - " + multiply(5.5);
    poblacion.text = "Poblacion - " + multiply(4.2);
    sabang.text = "Sabang - " + multiply(5);
    sanjose.text = "San Jose - " + multiply(4.7);
    sanroque.text = "San Roque - " + multiply(1.4);
    santabarbara.text = "Santa Barbara - " + multiply(7.2);
    santocristo.text = "Santo Cristo - " + multiply(3.7);
    santoniño.text = "Santo Niño - " + multiply(0.5);
    subic.text = "Subic - " + multiply(4);
    sulivan.text = "Sulivan - " + multiply(6.1);
    tangos.text = "Tangos - " + multiply(3.4);
    tarcan.text = "Tarcan - " + multiply(8.7);
    tiaong.text = "Tiaong - " + multiply(3);
    tibag.text = "Tibag - " + multiply(1.4);
    tilapayong.text = "Tilapayong - " + multiply(7.1);
    vdf.text = "Virgen Delas Flores - " + multiply(2.7);
  }
  else if (x == 20/*Subic*/) {
    bagongnayon.text = "Bagong Nayon - " + multiply(2);
    barangca.text = "Barangca - " + multiply(4.3);
    calantipay.text = "Calantipay - " + multiply(5.7);
    catulinan.text = "Catulinan - " + multiply(4.7);
    concepcion.text = "Concepcion - " + multiply(2.4);
    hinukay.text = "Hinukay - " + multiply(6.6);
    makinabang.text = "Makinabang - " + multiply(5.6);
    matangtubig.text = "Matangtubig - " + multiply(6.5);
    pagala.text = "Pagala - " + multiply(3.2);
    paitan.text = "Paitan - " + multiply(7);
    piel.text = "Piel - " + multiply(2.7);
    pinagbarilan.text = "Pinagbarilan - " + multiply(3.6);
    poblacion.text = "Poblacion - " + multiply(1.1);
    sabang.text = "Sabang - " + multiply(2.1);
    sanjose.text = "San Jose - " + multiply(1.6);
    sanroque.text = "San Roque - " + multiply(4.4);
    santabarbara.text = "Santa Barbara - " + multiply(4.1);
    santocristo.text = "Santo Cristo - " + multiply(1.5);
    santoniño.text = "Santo Niño - " + multiply(4);
    subic.text = "Subic - " + multiply(0.5);
    sulivan.text = "Sulivan - " + multiply(5.3);
    tangos.text = "Tangos - " + multiply(2.7);
    tarcan.text = "Tarcan - " + multiply(8.5);
    tiaong.text = "Tiaong - " + multiply(2.4);
    tibag.text = "Tibag - " + multiply(0.7);
    tilapayong.text = "Tilapayong - " + multiply(6.4);
    vdf.text = "Virgen Delas Flores - " + multiply(2);
  }
  else if (x == 21/*Sulivan*/) {
    bagongnayon.text = "Bagong Nayon - " + multiply(5.2);
    barangca.text = "Barangca - " + multiply(7.6);
    calantipay.text = "Calantipay - " + multiply(2.3);
    catulinan.text = "Catulinan - " + multiply(1.3);
    concepcion.text = "Concepcion - " + multiply(2.1);
    hinukay.text = "Hinukay - " + multiply(6.9);
    makinabang.text = "Makinabang - " + multiply(6.1);
    matangtubig.text = "Matangtubig - " + multiply(2.2);
    pagala.text = "Pagala - " + multiply(1.8);
    paitan.text = "Paitan - " + multiply(7.3);
    piel.text = "Piel - " + multiply(4.3);
    pinagbarilan.text = "Pinagbarilan - " + multiply(0.75);
    poblacion.text = "Poblacion - " + multiply(3.9);
    sabang.text = "Sabang - " + multiply(6.3);
    sanjose.text = "San Jose - " + multiply(3.2);
    sanroque.text = "San Roque - " + multiply(5.9);
    santabarbara.text = "Santa Barbara - " + multiply(5);
    santocristo.text = "Santo Cristo - " + multiply(4);
    santoniño.text = "Santo Niño - " + multiply(6.1);
    subic.text = "Subic - " + multiply(5.3);
    sulivan.text = "Sulivan - " + multiply(0.5);
    tangos.text = "Tangos - " + multiply(4.9);
    tarcan.text = "Tarcan - " + multiply(5.8);
    tiaong.text = "Tiaong - " + multiply(3.2);
    tibag.text = "Tibag - " + multiply(4.4);
    tilapayong.text = "Tilapayong - " + multiply(1.9);
    vdf.text = "Virgen Delas Flores - " + multiply(2.9);
  }
  else if (x == 22/*Tangos*/) {
    bagongnayon.text = "Bagong Nayon - "+multiply(1.6);
    barangca.text = "Barangca - "+multiply(2.4);
    calantipay.text = "Calantipay - "+multiply(5.3);
    catulinan.text = "Catulinan - "+multiply(4.3);
    concepcion.text = "Concepcion - "+multiply(3.6);
    hinukay.text = "Hinukay - "+multiply(4.4);
    makinabang.text = "Makinabang - "+multiply(7.7);
    matangtubig.text = "Matangtubig - "+multiply(6);
    pagala.text = "Pagala - " + multiply(2);
    paitan.text = "Paitan - "+multiply(4.8);
    piel.text = "Piel - "+multiply(1.2);
    pinagbarilan.text = "Pinagbarilan - "+multiply(4.1);
    poblacion.text = "Poblacion - "+multiply(2.8);
    sabang.text = "Sabang - "+multiply(3.7);
    sanjose.text = "San Jose - "+multiply(3);
    sanroque.text = "San Roque - "+multiply(3.4);
    santabarbara.text = "Santa Barbara - "+multiply(5.8);
    santocristo.text = "Santo Cristo - "+multiply(5.6);
    santoniño.text = "Santo Niño - "+multiply(3.4);
    subic.text = "Subic - "+multiply(2.7);
    sulivan.text = "Sulivan - "+multiply(3.7);
    tangos.text = "Tangos - "+multiply(0.5);
    tarcan.text = "Tarcan - "+multiply(7.3);
    tiaong.text = "Tiaong - "+multiply(4.1);
    tibag.text = "Tibag - "+multiply(2.7);
    tilapayong.text = "Tilapayong - "+multiply(4.1);
    vdf.text = "Virgen Delas Flores - "+multiply(3.6);
  }
  else if (x == 23/*Tarcan */) {
    bagongnayon.text = "Bagong Nayon - "+multiply(7.6);
    barangca.text = "Barangca - "+multiply(10);
    calantipay.text = "Calantipay - "+multiply(8);
    catulinan.text = "Catulinan - "+multiply(7);
    concepcion.text = "Concepcion - "+multiply(4.6);
    hinukay.text = "Hinukay - "+multiply(11.3);
    makinabang.text = "Makinabang - "+multiply(3.8);
    matangtubig.text = "Matangtubig - "+multiply(4.1);
    pagala.text = "Pagala - " + multiply(6.5);
    paitan.text = "Paitan - "+multiply(11.7);
    piel.text = "Piel - "+multiply(6.8);
    pinagbarilan.text = "Pinagbarilan - "+multiply(5);
    poblacion.text = "Poblacion - "+multiply(6);
    sabang.text = "Sabang - "+multiply(8.8);
    sanjose.text = "San Jose - "+multiply(5.3);
    sanroque.text = "San Roque - "+multiply(9.1);
    santabarbara.text = "Santa Barbara - "+multiply(4.1);
    santocristo.text = "Santo Cristo - "+multiply(1.7);
    santoniño.text = "Santo Niño - "+multiply(8.7);
    subic.text = "Subic - "+multiply(8.5);
    sulivan.text = "Sulivan - "+multiply(5.8);
    tangos.text = "Tangos - "+multiply(7.3);
    tarcan.text = "Tarcan - "+multiply(0.5);
    tiaong.text = "Tiaong - "+multiply(5.3);
    tibag.text = "Tibag - "+multiply(6.4);
    tilapayong.text = "Tilapayong - "+multiply(7.6);
    vdf.text = "Virgen Delas Flores - "+multiply(4.9);
  }
  else if (x == 24/*Tiaong*/) {
    bagongnayon.text = "Bagong Nayon - "+multiply(4.5);
    barangca.text = "Barangca - "+multiply(6.9);
    calantipay.text = "Calantipay - "+multiply(5.4);
    catulinan.text = "Catulinan - "+multiply(4.4);
    concepcion.text = "Concepcion - "+multiply(1.3);
    hinukay.text = "Hinukay - "+multiply(8.1);
    makinabang.text = "Makinabang - "+multiply(3.6);
    matangtubig.text = "Matangtubig - "+multiply(4.4);
    pagala.text = "Pagala - " + multiply(3.9);
    paitan.text = "Paitan - "+multiply(8.5);
    piel.text = "Piel - "+multiply(3.7);
    pinagbarilan.text = "Pinagbarilan - "+multiply(2.5);
    poblacion.text = "Poblacion - "+multiply(1.6);
    sabang.text = "Sabang - "+multiply(4.5);
    sanjose.text = "San Jose - "+multiply(1.1);
    sanroque.text = "San Roque - "+multiply(7.1);
    santabarbara.text = "Santa Barbara - "+multiply(2.2);
    santocristo.text = "Santo Cristo - "+multiply(3.2);
    santoniño.text = "Santo Niño - "+multiply(3.2);
    subic.text = "Subic - "+multiply(2.4);
    sulivan.text = "Sulivan - "+multiply(3.2);
    tangos.text = "Tangos - "+multiply(4.2);
    tarcan.text = "Tarcan - "+multiply(4.9);
    tiaong.text = "Tiaong - "+multiply(0.5);
    tibag.text = "Tibag - "+multiply(2);
    tilapayong.text = "Tilapayong - "+multiply(5);
    vdf.text = "Virgen Delas Flores - "+multiply(1.5);
  }
  else if (x == 25/* Tibag */) {
    bagongnayon.text = "Bagong Nayon - "+multiply(1.2);
    barangca.text = "Barangca - "+multiply(5.3);
    calantipay.text = "Calantipay - "+multiply(6.6);
    catulinan.text = "Catulinan - "+multiply(5.6);
    concepcion.text = "Concepcion - "+multiply(2.5);
    hinukay.text = "Hinukay - "+multiply(6.5);
    makinabang.text = "Makinabang - "+multiply(5.1);
    matangtubig.text = "Matangtubig - "+multiply(5.6);
    pagala.text = "Pagala - " + multiply(3.1);
    paitan.text = "Paitan - "+multiply(6.9);
    piel.text = "Piel - "+multiply(2.5);
    pinagbarilan.text = "Pinagbarilan - "+multiply(3.7);
    poblacion.text = "Poblacion - "+multiply(0.65);
    sabang.text = "Sabang - "+multiply(2.8);
    sanjose.text = "San Jose - "+multiply(0.9);
    sanroque.text = "San Roque - "+multiply(5.4);
    santabarbara.text = "Santa Barbara - "+multiply(3.7);
    santocristo.text = "Santo Cristo - "+multiply(4.7);
    santoniño.text = "Santo Niño - "+multiply(1.4);
    subic.text = "Subic - "+multiply(0.7);
    sulivan.text = "Sulivan - "+multiply(4.4);
    tangos.text = "Tangos - "+multiply(2.5);
    tarcan.text = "Tarcan - "+multiply(6.4);
    tiaong.text = "Tiaong - "+multiply(2);
    tibag.text = "Tibag - "+multiply(0.5);
    tilapayong.text = "Tilapayong - "+multiply(6.2);
    vdf.text = "Virgen Delas Flores - "+multiply(1.5);
  }
  else if (x == 26/* Tilapayong*/) {
    bagongnayon.text = "Bagong Nayon - "+multiply(6.2);
    barangca.text = "Barangca "+ multiply(7.1);
    calantipay.text = "Calantipay - "+multiply(3.5);
    catulinan.text = "Catulinan - "+multiply(1.4);
    concepcion.text = "Concepcion - "+multiply(3.9);
    hinukay.text = "Hinukay - "+multiply(7.4);
    makinabang.text = "Makinabang - "+multiply(7.9);
    matangtubig.text = "Matangtubig - "+multiply(4);
    pagala.text = "Pagala - " + multiply(3);
    paitan.text = "Paitan - "+multiply(7.8);
    piel.text = "Piel - "+multiply(4.5);
    pinagbarilan.text = "Pinagbarilan - "+multiply(2.6);
    poblacion.text = "Poblacion - "+multiply(6.4);
    sabang.text = "Sabang - "+multiply(7.3);
    sanjose.text = "San Jose - "+multiply(5);
    sanroque.text = "San Roque - "+multiply(6.3);
    santabarbara.text = "Santa Barbara - "+multiply(6.8);
    santocristo.text = "Santo Cristo - "+multiply(5.9);
    santoniño.text = "Santo Niño - "+multiply(7.1);
    subic.text = "Subic - "+multiply(6.4);
    sulivan.text = "Sulivan - "+multiply(1.9);
    tangos.text = "Tangos - "+multiply(4.1);
    tarcan.text = "Tarcan - "+multiply(7.6);
    tiaong.text = "Tiaong - "+multiply(5);
    tibag.text = "Tibag - "+multiply(6.2);
    tilapayong.text = "Tilapayong - "+multiply(0.5);
    vdf.text = "Virgen Delas Flores - "+multiply(4.7);
  } 
  else if(x == 27 /* Virgen Delas Flores */) {
    bagongnayon.text = "Bagong Nayon - "+multiply(2.3);
    barangca.text = "Barangca - "+multiply(6.3);
    calantipay.text = "Calantipay - "+multiply(5.1);
    catulinan.text = "Catulinan - "+multiply(3.3);
    concepcion.text = "Concepcion - "+multiply(1);
    hinukay.text = "Hinukay - "+multiply(7.7);
    makinabang.text = "Makinabang - "+multiply(3.6);
    matangtubig.text = "Matangtubig - "+multiply(4.1);
    pagala.text = "Pagala - " + multiply(3.6);
    paitan.text = "Paitan - "+multiply(8.1);
    piel.text = "Piel - "+multiply(3.2);
    pinagbarilan.text = "Pinagbarilan - "+multiply(2.2);
    poblacion.text = "Poblacion - "+multiply(1.3);
    sabang.text = "Sabang - "+multiply(4);
    sanjose.text = "San Jose - "+multiply(0.6);
    sanroque.text = "San Roque - "+multiply(7);
    santabarbara.text = "Santa Barbara - "+multiply(2.2);
    santocristo.text = "Santo Cristo - "+multiply(3.2);
    santoniño.text = "Santo Niño - "+multiply(2.7);
    subic.text = "Subic - "+multiply(2);
    sulivan.text = "Sulivan - "+multiply(2.9);
    tangos.text = "Tangos - "+multiply(3.7);
    tarcan.text = "Tarcan - "+multiply(4.9);
    tiaong.text = "Tiaong - "+multiply(0.5);
    tibag.text = "Tibag - "+multiply(1.5);
    tilapayong.text = "Tilapayong - "+multiply(4.7);
    vdf.text = "Virgen Delas Flores - "+multiply(0.5);
  } 
  else {
    bagongnayon.text = "Bagong Nayon - ";
    barangca.text = "Barangca - +";
    calantipay.text = "Calantipay - ";
    catulinan.text = "Catulinan - ";
    concepcion.text = "Concepcion - ";
    hinukay.text = "Hinukay - ";
    makinabang.text = "Makinabang - ";
    matangtubig.text = "Matangtubig - ";
    pagala.text = "Pagala - ";
    paitan.text = "Paitan - ";
    piel.text = "Piel - ";
    pinagbarilan.text = "Pinagbarilan - ";
    poblacion.text = "Poblacion - ";
    sabang.text = "Sabang - ";
    sanjose.text = "San Jose - ";
    sanroque.text = "San Roque - ";
    santabarbara.text = "Santa Barbara - ";
    santocristo.text = "Santo Cristo - ";
    santoniño.text = "Santo Niño - ";
    subic.text = "Subic - ";
    sulivan.text = "Sulivan - ";
    tangos.text = "Tangos - ";
    tarcan.text = "Tarcan - ";
    tiaong.text = "Tiaong - ";
    tibag.text = "Tibag - ";
    tilapayong.text = "Tilapayong - ";
    vdf.text = "Virgen Delas Flores - ";
  }

  book.style.display = "inline";
}
// PAKITANGGAL PAG WLANG ERROR "}" PAG MERON PABALIK

function lookride(){
  let timerInterval;
  var location = document.getElementById("location");
  var destination = document.getElementById("destination");
  var text = "<br>Location: " + location.options[location.selectedIndex].text + " <br>Estimated Price: "+destination.options[destination.selectedIndex].text;
  if(location.options[location.selectedIndex].text == "Select Location" || destination.options[destination.selectedIndex].text == "Select Destination"){
    Swal.fire({
      title: "Empty Fields!",
      text: "Please Select and Location and Destination",
      icon: "error"
    });
  } else {
    Swal.fire({
      title: "Searching for rider in location",
      html: "This May Take a few seconds." + text,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire({
          title: "Rider Found!",
          text: "Please Wait for Rider in your Current Location",
          icon: "success"
        });
      }
    });
  }
}

function multiply(x) {
  const baseP = 15;
  const result = x * baseP;
  return result + " Pesos";
}
