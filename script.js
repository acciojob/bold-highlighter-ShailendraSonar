function highlight() {
  const boldWords = document.getElementsByTagName('strong');
  
  if (boldWords.length > 0) {
    for (let i = 0; i < boldWords.length; i++) {
      boldWords[i].style.color = 'green';
    }
  }
}

function return_normal() {
  const boldWords = document.getElementsByTagName('strong');
  
  if (boldWords.length > 0) {
    for (let i = 0; i < boldWords.length; i++) {
      boldWords[i].style.color = 'black';
    }
  }
}