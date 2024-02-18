function handleRandNbr(nbr) {
  let chiffres = [];
  while (chiffres.length < nbr) {
    const chiffreAleatoire = Math.floor(Math.random() * nbr);
    if (!chiffres.includes(chiffreAleatoire)) {
      chiffres.push(chiffreAleatoire);
    }
  }
  return chiffres;
}
export default handleRandNbr;