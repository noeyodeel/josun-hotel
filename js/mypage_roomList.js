document.addEventListener("DOMContentLoaded", function () {
  const tabWrap_list1 = document.querySelector(".tabWrap_list1");
  const tabWrap_list2 = document.querySelector(".tabWrap_list2");

  tabWrap_list1.addEventListener("click", function () {
    tabWrap_list1.style.borderTop = "1px solid black";
    tabWrap_list1.style.borderLeft = "1px solid black";
    tabWrap_list1.style.borderBottom = "none";

    tabWrap_list2.style.borderTop = "1px solid #aaa";
    tabWrap_list2.style.borderRight = "1px solid #aaa";
    tabWrap_list2.style.borderBottom = "1px solid black";
  });

  tabWrap_list2.addEventListener("click", function () {
    tabWrap_list1.style.borderTop = "1px solid #aaa";
    tabWrap_list1.style.borderLeft = "1px solid #aaa";
    tabWrap_list1.style.borderRight = "none";
    tabWrap_list1.style.borderBottom = "1px solid black";

    tabWrap_list2.style.borderTop = "1px solid black";
    tabWrap_list2.style.borderLeft = "1px solid black";
    tabWrap_list2.style.borderRight = "1px solid black";
    tabWrap_list2.style.borderBottom = "none";
  });

  document.querySelector(".label_check").addEventListener("click", function () {
    document
      .querySelector(".label_check")
      .style.setProperty("--mypage-btn-position", "-26px");
  });
});
function en_on() {
  $(".en").toggle();
}
