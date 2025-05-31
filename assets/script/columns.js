// Document ready
$(() => {
  // 검색어 입력 후 엔터키 입력 시 처리
  $(".ipt").on("keypress", (e) => {
    if (e.key === "Enter") {
      getList();
    }
  });

  // 검색 버튼 클릭 시 처리
  $(".searchBtn").on("click", () => {
    getList();
  });
});

// 검색 버튼 클릭 시 목록 출력
const getList = () => {
  const searchText = $(".ipt").val();

  location.href = "/columns/index?searchText=" + searchText;
};
