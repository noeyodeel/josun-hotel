// on scrollEvent start
const scrollAnimation = function () {
  let items, winH;

  const initModule = function () {
    items = document.querySelectorAll(".activityLists > li"); // target
    winH = window.innerHeight; // window창 높이

    _addEventHandlers();
  };

  const _addEventHandlers = function () {
    window.addEventListener("scroll", _checkPosition);
    window.addEventListener("load", _checkPosition);
    window.addEventListener("resize", initModule);
  };

  const _checkPosition = function () {
    for (let i = 0; i < items.length; i++) {
      let postFromTop = items[i].getBoundingClientRect().top;
      if (winH > postFromTop) {
        items[i].classList.add("scrollEvent"); // 조건 만족시 scrollEvent 추가
      } else {
        items[i].classList.remove("scrollEvent"); // 범위를 벗아날 경우 scrollEvent 제거
      }
    }
  };

  return {
    init: initModule,
  };
};
// on scrollEvnet end

// sortBtn클릭시 리스트 재구성(back부분 대신)
const inputLists = function (list) {
  const activityLists = document.getElementById("activityLists");
  const newLists = document.createElement("ul");

  for (let i = 0; i < list.length; ++i) {
    // 최대 12개의 목록만 불러옴
    if (i > 11) {
      break;
    }

    const li = document.createElement("li");
    li.innerHTML =
      // li.innerHTML +
      "<div class='thum'>" +
      `<img src="${list[i].img}" alt='activity_picture' />` +
      "<div class='hoverContents'>" +
      "<div class='btnContents'>" +
      "<a href='./activity_detail.html' class='btn'>자세히 보기</a>" +
      "<a onclick='onlineReservation()' class='btn'>온라인 예약</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "<div class='txtContents'>" +
      "<div class='sort'>" +
      `<p>${list[i].sort}</p>` +
      "</div>" +
      "<div class='title'>" +
      `<p>${list[i].title}</p>` +
      "</div>" +
      "<div class='date'>" +
      `<p>${list[i].date}</p>` +
      "</div>" +
      "</div>";

    newLists.appendChild(li);
  }
  activityLists.innerHTML = newLists.innerHTML; // 리스트 교체

  // more 버튼 생성
  createMoreBtn(list);

  // 리스트 재구성시 scrollEvent 발생
  items = document.querySelectorAll(".activityLists > li");
  winH = window.innerHeight;
  for (let i = 0; i < items.length; i++) {
    let postFromTop = items[i].getBoundingClientRect().top;
    if (winH > postFromTop) {
      items[i].classList.add("scrollEvent");
    }
  }

  // 리스트 재구성 이후 onscrollEvent가 계속 이어지도록
  scrollAnimation().init();
};

const sortBtn = (no) => {
  const sortBtns = document.getElementsByClassName("sortBtn");
  for (let i = 0; i < sortBtns.length; i++) {
    sortBtns[i].classList.remove("sortBtnOn");
    if (i === no) {
      sortBtns[i].classList.add("sortBtnOn");
    }
  }
};

// moreBtn
const createMoreBtn = function (list) {
  // const nowlist = document.querySelectorAll(".activityLists > li");
  const bottomArea = document.getElementById("bottomArea");
  const newbottomArea = document.createElement("div");
  if (list.length >= 12) {
    let para;
    switch (list) {
      case allList:
        para = "allList";
        break;
      case timeTableList:
        para = "timeTableList";
        break;
      case josonJuniorForKidList:
        para = "josonJuniorForKidList";
        break;
      case adultList:
        para = "adultList";
        break;
    }
    newbottomArea.innerHTML =
      '<a class="btnMore" id="moreBtn" onclick="clickMore(' +
      para +
      ')">MORE</a>';
  }
  bottomArea.innerHTML = newbottomArea.innerHTML;
};

const clickMore = (list) => {
  const moreBtn = document.getElementById("moreBtn");

  moreBtn.classList.add("off");

  const activityLists = document.getElementById("activityLists");

  for (let i = 12; i < list.length; ++i) {
    const li = document.createElement("li");
    li.innerHTML =
      // li.innerHTML +
      "<div class='thum'>" +
      `<img src="${list[i].img}" alt='activity_picture' />` +
      "<div class='hoverContents'>" +
      "<div class='btnContents'>" +
      "<a href='./activity_detail.html' class='btn'>자세히 보기</a>" +
      "<a onclick='onlineReservation()' class='btn'>온라인 예약</a>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "<div class='txtContents'>" +
      "<div class='sort'>" +
      `<p>${list[i].sort}</p>` +
      "</div>" +
      "<div class='title'>" +
      `<p>${list[i].title}</p>` +
      "</div>" +
      "<div class='date'>" +
      `<p>${list[i].date}</p>` +
      "</div>" +
      "</div>";

    activityLists.appendChild(li);
  }

  // 리스트 재구성시 scrollEvent 발생
  items = document.querySelectorAll(".activityLists > li");
  winH = window.innerHeight;
  for (let i = 0; i < items.length; i++) {
    let postFromTop = items[i].getBoundingClientRect().top;
    if (winH > postFromTop) {
      items[i].classList.add("scrollEvent");
    }
  }

  // 리스트 재구성 이후 onscrollEvent가 계속 이어지도록
  scrollAnimation().init();
};

// 온라인 예약 안내
const onlineReservation = function () {
  if (
    confirm(
      "로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?\n 비회원의 경우, 예약한 객실 예약번호를 입력해주세요."
    )
  ) {
    location.href("#login.html"); // 확인시 로그인 페이지로 이동
  }
};

function en_on() {
  $(".en").toggle();
}
