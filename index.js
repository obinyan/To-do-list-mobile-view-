 function showContent(boxId){
// Hide all content
var contents = document.querySelectorAll('.to-do-container-box-2, .to-do-container-box-3, .to-do-container-box-4');
contents.forEach(function(content) {
    content.classList.remove('active');
});


 // Show the selected content
 var selectedContent = document.getElementById(boxId);
 selectedContent.classList.add('active');
 }