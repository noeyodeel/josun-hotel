const contents = [
  {
    img: "./images/package_img/packageList01.jpg",
    keywords: `<span>여름</span>
              <span>EARLY BIRD</span>
              <span>TIME SALE</span>`,
    title: "[시즌한정] SUMMER VOYAGE",
    date: "2022.04.01 - 2022.05.31",
    txt: "조식 2인 + 잇투오 풀사이드 스낵세트 + 카바나 2시간 1회<br>[2박 이상 투숙 시] 라운지앤바 수박빙수 1회",
    reservationPeriodFrom: "2022.05.12",
    reservationPeriodTo: "2022.08.31",
    stayPeriodFrom: "2022.06.01 ",
    stayPeriodTo: "2022.08.31",
    pay: "400,000",
  },
  {
    img: "./images/package_img/packageList02.jpg",
    keywords: `<span>여름</span>
              <span>COUPLE</span>
              <span>PARTY</span>`,
    title: "[시즌한정] LET'S PEAK (2박전용)",
    date: "2022.04.01 - 2022.05.31",
    txt: "피크 타임 2인 1회 + 라운지앤바 수박빙수 1회<br>[특전] BABE HOLIDAY BAG 증정",
    reservationPeriodFrom: "2022.05.27",
    reservationPeriodTo: "2022.08.31",
    stayPeriodFrom: "2022.06.24",
    stayPeriodTo: "2022.08.31",
    pay: "360,000",
  },
  {
    img: "./images/package_img/packageList03.jpg",
    keywords: `<span>COUPLE</span>
              <span>DINING</span>
              <span>SPECIAL GIFT</span>`,
    title: "[2박전용] DINE & DREAM",
    date: "2022.04.01 - 2022.05.31",
    txt: "힐 스위트 2박 + 그랑제이 Access 2인 + 루브리카 런치 2인<br>[선착순 100객실] 프리미엄 커플 파자마 SET 증정",
    reservationPeriodFrom: "2022.05.31",
    reservationPeriodTo: "2022.12.31",
    stayPeriodFrom: "2022.06.01 ",
    stayPeriodTo: "2022.12.31",
    pay: "790,000",
  },
  {
    img: "./images/package_img/packageList04.jpg",
    keywords: `<span>한정수량 상품</span>
              <span>SPECIAL GIFT</span>
              <span>SUITE</span>`,
    title: "[2박전용] THE SUITE PACKAGE",
    date: "2022.04.01 - 2022.05.31",
    txt: "더 스위트 2박 + 아리아 조식 3인 + 추가혜택<br>[3박 이상 시] F&B 30만원 이용권 (1회)",
    reservationPeriodFrom: "2022.05.03",
    reservationPeriodTo: "2022.12.31",
    stayPeriodFrom: "2022.05.12 ",
    stayPeriodTo: "2022.12.31",
    pay: "1,920,000",
  },
  {
    img: "./images/package_img/packageList05.jpg",
    keywords: `<span>COUPLE</span>
              
              <span>SUITE</span>`,
    title: "ALMOST HEAVEN",
    date: "2022.04.01 - 2022.05.31",
    txt: "힐 스위트 + Gran J 조식 + Gran Choice",
    reservationPeriodFrom: "2020.11.10",
    reservationPeriodTo: "2023.04.30",
    stayPeriodFrom: "2021.01.08",
    stayPeriodTo: "2023.04.30",
    pay: "680,000",
  },
  {
    img: "./images/package_img/packageList06.jpg",
    keywords: `<span>KIDS</span>
              <span>BREAKFAST</span>
              <span>SPECIAL GIFT</span>`,
    title: "[키즈룸 전용] LOVE MY JOSUN JUNIOR",
    date: "2022.04.01 - 2022.05.31",
    txt: "조식 3인 + 하프데이 키즈케어 + 식음 5만원권 + (연박 시) 카바나 2시간 1회<br>[선착순 200객실] 루치펠로' 키즈 치약 & 칫솔 세트 증정",
    reservationPeriodFrom: "2021.12.13",
    reservationPeriodTo: "2022.08.31",
    stayPeriodFrom: "2022.01.01",
    stayPeriodTo: "2022.08.31",
    pay: "440,000",
  },
  {
    img: "./images/package_img/packageList07.jpg",
    keywords: `<span>BREAKFAST</span>
              <span>DINING</span>
              <span>SUITE</span>`,
    title: "[2박전용] EXCLUSIVE MOMENT",
    date: "2022.04.01 - 2022.05.31",
    txt: "프레스티지 힐 스위트 2박 + 그랑제이 Access 4인 + 추가혜택<br>[3박 이상 시] F&B 25만원 이용권 (1회)",
    reservationPeriodFrom: "2022.04.05",
    reservationPeriodTo: "2022.12.31",
    stayPeriodFrom: "2022.04.07",
    stayPeriodTo: "2022.12.31",
    pay: "1,530,000",
  },
  {
    img: "./images/package_img/packageList08.jpg",
    keywords: `<span>유선 예약 전용</span>
              <span>SPECIAL GIFT</span>
              <span>SUITE</span>`,
    title: "[2박전용] THE BLUE EXPERIENCE",
    date: "2022.04.01 - 2022.05.31",
    txt: "BLUE Suite 2박 + 그랑제이 Access 2인 + Johnnie Walker BLUE Experience Set (1회)<br>[특전] 조니워커 블루 Special Gift",
    reservationPeriodFrom: "2022.05.06",
    reservationPeriodTo: "2022.06.30",
    stayPeriodFrom: "2022.05.09",
    stayPeriodTo: "2022.06.30",
    pay: "1,020,000",
  },
  {
    img: "./images/package_img/packageList09.jpg",
    keywords: `<span>HONEYMOON</span>
              <span>SPECIAL GIFT</span>
              <span>SUITE</span>`,
    title: "[허니문] ROMANTIC ESCAPE Ⅲ",
    date: "2022.04.01 - 2022.05.31",
    txt: "힐 스위트 오션뷰 2박 + 그랑제이 Access + 추가 혜택<br>[선착순 150객실] 프리미엄 커플 파자마 SET 증정",
    reservationPeriodFrom: "2022.03.22",
    reservationPeriodTo: "2022.12.31",
    stayPeriodFrom: "2022.04.01",
    stayPeriodTo: "2022.12.31",
    pay: "1,020,000",
  },
  {
    img: "./images/package_img/packageList10.jpg",
    keywords: `<span>BREAKFAST</span>
              
              <span>SUITE</span>`,
    title: "[스위트] SWEET DREAMING",
    date: "2022.04.01 - 2022.05.31",
    txt: "스위트 룸 2박 + 조식 2인 + IRD J Basket 1회<br>[3박 이상 투숙 시] 가든풀 카바나 3시간 또는 스냅사진 1회",
    reservationPeriodFrom: "2022.02.23",
    reservationPeriodTo: "2022.12.31",
    stayPeriodFrom: "2022.03.01",
    stayPeriodTo: "2022.12.31",
    pay: "520,000",
  },
  {
    img: "./images/package_img/packageList11.jpg",
    keywords: `<span>BREAKFAST</span>
              
              <span>DINING</span>`,
    title: "[2박 전용] TASTY MOMENT",
    date: "2022.04.01 - 2022.05.31",
    txt: "조식 2인 2회 + 석식 2인 1회 + J 라거 2병 제공",
    reservationPeriodFrom: "2021.08.03",
    reservationPeriodTo: "2022.08.31",
    stayPeriodFrom: "2021.09.01",
    stayPeriodTo: "2022.08.31",
    pay: "430,000",
  },
  {
    img: "./images/package_img/packageList12.jpg",
    keywords: `<span>BREAKFAST</span>`,
    title: "BE JEJUFUL",
    date: "2022.04.01 - 2022.05.31",
    txt: "객실 1박 + 아리아 조식 2인",
    reservationPeriodFrom: "2020.12.01",
    reservationPeriodTo: "2023.04.30",
    stayPeriodFrom: "2021.01.08",
    stayPeriodTo: "2023.04.30",
    pay: "340,000",
  },
  {
    img: "./images/package_img/packageList13.jpg",
    keywords: `<span>ROOM ONLY</span>`,
    title: "SMART CHOICE",
    date: "2022.04.01 - 2022.05.31",
    txt: "즐거움은 UP, 부담은 DOWN한 슈퍼 세이브 혜택",
    reservationPeriodFrom: "2020.12.11",
    reservationPeriodTo: "2023.04.30",
    stayPeriodFrom: "2021.01.08",
    stayPeriodTo: "2023.04.30",
    pay: "280,000",
  },
];
