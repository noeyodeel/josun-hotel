let selectFlag1;
let selectFlag2;
// ---------------------------------------------------------
$(".custom-select1").on("focusin", function () {
  $(".custom-select-list1").show();
  $(".custom-select1").addClass("open_select");
});

$(".custom-select1").on("focusout", function () {
  if (!selectFlag1) {
    $(".custom-select-list1").hide();
    $(".custom-select1").removeClass("open_select");
  }
  $(this).removeClass("selected");
});

$(".custom-select-option1").on("mouseenter", function () {
  selectFlag1 = true;
  $(".custom-select1").addClass("open_select");
});

$(".custom-select-option1").on("mouseout", function () {
  selectFlag1 = false;
  $(".custom-select1").removeClass("open_select");
});

$(".custom-select-option1").on("click", function () {
  let value1 = $(this).attr("value");

  $(".custom-select-text1").text($(this).text());
  $(".select-origin1").val(value1);
  $(".custom-select-list1").hide();

  $(".select-origin1")
    .find("option")
    .each(function (index, el) {
      if ($(el).attr("value") == value1) {
        $(el).attr("selected", "selected");
      } else {
        $(el).removeAttr("selected");
      }
    });
});
// ---------------------------------------------------------
$(".custom-select2").on("focusin", function () {
  $(".custom-select-list2").show();
  $(".custom-select2").addClass("open_select");
});

$(".custom-select2").on("focusout", function () {
  if (!selectFlag2) {
    $(".custom-select-list2").hide();
    $(".custom-select2").removeClass("open_select");
  }
  $(this).removeClass("selected");
});

$(".custom-select-option2").on("mouseenter", function () {
  selectFlag2 = true;
  $(".custom-select2").addClass("open_select");
});

$(".custom-select-option2").on("mouseout", function () {
  selectFlag2 = false;
  $(".custom-select2").removeClass("open_select");
});

$(".custom-select-option2").on("click", function () {
  let value2 = $(this).attr("value");

  $(".custom-select-text2").text($(this).text());
  $(".select-origin2").val(value2);
  $(".custom-select-list2").hide();

  $(".select-origin2")
    .find("option")
    .each(function (index, el) {
      if ($(el).attr("value") == value2) {
        $(el).attr("selected", "selected");
      } else {
        $(el).removeAttr("selected");
      }
    });
});

//기본 스크롤 이벤트 제거
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
//참조하는 요소 미리 탐색 및 선언
var $html = $("html");

var page = 1; //뷰포트에 표시되는 페이지의 번호

var lastPage = $(".content").length; //마지막 페이지의 번호

$html.animate({ scrollTop: 0 }, 10); //문서(페이지)가 로드되면 첫 페이지 시작

//휠 움직이면 페이지 바뀜
$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });

  updatePageTheme(page);
});

$(document).ready(function () {
  $("gnb").hover(function () {
    $("dropdown-menu > b").css("color", "black");
  });
});

function gotoPage(targetPageNo) {
  page = targetPageNo;
  scrollToPage(page);
  updatePageTheme(targetPageNo);
}

function scrollToPage(targetPageNo) {
  $("html, body").animate(
    { scrollTop: $(`#goto-${targetPageNo}`).parent().position().top },
    "slow"
  );
}

function updatePageTheme(targetPageNo) {
  if (targetPageNo == 1 || targetPageNo == 6) {
    setHeaderColorToWhite();
  } else {
    setHeaderColorToBlack();
  }
  if (targetPageNo == 1) {
    enableReservationBar();
    enableTopBar();
  } else {
    disableReservationBar();
    disableTopBar();
  }
  if (
    targetPageNo == 1 ||
    targetPageNo == 5 ||
    targetPageNo == 6 ||
    targetPageNo == 7
  ) {
    setIndicatorColorToWhite();
    setIndicatorColorRemoveBlack();
  } else if (targetPageNo == 2 || targetPageNo == 3 || targetPageNo == 4) {
    setIndicatorColorToBlack();
    setIndicatorRemoveWhite();
  }

  var scroll_top = $(document).scrollTop();
  //use the value from scroll_top to determine if we are near the rightNav links and then we can highlight the rightNav links.

  // var rooms_link = $(".room_area");
  // var dining_link = $(".dining_area");
  // var facility_link = $(".facility_area");
  // var activity_link = $(".activity_area");
  // var membership_link = $(".membership");
  // var meeting_link = $(".meeting");

  //alert(batlink.position().top);

  if (targetPageNo == 7) {
    $("#home_link").removeClass("current");
    $("#rooms_link").removeClass("current");
    $("#dining_link").removeClass("current");
    $("#facility_link ").removeClass("current");
    $("#activity_link").removeClass("current");
    $("#membership_link").removeClass("current");
    $("#meeting_link").addClass("current");
  } else if (targetPageNo == 6) {
    $("#home_link").removeClass("current");
    $("#rooms_link").removeClass("current");
    $("#dining_link").removeClass("current");
    $("#facility_link ").removeClass("current");
    $("#activity_link").removeClass("current");
    $("#membership_link").addClass("current");
    $("#meeting_link").removeClass("current");
  } else if (targetPageNo == 5) {
    $("#home_link").removeClass("current");
    $("#rooms_link").removeClass("current");
    $("#dining_link").removeClass("current");
    $("#facility_link ").removeClass("current");
    $("#activity_link").addClass("current");
    $("#membership_link").removeClass("current");
    $("#meeting_link").removeClass("current");
  } else if (targetPageNo == 4) {
    $("#home_link").removeClass("current");
    $("#rooms_link").removeClass("current");
    $("#dining_link").removeClass("current");
    $("#facility_link ").addClass("current");
    $("#activity_link").removeClass("current");
    $("#membership_link").removeClass("current");
    $("#meeting_link").removeClass("current");
  } else if (targetPageNo == 3) {
    $("#home_link").removeClass("current");
    $("#rooms_link").removeClass("current");
    $("#dining_link").addClass("current");
    $("#facility_link ").removeClass("current");
    $("#activity_link").removeClass("current");
    $("#membership_link").removeClass("current");
    $("#meeting_link").removeClass("current");
  } else if (targetPageNo == 2) {
    $("#home_link").removeClass("current");
    $("#rooms_link").addClass("current");
    $("#dining_link").removeClass("current");
    $("#facility_link ").removeClass("current");
    $("#activity_link").removeClass("current");
    $("#membership_link").removeClass("current");
    $("#meeting_link").removeClass("current");
  } else if (targetPageNo == 1) {
    $("#home_link").addClass("current");
    $("#rooms_link").removeClass("current");
    $("#dining_link").removeClass("current");
    $("#facility_link ").removeClass("current");
    $("#activity_link").removeClass("current");
    $("#membership_link").removeClass("current");
    $("#meeting_link").removeClass("current");
  }

  if (targetPageNo == 2) {
    setTimeout(function () {
      $(".room__").addClass("slide_RtoL");
      $("#room_slide").addClass("slide_LtoR_rooms");
    }, 300);
  } else if (targetPageNo == 3) {
    setTimeout(function () {
      $(".dining_txt").addClass("slide_RtoL");
    }, 300);
  } else if (targetPageNo == 4) {
    setTimeout(function () {
      $(".facility_img").addClass("slide_LtoR_facility");
    }, 300);
  } else if (targetPageNo == 5) {
    setTimeout(function () {
      $(".activity_box").addClass("slide_RtoL");
    }, 300);
  } else if (targetPageNo == 6) {
    setTimeout(function () {
      $(".text_area").addClass("slide_BtoT");
    }, 300);
  } else if (targetPageNo == 7) {
    setTimeout(function () {
      $(".meeting_txt").addClass("slide_BtoT");
    }, 300);
  }
}

function setHeaderColorToBlack() {
  $(".dropdown-menu, .nav_bar").addClass("setColorToBlack");
  $(".logo > a").addClass("setLogoColorToBlack");
  $(".res_img").addClass("setResImgColorToBlack");

  $(".dropdown-menu, .nav_bar").removeClass("setColorToWhite");
  $(".logo > a").removeClass("setLogoColorToWhite");
  $(".res_img").removeClass("setResImgColorToToWhite");
}

function setHeaderColorToWhite() {
  $(".dropdown-menu, .nav_bar").addClass("setColorToWhite");
  $(".logo > a").addClass("setLogoColorToWhite");
  $(".res_img").addClass("setResImgColorToToWhite");

  $(".dropdown-menu, .nav_bar").removeClass("setColorToBlack");
  $(".logo > a").removeClass("setLogoColorToBlack");
  $(".res_img").removeClass("setResImgColorToBlack");
}

function enableReservationBar() {
  $(".res_bar").css("display", "flex");
}

function disableReservationBar() {
  $(".res_bar").css("display", "none");
}

function enableTopBar() {
  $(".top_bar").css("display", "block");
}

function disableTopBar() {
  $(".top_bar").css("display", "none");
}

function setIndicatorColorToBlack() {
  $(".side_bar_left > ul > li > a").css("color", "black");
  // $(".side_bar_left > ul > li > a::before").css("background", "black");
  $(".side_bar_left > ul > li").addClass("colorToBlack");
  $(".side_bar_left > ul").addClass("colorToGray");
}

function setIndicatorColorToWhite() {
  $(".side_bar_left > ul > li > a").css("color", "white");
  $(".side_bar_left > ul > li").addClass("colorToWhite");
  $(".side_bar_left > ul").addClass("colorToLightgray");
}

function setIndicatorColorRemoveBlack() {
  $(".side_bar_left > ul > li").removeClass("colorToBlack");
  $(".side_bar_left > ul").removeClass("colorToGray");
}

function setIndicatorRemoveWhite() {
  $(".side_bar_left > ul > li").removeClass("colorToWhite");
  $(".side_bar_left > ul").removeClass("colorToLightgray");
}

// 달력 api 사용
// $("#calendar").fullCalendar({
//   googleCalendarApiKey: "AIzaSyAy-8yEFSYYeDLybdvsPPQ-Z0dRrf9Tiqk", //API key
//   header: {
//     left: "",
//     center: "prev, title, next",
//     // right: 'month, basicWeek, agendaDay'
//     right: "",
//   },
//   monthYearFormat: "MMMM YYYY",
//   ventLimit: true,
//   fixedWeekCount: false,
//   defaultView: "month",
//   dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
//   buttonText: {
//     today: "오늘",
//     month: "월별",
//     week: "주별",
//     day: "일별",
//   },
// });
function en_on() {
  $(".en").toggle();
}

//----------------------메뉴바 슬라이딩, 다른부분 회색 ----------------------
function wrapWindowByMask_menu() {
  //화면의 높이와 너비를 구한다.
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
  $("#fade").css({ width: maskWidth, height: maskHeight });
}

/// 화면의 중앙에 레이어띄움
function showLayer_menu() {
  wrapWindowByMask_menu();

  document.getElementById("sub_menu").style.width = "1340px";
  document.getElementById("close_offers").style.width = "60px";
  document.getElementById("close_offers").style.right = "1340px";
  $("html, body").addClass("hidden_main");

  $("#fade").show();
  $("#sub_menu").show();
  $("#close_offers").show();

  // //스크롤 막기
  // $("#wrap").on("scroll touchmove mousewheel", function (event) {
  //   event.preventDefault();
  //   return false;
  // });

  // var el = $($(this).attr('href'));
  // if (!el.hasClass('open')) {
  //   el.addClass('open');
  // } else {
  //   el.removeClass('open');
  // }
  $("html, body").css({ overflow: "hidden", height: "100%" }); //  html,body의 scroll을 hidden시킴
  // $("html, body").addClass("scroll_body");
  $("body").on("scroll touchmove mousewheel", function (event) {
    // 터치무브와 마우스휠 스크롤 방지
    event.preventDefault();
    event.stopPropagation();

    return false;
  });
}
function close_menu() {
  $("#fade").hide();
  document.getElementById("sub_menu").style.width = "0px";
  document.getElementById("close_offers").style.width = "0px";
  document.getElementById("close_offers").style.right = "0px";

  $("html, body").css({ overflow: "scroll", height: "100%" }); //scroll hidden 해제
  // $("html, body").removeClass("scroll_body");
  $("body").off("scroll touchmove mousewheel"); // 터치무브 및 마우스휠 스크롤 가능
}

function openCalendar() {
  // wrapWindowByMask_menu();
  $(".res_bar").addClass("top73");
  $(".res_bar").removeClass("top58");

  // $(".daterangepicker").css("height", "524px !important");

  $(".mainRoom").css("height", "0px");
  $(".mainRoom").css("padding", "0px");
}

function openRoomSelect() {
  $(".res_bar").addClass("top73");
  $(".res_bar").removeClass("top58");

  $(".mainRoom").css("height", "384px");
  $(".mainRoom").css("padding", "70px 0px");

  // $(".daterangepicker").css("height", "0px !important");
}

// function closeCalendar() {
//   $(".res_bar").css("top", "58%");
//   $(".res_bar").removeClass("top73");
//   $(".mainCalendar").css("height", "0px");
//   $(".mainCalendar").css("padding", "0px");
// }
// function closeRoomSelect() {
//   $(".res_bar").css("top", "58%");
//   $(".res_bar").removeClass("top73");
//   $(".mainRoom").css("height", "0px");
//   $(".mainRoom").css("padding", "0px");
// }

//프로모션 코드
function openPromotion() {
  $(".promInt").css("width", "500px");
  $(".promSel").css("display", "block");
  $(".btnLine").css("display", "block");
  $("#promoCode").css("display", "block");
}
function closePromotion() {
  $(".promInt").css("width", "0px");
  $(".promSel").css("display", "none");
  $(".btnLine").css("display", "none");
  $("#promoCode").css("display", "none");
}

// 인원 추가(6개)
function count1(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("result-1");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    if (number > 0) {
      number = parseInt(number) - 1;
    } else {
      number = 0;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
}
function count2(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("result-2");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    if (number > 0) {
      number = parseInt(number) - 1;
    } else {
      number = 0;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
}
function count3(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("result-3");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    if (number > 0) {
      number = parseInt(number) - 1;
    } else {
      number = 0;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
}
function count4(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("result-4");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    if (number > 0) {
      number = parseInt(number) - 1;
    } else {
      number = 0;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
}
function count5(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("result-5");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    if (number > 0) {
      number = parseInt(number) - 1;
    } else {
      number = 0;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
}
function count6(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("result-6");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    if (number > 0) {
      number = parseInt(number) - 1;
    } else {
      number = 0;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
}

// $('.btn_layerpopup').on('click', function(e) {
//   e.preventDefault();
//   var el = $($(this).attr('href'));
//   if (!el.hasClass('open')) {
//     el.addClass('open');
//   } else {
//     el.removeClass('open');
//   }
// });

// $('.btn_close_layer').on('click', function(e) {
//   $(this).closest('.layer-popup').removeClass('open');
// });
// document
//   .getElementsByClassName("side_bar")[0]
//   .addEventListener("click", function () {
//     document.getElementsByClassName("side_bar").style.display = "block";
//     document.getElementsByTagName("body")[0].style.overflow = "hidden";
//   });

// // 팝업 열기
// function openPopup(modalname) {
//   document.get;
//   $("." + modalname).show();

//   //스크롤 막기
//   $(".wrap").on("scroll touchmove mousewheel", function (event) {
//     event.preventDefault();
//     event.stopPropagation();
//     return false;
//   });
// }

// // 팝업 닫기
// function closePopup(flag) {
//   $(".popup").hide(); //팝업을 닫기다.
//   $(".shadow").hide(); // 배경 어둡게 삭제
//   //스크롤 막기 해제
//   $(".wrap").off("scroll touchmove mousewheel");
// }

// $("#seach").change(() => {
//   if ($("#seach").val() != null) {
//     $("#seach").css("color", "#000");
//   }
// });

// $("#datepickerFrom").daterangepicker({
//   datepickerOptions: {
//     numberOfMonths: 2,
//   },
// });
// $('input[name="dates"]').daterangepicker();
// $("#datepickerFrom").daterangepicker();

// $(".dates").daterangepicker();
// $(".startDay").daterangepicker({
//   timePicker: false,
//   timePicker24Hour: true,
//   timePickerSeconds: true,
//   singleDatePicker: false,
//   locale: {
//     format: "YYYY-MM-DD",
//     separator: " ~ ",
//     applyLabel: "적용",
//     cancelLabel: "닫기",
//   },
// });

var today = new Date();

var year = today.getFullYear();
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var day = ("0" + (today.getDate() + 1)).slice(-2);
var dateString = year + "/" + month + "/" + day;
var week = new Array(
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일"
);

locale = moment.locale("ko"); //언어를 한국어로 설정함!
$('input[name="dates"]').daterangepicker(
  {
    locale: {
      format: "YYYY.MM.DD dd",
      separator: " - ",
      daysOfWeek: ["S", "M", "T", "W", "T", "F", "S"],
      monthNames: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ],
    },
    endDate: dateString,
    drops: "up",
    language: "ko",
  },
  function (start, end, label) {
    var e_s = end.format("YYYYMMDD") - start.format("YYYYMMDD");
    $(".Day").empty();
    $(".Day").append(e_s + "박");
    $(".Day").css("color", "black");
    $(".Day").css("position", "absolute");
    $(".Day").css("top", "19px");
    $(".Day").css("left", "750px");
    $(".Day").css("font", "700 19px notokrR gothamM");

    console.log(
      "New date range selected: " +
        start.format("YYYY-MM-DD") +
        " to " +
        end.format("YYYY-MM-DD") +
        " (predefined range: " +
        label +
        ")"
    );
  }
);
$('input[name="dates"]').on("show.daterangepicker", function (ev, picker) {
  $(".yearselect").css("float", "left");
  $(".monthselect").css("float", "right");
});
