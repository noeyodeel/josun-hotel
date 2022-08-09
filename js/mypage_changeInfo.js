// select
const selectOpenClose = (li) => {
  let selectBtn = document.querySelector(li + " button.select");
  let option = document.querySelector(li + " .option");
  if (!selectBtn.classList.contains("open")) {
    selectBtn.classList.add("open");
    option.classList.add("openOption");
  } else {
    selectBtn.classList.remove("open");
    option.classList.remove("openOption");
  }
};
// 대상 이외 부분 클릭시
function clickBodyEventNationality(event) {
  if (document.querySelector("#selectBtn").classList.contains("open")) {
    var target = event.target;
    if (
      !document.querySelector("#selectBtn").contains(target) &&
      !document.querySelector("#option").contains(target)
    ) {
      document.querySelector("#selectBtn").classList.remove("open");
      document.querySelector("#option").classList.remove("openOption");
    }
  }
}
function clickBodyEventEmail(event) {
  if (document.querySelector("#selectEmailBtn").classList.contains("open")) {
    var target = event.target;
    if (
      !document.querySelector("#selectEmailBtn").contains(target) &&
      !document.querySelector("#optionEmail").contains(target)
    ) {
      document.querySelector("#selectEmailBtn").classList.remove("open");
      document.querySelector("#optionEmail").classList.remove("openOption");
    }
  }
}

$(document).on("click", ".nationalityArea button.select", function () {
  selectOpenClose(".nationalityArea");
});
window.addEventListener("click", clickBodyEventNationality);
$(".nationalityArea .optionList").click((e) => {
  $("#select").val(e.currentTarget.innerText).prop("selected", true);
  $("#selectBtn").text(e.currentTarget.innerText);
  document.querySelector("#selectBtn").classList.remove("open");
  document.querySelector("#option").classList.remove("openOption");
});

$(document).on("click", ".emailArea button.select", function () {
  selectOpenClose(".emailArea");
});
window.addEventListener("click", clickBodyEventEmail);
$(".emailArea .optionList").click((e) => {
  $("#selectEmail").val(e.currentTarget.innerText).prop("selected", true);
  $("#selectEmailBtn").text(e.currentTarget.innerText);
  document.querySelector("#selectEmailBtn").classList.remove("open");
  document.querySelector("#optionEmail").classList.remove("openOption");
});

// 약관동의
// const agreeOpenClose = (li) => {
//   if (!$(li + "> div > button").hasClass("openAgreeBtn")) {
//     $(li + "> div > button").addClass("openAgreeBtn");
//     $(li + "> div > button").text("상세내용 닫기");
//     $(li + " .detailArea").addClass("openAgree");
//   } else {
//     $(li + "> div > button").removeClass("openAgreeBtn");
//     $(li + "> div > button").text("상세내용 열기");
//     $(li + " .detailArea").removeClass("openAgree");
//   }
// };

// $(".agree1 > div > button").click(() => {
//   agreeOpenClose(".agree1");
//   console.log($(".agree1" + " .detailArea"));
// });

$(".agree1 > div > button").click(() => {
  // agreeOpen(".toggle");
  $(".agree1" + " .detailArea").slideToggle();
  console.log("dk");
});

$("input:checkbox[id='agree1']").on("change", function () {
  if ($("input:checkbox[id='agree1']").prop("checked")) {
    $("input:checkbox[id='4-1']").prop("checked", true);
    $("input:checkbox[id='4-2']").prop("checked", true);
    $("input:checkbox[id='4-3']").prop("checked", true);
    $("input:checkbox[id='4-4']").prop("checked", true);
  } else {
    $("input:checkbox[id='4-1']").prop("checked", false);
    $("input:checkbox[id='4-2']").prop("checked", false);
    $("input:checkbox[id='4-3']").prop("checked", false);
    $("input:checkbox[id='4-4']").prop("checked", false);
  }
});

$("input:checkbox[id='4-1']").on("change", function () {
  if ($("input:checkbox[id='4-1']").prop("checked")) {
    $("input:checkbox[id='agree1']").prop("checked", true);
  } else {
    $("input:checkbox[id='agree1']").prop("checked", false);
  }
});

$("input:checkbox[id='4-2']").on("change", function () {
  if ($("input:checkbox[id='4-2']").prop("checked")) {
    $("input:checkbox[id='agree1']").prop("checked", true);
  } else {
    $("input:checkbox[id='agree1']").prop("checked", false);
  }
});

$("input:checkbox[id='4-3']").on("change", function () {
  if ($("input:checkbox[id='4-3']").prop("checked")) {
    $("input:checkbox[id='agree1']").prop("checked", true);
  } else {
    $("input:checkbox[id='agree1']").prop("checked", false);
  }
});

$("input:checkbox[id='4-4']").on("change", function () {
  if ($("input:checkbox[id='4-4']").prop("checked")) {
    $("input:checkbox[id='agree1']").prop("checked", true);
  } else {
    $("input:checkbox[id='agree1']").prop("checked", false);
  }
});

// header/footer
function en_on() {
  $(".en").toggle();
}
