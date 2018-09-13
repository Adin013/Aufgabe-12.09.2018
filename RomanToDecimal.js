function RomanToDecimal(RomanStr) {  
  
  var Result = 0;
  // Hier werden  die Römische Zahlen und Dezimalzahlen in Zwei Variablen definiert. 
  // syntaktische (z.B. „I X“) und semantische (z.B. „IC“) Fehler in Römischen Zahlen sollen erkent werden
  // ich definiere die gültige Subtraktionsregel-kombinationen z.B. CM, CD, etc.
  // Laut wikipedia-Link das sie mir mitgeteilt haben, die gültige Subtraktionsregel-kombinationen sind:
  // I vor V oder X: IV (4), IX (9)
  // X vor L oder C: XL (40), XC (90)
  // C vor D oder M: CD (400), CM (900)

  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];


  for (var i = 0;i<=decimal.length;i++) {
    
    if (RomanStr[i]===' ') {
      console.log('syntaktische Fehler');
      return;
    }

    if ( (RomanStr[i]==='I') && ( (RomanStr[i+1]==='L') || (RomanStr[i+1]==='C') || (RomanStr[i+1]==='D') || (RomanStr[i+1]==='M'))) {
      console.log('semantische Fehler');
      return;
    } 

    if ( (RomanStr[i]==='X') && (  (RomanStr[i+1]==='D') || (RomanStr[i+1]==='M')) ) {
      console.log('semantische Fehler');
      return;
    } 

  }
  

  // Loop über alle variabeln in das String
  for (var i = 0;i<=decimal.length;i++) {

    //Suchen für erste römische Zahl
    while (RomanStr.indexOf(roman[i]) === 0){
      //Dezimal Zahl wird auf Summe(Ergebnisse) addiert
      Result += decimal[i];
      //entsprechende Römische Zahl wird gelöscht.
      RomanStr = RomanStr.replace(roman[i],'');
      
    }
  }
  return Result;
}