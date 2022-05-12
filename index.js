const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names)
{
    const thankyouReturn = [];

    for(let i=0;i < names.length ;i++)
    {   
        
        thankyouReturn.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }    

    return thankyouReturn;
}

function countDown(a)
{
    while(a > -1)
    {
        console.log(a);
        a--;
    }
}