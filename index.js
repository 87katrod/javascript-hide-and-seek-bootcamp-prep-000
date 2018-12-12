
function getFirstSelector(selector) {
  return   document.querySelector(selector);
}

function nestedTarget() {
 return   document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  let result =  document.querySelectorAll('.ranked-list');
 for (let i=0; i<result.length; i++){
   result[i].innerHTML = parseInt(result[i].innerHTML)+n;
 }


}