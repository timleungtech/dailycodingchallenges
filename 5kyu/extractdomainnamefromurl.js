//Extract the domain name from a URL
function domainName(url){
  //Parameters: url
  //Return: domain name
  //Examples: 
    //"http://github.com/carbonfive/raygun" -> domain name = "github"
    //"http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    //"https://www.cnet.com"                -> domain name = "cnet"
  //Pseudocode: 
    //remove protocol and subdomains by replacing with empty strings
    //split with . delimiter and return [0]
    return url.replace('https://', '').replace('http://', '').replace('www.','').split('.')[0]
}