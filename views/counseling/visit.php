<!-- 방문상담 섹션 시작 { -->
<section class="sub">
    <div class="consultWrap ani">
        <div class="consultInner">
            <div class="tabMenu">
                <ul>
                    <li class="active">방문상담</li>
                    <li><a href="/counseling/board">게시판 상담</a></li>
                </ul>
            </div>
            <div class="tabCont">
                <div class="contWrap">
                    <div class="contTit">방문상담</div>
                    <div class="cont">
                        <article class="mapArti ani">
                            <div class="inner">
                                <div class="mapViewWrap">
                                    <div class="mapView">
                                        <div class="view active">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.069388732067!2d127.04849959424163!3d37.50628155553203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca411828d46ab%3A0x9934db715e8895a2!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDthYztl6TrnoDroZwgNDI1IDnsuLU!5e0!3m2!1sko!2skr!4v1720093165499!5m2!1sko!2skr" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        </div>
                                        <div id="overlayMap" class="view">

                                        </div>
                                    </div>
                                    <div class="btnWrap">
                                    <button class="btn active">2D로 위치 확인하기</button>
                                    <button class="btn">3D로 위치 확인하기</button>
                                    </div>
                                </div>
                                <div class="mapTxtWrap">
                                    <div class="addBox">
                                    <div class="addTit">법률사무소 영웅 서울본사</div>
                                    <div class="addCon">서울특별시 강남구 테헤란로 425 신일빌딩 9층</div>
                                    <a class="addBtn scroll_move" href="./index#visit">상담 예약하기</a>
                                    </div>
                                    <div class="etcBox">
                                    <ul>
                                        <li>
                                        <div class="etcTit">운영 시간</div>
                                        <div class="etcCon">AM 9:00~PM 18:00</div>
                                        </li>
                                        <li>
                                        <div class="etcTit">연락편</div>
                                        <div class="etcCon">
                                            전화번호: 1666-6087<br />
                                            팩스번호: 02-6915-8057<br />
                                            이메일: lawfirmhero@lawfirm-hero.com
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                        <div class="etcTit">대중교통</div>
                                        <div class="etcCon">
                                            지하철 <br />
                                            <span style="color: #27C867">2호선 / 수인분당선 선릉역</span> 10번 출구 <br /> <br />
                                        <div class="etcCon">
                                            버스<br />
                                            <span style="color: #189DFD">간선</span> 146, 333, 341, 360, 740, 8146, N13, N61<br />
                                            <span style="color: #27C867">직행</span> 1100, 1700, 2000, 2000-1, 7007, 8001, 9303, G3202
                                        </div>
                                        </li>

                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                        
                        <article class="visitArti ani" id="visit">
                            <div class="inner">
                                <div class="rvWrap">
                                    <form action="">
                                        <div class="formInner">
                                            <div class="calWrap">
                                                <div class="tit">
                                                    <img src="/assets/img/main/visitArti/cal_ico.svg" alt="예약 날짜· 시간 선택 아이콘">
                                                    예약 날짜· 시간 선택
                                                </div>
                                                <div class="cal">
                                                    <div id="reservation_date"></div>
                                                    <input type="hidden" name="date" id="reserved_date" /><!--선택한 날짜는 이곳에 입력됩니다. -->
                                                </div>
                                                <div class="btm">
                                                    <div class="dateSelect">
                                                    <span>0000년 00월 00일</span>을 선택하셨습니다.
                                                    </div>
                                                    <div class="dateTimeWrap">
                                                    <input type="hidden" name="time" id="reservationTime" /><!--선택한 시간은 이곳에 입력됩니다. -->
                                                    <span>오전</span>
                                                    <ul class="dateTime">
                                                        <!-- input 에 idsabled 추가하면 회색으로 변합니다-->
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오전 9:00" />
                                                            <div class="item">9:00</div>
                                                        </label>
                                                        </li>
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오전 10:00" />
                                                            <div class="item">10:00</div>
                                                        </label>
                                                        </li>
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오전 11:00" />
                                                            <div class="item">11:00</div>
                                                        </label>
                                                        </li>
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오전 12:00" />
                                                            <div class="item">12:00</div>
                                                        </label>
                                                        </li>
                                                    </ul>
                                                    <span>오후</span>
                                                    <ul class="dateTime">
                                                        <!-- input 에 disabled 추가하면 회색으로 변합니다-->
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오후 1:00" />
                                                            <div class="item">1:00</div>
                                                        </label>
                                                        </li>
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오후 2:00" />
                                                            <div class="item">2:00</div>
                                                        </label>
                                                        </li>
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오후 3:00" />
                                                            <div class="item">3:00</div>
                                                        </label>
                                                        </li>
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오후 4:00" />
                                                            <div class="item">4:00</div>
                                                        </label>
                                                        </li>
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오후 5:00" />
                                                            <div class="item">5:00</div>
                                                        </label>
                                                        </li>
                                                        <li>
                                                        <label>
                                                            <input type="checkbox" value="오후 6:00" />
                                                            <div class="item">6:00</div>
                                                        </label>
                                                        </li>
                                                    </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="applyWrap">
                                                <div class="tit">
                                                    <img src="/assets/img/main/visitArti/apply_ico.svg" alt="상담신청 아이콘" />
                                                    상담신청
                                                </div>
                                                <div class="formWrap">
                                                    <ul class="formList">
                                                    <li>
                                                        <label for="name"><span>[필수]</span> 이름</label>
                                                        <input type="text" id="name" class="ipt" name="name" placeholder="이름을 입력해주세요.">
                                                    </li>
                                                    <li>
                                                        <label for="phone"><span>[필수]</span> 휴대폰 번호</label>
                                                        <input type="tel" id="phone" class="ipt" name="phone" placeholder="휴대폰 번호를 입력해주세요.">
                                                    </li>
                                                    <li>
                                                        <label for="category"><span>[필수]</span> 사건분야</label>
                                                        <select class="ipt" id="category" name="selectCategory">
                                                            <option value="">사건분야를 선택해주세요.</option>
                                                            <option value="이혼">이혼</option>
                                                            <option value="회생">회생</option>
                                                            <option value="형사">형사</option>
                                                            <option value="민사">민사</option>
                                                            <option value="기타">기타</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <label for="content">문의내용</label>
                                                        <textarea class="ipt" id="content" name="content" placeholder="상담 받으실 내용을 입력해주세요."></textarea>
                                                    </li>
                                                    </ul>
                                                    <label class="agreeBox">
                                                    <input type="checkbox" name="agree">
                                                    <div class="txt">개인정보 수집 및 이용에 동의합니다.</div>
                                                    </label>
                                                    <div class="btnWrap">
                                                    <button type="button" class="submitBtn">상담신청완료</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- 방문상담 섹션 끝 } -->

<script>
  const AmbientLight = THREE.AmbientLight;
  const DirectionalLight = THREE.DirectionalLight;
  const Matrix4 = THREE.Matrix4;
  const PerspectiveCamera = THREE.PerspectiveCamera;
  const Scene = THREE.Scene;
  const WebGLRenderer = THREE.WebGLRenderer;

  let map;
  let overlayInitialized = false; // WebGL 오버레이가 이미 초기화되었는지 확인하기 위한 변수

  const mapOptions = {
	tilt: 0,
	heading: 0,
	zoom: 18,
	center: { lat: 37.5062489042304, lng: 127.053383426803 },
	mapId: "a093ce56db218d25",
	// disable interactions due to animation loop and moveCamera
	disableDefaultUI: true,
	gestureHandling: "none",
	keyboardShortcuts: false,
};
  
function initMap() {
	const mapDiv = document.getElementById("overlayMap");
	map = new google.maps.Map(mapDiv, mapOptions);
  overlayInitialized = true;
  // 회사 위치 마커
  const marker = new google.maps.Marker({
      position: { lat: 37.5062489042304, lng: 127.053383426803 }, // 회사 좌표
      map: map,
      title: "법률사무소 영웅",
  });
  // 회사 정보 내용 (HTML 형식으로 작성 가능)
  const companyInfo = `
        <div style="font-size: 14px;">
            <h3 style="font-weight:700">법률사무소 영웅</h3>
            <p>주소: 서울특별시 강남구 테헤란로 425 신일빌딩 9층</p>
            <p>전화: 1666-6087</p>
        </div>
    `;

    // InfoWindow 생성 (마커 클릭 시 열릴 정보 창)
    const infoWindow = new google.maps.InfoWindow({
        content: companyInfo,
    });

    // 마커 클릭 이벤트 리스너
    marker.addListener('click', function () {
        infoWindow.open(map, marker); // 마커 클릭 시 정보 창 열기
    });
}

function initWebglOverlayView(map) {

	let scene, renderer, camera, loader;
	const webglOverlayView = new google.maps.WebGLOverlayView();
  
	webglOverlayView.onAdd = () => {
		// Set up the scene.
		scene = new Scene();
		camera = new PerspectiveCamera();
		const ambientLight = new AmbientLight(0xffffff, 0.75); // Soft white light.
		scene.add(ambientLight);

		const directionalLight = new DirectionalLight(0xffffff, 0.25);
		directionalLight.position.set(0.5, -1, 0.5);
		scene.add(directionalLight);

		// Load the model.
		loader = new THREE.GLTFLoader();
		const source = "https://raw.githubusercontent.com/googlemaps/js-samples/main/assets/pin.gltf";
		loader.load(source, (gltf) => {
			gltf.scene.scale.set(8, 8, 14);
			gltf.scene.rotation.x = Math.PI; // Rotations are in radians.
			scene.add(gltf.scene);
		});
	};
  
	webglOverlayView.onContextRestored = ({ gl }) => {
		// Create the js renderer, using the map's WebGL rendering context.
		renderer = new WebGLRenderer({
			canvas: gl.canvas,
			context: gl,
			...gl.getContextAttributes(),
		});
		renderer.autoClear = false;

		// Wait to move the camera until the 3D model loads.
		loader.manager.onLoad = () => {
			renderer.setAnimationLoop(() => {
				webglOverlayView.requestRedraw();
				const { tilt, heading, zoom } = mapOptions;
				map.moveCamera({ tilt, heading, zoom });

				// Rotate the map 360 degrees.
				if (mapOptions.tilt < 67.5) {
					mapOptions.tilt += 0.5;
				} else if (mapOptions.heading <= 360) {
					mapOptions.heading += 0.2;
					mapOptions.zoom -= 0.0005;
				} else {
					renderer.setAnimationLoop(null);
				}
			});
		};
	};
  
	webglOverlayView.onDraw = ({ gl, transformer }) => {
		const latLngAltitudeLiteral = {
			lat: mapOptions.center.lat,
			lng: mapOptions.center.lng,
			altitude: 100,
		};

		// Update camera matrix to ensure the model is georeferenced correctly on the map.
		const matrix = transformer.fromLatLngAltitude(latLngAltitudeLiteral);
		camera.projectionMatrix = new Matrix4().fromArray(matrix);

		webglOverlayView.requestRedraw();
		renderer.render(scene, camera);
		// Sometimes it is necessary to reset the GL state.
		renderer.resetState();
	};
  
	webglOverlayView.setMap(map);
}
window.initMap = initMap;

$(function(){
  $(".mapArti .btnWrap .btn").click(function () {
		let target = $(this).index();
		$(".mapArti .btnWrap .btn").removeClass('active');
		$(".mapArti .mapView .view").removeClass('active');
		$(".mapArti .btnWrap .btn").eq(target).addClass('active');
		$(".mapArti .mapView .view").eq(target).addClass('active');
		
		if (target == 1) {
			// WebGL 오버레이를 추가할 때 map을 전달
      if (map) {
          initWebglOverlayView(map);
      } else {
          location.reload();
          console.error('none');
      }
		}
	});
})
</script>