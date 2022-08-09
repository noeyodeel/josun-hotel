window.onscroll = function () {
  scrollFunction();
};
// 스크롤 시 헤더 바꾸는 함수
function scrollFunction() {
  if (
    //스크롤 100만큼 내렸을 때
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("nav_bar").style.top = "0"; //0인 위치에서 부터 보여줌
  } else {
    document.getElementById("nav_bar").style.top = "-300px"; //스크롤이 내려가지 않았을 때는 -300에 위치시켜서 숨김
  }
}

$(function () {
  //스크롤 마지막인식해서 푸터 뜨게함
  // $(".wrapper").scroll(function () {
  //   var scrollTop = $(this).scrollTop();
  //   var innerHeight = $(this).innerHeight();
  //   var scrollHeight = $(this).prop("scrollHeight");

  //   if (scrollTop + innerHeight >= scrollHeight) {
  //     $("footer").attr("disabled", false);
  //   } else {
  //     $("footer").attr("disabled", true);
  //   }
  // });

  //메뉴 슬라이드
  $(document).on("click", ".slide_btn", function (e) {
    // $(".slide_btn").click(function (e) 쓰지 말것 [오류남]
    e.stopPropagation();
    $(this).next($(".main_roomlist_")).slideToggle("fast");
  });

  //버튼 클릭 시 스타일 변경
  $(document).on("focus", ".slide_btn", function () {
    $(this).addClass("selec");
  });
  $(document).on("blur", ".slide_btn", function () {
    $(this).removeClass("selec");
  });
});

// $(window).scroll(NotScrollTop0__init);
// NotScrollTop0__init();

//$("#nav_bar").css("display", "none");

// var header = document.querySelector("header"),
//   mainMenuList = document.querySelectorAll(".dropdown > a div"),
//   subMenu = document.querySelectorAll(".dropdown-content"),
//   headerHeight = header.offsetHeight,
//   subMenuHeight = 0;

// for (var i = 0; i < mainMenuList.length; i++) {
//   mainMenuList[i].addEventListener("mouseover", function () {
//     subMenuHeight = this.querySelector("ul").offsetHeight;
//     header.style.height = headerHeight + subMenuHeight + "px";
//   });
//   mainMenuList[i].addEventListener("mouseout", function () {
//     header.style.height = headerHeight + "px";
//   });
// }
function en_on() {
  $(".en").toggle();
}

function popOpen() {
  var modalPop = $(".modal-wrap");
  var modalBg = $(".modal-bg");

  $(modalPop).show();
  $(modalBg).show();
  $("html").css({
    overflow: "hidden",
    height: "auto",
  });
}

function popClose() {
  var modalPop = $(".modal-wrap");
  var modalBg = $(".modal-bg");

  $(modalPop).hide();
  $(modalBg).hide();
  $("html").removeAttr("style");
}
