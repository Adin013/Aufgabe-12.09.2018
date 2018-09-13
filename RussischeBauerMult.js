// Eine Funktion für die Multiplikationsrechnung mit der russischen Bauernmultiplikation

function RusBauMul(Int1, Int2) {
    
    // variabel Result zeigt uns die Ergebnisse aus der russischen Bauernmultiplikation. 
    // während Normal Multiply ist einfach zur Kontrolle, und es wird einmal gerechnet.
    var Result, NormalMultiply;

    
    if (Int1 < 1) {
      console.log('Das Linke zahl soll >= 1 sein');
      return;
    }
    
    NormalMultiply = Int1 * Int2;
    
    // Initializierung der russischen Bauernmultiplikation
    Result = 0;
    
    // Int1 wird halbiert und Int2 wird verdoppelt, solange Int1 nicht gleich 1 ist 
    while (Int1 != 1 ){
      // Nur wenn Int1 eine ungerade-Zahl(Odd) ist  
      if (Int1 % 2 === 1){
        Result += Int2 ;
      }
      Int1 = Math.floor(Int1/2);
      Int2 = Int2*2;
    }
    
    // Letzte schritt ist, wo Int1 gleich 1 ist.
    Result += Int2 ;
    
    // Die Kontrolle für die Richtigkeit.
    if (Result != NormalMultiply) {
        console.log('Guck mal, wo du einen fehler gemacht hast!');
    }
  
    // Der Ausgang für die Ergebnisse
    console.log('Russische Bauernmultiplikation ergibt:');
    return Result;
}