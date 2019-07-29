var media, n1, n2, n3 ;

n1 = prompt ("Informe a primeira nota: ") ;

n2 = prompt ("Informe a segunda nota: ") ;


n3 = prompt ("Informe a terceira nota: ") ; 

media = (((n1*2) + (n2*3) + (n3*5))/10) ; 

if ( media >= 6 ){
document.body.append ("Aprovado com media " + media );
} 
else{ 
if ( media <= 5 ){
document.body.append("Reprovado");
}
else {
document.body.append ("Recuperação");
}
}