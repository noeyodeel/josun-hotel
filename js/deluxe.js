document.addEventListener("DOMContentLoaded", function () {
  // 인원추가
  document.querySelector(".people_btn").addEventListener("click", function () {
    document.querySelector(".people_modal").style.display = "flex";
  });

  document
    .querySelector(".modal_closeBtn_p")
    .addEventListener("click", function () {
      document.querySelector(".people_modal").style.display = "none";
    });

  // 예약하기
  $(".res_fullWidth").daterangepicker(
    {
      opens: "left",
      locale: {
        applyLabel: "적용",
        cancelLabel: "취소",
      },
    },

    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      );
    }
  );

  // 공유하기 모달창
  const hdDisplayNone = document.querySelector(".hd_display_none");
  const shareBtn = document.querySelector(".share-btn");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal_closeBtn");

  const openModal = () => {
    modal.classList.remove("hidden");
    hdDisplayNone.style.display = "none";
  };
  const closeModal = () => {
    modal.classList.add("hidden");
    hdDisplayNone.style.display = "block";
  };

  shareBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  // 도면보기 모달창
  const floorPlan = document.querySelector(".floor_plan");
  const modal2 = document.querySelector(".modal2");
  const closeBtn2 = document.querySelector(".modal_closeBtn2");

  const openModal2 = () => {
    modal2.classList.remove("hidden");
    hdDisplayNone.style.display = "none";
  };
  const closeModal2 = () => {
    modal2.classList.add("hidden");
  };

  floorPlan.addEventListener("click", openModal2);
  closeBtn2.addEventListener("click", closeModal2);

  // 관심상품 담기 클릭시 하트 이미지 이동
  const loveBtnWrap = document.getElementById("love_btn");
  const loveBtnInner = document.querySelector(".love_img");

  const changeBtn = () => {
    loveBtnInner.style.backgroundPosition = "33% 6%";
    setTimeout(function () {
      const wngud = window.confirm(
        "로그인 후, 관심 상품 담기가 가능합니다. 로그인 하시겠습니까?"
      );
      if (wngud === false || true) {
        loveBtnInner.style.backgroundPosition = "0% 0%";
      }
    }, 300);
  };
  loveBtnWrap.addEventListener("click", changeBtn);

  // 아래화살표 클릭시 스크롤이동
  document.querySelector(".scroll_top").addEventListener("click", function () {
    const location = document.querySelector(".scroll").offsetTop;
    const menuHeight = document.getElementById("nav_bar").offsetHeight;
    window.scrollTo({ top: location - menuHeight });
  });

  // 객실 어메니티 버튼 클릭시 border
  const amanityBtns = document.querySelectorAll(".amanity_btn");
  const amanityLists = document.querySelectorAll(".room_info");

  amanityBtns.forEach((targetBtn, targetBtnIndex) => {
    targetBtn.addEventListener("click", () => {
      amanityLists.forEach((list, listIndex) => {
        const listDisplayStatus =
          targetBtnIndex === listIndex ? "block" : "none";
        list.style.display = listDisplayStatus;
      });

      amanityBtns.forEach((btn, btnIndex) => {
        if (targetBtnIndex === btnIndex) {
          btn.style.border = "1px solid black";
          btn.style.borderBottom = "none";
        } else {
          btn.style.border = "none";
          btn.style.borderBottom = "1px solid black";
        }
      });
    });
  });

  // 메인이미지 슬라이드
  (function () {
    const slideList = document.querySelector(".deluxe_01"); // Slide parent dom
    const slideContents = document.querySelectorAll(".common_deluxeImg"); // each slide dom
    const slideBtnNext = document.querySelector(".btnNext"); // next button
    const slideBtnPrev = document.querySelector(".btnPrev"); // prev button
    // const pagination = document.querySelector(".slide_pagination");
    const slideLen = slideContents.length; // slide length
    const slideWidth = 1400; // slide width
    const slideSpeed = 300; // slide speed
    const startNum = 0; // initial slide index (0 ~ 4)

    slideList.style.width = slideWidth * (slideLen + 2) + "px";

    // Copy first and last slide
    let firstChild = slideList.firstElementChild;
    let lastChild = slideList.lastElementChild;
    let clonedFirst = firstChild.cloneNode(true);
    let clonedLast = lastChild.cloneNode(true);

    // Add copied Slides
    slideList.appendChild(clonedFirst);
    slideList.insertBefore(clonedLast, slideList.firstElementChild);

    // Add pagination dynamically
    // let pageChild = "";
    // for (var i = 0; i < slideLen; i++) {
    //   pageChild += '<li class="dot';
    //   pageChild += i === startNum ? " dot_active" : "";
    //   pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
    // }
    // pagination.innerHTML = pageChild;
    // const pageDots = document.querySelectorAll(".dot"); // each dot from pagination

    slideList.style.transform =
      "translate3d(-" + slideWidth * (startNum + 1) + "px, 0px, 0px)";

    let curIndex = startNum; // current slide index (except copied slide)
    let curSlide = slideContents[curIndex]; // current slide dom
    curSlide.classList.add("slide_active");

    /** Next Button Event */
    slideBtnNext.addEventListener("click", function () {
      if (curIndex <= slideLen - 1) {
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform =
          "translate3d(-" + slideWidth * (curIndex + 2) + "px, 0px, 0px)";
      }
      if (curIndex === slideLen - 1) {
        setTimeout(function () {
          slideList.style.transition = "0ms";
          slideList.style.transform =
            "translate3d(-" + slideWidth + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = -1;
      }
      curSlide.classList.remove("slide_active");
      // pageDots[curIndex === -1 ? slideLen - 1 : curIndex].classList.remove(
      //   "dot_active"
      // );
      curSlide = slideContents[++curIndex];
      curSlide.classList.add("slide_active");
      // pageDots[curIndex].classList.add("dot_active");
    });

    /** Prev Button Event */
    slideBtnPrev.addEventListener("click", function () {
      if (curIndex >= 0) {
        slideList.style.transition = slideSpeed + "ms";
        slideList.style.transform =
          "translate3d(-" + slideWidth * curIndex + "px, 0px, 0px)";
      }
      if (curIndex === 0) {
        setTimeout(function () {
          slideList.style.transition = "0ms";
          slideList.style.transform =
            "translate3d(-" + slideWidth * slideLen + "px, 0px, 0px)";
        }, slideSpeed);
        curIndex = slideLen;
      }
      curSlide.classList.remove("slide_active");
      // pageDots[curIndex === slideLen ? 0 : curIndex].classList.remove(
      //   "dot_active"
      // );
      curSlide = slideContents[--curIndex];
      curSlide.classList.add("slide_active");
      // pageDots[curIndex].classList.add("dot_active");
    });
  })();
});

function en_on() {
  $(".en").toggle();
}
