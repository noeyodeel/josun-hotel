$("button[name='btnToggle']").click(() => {
	// agreeOpen(".toggle");
	$('.agree').slideToggle();
	console.log("dk");
});


$("button[name='btnToggletwo']").click(() => {
	// agreeOpen(".toggle");
	$('.agree2').slideToggle();
	console.log("dk");
});

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

$(document).on("click", ".nationalityArea button.select", function () {
	selectOpenClose(".nationalityArea");
});

$(".nationalityArea .optionList").click((e) => {
	console.log("click");
	$("#select").val(e.currentTarget.innerText).prop("selected", true);
	$("#selectBtn").text(e.currentTarget.innerText);
	document.querySelector("#selectBtn").classList.remove("open");
	document.querySelector("#option").classList.remove("openOption");
});

$(document).on("click", ".emailArea button.select", function () {
	selectOpenClose(".emailArea");
});
$(document).on("click", ".HotelArea button.select", function () {
	selectOpenClose(".HotelArea");
});


$(".emailArea .optionList").click((e) => {
	$("#selectEmail").val(e.currentTarget.innerText).prop("selected", true);
	$("#selectEmailBtn").text(e.currentTarget.innerText);
	$("#email2").val(e.currentTarget.innerText);
	document.querySelector("#selectEmailBtn").classList.remove("open");
	document.querySelector("#optionEmail").classList.remove("openOption");


});
$(".HotelArea .optionList").click((e) => {
	$("#selectHotel").val(e.currentTarget.innerText).prop("selected", true);
	$("#selectHotelBtn").text(e.currentTarget.innerText);
	document.querySelector("#selectHotelBtn").classList.remove("open");
	document.querySelector("#optionHotel").classList.remove("openOption");
});