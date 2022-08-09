// datepicker start
// 설정
$(function () {
  // 시작일
  (from = $("#datepickerFrom")
    .datepicker({
      dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
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
      maxDate: "+1y",
      minDate: "-1y",
      showMonthAfterYear: true,
      dateFormat: "yy.mm.dd",
    })
    .on("change", function () {
      // 선택된 시작일 이전은 종료일에서 선택 불가
      to.datepicker("option", "minDate", getDate(from));
    })),
    // 종료일
    (to = $("#datepickerTo")
      .datepicker({
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
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
        maxDate: "+1y",
        minDate: "-1y",
        showMonthAfterYear: true,
        dateFormat: "yy.mm.dd",
      })
      .on("change", function () {
        // 선택된 종료일 이후는 시작일에서 선택 불가
        from.datepicker("option", "maxDate", getDate(to));
      }));

  // 선택된 날짜 가져오기
  function getDate(element) {
    var date;
    try {
      date = element.val();
    } catch (error) {
      date = null;
    }
    return date;
  }
});
// datepicker end

// 검색 조건 입력후 css
$("#datepickerFrom").change(() => {
  if ($("#datepickerFrom").val() != null) {
    $("#datepickerFrom").css("color", "#000");
  }
});
$("#datepickerTo").change(() => {
  if ($("#datepickerTo").val() != null) {
    $("#datepickerTo").css("color", "#000");
  }
});
$("#seach").change(() => {
  if ($("#seach").val() != null) {
    $("#seach").css("color", "#000");
  }
});

// 키워드 목록
let keywords = [
  "Dinner",
  "랜더스데이",
  "Journey to Josun(J to J)",
  "유선 예약 전용",
  "한정수량 상품",
  "리워드 회원 추가할인",
  "리워드 회원 전용",
  "봄",
  "여름",
  "가을",
  "겨울",
  "Early Bird",
];
// 키워드 생성
for (let i = 0; i < keywords.length; ++i) {
  const li = $(
    `<li class="keyword"> <input type="checkBox" id="keyword${i}" value="keyword${i}" /> <label for="keyword${i}">${keywords[i]}</label> </li>`
  );
  $("#keywords").append(li);
}
// 키워드 목록 더보기 open/close
$("#keywordOnOff").click(() => {
  if (!$(".keyword").hasClass("on")) {
    $(".keyword").addClass("on");
    $("#keywordOnOff").addClass("keywordBtnOn");
  } else {
    $(".keyword").removeClass("on");
    $("#keywordOnOff").removeClass("keywordBtnOn");
  }
});

// 검색결과 정렬 순서 선택창 open/close
// $("button.searchSort").click(() => {
//   if (!$("button.searchSort").hasClass("open")) {
//     $("button.searchSort").addClass("open");
//     $(".option").addClass("openOption");
//   } else {
//     $("button.searchSort").removeClass("open");
//     $(".option").removeClass("openOption");
//   }
// });
const createMenu = () => {
  let searchSortBtn = document.getElementById("searchSortBtn");
  let option = document.getElementById("option");

  if (!searchSortBtn.classList.contains("open")) {
    searchSortBtn.classList.add("open");
    option.classList.add("openOption");
  } else {
    searchSortBtn.classList.remove("open");
    option.classList.remove("openOption");
  }

  var body = document.querySelector("body");
  if (searchSortBtn.classList.contains("open")) {
    body.addEventListener("click", clickBodyEvent);
  }
  function clickBodyEvent(event) {
    var target = event.target;

    if (
      !event.currentTarget.querySelector(".searchSort").contains(target) &&
      !event.currentTarget.querySelector(".option").contains(target)
    ) {
      searchSortBtn.classList.remove("open");
      option.classList.remove("openOption");
    }
  }
};

$(() => {
  $("#option .optionList").click((e) => {
    $("#searchSort").val(e.currentTarget.innerText).prop("selected", true);
    console.log($("#searchSort option:selected").val());
    $("#searchSortBtn").text(e.currentTarget.innerText);
    searchSortBtn.classList.remove("open");
    option.classList.remove("openOption");
  });
});

// 컨텐츠 리스트
$(function () {
  // 초기화
  let step = 6; // 컨텐츠 개수 증가량
  let countsOfContentsOnView = step;

  searchContents(countsOfContentsOnView); // 아래함수 참조

  // more 버튼 생성
  if (countsOfContentsOnView < contents.length) {
    const moreBtn = $('<a class="btnMore" id="moreBtn">MORE</a>');
    $("#moreContents").append(moreBtn);
  }
  // more 버튼 클릭
  $("#moreBtn").click(() => {
    countsOfContentsOnView += step; // 표시될 컨텐츠 개수(6개씩 늘어남)
    if (countsOfContentsOnView > contents.length) {
      $("#moreContents").detach(); // moreBtn을 담은 영역까지 삭제
    }
    // 모든 컨텐츠가 표시될 경우
    if (countsOfContentsOnView > contents.length) {
      countsOfContentsOnView = contents.length;
    }
    searchContents(countsOfContentsOnView);
    contentsScrollEvnet(); // 아래함수 참조 // 더보기 클릭시 이벤트 실행
  });
});

// 컨텐츠 목록 생성
const searchContents = (countsOfContentsOnView) => {
  $("#contents").empty();
  for (let i = 0; i < countsOfContentsOnView; ++i) {
    const li = $(
      `<li class="content">
  <div class="thum">
    <img src="${contents[i].img}" alt="이미지없음" />
  </div>
  <div class="keyword">
    ${contents[i].keywords}
  </div>
  <div class="title"><p>${contents[i].title}</p></div>
  <div class="txt">
    <p>
    ${contents[i].txt}
    </p>
  </div>
  <div class="date">
    <ul>
      <li>
        <p>예약기간</p>
        <p>${contents[i].reservationPeriodFrom} ~ ${contents[i].reservationPeriodTo}</p>
      </li>
      <li>
        <p>숙박기간</p>
        <p>${contents[i].stayPeriodFrom} ~ ${contents[i].stayPeriodTo}</p>
      </li>
    </ul>
  </div>
  <div class="pay">
    <p><span>${contents[i].pay}</span>KRW ~</p>
  </div>
  <div class="btnArea">
    <div>
      <input type="checkbox" name="bookmark" id="bookmark${i}" />
      <label for="bookmark${i}"></label>
    </div>
    <a href="" class="Btn">자세히 보기</a>
  </div>
</li>`
    );
    $("#contents").append(li);
  }
};

// 스크롤 이벤트
const contentsScrollEvnet = function () {
  const winH = window.innerHeight; // window창 높이
  let items = document.querySelectorAll(".content");
  for (let i = 0; i < items.length; i++) {
    let postFromTop = items[i].getBoundingClientRect().top;
    if (winH > postFromTop) {
      items[i].classList.add("loadEvent"); // 조건 만족시 loadEvent 추가
    } else {
      items[i].classList.remove("loadEvent"); // 범위를 벗아날 경우 loadEvent 제거
    }
  }
};
window.addEventListener("scroll", contentsScrollEvnet); // 스크롤 이벤트 실행

function en_on() {
  $(".en").toggle();
}
