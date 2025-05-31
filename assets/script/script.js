// Document ready
$(() => {
	/* 기능 관련 */
	rightMenuToggle();
	fixUpBtnToggle();
	pricyBtnToggle();
	commonSelect();
	commonTelInput();
	mainMemberSwiper();
	mainCategorySlide();
	mainReception();
	mainVisitCal();
	mainVisitTime();
	mainVisitApply();
	mobileApplyToggle();
	memberTabMenu();
	// mapTabView();
	// mainMemberSwiper2();
	
	/* 애니메이션 관련 */
	scollHandler();
	typingEffect();
	isScrolledToBottom();
	clickScrollEvent();

	// 푸터 영역 상담 신청 처리
	$(
		".applyMoSec .submitBtn, .applyPcSec .submitBtn, .mapArti .submitBtn, .applyArti .submitBtn"
	).on("click", (event) => {
		footerConsultation(event);
	});

	/* 서브페이지 기능 관련 */
	mainCaseSlide();
	mainBestSlide();
	mainNewsSlide();
	subProfilePrevNext();
});

// 푸터 영역 상담 신청 처리
const footerConsultation = (event) => {
	let name = $(event.target)
		.parents("form")
		.find("input[name='name']")
		.val();
	let phone = $(event.target)
		.parents("form")
		.find("input[name='phone']")
		.val();
	let category = $(event.target)
		.parents("form")
		.find("select[name='selectCategory']")
		.val();
	let agree = $(event.target)
		.parents("form")
		.find("input[type='checkbox']")
		.is(':checked');

	// 히든 영웅에서는 
	let contents = $(event.target)
		.parents("form")
		.find("textarea[name='content']")
		.val();

	let visitLocation = $(event.target)
		.parents("form")
		.find("select[name='selectVisitLocation']")
		.val();
	let counsellingDate = $("#reservationDate").val();
	let counsellingTime = $(".dateTime input[type='checkbox']:checked").val();

	if (!category) {
		Swal.fire({
			icon: "warning",
			text: "분야를 선택하세요.",
			confirmButtonColor: "#2B4039",
			confirmButtonText: "확인",
		});
	} else if (!phone) {
		Swal.fire({
			icon: "warning",
			text: "전화번호를 입력하세요.",
			confirmButtonColor: "#2B4039",
			confirmButtonText: "확인",
		});
	} else if (!agree) {
		Swal.fire({
			icon: "warning",
			text: "개인정보 수집에 동의해주세요.",
			confirmButtonColor: "#2B4039",
			confirmButtonText: "확인",
		});
	} 
	// else if (!name) {
	// 	Swal.fire({
	// 		icon: "warning",
	// 		text: "이름을 입력하세요.",
	// 		confirmButtonColor: "#2B4039",
	// 		confirmButtonText: "확인",
	// 	});
	// } 
	else {
		if (!contents) {
			contents = "";
		}
		if (!visitLocation) {
			visitLocation = "";
		}
		if (!counsellingDate) {
			counsellingDate = "";
		}
		if (!counsellingTime) {
			counsellingTime = "";
		}

		const sendData = {
			category: category,
			name: name,
			phone: phone,
			content: contents,
			location: visitLocation,
			date: counsellingDate,
			time: counsellingTime,
			sites: "영웅-히든",
			type: "quick",
		};

		$.ajax({
			type: "POST",
			url: "https://thidn.com/api/couns_api",
			data: sendData,
			success: () => {
				Swal.fire({
						icon: "success",
						html: "상담 신청이 완료되었습니다.",
						confirmButtonColor: "#2B4039",
						confirmButtonText: "확인",
					}).then(() => {
						location.reload();
					});
			},
			error: () => {
				Swal.fire({
					icon: "error",
					html: "처리 중 오류가 발생하였습니다.<br>잠시 후 다시 시도해주세요.",
					confirmButtonColor: "#2B4039",
					confirmButtonText: "확인",
				});

			},
		});
	}
};

document.addEventListener("scroll", function () {
	/* 스크롤 애니메이션 */
	scollHandler();
	isScrolledToBottom();
});

const clickScrollEvent = () => {
	$(".scroll_move").click(function (e) {
		e.preventDefault();
		$("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
		$(".mobileCloseBg").removeClass("show");
		$(".rightMenuArti .menuSec").removeClass("show");
		$(".topMenuSec .menuBg").removeClass("show");
		$("header").removeClass("bg");
		$("header .btnBox .menuBtn").removeClass("on");
	});
};

function isScrolledToBottom() {
	var container = document.documentElement; // 스크롤할 컨테이너 선택 (document.documentElement는 페이지의 최상위 요소, 즉 <html> 요소를 의미합니다.)
	var scrollTop =
		container.scrollTop || window.pageYOffset || document.body.scrollTop;
	var containerHeight =
		container.clientHeight || window.innerHeight || document.body.clientHeight;
	var totalHeight = container.scrollHeight || document.body.scrollHeight;
	var isAtBottom = scrollTop + containerHeight >= totalHeight;

	// 결과를 콘솔에 출력
	if (isAtBottom) {
		//제일 하단
		$(".applyPcSec .inner").addClass("hide");
		$(".applyMoSec .applyShowBtn").addClass("hide");
	} else {
		$(".applyPcSec .inner").removeClass("hide");
		$(".applyMoSec .applyShowBtn").removeClass("hide");
	}

	// 결과 반환
	return isAtBottom;
}

let countFlag = true;

const scollHandler = () => {
	const scroll_y = window.scrollY + window.innerHeight / 1.2;
	const animationContainer = document.querySelectorAll(".ani");
	animationContainer.forEach((element) => {
		const itemTop = element.getBoundingClientRect().top + window.scrollY;
		if (scroll_y > itemTop) {
			element.classList.add("on");
			if (element.classList[0] === "visualArti") {
				$('.applyPcSec label input[type="checkbox"] + .txt').removeClass(
					"active"
				);
			} else {
				$('.applyPcSec label input[type="checkbox"] + .txt').addClass("active");
			}
		} else {
			element.classList.remove("on");
		}

		/* 카운터 */
		countFlag = true;
	});
};

const typingEffect = () => {
	const typingBox = document.querySelector(
		".main .visualArti .contentBox .subTit"
	);
	if (typingBox) {
		const typingTextArray = typingBox.innerText.split("");

		let now = 0;
		let typingText = "";

		const speed = 100;

		typingBox.innerText = "";
		const typing = setInterval(() => {
			typingText = "";
			for (let i = 0; i <= now; i++) {
				typingText += typingTextArray[i];
			}
			typingBox.innerText = typingText;
			now++;

			if (now === typingTextArray.length) {
				clearInterval(typing);
			}
		}, speed);
	}
};

const memberTabMenu = () => {
	$(".main .memberArti2 .tabContainer .btnList > li .itemBtn").click(
		function () {
			const index = $(this).parent().index();
			$(".main .memberArti2 .tabContainer .btnList > li .itemBtn").removeClass(
				"active"
			);
			$(".main .memberArti2 .tabContainer .btnList > li")
				.eq(index)
				.children(".itemBtn")
				.addClass("active");
			$(".main .memberArti2 .tabContainer .contentList > li").removeClass(
				"active"
			);
			$(".main .memberArti2 .tabContainer .contentList > li")
				.eq(index)
				.addClass("active");

			// mainMemberSwiper2();
		}
	);
};

const mainMemberSwiper2 = () => {
	new Swiper(".memberArti2 .active .swiper-container", {
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: fasle,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

const mobileApplyToggle = () => {
	$(".applyMoSec .applyShowBtn").click(function () {
		$(".applyMoSec .applyArti").addClass("show");
		$(".mobileCloseBg").addClass("show");
		$(".applyMoSec .applyShowBtn").addClass("hide");
	});
	$(".applyMoSec .applyArti .btnBox .closeBtn").click(function () {
		$(".applyMoSec .applyArti").removeClass("show");
		$(".applyMoSec .applyShowBtn").removeClass("hide");
		$(".mobileCloseBg").removeClass("show");
	});
	$(".applyMoSec .applyShowBtn .clostBtn").click(function (e) {
		e.stopPropagation();
		$(".mobileCloseBg").addClass("show");
		$(".applyMoSec .applyShowBtn").addClass("hide");
	});

	$(".mobileCloseBg").click(function () {
		$(".applyMoSec .applyArti").removeClass("show");
		$(".applyMoSec .applyShowBtn").removeClass("hide");
	});

	/* 값이 입력되었을때 버튼 활성화 */
	$(".applyMoSec .applyArti .formList > li .item .ipt").on(
		"input",
		function () {
			// 변경된 값에 대한 처리
			var totalCount = 0;

			if ($("#Mo_Category").val() !== "") {
				totalCount = totalCount + 1;
			}
			if ($("#Mo_Name").val() !== "") {
				totalCount = totalCount + 1;
			}
			if ($("#Mo_Tel").val() !== "") {
				totalCount = totalCount + 1;
			}
			if (totalCount === 3) {
				$(".applyMoSec .applyArti .submitBtn").addClass("active");
			} else {
				$(".applyMoSec .applyArti .submitBtn").removeClass("active");
			}
		}
	);
};

const pricyBtnToggle = () => {
	$(".privacyBtn").click(function () {
		$("#privacyPopup").addClass("show");
	});
	$(".termsBtn").click(function () {
		$("#termsPopup").addClass("show");
	});
	$(".privacyPopupSec").click(function () {
		$(".privacyPopupSec").removeClass("show");
	});
	$(".privacyPopupSec .popupContentArti").click(function (e) {
		e.stopPropagation();
	});
	$(".privacyPopupSec .popupContentArti .titleBox .closeBtn").click(
		function () {
			$(".privacyPopupSec").removeClass("show");
		}
	);
};

const rightMenuToggle = () => {
	$("header .btnBox .menuBtn").click(function () {
		$(".mobileCloseBg").addClass("show");
		$(".rightMenuArti .menuSec").addClass("show");
		$(".topMenuSec .menuBg").toggleClass("show");
		$("header").toggleClass("bg");
		$("header .btnBox .menuBtn").toggleClass("on");
	});
	$(".rightMenuArti .menuSec .titleBox .closeBtn").click(function () {
		$(".mobileCloseBg").removeClass("show");
		$(".rightMenuArti .menuSec").removeClass("show");
		$(".topMenuSec .menuBg").removeClass("show");
		$("header").removeClass("bg");
		$("header .btnBox .menuBtn").removeClass("on");
	});
	$(".mobileCloseBg").click(function () {
		$(".mobileCloseBg").removeClass("show");
		$(".rightMenuArti .menuSec").removeClass("show");
		$(".topMenuSec .menuBg").removeClass("show");
		$("header").removeClass("bg");
		$("header .btnBox .menuBtn").removeClass("on");
	});
};

const fixUpBtnToggle = () => {
	$('.fixUpBtn').click(function(){
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});
};

const commonSelect = () => {
	$('form select').on('change', function() {
		if($(this).val() != '' || $(this).val() == 'undefined') {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
};

const commonTelInput = () => {
	$(document).on("keyup", "input[type='tel']", function() {
		$(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ); 
	});
};

const mainMemberSwiper = () => {
	new Swiper(".memberArti .swiper-container", {
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

var bullet = ['이혼', '개인회생', '형사', '민사 · 부동산', '음주 · 교통', '성범죄', '마약', '상속'];
const mainCategorySlide = () => {
	var swiper = new Swiper(".main .categoryArti .slideWrap .categorySlide", {
		slidesPerView: 'auto',
		spaceBetween: 20,
		// loop : true,
		// autoplay: {
		//     delay: 3000,
		//     disableOnInteraction: false,
		// },
		breakpoints: {
			650: {
				pagination: {
					el: '.categoryArti .swiper-pagination',
					clickable: true,
						renderBullet: function (index, className) {
						return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
					}
				},
				spaceBetween: 10,
			},
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		observer: true,
		observeParents: true,
	});
};

const mainReception = () => {
	// 자가진단
	var index;
	var settings = [
		[
			{
				title: '현재 상황', 
				subtitle: '어떤 이혼상담을 원하시나요?',
				childs: ['협의, 조정, 소송 등 이혼 상담', '상간, 합의 소송 등 상담', '자녀 양육 문제 관련 상담', '재산분할, 위자료 관련 상담', '사실혼 관련 상담', '기타']
			},
			{
				title: '우선순위', 
				subtitle: '상담을 통해 얻고자 하는 결과는 무엇인가요?',
				childs: ['이혼의 성립', '재산분할, 위자료 쟁점 해결', '자녀 양육문제 해결', '배우자가 청구한 이혼소송의 기각', '상간소송 청구하여 최대 위자료 인정', '상간소송의 기각 또는 위자료 감액', '사실혼 해소 시 최대 위자료 및 재산분할 인정']
			}
		],
		[
			{
				title: '현재 소득(실수령)', 
				subtitle: '',
				childs: ['0~100만 원', '100~200만 원', '200~300만 원', '300~400만 원', '400만 원 이상']
			},
			{
				title: '최근 3개월 내 채무 유무', 
				subtitle: '',
				childs: ['있음', '없음']
			},
			{
				title: '채권자 수', 
				subtitle: '',
				childs: ['5곳 미만', '5곳 이상', '10곳 이상']
			},
			{
				title: '부양가족', 
				subtitle: '',
				childs: ['없음', '1명', '2명', '3명', '4명']
			}
		],
		[
			{
				title: '현재 상황', 
				subtitle: '어떤 형사 상담이 필요하신가요?',
				childs: ['성범죄', '마약', '음주/교통', '강력범죄', '재산범죄', '기타']
			},
			{
				title: '입장', 
				subtitle: '현재 처한 입장을 선택해주세요.',
				childs: ['가해를 했음(고소를 당함)', '피해를 입음(고소인)', '쌍방', '기타(제3자)']
			},
			{
				title: '전력', 
				subtitle: '과거 전과는 없으신가요?',
				childs: ['없음', '동종 전과 있음', '이종 전과 있음']
			},
			{
				title: '진행단계', 
				subtitle: '현재 진행단계는 어떻게 되나요?',
				childs: ['신고 전', '경찰조사 진행 전', '경찰조사 진행 후', '검찰 송치', '재판 전', '재판 후', '기타']
			}
		],
		[
			{
				title: '현재 상황', 
				subtitle: '어떤 민사 상담이 필요하신가요?',
				childs: ['부동산 분쟁', '토지분쟁', '임금체불', '공사대금', '손해배상', '기타']
			},
			{
				title: '피해 액수가 얼마인가요?', 
				subtitle: '',
				childs: ['500만 원 이하', '500만 원 이상']
			}
		],
		[

		]
	];
	
	$(document).on("click","#reception input:radio", function() {
		$(this).parents('.select_wrapper').find('.item').removeClass('on');
		$(this).parent().addClass('on');
	});

	$('.sian').click(function(){
		var $root= $(this).closest('.teherans');
		var value = $root.find('input:checked').val();

        if(typeof(value)=='undefined'){ 
			Swal.fire({
				title: "항목 미선택",
				text: "항목을 선택해주세요.",
				icon: "warning",
				buttons: "확인",
			});
			return false;
		}

        $('.teherans').show();
		$('.housec2').show();
        $('.intro_teheran').hide();

        index  = $('.intro_teheran .item.on').index();
        setContents(index, 0);
    });

	$('.mainback').click(function () {
		$('.housec').hide();
		$('.teherans.intro_teheran').show();
		$('.teherans.intro_teheran .housec1').show();
	});

	$(".gops2_contents2").click(function(){
		var $root= $(this).closest('.housec');
		var title = $root.find('.housec_tit2').html();
		var button_class= $(this).attr('class');
		var value = $root.find('input:checked').val();
		
		if(button_class.indexOf('prev')!=-1) {
			$('.housec').hide();
			$('.housec2').show();
		}  else {
			if(typeof(value)=='undefined'&&button_class.indexOf('next')!=-1){ 
				Swal.fire({
					title: "항목 미선택",
					text: "항목을 선택해주세요.",
					icon: "warning",
					buttons: "확인",
				});
				return false;
			}
			$('.housec').hide();
			$('.housec2').show();
			
			setContents(index, 0);
		}
	});

	$(".gops2_contents3").click(function(){
		var $root= $(this).closest('.housec');
		var title = $root.find('.housec_tit2').html();
		var button_class= $(this).attr('class');
		var value = $root.find('input:checked').val();

		if(button_class.indexOf('prev')!=-1) {
			$('.housec').hide();
			$('.housec3').show();
		}  else {
			if(typeof(value)=='undefined'&&button_class.indexOf('next')!=-1){
				Swal.fire({
					title: "항목 미선택",
					text: "항목을 선택해주세요.",
					icon: "warning",
					buttons: "확인",
				});
				return false;
			} 
			
			$('.housec').hide();
			$('.housec3').show();
		
			setContents(index, 1);
		}
	});

	$(".gops2_contents4").click(function(){
		var $root= $(this).closest('.housec')
		var title = $root.find('.housec_tit2').html()
		var button_class= $(this).attr('class');
		var value = $root.find('input:checked').val();

		if(button_class.indexOf('prev')!=-1) {
			$('.housec').hide();
			$('.housec4').show();
		} else  {
			if(typeof(value)=='undefined'&&button_class.indexOf('next')!=-1){
				Swal.fire({
					title: "항목 미선택",
					text: "항목을 선택해주세요.",
					icon: "warning",
					buttons: "확인",
				});
				return false;
			}
		
			$('.housec').hide();
			$('.housec4').show();
		
			setContents(index, 2);
		}
	});

	$(".gops2_contents5").click(function(){
		var $root= $(this).closest('.housec')
		var title = $root.find('.housec_tit2').html()
		var button_class= $(this).attr('class');
		var value = $root.find('input:checked').val();

		if(button_class.indexOf('prev')!=-1) {
			$('.housec').hide();
			$('.housec5').show();
		} else  {
			if(typeof(value)=='undefined'&&button_class.indexOf('next')!=-1){
				Swal.fire({
					title: "항목 미선택",
					text: "항목을 선택해주세요.",
					icon: "warning",
					buttons: "확인",
				});
				return false;
			}
		
			$('.housec').hide();
			$('.housec5').show();
		
			setContents(index, 3);
		}
	});

	$(".gops2_contents6").click(function(){
		var $root= $(this).closest('.housec')
		var title = $root.find('.housec_tit2').html()
		var button_class= $(this).attr('class');
		var value = $root.find('input:checked').val();

		if(button_class.indexOf('prev')!=-1) {
			$('.housec').hide();
			$('.housec6').show();
		} else  {
			if(typeof(value)=='undefined'&&button_class.indexOf('next')!=-1){
				Swal.fire({
					title: "항목 미선택",
					text: "항목을 선택해주세요.",
					icon: "warning",
					buttons: "확인",
				});
				return false;
			}
		
			$('.housec').hide();
			$('.housec6').show();
		
			setContents(index, 4);
		}
	});

	function setContents($index, $step){
		if (settings[$index].length > $step) {
			var current_title = settings[$index][$step].title;
			var current_subtitle = settings[$index][$step].subtitle;
			var current_contents = settings[$index][$step].childs; 

			$('.contents_teheran .housec'+($step+2)).find('.title_wrapper .housec_tit .housec_tit2').html(current_title);
			$('.contents_teheran .housec'+($step+2)).find('.title_wrapper .housec_ques .ques_bold').html(current_subtitle);
			$('.contents_teheran .housec'+($step+2)).find('.select_wrapper').empty();

			for(var i = 0; i < current_contents.length; i++) {
				$('.contents_teheran .housec'+ ($step+2)).find('.select_wrapper').append("<div class='item'><label for='"+ current_title + i + "'>"+ current_contents[i] +"</label><input type='radio' name='"+ current_title +"' id='"+ current_title + i + "' value='"+ current_contents[i] +"'><label for='"+ current_title + i + "' class='ico'></label></div>");
			}
		} else {
			$('.teherans').hide();
			$('.guestol').show();
		}
	}

	const sendData = [];
	$('.self_update_check').click(function(){
		// 입력 값 검증
		const phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
		var f = document.guestols;
		
		// if (f.name.value.trim() == "") {
		// 	Swal.fire({
		// 		title: "입력값 확인",
		// 		text: "성명을 입력해주세요.",
		// 		icon: "warning",
		// 		buttons: "확인",
		// 	});
		// 	f.name.focus();
		// 	return false;
		// } 
		
		if(f.phone.value.trim() == "") {
			Swal.fire({
				title: "항목 미입력",
				text: "휴대전화 번호를 입력해주세요.",
				icon: "warning",
				buttons: "확인",
			});
			f.phone.focus();
			return false;
		} 

		let name = f.name.value.trim();
		if (name == "") {
			name = "";
		}

		sendData.push(name);
		sendData.push(f.phone.value.trim());

		self_update_form_act();
	});

	function self_update_form_act() {
		for(var i = 0; i <= settings[index].length; i++) {
			sendData.push($('.housec' + (i+1)).find('input[type=radio]:checked').val());
		}

		console.log(sendData);
		// Extract the first two values
		let name = sendData[0];
		let phone = sendData[1];

		// Extract the remaining values
		let remainingValues = sendData.slice(2);

		// Convert the remaining values to a single string with a space separator
		let remainingString = remainingValues.join(' / ');

		$.ajax({
			data : {
				content: remainingString,
				type: 'ex_self',
				sites: '영웅-히든',
				name: name,
				phone: phone,
			},
			async : false,
			url : "https://thidn.com/api/couns_api",
			type : "post",
			success: (data) => {
				Swal.fire({
					title: "상담신청 완료",
					text: "신청이 완료되었습니다.",
					icon: "success",
					buttons: "확인",
				}).then((value) => {
					location.reload();
				});
			}
		});
	}
};

const mainVisitCal = () => {
	var natDays =  [
		[2024,8,15,'ko','광복절'],
		[2024,9,16,'ko','추석'],[2024,9,17,'ko','추석'],[2024,9,18,'ko','추석'],
		[2024,10,1,'ko', '국군의날'],[2024,10,3,'ko','개천절'],
		[2024,10,9,'ko','한글날'],
		[2024,12,25,'ko','크리스마스'],

		[2025,1,1,'ko','신정'],[2025,1,28,'ko','설날'],[2025,1,29,'ko','설날'],[2025,1,30,'ko','설날'],
		[2025,3,1,'ko','삼일절'],[2025,3,3,'ko','대체휴일'],
		[2025,5,5,'ko','어린이날'],[2025,5,6,'ko','대체휴일'],
		[2025,6,6,'ko','현충일'],
		[2025,8,15,'ko','광복절'],
	];

	let isInitialLoad = true;
	$("#reservation_date").datepicker({
		dateFormat: "yy-mm-dd", // 년-월-일 형식으로 설정
		dayNames: ["일", "월", "화", "수", "목", "금", "토"], // 요일 이름을 한글로 지정
		dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"], // 요일 이름을 한글로 짧게 지정
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
		monthNamesShort: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
		],
		dayNames: ["일", "월", "화", "수", "목", "금", "토"],
		dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
		dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
		minDate: 0, // 오늘 이전의 날짜 선택 불가능
		showMonthAfterYear: true,  // 년 월 순서 바꿈
		onSelect: function (dateText) {
			var selectedDate = new Date(dateText);
			var year = selectedDate.getFullYear();
			var month = selectedDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
			var day = selectedDate.getDate();
			$('#reserved_date').val(year + "-" + month + "-" + day);
			$('.dateSelect').addClass('active');
			$('.dateSelect span').text(year+ '년 ' + month+ '월 ' + day +'일');
			$('.visitApplyComplete').find('.date').text( year + '년 ' + month + '월 ' + day + '일');
		},
		beforeShowDay: function (date) {
			var day = date.getDay();

			for (i = 0; i < natDays.length; i++) {
				if (date.getFullYear() == natDays[i][0] && date.getMonth() == natDays[i][1] - 1
					&& date.getDate() == natDays[i][2]) {      
						
					return [false, "holiday", ""]
				}
			}

			if (day === 0) {
				return [false, "sunday", ""];
			} else if(day === 6) {
				return [false, "saturday", ""];
			} 

			if (isInitialLoad) {
                setTimeout(function() {
                    $(".ui-state-active").removeClass("ui-state-active");
                }, 1);
                isInitialLoad = false;  // 첫 로딩 이후에는 false로 설정하여 더 이상 제거하지 않음
            }
			
			return [true, "", ""];
		},
	});
};

const mainVisitTime = () => {
	$(".visitArti .dateTime label input[type='checkbox']").click(function () {
		// 현재 라디오 버튼의 체크 상태 확인
		$(".visitArti .dateTime label input[type='checkbox']").not(this).prop("checked", false);
		$("#reservationTime").val($(this).val());
	});
};

const mainVisitApply = () => {
	$(".rvWrap .submitBtn").on("click", (event) => {
		visitApply(event);
	});

	const visitApply = (event) => {
		let date = $(event.target)
			.parents("form")
			.find("input[name='date']")
			.val();
		let time = $(event.target)
			.parents("form")
			.find("input[name='time']")
			.val();
		let name = $(event.target)
			.parents("form")
			.find("input[name='name']")
			.val();
		let phone = $(event.target)
			.parents("form")
			.find("input[name='phone']")
			.val();
		let category = $(event.target)
			.parents("form")
			.find("select[name='selectCategory']")
			.val();
		let content = $(event.target)
			.parents("form")
			.find("textarea[name='content']")
			.val();
		let agree = $(event.target)
			.parents("form")
			.find("input[name='agree']")
			.is(':checked');


		if (!date) {
			Swal.fire({
				icon: "warning",
				text: "날짜를 선택하세요.",
				confirmButtonColor: "#2B4039",
				confirmButtonText: "확인",
			});
		} else if (!time) {
			Swal.fire({
				icon: "warning",
				text: "시간을 선택하세요.",
				confirmButtonColor: "#2B4039",
				confirmButtonText: "확인",
			});
		} else if (!name) {
			Swal.fire({
				icon: "warning",
				text: "이름을 입력하세요.",
				confirmButtonColor: "#2B4039",
				confirmButtonText: "확인",
			});
		} else if (!phone) {
			Swal.fire({
				icon: "warning",
				text: "휴대폰 번호를 입력하세요.",
				confirmButtonColor: "#2B4039",
				confirmButtonText: "확인",
			});
		} else if (!category) {
			Swal.fire({
				icon: "warning",
				text: "사건분야를 선택하세요.",
				confirmButtonColor: "#2B4039",
				confirmButtonText: "확인",
			});
		}  else if (agree == false) {
			Swal.fire({
				icon: "warning",
				text: "개인정보 수집 및 이용목적 동의에 체크해주세요.",
				confirmButtonColor: "#2B4039",
				confirmButtonText: "확인",
			});
		} else {
			const sendData = {
				date: date,
				time: time,
				name: name,
				phone: phone,
				selectCategory: category,
				content: content,
				type: "visit",
				sites: "영웅-히든",
			};

			// 성공하면 퍼블리싱한 팝업 띄워주세요
			$('.visitApplyComplete').addClass('active');
			$('.visitApplyComplete').find('.time').text(time);

			$.ajax({
				type: "POST",
				url: "https://thidn.com/api/couns_api",
				data: sendData,
				success: () => {
					Swal.fire({
						icon: "success",
						html: "상담 신청이 완료되었습니다.",
						confirmButtonColor: "#2B4039",
						confirmButtonText: "확인",
					}).then(() => {
						location.reload();
					});
				},
			});
		}
	};

	$('.visitApplyComplete .popup_close_btn').click(function() {
		$('.visitApplyComplete').removeClass('active');
	});
};

const mainCaseSlide = () => {
	var swiper = new Swiper(".main .caseArti .slideWrap .caseSlide", {
		slidesPerView: 'auto',
		spaceBetween: 21,
		// loop : true,
		// autoplay: {
		//     delay: 3000,
		//     disableOnInteraction: false,
		// },
		breakpoints: {
			// 1000: {
			// 	slidesPerView: 3,
			// 	spaceBetween: 10,
			// },
			// 1250: {
			// 	slidesPerView: 4,
			// 	spaceBetween: 10,
			// },
			// 1540: {
			// 	slidesPerView: 5,
			// 	spaceBetween: 10,
			// },
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		observer: true,
		observeParents: true,
	});
};

const mainBestSlide = () => {
	var swiper = new Swiper(".main .bestArti .slideWrap .bestSwiper", {
		effect: "fade",
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".main .bestArti .slideWrap .slideBtnWrap .nextBtn",
			prevEl: ".main .bestArti .slideWrap .slideBtnWrap .prevBtn",
		},
		pagination: {
			clickable: true,
			el: ".main .bestArti .swiper-pagination",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
	});
};

const mainNewsSlide = () => {
	var swiper = new Swiper(".main .newsArti .slideContainer .newsSwiper", {
		effect: "fade",
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".main .newsArti .slideContainer .slideWrap .btnBox .nextBtn",
			prevEl: ".main .newsArti .slideContainer .slideWrap .btnBox .prevBtn",
		},
		pagination: {
			el: ".main .newsArti .swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
	});
};

const subProfilePrevNext = () => {
	$(".sub .profileArti .moreBtn").click(function () {
		$(".sub .profileArti .moreBtn").toggleClass("active");
		$(".sub .profileArti .fullBox").toggleClass("active");
	});
};
