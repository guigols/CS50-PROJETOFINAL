// var qtd = input("Digite a quantidade de motores")

var cargaR = "";

var cargaCv01 = 0;
var cargaCv02 = 0;
var cargaCv03 = 0;
var cargaCv04 = 0;
var cargaCv05 = 0;

var rend01 = 0;
var rend02 = 0;
var rend03 = 0;
var rend04 = 0;
var rend05 = 0;

var partida01 = 0;
var partida02 = 0;
var partida03 = 0;
var partida04 = 0;
var partida05 = 0;

var PotCV01 = 0;
var PotCV02 = 0;
var PotCV03 = 0;
var PotCV04 = 0;
var PotCV05 = 0;

var potPartidaCV01 = 0;
var potPartidaCV02 = 0;
var potPartidaCV03 = 0;
var potPartidaCV04 = 0;
var potPartidaCV05 = 0;

var potGmg = 0;

var kw = 736;

function calculaCargaGmg(){
    var cargaCv01 = 0;
    document.getElementById("cargaR").style.borderColor = "#ffffff";
    document.getElementById("cargaR").style.backgroundColor = "#ffffff";
    if (document.getElementById("cargaR").value == ""){
        alert("Preencha o valor da carga Resistiva");
        document.getElementById("cargaR").style.borderColor = "red";
        document.getElementById("cargaR").style.backgroundColor = "#ffe5e5";
        document.getElementById("cargaR").focus();
        return false;
            }
    var cargaRes = parseFloat(document.getElementById("cargaR").value);
    
    var cargaCv01 = parseFloat(document.getElementById("cv01").value);
    if (document.getElementById("cv01").value == ""){
        cargaCv01 = 0;
    }
    var rend01 = parseFloat(document.getElementById("rend01").value);
    if (document.getElementById("rend01").value == ""){
        rend01 = 1;
    }


    var partida01 = parseFloat(document.getElementById("partida01").value);
    if (document.getElementById("partida01").value == ""){
        partida01 = 0;
    }

    var cargaCv02 = parseFloat(document.getElementById("cv02").value);
    if (document.getElementById("cv02").value == ""){
        cargaCv02 = 0;
    }

    var rend02 = parseFloat(document.getElementById("rend02").value);
    if (document.getElementById("rend02").value == ""){
        rend02 = 1;
    }
    var partida02 = parseFloat(document.getElementById("partida02").value);
    if (document.getElementById("partida02").value == ""){
        partida02 = 0;
    }

    var cargaCv03 = parseFloat(document.getElementById("cv03").value);
    if (document.getElementById("cv03").value == ""){
        cargaCv03 = 0;
    }
    var rend03 = parseFloat(document.getElementById("rend03").value);
    if (document.getElementById("rend03").value == ""){
        rend03 = 1;
    }

    var partida03 = parseFloat(document.getElementById("partida03").value);
    if (document.getElementById("partida03").value == ""){
        partida03 = 0;
    }


    var cargaCv04 = parseFloat(document.getElementById("cv04").value);
    if (document.getElementById("cv04").value == ""){
        cargaCv04 = 0;
    }
    var rend04 = parseFloat(document.getElementById("rend04").value);
    if (document.getElementById("rend04").value == ""){
        rend04 = 1;
    }
    var partida04 = parseFloat(document.getElementById("partida04").value);
    if (document.getElementById("partida04").value == ""){
        partida04 = 0;
    }

    var cargaCv05 = parseFloat(document.getElementById("cv05").value);
    if (document.getElementById("cv05").value == ""){
        cargaCv05 = 0;
    }
    var rend05 = parseFloat(document.getElementById("rend05").value);
    if (document.getElementById("rend05").value == ""){
        rend05 = 1;
    }
    var partida05 = parseFloat(document.getElementById("partida05").value);
    if (document.getElementById("partida05").value == ""){
        partida05 = 0;
    }

    if (cargaCv01 != 0 && rend01 !=0 && partida01 != 0 ){
        potPartidaCV01 = ((((((((cargaCv01 * 736)/ (rend01 / 100)) / 0.8) * partida01) * 0.33 ) / 0.736 )* 1.6) / 1000);;
    }
    else{
        potPartidaCV01 = 0;
    }
    
    console.log(potPartidaCV01);
    console.log("cargaCv01 =" + cargaCv01);
    console.log("rend01 =" + rend01);
    console.log("partida01 =" + partida01);

    if (cargaCv02 != 0 && rend02 !=0 && partida02 != 0 ){
      potPartidaCV02 = ((((((((cargaCv02 * 736)/ (rend02 / 100)) / 0.8) * partida02) * 0.33 ) / 0.736 )* 1.6) / 1000);
    console.log(potPartidaCV02);
    }
    else{
        potPartidaCV02 = 1;
    }

    console.log("cargaCv02 =" + cargaCv02);
    console.log("rend02 =" + rend02);
    console.log("partida02 =" + partida02);

    if (cargaCv03 != 0 && rend03 !=0 && partida03 != 0 ){
      potPartidaCV03 = ((((((((cargaCv03 * 736)/ (rend03 / 100)) / 0.8) * partida03) * 0.33 ) / 0.736 )* 1.6) / 1000);
    console.log(potPartidaCV03);
    }
    else{
        potPartidaCV03 = 0;
    }
    console.log("cargaCv03 =" + cargaCv03);
    console.log("rend03 =" + rend03);
    console.log("partida03 =" + partida03);

    if (cargaCv04 != 0 && rend04 !=0 && partida04 != 0 ){
        potPartidaCV04 = ((((((((cargaCv04 * 736)/ (rend04 / 100)) / 0.8) * partida04) * 0.33 ) / 0.736 )* 1.6) / 1000);
    }
    else{
        potPartidaCV04 = 0;
    }

    console.log(potPartidaCV04);
    console.log("cargaCv04 =" + cargaCv04);
    console.log("rend04 =" + rend04);
    console.log("partida04 =" + partida04);

    if (cargaCv05 != 0 && rend05 !=0 && partida05 != 0 ){
      potPartidaCV05 = ((((((((cargaCv05 * 736)/ (rend01 / 100)) / 0.8) * partida05) * 0.33 ) / 0.736 )* 1.6) / 1000);
    }
    else{
        potPartidaCV05 = 0;
    }
    console.log(potPartidaCV05);
    console.log("cargaCv05 =" + cargaCv05);
    console.log("rend05 =" + rend05);
    console.log("partida05 =" + partida05);

    console.log("--------------------")
    //*---------------------------*//
    // CALCULO DA POTÊNCIA NOMINAL:
    

    if(rend01 !=0 || cargaCv02 !=0 || rend02 !=0 || rend03 !=0 || rend04 !=0 || rend05 !=0){

        potNominalMotores =  (cargaCv01 / (rend01 / 100)) + (cargaCv02 / (rend02 / 100)) + (cargaCv03 / (rend03 / 100)) + (cargaCv04 / (rend04 / 100)) + (cargaCv05 / (rend05 / 100));
    }
       //  / 0.7) 
    
    else {
        potNominal = (cargaRes / 0.736);
    }
        
    potNominal = ( (( cargaRes / 0.736) + (cargaCv01 / (rend01 / 100)) + (cargaCv02 / (rend02 / 100)) + (cargaCv03 / (rend03 / 100)) + (cargaCv04 / (rend04 / 100)) + (cargaCv05 / (rend05 / 100))) / 0.7) ;
    //*---------------------------*//
    console.log("Potencia nominal cv:" +potNominal);
    console.log("Potencia nominal Motores cv:" +potNominal);

    //*---------------------------*//
    // CALCULO DE CARGA SUBITA NO MOTOR DIESEL:
    if ((potPartidaCV01 >= potPartidaCV02 ) && (potPartidaCV01 >= potPartidaCV03) && (potPartidaCV01 >= potPartidaCV04) && (potPartidaCV01 >= potPartidaCV05) && (potPartidaCV01 >= potNominal))   
    {
        potMotor = parseInt(potPartidaCV01);
    } 
    else if((potPartidaCV02 >= potPartidaCV01 ) && (potPartidaCV02 >= potPartidaCV03) && (potPartidaCV02 >= potPartidaCV04) && (potPartidaCV02 >= potPartidaCV05) && (potPartidaCV02 >= potNominal))   
    {
        potMotor = parseInt(potPartidaCV02);
    } 
    else if((potPartidaCV03 >= potPartidaCV01 ) && (potPartidaCV03 >= potPartidaCV02) && (potPartidaCV03 >= potPartidaCV04) && (potPartidaCV03 >= potPartidaCV05) && (potPartidaCV03 >= potNominal))   
    {
        potMotor = parseInt(potPartidaCV03);
    } 
    else if((potPartidaCV04 >= potPartidaCV01 ) && (potPartidaCV04 >= potPartidaCV02) && (potPartidaCV04 >= potPartidaCV03) && (potPartidaCV04 >= potPartidaCV05) && (potPartidaCV04 >= potNominal))   
    {
        potMotor = parseInt(potPartidaCV04);
    } 
    else if((potPartidaCV05 >= potPartidaCV01 ) && (potPartidaCV05 >= potPartidaCV02) && (potPartidaCV05 >= potPartidaCV03) && (potPartidaCV05 >= potPartidaCV04) && (potPartidaCV05 >= potNominal))   
    {
        potMotor = parseInt(potPartidaCV05);
    }
    else
    {
        potMotor = parseInt(potNominal)
    } 
    potAlternador = parseInt((potMotor * 0.736) / 0.9)
    potGmg = (potAlternador / 0.8);

    //*---------------------------*//
    
    potMotor = parseInt(potMotor);
    alert("Grupo gerador calculado! Envie um email para o endereço: gsmorais.eng@gmail.com, com estas informações, um de nossos especialistas entrará em contato");
    document.getElementById('resultadoMotor').innerHTML = 'Resultado (Pot. Mínima): ' +potMotor+ " cv de potência mecânica";
    document.getElementById('resultadoAlternador').innerHTML = 'Resultado (Pot. Mínima): ' +potAlternador + " kW";

    // document.getElementById('cotacao').innerHTML = 'Deseja uma cotação de um grupo gerador que atenda esta potência? ' + gmg +" kVA. F.P: 0,8. Preencha o formulário abaixo, um de nossos especialistas entrará em contato.";
    document.getElementById('cotacao').innerHTML = 'Envie um email para o endereço: gsmorais.eng@gmail.com, com estas informações, um de nossos especialistas entrará em contato.';
    return true;
}

function cotacao() {

    console.log("Cotacao chamada");
    if (potGmg == 0){
        alert("Dimensione primeiro o seu grupo gerador");
    }
  
    else{
        alert("A sua solicitação de cotação já foi encaminhada para o nosso time de especialistas, grupo gerador solicitado de" + potGmg + " kVA");
        var nome = document.getElementById('nome').value;
        var telefone = document.getElementById('telefone').value;
        var email = document.getElementById('email').value;
        var cidade = document.getElementById('cidade').value;
        var estado = document.getElementById('estado').value;
        var pais = document.getElementById('pais').value;


        var db = openDatabase ("Meubanco", "2.0", "Mybase", 4048);
        db.transaction(function(criar){
            criar.executeSql("CREATE TABLE users (ID PRIMARY KEY, nome TEXT, telefone TEXT, email TEXT, cidade TEXT, estado TEXT, pais TEXT)");      
        });


        db.transaction(function(armazenar){
            armazenar.executeSql("INSERT INTO users (nome, telefone, email, cidade, estado, pais) VALUES (?,?,?,?,?,?)", [nome,telefone, email, cidade, estado,pais]);
        });

    }
}
