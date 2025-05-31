// 고객 스토리 페이징 처리
const getStoriesList = (page) => {
	$.ajax({
		url: "/home/ajaxGetStoriesList",
		type: "POST",
		data: { page: page },
		success: (response) => {
			const responseJson = JSON.parse(response);

      if (responseJson.length) {
        // 페이지 active 처리
        $(".number").each((index, item) => {
          if (parseInt($(item).text()) === page) {
            $(item).addClass("active");
          } else {
            $(item).removeClass("active");
          }
        });

        // 목록 초기화
        $(".storyList").empty();

        for (let i = 0; i < responseJson.length; i++) {
          // 목록 clone 처리
          let cloneItem = $(".li-story-item").clone();

          cloneItem.removeClass("li-story-item");
          cloneItem.find("a").attr("href", "javascript: getStoryItem(" + responseJson[i].no + ")");
          cloneItem.find(".tag").text("#" + responseJson[i].page_id);
          cloneItem.find(".title").text("#" + responseJson[i].title);
          cloneItem.find(".imgBox").css("background-image", "url('https://thr-law.co.kr/files/" + responseJson[i].thumbnail + "')");

          $(".storyList").append(cloneItem);
        }
      }
		},
		error: (xhr, status, error) => {
			Swal.fire({
				icon: "error",
				html: "처리 중 오류가 발생하였습니다.<br>잠시 후 다시 시도해주세요.",
				confirmButtonColor: "#2B4039",
				confirmButtonText: "확인",
			});

			console.log(xhr, status, error);
		},
	});
};

// 스토리 상세 내용 출력
const getStoryItem = (no) => {
  $.ajax({
		url: "/home/ajaxGetStoryItem",
		type: "POST",
		data: { no: no },
		success: (response) => {
			const responseJson = JSON.parse(response);

      if (responseJson) {
        $("#storiesPopup").find(".subject").text(responseJson.title);
        $("#storiesPopup").find(".contentBox").html(responseJson.contents.replace(/src="/g, 'src="https://thr-law.co.kr'));

        $("#storiesPopup").addClass("show");
      }
		},
		error: (xhr, status, error) => {
			Swal.fire({
				icon: "error",
				html: "처리 중 오류가 발생하였습니다.<br>잠시 후 다시 시도해주세요.",
				confirmButtonColor: "#2B4039",
				confirmButtonText: "확인",
			});

			console.log(xhr, status, error);
		},
	});
};
