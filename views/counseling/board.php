<!-- 게시판상담 섹션 시작 { -->
<div class="sub">
    <article class="counsellingArti ani">
        <div class="inner">
            <div class="tabMenu">
                <ul>
                    <li><a href="/counseling/visit">방문상담</a></li>
                    <li class="active">게시판 상담</li>
                </ul>
            </div>
            <div class="tabCont">
                <div class="contWrap">
                <div class="contTit">게시판 상담</div>
                <div class="contSubTit">당신의 모든 궁금증, 영웅에게 직접 물어보세요. </div>
                <div class="cont">
                    <div class="searchBox">
                        <form action="/counseling/search">
                            <input type="text" name="search" placeholder="검색해보세요" value="">
                            <button class="deleteBtn"></button>
                            <button class="searchBtn"></button>
                        </form>
                    </div>
                    <div class="btnWrap">
                        <a class="goToCounselling" href="/counseling/write">게시판 상담 신청하기</a>
                    </div>
                    <div class="tableWrap pcTable">
                        <table style="table-layout: fixed">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                    <th>상담여부</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick="location.href=''">
                                    <td>0000</td>
                                    <td>제목제목제목제목제목제목제목제목제목</td>
                                    <td>김○○</td>
                                    <td>00.00.00</td>
                                    <td>
                                        <div class="status complete">접수완료</div>
                                        <!-- <div class="status not_complete">상담신청</div> -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tableWrap moTable">
                        <table style="table-layout: fixed">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                    <th>상담여부</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick="location.href='/consult/check/<?=$b['no']?>'">
                                    <td>0000</td>
                                    <td>제목제목제목제목제목제목제목제목제목</td>
                                    <td>김○○</td>
                                    <td>00.00.00</td>
                                    <td>
                                        <div class="status complete">접수완료</div>
                                        <!-- <div class="status not_complete">상담신청</div> -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="pagin">
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
                    </div>
                    <button class="moreBtn">더보기</button>
                </div>
                </div>
            </div>
        </div>
    </article>
</div>
<!-- 게시판상담 섹션 끝 } -->

<!-- 전용 스크립트 -->
<script src="/assets/script/counselling.js"></script>
