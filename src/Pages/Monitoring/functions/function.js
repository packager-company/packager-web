function changeColor(linecar, ccar, lineemp, cremp, linerun, crun, lineofi, cofi, lineho, cho, lineres, cres, crunn, value) {
  const lineElement1 = document.getElementById(linecar);
  const iconElement1 = document.getElementById(ccar);
  const lineElement2 = document.getElementById(lineemp);
  const iconElement2 = document.getElementById(cremp);
  const lineElement3 = document.getElementById(linerun);
  const iconElement3 = document.getElementById(crun);
  const lineElement4 = document.getElementById(lineofi);
  const iconElement4 = document.getElementById(cofi);
  const lineElement5 = document.getElementById(lineho);
  const iconElement5 = document.getElementById(cho);
  const lineElement6 = document.getElementById(lineres);
  const iconElement6 = document.getElementById(cres);
  const iconElement7 = document.getElementById(crunn);

  const elements = [
    lineElement1, iconElement1, lineElement2, iconElement2, lineElement3, iconElement3, lineElement4,
    iconElement4, lineElement5, iconElement5, lineElement6, iconElement6, iconElement7
  ];
  elements.forEach(element => {
    if (element) {
      element.classList.remove('color');
    }
  });

  if (value === 1) {
    elements.forEach(element => {
      if (element) {
        element.classList.add('color');
      }
    });
  }
}
