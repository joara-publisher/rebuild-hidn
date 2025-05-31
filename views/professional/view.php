<!--변호사 소개 상세 섹션 시작 { -->
<style>
    .proViewArti .imgBox { background-image: url('/assets/img/sub/proArti/detail_img_0<?php echo $_GET["no"] ?>.jpg'); }
    
    @media (max-width: 576px) {
        .proViewArti .imgBox { height: 111.50vw; background-image: url('/assets/img/sub/proArti/detail_img_0<?php echo $_GET["no"] ?>_m.jpg'); }
    }
</style>
<div class="sub">
    <article class="proViewArti ani">
        <div class="proViewInner">
            <?php 
            if($_GET['no']==1){//김은정
            ?>
                <div class="imgBox">
                    <div class="boxInner">
                        <div class="nameBox">
                            <div class="positionName"><span>대표변호사 </span>박진우</div>
                            <div class="enName">PARK JIN U</div>
                        </div>
                        <div class="bgLogo"></div>
                        <div class="btnWrap">
                            <span>전문가소개 더보기</span>
                            <a class="btnPrev" href="/professional/view?no=3"></a>
                            <a class="btnNext" href="/professional/view?no=2"></a>
                        </div>
                    </div>
                </div>
                <div class="txtBox">
                    <div class="txtInner">
                        <div class="txtTitle">경력</div>
                        <div class="txtCont">
                            <p>現) 법률사무소 영웅 대표변호사</p>
                            <br>
                            <p>前) 법무법인 대륜 수석변호사</p>
                            <p>前) 대법원 국선변호인</p>
                            <p>前) 법무법인 로엘</p>
                            <p>前) 법무법인 명천</p>
                            <p>前) 법무법인 이래</p>
                        </div>
                    </div>
                    <div class="txtInner">
                        <div class="txtTitle">학력</div>
                        <div class="txtCont">
                            <p>연세대학교 법학과 졸업</p>
                            <p>경희대학교 법학전문대학원 졸업</p>
                        </div>
                    </div>
                    <div class="txtInner">
                        <div class="txtTitle">주요 업무사례</div>
                        <div class="txtCont">
                            <p>화성시 법률 자문</p>
                            <p>노원구 법률 자문</p>
                            <p>메르스사태 관련 화성시공무원 공부상비밀누설 사건</p>
                            <p>노승일 전 K스포츠재단 부장 명예훼손 사건</p>
                            <p>한국에너지공단 법률 자문</p>
                            <p>예금보험공사 법률 자문</p>
                            <p>불법촬영물 관련 성폭력범죄의 처벌등에 관한 특례법 위반 사건 승소</p>
                            <p>이혼소송 항소하여 특유재산분할 방어 성공</p>
                            <p>연대 보증인 대상 차용금 청구하는 소송 승소</p>
                            <p>가정폭력 이혼 성립 및 손해배상청구소송 승소</p>
                            <p>상속재산을 피상속인 중 일방이 설정한 소유권에 대해 말소등기 청구 소송</p>
                        </div>
                    </div>
                    <div class="txtInner">
                        <div class="txtTitle">자격/외부활동</div>
                        <div class="txtCont">
                            <p>대한변호사협회 등록 형사전문변호사</p>
                            <p>대한변호사협회 등록 부동산전문변호사</p>
                            <p>더불어민주당 제20대 국회의원선거 선거대책위원회 자문위원</p>
                            <p>방배중학교 학교폭력대책자치위원 및 명예교사 활동</p>
                            <p>서울특별시교육청 제7기 주민참여예산위원 활동</p>
                        </div>
                    </div>
                </div>
            <?php 
            }else if($_GET['no']==2){
            ?>
                <div class="imgBox">
                    <div class="boxInner">
                        <div class="nameBox">
                            <div class="positionName"><span>대표변호사 </span>안형진</div>
                            <div class="enName">AHN HYUNG JIN</div>
                        </div>
                        <div class="bgLogo"></div>
                        <div class="btnWrap">
                            <span>전문가소개 더보기</span>
                            <a class="btnPrev" href="/professional/view?no=1"></a>
                            <a class="btnNext" href="/professional/view?no=3"></a>
                        </div>
                    </div>
                </div>
                <div class="txtBox">
                    <div class="txtInner">
                        <div class="txtTitle">경력</div>
                        <div class="txtCont">
                            <p>現) 법률사무소 영웅 대표변호사</p>
                            <br>
                            <p>前) 감사원 부감사관</p>
                            <p>前) 감사원 특별조사국, 법무담당관실, 감찰담당관실</p>
                        </div>
                    </div>
                    <div class="txtInner">
                        <div class="txtTitle">학력</div>
                        <div class="txtCont">
                            <p>연세대학교 법학과 졸업</p>
                            <p>성균관대학교 법학전문대학원 졸업</p>
                        </div>
                    </div>
                    <div class="txtInner">
                        <div class="txtTitle">주요 업무사례</div>
                        <div class="txtCont">
                            <p>공직자 수뢰 사건 조사 등</p>
                            <p>고위공직자 청탁금지법 위반 사건 조사 등</p>
                            <p>감사원 내부감찰(특별감찰팀)</p>
                            <p>공무원 징계사건 행정소송, 행정심판 수행 등</p>
                            <p>청탁금지법 및 이해충돌방지법 관련 자문</p>
                            <p>감사 관계법령 정비</p>
                        </div>
                    </div>
                </div>
            <?php 
            }else if($_GET['no']==3){
            ?>
                <div class="imgBox">
                    <div class="boxInner">
                        <div class="nameBox">
                            <div class="positionName"><span>변호사 </span>정익선</div>
                            <div class="enName">JUNG IK SEON</div>
                        </div>
                        <div class="bgLogo"></div>
                        <div class="btnWrap">
                            <span>전문가소개 더보기</span>
                            <a class="btnPrev" href="/professional/view?no=2"></a>
                            <a class="btnNext" href="/professional/view?no=1"></a>
                        </div>
                    </div>
                </div>
                <div class="txtBox">
                    <div class="txtInner">
                        <div class="txtTitle">경력</div>
                        <div class="txtCont">
                            <p>現) 법률사무소 영웅 변호사</p>
                            <br>
                            <p>前) 법무법인 청 변호사</p>
                            <p>前) 서울동부지방법원 실무수습</p>
                            <p>前) 경찰대학 실무수습</p>
                        </div>
                    </div>
                    <div class="txtInner">
                        <div class="txtTitle">학력</div>
                        <div class="txtCont">
                            <p>동국대학교 경찰행정학과 수석졸업</p>
                            <p>충남대학교 법학전문대학원 졸업</p>
                        </div>
                    </div>
                    <div class="txtInner">
                        <div class="txtTitle">주요 업무사례</div>
                        <div class="txtCont">
                            <p>자본시장과 금융투자업에 관한 법률, 특정금융거래정보의 보고<br /> 및 이용 등에 관한 법률 등 경제ㆍ금융사건</p>
                            <p>가상화폐 재정거래 사건 무죄</p>
                            <p>투자 사기 고소사건 송치</p>
                            <p>보험금청구소송</p>
                        </div>
                    </div>
                    <div class="txtInner">
                        <div class="txtTitle">자격/외부활동</div>
                        <div class="txtCont">
                            <p>대한변호사협회 등록 형사전문변호사</p>
                            <p>서울방이초등학교, 성덕고등학교 명예교사 활동</p>
                        </div>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>

    </article>
</div>
<!--변호사 소개 상세 섹션 끝 } -->