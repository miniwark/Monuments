$(function  () {
	
  var testData = [
      {name:"Monument 01", address:"1 rue truc" },
      {name:"Monument 01", address:"2 rue truc" },
      {name:"Monument 03", address:"3 rue truc" }
  ];
  
    var theTemplateScript = $("#test-template").html();

    var theTemplate = Handlebars.compile (theTemplateScript);
    $(".test-monument").append (theTemplate(testData));
});
