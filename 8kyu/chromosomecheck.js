//Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
  return sperm == 'XX' ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
}