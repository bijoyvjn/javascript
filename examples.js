var word="ABAC"
var dic={};
for(letter of word)
{
    if(letter in dic)
    {
        console.log(letter);
        break
    }
    else
    {
        dic[letter]=1;
    }
}