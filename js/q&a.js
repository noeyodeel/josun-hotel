// 이메일 직접 입력
function writeText() {
  var obj = document.getElementById("email2");

  obj.value = "";
  obj.readOnly = false;
  obj.focus();
}

// 이메일 클릭시 왼쪽 input에 클릭된 것 뜨게
function statusChange(statusItem) {
  var strText = $(statusItem).text();

  // strText 에 전체 문자열이 입력된다.
  var obj = document.getElementById("email2");

  $("#email2").val(strText);
  obj.readOnly = true;
}

//호텔찾기 멀티 셀렉트박스
function categoryChange(e) {
  //조선 서울
  var place_wes_s = [
    "장소 선택",
    "객실",
    "아리아",
    "나인스게이트",
    "루브리카",
    "조선델리",
    "스시조",
    "홍연",
    "라운지엔바",
    "연회",
    "웨딩",
    "멤버쉽",
    "홈페이지",
    "기타",
  ];
  //조선 부산
  var place_wes_b = [
    "장소 선택",
    "객실",
    "까밀리아",
    "파노라마라운지",
    "조선델리",
    "오킴스",
    "셔블",
    "인룸다이닝",
    "연회",
    "웨딩",
    "홈페이지",
    "기타",
  ];
  //포포인츠 서울역
  var place_popo_s = ["장소 선택", "객실", "더이터리", "더바", "기타"];
  var place_sel = ["장소 선택"];
  var target = document.getElementById("place");
  console.log(e.value);
  if (e.value == "wes_s") var d = place_wes_s;
  else if (e.value == "wes_b") var d = place_wes_b;
  else if (e.value == "popo_s") var d = place_popo_s;
  else if (e.value == "01") var d = place_sel;

  target.options.length = 0;

  for (x in d) {
    var opt = document.createElement("option");
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}

// 파일 추가 기능 및 삭제버튼 (~124)
class FileInputManager {
  constructor(nth_file) {
    this.HIDDEN_CLASSNAME = "hidden";

    this.input_file = $(`#file-${nth_file}`);
    this.input_file_uploadname = $(`#file-uploadname-${nth_file}`);
    this.input_file_delete = $(`#file-delete-${nth_file}`);
    //this 연결
    this.addEventListeners = this.addEventListeners.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
    this.updateRender = this.updateRender.bind(this);
    this.syncFileName = this.syncFileName.bind(this);
    this.enableDeleteButton = this.enableDeleteButton.bind(this);
    this.disableDeleteButton = this.disableDeleteButton.bind(this);
    this.isFileSelected = this.isFileSelected.bind(this);

    this.addEventListeners();
    this.updateRender();
  }

  addEventListeners() {
    this.input_file.on("change", this.updateRender);
    this.input_file_delete.on("click", this.deleteFile);
  }

  deleteFile() {
    this.input_file.val("");
    this.updateRender();
  }

  updateRender() {
    this.syncFileName(); // 파일이름 맞춰주기
    if (this.isFileSelected()) {
      this.enableDeleteButton();
    } else {
      this.disableDeleteButton();
    }
  }

  // 페이지에 보이는 파일이름을 갱신
  syncFileName() {
    const filename = this.input_file.val();
    this.input_file_uploadname.val(filename);
  }

  isFileSelected() {
    return this.input_file.val() != "";
  }

  enableDeleteButton() {
    this.input_file_delete.removeClass(this.HIDDEN_CLASSNAME);
  }

  disableDeleteButton() {
    this.input_file_delete.addClass(this.HIDDEN_CLASSNAME);
  }
}
//페이지 로딩이 끝나면 실행시킴
window.onload = () => {
  new FileInputManager(1);
  new FileInputManager(2);
  new FileInputManager(3);
};

//개인정보
$(function () {
  $(".toggleCont").hide();
  $(".btnToggle").click(function () {
    $(".toggleCont").slideToggle("fast");
  });
});

$("#file1").on("change", function () {
  var fileName = $("#file1").val();
  $(".upload-name1").val(fileName);
});
$("#file2").on("change", function () {
  var fileName = $("#file2").val();
  $(".upload-name2").val(fileName);
});
$("#file3").on("change", function () {
  var fileName = $("#file3").val();
  $(".upload-name3").val(fileName);
});

// // 검색결과 정렬 순서 선택창 open/close
// $("button.searchSort").click(() => {
//   if (!$("button.searchSort").hasClass("open")) {
//     $("button.searchSort").addClass("open");
//     $(".option").addClass("openOption");
//   } else {
//     $("button.searchSort").removeClass("open");
//     $(".option").removeClass("openOption");
//   }
// });

let selectFlag1;
let selectFlag2;
let selectFlag3;

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
//---------------------------------------------------
$(".custom-select3").on("focusin", function () {
  $(".custom-select-list3").show();
  $(".custom-select3").addClass("open_select");
});

$(".custom-select3").on("focusout", function () {
  if (!selectFlag3) {
    $(".custom-select-list3").hide();
    $(".custom-select3").removeClass("open_select");
  }
  $(this).removeClass("selected");
});

$(".custom-select-option3").on("mouseenter", function () {
  selectFlag3 = true;
  $(".custom-select3").addClass("open_select");
});

$(".custom-select-option3").on("mouseout", function () {
  selectFlag3 = false;
  $(".custom-select3").removeClass("open_select");
});

$(".custom-select-option3").on("click", function () {
  let value3 = $(this).attr("value");

  $(".custom-select-text3").text($(this).text());
  $(".select-origin3").val(value3);
  $(".custom-select-list3").hide();

  $(".select-origin3")
    .find("option")
    .each(function (index, el) {
      if ($(el).attr("value") == value3) {
        $(el).attr("selected", "selected");
      } else {
        $(el).removeAttr("selected");
      }
    });
});
