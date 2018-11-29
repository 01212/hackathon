// const viewPort = document.getElementById("viewport");
// const logo = document.getElementById('hplogo')

// let imgElement = document.getElementById('imageSrc');
// let inputElement = document.getElementById('fileInput');
// inputElement.addEventListener('change', (e) => {
//   imgElement.src = URL.createObjectURL(e.target.files[0]);
// }, false);
// imgElement.onload = function() {
//   let mat = cv.imread(imgElement);
//   cv.imshow('canvasOutput', mat);
//   mat.delete();
// };

function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}
function makeNewWindow(){
   chrome.windows.create({url: "stream.html", type: "popup"});
}
document.getElementById('body').addEventListener("load", onOpenCvReady);

document.getElementById('openNewWindow').addEventListener("click", makeNewWindow)
