//Duplicate Arguments
function solution(...args){
  return [...args].length != [...new Set(args)].length
}