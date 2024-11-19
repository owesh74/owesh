function myFunction_gsm(sectionId) {
    let sec = document.querySelectorAll('.sec');
    sec.forEach(itm => {
      if(itm.id !== sectionId) itm.style.display = 'none'
    })
    var x = document.getElementById(sectionId);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  let sec = document.querySelectorAll('.sec');
  sec.forEach(itm => {
    itm.style.display = 'none'
  })