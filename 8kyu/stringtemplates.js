//String Templates - Bug Fixing #5
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}