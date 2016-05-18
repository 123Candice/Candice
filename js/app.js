/**
 * Created by Candice on 18/05/2016.
 */
//problem: It look gross in smaller browser widths and small devices
//solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

 //cycle over menu links
$(" #menu a").each(function(){
    var $anchor= $(this);
    //Create an option
    var $option=$("<option></option>")
   $option.text($anchor.text());

    //option's value is the href
     $option.val($anchor.attr(""));
    //option's text is the text of link

    $option.text($anchor.text());
    //append option to select
    $select.append($option);
})
