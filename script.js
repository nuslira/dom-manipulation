/* Task 1 */
var heading = document.getElementById("heading");
console.log(heading.innerText);

/* Task 2 using plain JavaScript */



/* Task 4 using jQuery */
$('#addText4').click(function(event){
    var paragraph = $('p').text("hello world");
    $('#task4a').append(paragraph);
});
//Task 4b
function changeBG(event){
    color=event.target.innerText.toLowerCase();
    $('body').css('background-color',color);
}
//Task 4c
$('#sum').click(function(event){
    var sum=Number($('#num1').val())+Number($('#num2').val())
    $('#answer').text(sum)
})