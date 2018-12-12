
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


const deepestChild = () => {
  var lis=document.querySelectorAll("#grand-node div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
};