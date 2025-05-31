

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

$("#reservationDate").datepicker({
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
    onSelect: function (dateText) {
        var selectedDate = new Date(dateText);
        var year = selectedDate.getFullYear();
        var month = selectedDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
        var day = selectedDate.getDate();
        $('#reservedDate').val(year + "-" + month + "-" + day);
        $('.dateSelect').addClass('active');
        $('.dateSelect span').text(year+ '년 ' + month+ '월 ' + day +'일');
        $('.visitApplyComplete').find('.date').text( year + '년 ' + month + '월 ' + day + '일');
    },
    minDate: 0, // 오늘 이전의 날짜 선택 불가능
    showMonthAfterYear: true,  // 년 월 순서 바꿈
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
        return [true, "", ""];
    },
});

$(".consult .dateTime label input[type='checkbox']").click(function () {
    // 현재 라디오 버튼의 체크 상태 확인
    $(".consult .dateTime label input[type='checkbox']").not(this).prop("checked", false);
    $("#reservationTime").val($(this).val());
});

$(".rvWrap .submitBtn").on("click", (event) => {
    visitApply(event);
});

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