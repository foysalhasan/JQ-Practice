$(document).ready(function () {
  // ? Add Method
  $(".jq_add p").add("span").css("text-transform", "uppercase");
  // ? AddBack Method
  $(".third-item").nextAll().addBack().css("font-weight", "bold");
  // ? AddClass Method
  $("#btn").addClass("btn btn-primary");
  // ? After Method
  $(".dummy").after("<span>Newly Added Span</span");
  // ?Animate Method
  $("#abtn").click(function () {
    $("#myImg").animate(
      {
        opacity: 0.5,
      },
      1500
    );
  });
  // ? Append Method
  $(".apnd_cont").append("<h5>Appended Content</h5>");
  // ? After Method
  $(".before_cont").before("<span>Newly Added Span Before Lorem Ipsum</span");
  // ? Binder Method
  $("#binder").bind("click", function () {
    alert("Yeah, You Got This !");
  });
  // ? Blur Method
  $("#blur_cont").blur(function () {
    alert("Blur Method Works !");
  });
  // ? Change Method
  var cng_output = document.getElementById("cng_output");

  $("#cng_cont").change(function () {
    var cng_input = document.getElementById("cng_cont").value;
    cng_output.innerHTML = cng_input;
  });
  // ? Child selectors
  $("ul.child_sel > li").css("color", "green");
  // ? Children selectors
  $(".parent").children().css("color", "teal");

  // ? CLick Event
  $("#jqClick").click(function () {
    alert("Click Events Works Successfully");
  });
  // ? Clone Method
  $(".clone_child").clone().appendTo(".clone_par");

  // ? Contains Selectors
  $(".jq_contains span:contains('Hello')").css("color", "orangered");
  // ? ContextMenu Event
  $("#context").contextmenu(function (el) {
    el.preventDefault();
  });
  // ? JQuery CSS Properties
  $("#jqcss").css("font-style", "italic");
  // ? Double CLick Event
  $("#jqDblClick").dblclick(function () {
    alert("Double Click Events Works Successfully");
  });
  // ? Delay Function
  $("#jqDelay").click(function () {
    $("#jqDelay").slideUp(300).delay(800).fadeIn(400);
  });

  // ?ALl Fade Effect
  $("#jqFadeOut").click(function () {
    $(".fader").fadeOut();
  });
  $("#jqFadeIn").click(function () {
    $(".fader").fadeIn();
  });
  $("#jqFadeTog").click(function () {
    $(".fader").fadeToggle();
  });
  // ? Filter Mehtod
  $(".jq_filter li")
    .filter(":nth-child(odd)")
    .addClass("text-info font-weight-bold");
  // ? Find Method
  $(".jq_find p").find("span").css("color", "red");
  // ? First Child Selector
  $(".jq_first ul li").first().addClass("text-primary");
   // ? Focus Event
  $(".jq_focus input").focus(function () {
    alert("WOW ! You Focus The Input")
  });
  // ? Has Selection
  $(".has_par").has("span").css("color", "red");
});