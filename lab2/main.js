
//variables
function myFunction() {
    do{
        var amount = document.getElementById('input').value;
        var number=parseInt(amount);
        //validate user input
        if(number < 20 || number >100 || isNaN(number)){
            alert('Error! please enter a number between 20 and 100');
            return false;
        }
        var token20=0, token10 = 0, token5 = 0, token2 = 0, token1 = 0;  
    }while(number < 20 || number > 100);

    //the amount exchange
    while(number >= 20){
        token20++;
        number= number -20;
    }
    while (number >= 10){

        token10++;
        number = number - 10;
    }
    while(number >= 5){
        token5++;
        number= number -5;
    }
    while (number >= 2){

        token2++;
        number = number - 2;
    }
    while(number >= 1){
        token1++;
        number= number -1;
    }
    
    //display results is structure to only display tokens use
    
    
    var str;
    str = '<P>THE CURRENCY EXCHANGE FOR CRYPTOCURRENCY IS:</P>'
    +'<P>The amount you entered to exchange is '+ '<span>' + amount + '</span>' + ' and is exchange into: </p>';
    
    if (token20 > 0){
        str +='<ul><li>' + token20 + ' X 20 Coin(s)</li>';
    }
    if (token10 > 0){
        str +='<li>' + token10 + ' X 10 Coin(s)</li>' ;
    }
    if (token5 > 0){
        str +='<li>' + token5 + ' X 5 Coin(s)</li>';
    }
    if (token2 > 0){
        str +='<li>' + token2 + ' X 2 Coin(s)</li>';
    }
    if (token1 > 0){
        str +='<li>' + token1 + ' X 1 Coin(s)</li></ul>' ;
    }

    return document.getElementById('result').innerHTML = str;
    
}