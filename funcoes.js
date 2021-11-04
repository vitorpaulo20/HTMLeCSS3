function soma(n1,n2){
	
return n1+n2;

};

function setReplace(frase,nome,novo_nome){
	
return frase.replace(nome, novo_nome)

}

var idade = prompt("Digite sua idade :");

function validaIdade(){

if(idade >= 18){

console.log("MAIOR");

}else{
console.log("MENOR");

};


};


validaIdade();



alert(soma(10,20));

alert(setReplace("vai Alemanha","Alemanha","Brasil"));


