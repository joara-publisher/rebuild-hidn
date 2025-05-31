<!--메인 섹션 시작 { -->
<section class="main">
  <article class="caseArti ani">
    <div class="inner">
      <div class="titleBox">
        <div class="mainTitleBox">
          <div class="t1">Case</div>
          <div class="title">업무사례</div>
          <div class="content">법률사무소 영웅을 통해 도움을 받은 실제 사례를 만나보세요.</div>
        </div>
        <div class="moreBtn pc">
          <a href="/cases#case" class="reservedBtn scroll_move">
            <div class="txt">전체보기</div>
            <div class="arrowBox">
              <img src="/assets/img/common/commonArrow.svg" alt="화살표" class="icon">
            </div>
          </a>
        </div>
      </div>
      <div class="mobile contentDiv slideWrap">
        <ul class="boardList">
          <!--li 4개 (목록 4개)-->
          <li>
              <a href="/cases/view/">
                <div class="item">
                  <div class="imgBox">
                    <div class="imgBg example1" style="background-image: url('');"></div>
                    <div class="cateogry">카테고리입니다카테고리입니다</div>
                  </div>
                  <div class="title">
                    제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다
                  </div>
                  <div class="date">00.00.00</div>
                </div>
              </a>
            </li>
        </ul>
      </div>
      <div class="pc slideWrap">
        <!-- Swiper -->
        <div class="swiper caseSlide">
          <div class="swiper-wrapper">
            <div class="item swiper-slide">
              <a href="/cases/view/">
                <div class="imgBox">
                  <div class="imgBg example1" style="background-image: url('');"></div>
                  <div class="cateogry">카테고리입니다카테고리입니다</div>
                </div>
                <div class="title"> 
                  제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다
                </div>
                <div class="date">00.00.00</div>
              </a>
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
      <div class="moreBtn mo">
        <a href="/cases#case" class="reservedBtn scroll_move">
          <div class="txt">전체보기</div>
          <div class="arrowBox">
            <img src="/assets/img/common/commonArrow.svg" alt="화살표" class="icon">
          </div>
        </a>
      </div>
    </div>
  </article>

  <article class="caseArti2 ani" id="case">
    <div class="inner">
      <div class="searchBox">
        <div class="searchWrap">
          <input type="text" class="ipt" placeholder="키워드 검색" value="" />
          <button type="button" class="searchBtn"><img src="/assets/img/main/caseArti2/searchIcon.svg" alt="검색" class="icon" /></button>
        </div>
      </div>
    </div>
    <div class="tabContainer">
      <div class="inner">
        <ul class="tabBtnList">
        <li><button type="button" class="item <?= $tags === "" || !$tags ? "active" : "" ?>" value="">전체</button></li>
        <li><button type="button" class="item <?= $tags === "이혼" ? "active" : "" ?>" value="이혼">이혼</button></li>
        <li><button type="button" class="item <?= $tags === "상간" ? "active" : "" ?>" value="상간">상간</button></li>
          <li><button type="button" class="item <?= $tags === "개인회생" ? "active" : "" ?>" value="개인회생">개인회생</button></li>
          <li><button type="button" class="item <?= $tags === "형사" ? "active" : "" ?>" value="형사">형사</button></li>
          <li><button type="button" class="item <?= $tags === "민사 · 부동산" ? "active" : "" ?>" value="민사 · 부동산">민사 · 부동산</button></li>
          <li><button type="button" class="item <?= $tags === "음주 · 교통" ? "active" : "" ?>" value="음주 · 교통">음주 · 교통</button></li>
          <li><button type="button" class="item <?= $tags === "성범죄" ? "active" : "" ?>" value="성범죄">성범죄</button></li>
          <li><button type="button" class="item <?= $tags === "마약" ? "active" : "" ?>" value="마약">마약</button></li>
          <li><button type="button" class="item <?= $tags === "상속" ? "active" : "" ?>" value="상속">상속</button></li>
        </ul>
      </div>
      <div class="brownBg">
        <div class="inner">
          <input type="hidden" name="search" value="">

          <ul class="cateTabContentList">
            <li class="active">
              <ul class="caseList ul-victim">
                <li>
                  <a href="/cases/view/">
                    <div class="item">
                      <div class="imgBox bg1" style="background-image: url('');"></div>
                      <div class="contentBox">
                        <div class="t1">
                          <div class="txt">제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다</div>
                          <img src="/assets/img/main/caseArti2/arrow.svg" alt="화살표" class="icon" />
                        </div>
                        <div class="date">00.00.00</div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </div>

    <div class="inner">
      <div class="pagingWrap">
        <!-- custom_pagin -->
        <ul>
          <li class="paginBtn paginFirst">
              <a href="" aria-label=""></a>
          </li>
          <li class="paginBtn paginPrev"><a href=""></a></li>
          <li>
            <a href="/cases?page_cases=1" class="active">1</a>
          </li>
          <li>
            <a href="/cases?page_cases=2">2</a>
          </li>
          <li>
            <a href="/cases?page_cases=3">3</a>
          </li>
          <li>
            <a href="/cases?page_cases=4">4</a>
          </li>
          <li>
            <a href="/cases?page_cases=5">5</a>
          </li>
          <li class="paginBtn paginNext"><a href=""></a></li>
          <li class="paginBtn paginLast">
              <a href="" aria-label=""></a>
          </li>
        </ul>
        <!-- // custom_pagin -->
      </div>
    </div>
  </article>
</section>
<!-- } 메인 섹션 끝-->


<!-- 전용 스크립트 -->
<script src="/assets/script/cases.js"></script>