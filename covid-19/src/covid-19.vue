<template>
  <div id="app">
    <b-container class="bv-example-row">
      <div class="header">
          <b-row>
            <b-col>
              <div class="left-header">
                <h4>코로나바이러스감염증-19(COVID-19)</h4>
              </div>
            </b-col>
            <b-col>
              <div class="right-header">
                <b-row>
                  <b-col>
                    <a href="http://www.mohw.go.kr/react/index.jsp">중앙사고수습본부</a>&nbsp;&nbsp;
                    <a href="http://www.kdca.go.kr/index.es?sid=a2">중앙방역대책본부</a>&nbsp;&nbsp;
                    <a href="https://www.facebook.com/koreadca">페</a>&nbsp;&nbsp;
                    <a href="https://www.youtube.com/channel/UCa7-3Zvxg-5Rfxgu3RQY_gw">유</a>&nbsp;&nbsp;
                    <a href="https://post.naver.com/my.nhn?memberNo=20182790">네</a>&nbsp;&nbsp;
                    <a href="https://twitter.com/koreadca">트</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="http://ncov.mohw.go.kr/en/">English</a>&nbsp;&nbsp;
                    <a href="http://ncov.mohw.go.kr/cn/">中文</a>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
      </div>
    </b-container>

    <div class="shortcut-header">
      <b-navbar type="dark" variant="info" id="navbar-header">
        <b-container fluid="xl">
            <b-row>
              <b-col md="auto">
                <b-button id="button-1" variant="info">바로알기</b-button>
                <b-button id="button-2" variant="info">발생동향</b-button>
                <b-button id="button-3" variant="info">뉴스&이슈</b-button>
                <b-button id="button-4" variant="info">홍보자료&FAQ</b-button>
                <b-button id="button-5" variant="info">피해지원정책</b-button>
                <b-button id="button-6" variant="info">공지사항</b-button>
                <b-button id="button-7" variant="info">사회적거리두기</b-button>
                <b-button id="button-8" variant="info">마스크착용</b-button>
              </b-col>
              <b-col col>
                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                      <b-form-input placeholder="검색어를 입력하세요."></b-form-input>
                    </b-nav-form>
                  </b-navbar-nav>
                </b-collapse>
              </b-col>
            </b-row>
            <b-tooltip target="button-1" placement="bottom">
              <a href="http://ncov.mohw.go.kr/baroView.do?brdId=4&brdGubun=41">코로나19란?</a>
            </b-tooltip>
            <b-tooltip target="button-2" placement="bottom">
              <a href="http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=">국내 발생 현황</a>
            </b-tooltip>
            <b-tooltip target="button-3" placement="bottom">
              <a href="http://ncov.mohw.go.kr/tcmBoardList.do?brdId=3&brdGubun=">보도자료</a>
            </b-tooltip>
            <b-tooltip target="button-4" placement="bottom">
              <a href="http://ncov.mohw.go.kr/infoBoardList.do?brdId=3&brdGubun=32">홍보자료</a>
            </b-tooltip>
            <b-tooltip target="button-5" placement="bottom">
              <a href="http://ncov.mohw.go.kr/supportPolicyBoardList.do?brdId=5&brdGubun=51">일반인(대국민)</a>
            </b-tooltip>
            <b-tooltip target="button-6" placement="bottom">
              <a href="http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=21">일반인</a>
            </b-tooltip>
            <b-tooltip target="button-7" placement="bottom">
              <a href="http://ncov.mohw.go.kr/socdisBoardView.do?brdId=6&brdGubun=1">거리 두기 체계 개요</a>
            </b-tooltip>
            <b-tooltip target="button-8" placement="bottom">
              <a href="http://ncov.mohw.go.kr/maskDutyBoardList.do?brdId=7&brdGubun=71">지침, 제도</a>
            </b-tooltip>
        </b-container>
      </b-navbar>
    </div>
  
    <div id="main">
      <b-container>
        <div class="ad">
          <img class="ad-img" src="http://ncov.mohw.go.kr/upload/ncov/mainbanner/20210116115424_pc.png">
        </div>
      </b-container>

      <b-container>
        <b-row>
          <b-col cols="5">
            <div class="left-main">
              <div class="announce">
                <span class="content"><strong>환자 현황</strong></span><span class="content-info">(1.26.00시 기준, '20.1.3. 이후 누계)</span>
                <span class="details">자세히</span>
              </div>

              <div class="today">
                <ul>
                  <b-row>
                    <b-col>
                      <li class="totay-confirmed-person">
                        <strong>일일확진자</strong>
                      </li>
                    </b-col>
                    <b-col>
                      <li class="korea">
                        국내발생 <span class="confirmed-person-num"><strong>338</strong></span>
                      </li>
                    </b-col>
                    <b-col cols="4">
                      <li class="abroad">
                      해외유입 <span class="confirmed-person-num"><strong>16</strong></span>
                      </li>
                    </b-col>
                  </b-row>
                </ul>
              </div>
              
              <div class="total">
                <ul>
                  <b-row>
                    <b-col>
                      <li class="total-confirmed-person">
                        <strong>확진환자</strong><br><br>
                        <span>(누적)75,875</span>
                        <p>전일대비 (+354)</p>
                      </li>
                    </b-col>
                    <b-col>
                      <li class="release">
                        <strong>격리해제</strong><br><br>
                        <span>64,793</span>
                        <p>(+1837)</p>
                      </li>
                    </b-col>
                    <b-col>
                      <li class="cure">
                        <strong>치료 중<br></strong>
                        <span>(격리 중)</span><br>
                        <span>9,711</span>
                        <p>(-1494)</p>
                      </li>
                    </b-col>
                    <b-col cols="2">
                      <li class="dead">
                        <strong>사망</strong><br><br>
                        <span>1,371</span>
                        <p>(+11)</p>                      
                      </li>
                    </b-col>
                  </b-row>
                </ul>
              </div>

              <div class="total-live">
                <b-row>
                  <b-col cols="5">
                    <div class="test">
                      <p class="test-content"><strong>검사현황</strong></p>
                      <p class="total-test">누적검사수<span><strong>5,469,247건</strong></span></p>
                      <p class="total-test">누적검사완료수<span><strong>5,330,820건</strong></span></p>
                      <p class="total-test">누적확진율<span><strong>1.4%</strong></span></p>
                      <p class="total-test-form">(결과양성/총 검사완료수*100%)</p>
                    </div>
                  </b-col>
                  <b-col cols="6">
                    <div class="total-live-info">
                      <b-row>
                        <b-col>
                          <div class="total-chart-ing">
                            <p>검사중</p>
                            <p><strong class="total-chart-num">142,753</strong>명</p>
                            <p class="total-chart-percent">2.6%</p>
                          </div>
                        </b-col>
                        <b-col>
                          <div class="total-chart-plus">
                            <p>결과양성(확진)</p>
                            <p><strong class="total-chart-num">77,395</strong>명</p>
                            <p class="total-chart-percent">1.4%</p>
                          </div>
                        </b-col>
                        <b-col>
                          <div class="total-chart-minus">
                            <p>결과음성</p>
                            <p><strong class="total-chart-num">5,349,116</strong>명</p>
                            <p class="total-chart-percent">96.0%</p>
                          </div>
                        </b-col>
                      </b-row>
                      <canvas id="total-chart" width="220" height="90"></canvas>
                    </div>
                  </b-col>
                </b-row>
              </div>

              <div class="today-live">
                <div class="today-live-info"><strong>일별 확진환자 발생 및 완치 추세</strong></div>
                <canvas id="today-chart" width="400" height="180"></canvas>
              </div>

              <div class="card-ad">
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="7000"
                  controls
                  indicators
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >

                  <b-carousel-slide img-src="http://ncov.mohw.go.kr/upload/ncov/20210122174150.png"></b-carousel-slide>
                  <b-carousel-slide img-src="http://ncov.mohw.go.kr/upload/ncov/20201021193932.png"></b-carousel-slide>
                  <b-carousel-slide img-src="http://ncov.mohw.go.kr/upload/ncov/20201015154559.jpg"></b-carousel-slide>

                </b-carousel>
              </div>
            </div>
          </b-col>

          <b-col cols="7">
            <div class="right-main">
              <b-row>
                <b-col>
                    <b-tabs v-model="tabIndex" align="center">
                      <b-tab title="지역별 거리 두기 단계 01.26.00시 기준" :title-link-class="linkClass(0)"><mapChart></mapChart></b-tab>
                      <b-tab title="시도별 확진환자 현황 01.27.00시 기준" :title-link-class="linkClass(1)">Tab contents 2</b-tab>
                    </b-tabs>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6">
                  <div class="news-issue">
                    <p class="news-issue-info"><strong>뉴스 & 이슈</strong>&nbsp;&nbsp;
                    <a href="http://ncov.mohw.go.kr/tcmBoardList.do?brdId=3&brdGubun=" class="news-issue-more">더보기</a></p>
                  </div>
                </b-col>
                <b-col cols="6">
                  <div class="fact-check">
                    <p class="fact-check-info"><strong>코로나19 팩트체크</strong>&nbsp;&nbsp;
                    <a href="http://ncov.mohw.go.kr/factBoardList.do?brdId=3&brdGubun=33" class="news-issue-more">더보기</a></p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>

        </b-row>
      </b-container>
    </div>
  
    <b-container class="bv-example-row">
      <div class="footer-ad">
        <div class="footer-ad-frame">
          <div class="footer-ad-img-collect">
            <img class="footer-ad-img" src="http://ncov.mohw.go.kr/upload/ncov/20210115160201.jpg">
            <img class="footer-ad-img" src="http://ncov.mohw.go.kr/upload/ncov/20201208154751.jpg">
            <img class="footer-ad-img" src="http://ncov.mohw.go.kr/upload/ncov/20210115160226.jpg">
          </div>
        </div>
      </div>
    </b-container>

    <div class="footer">
      <b-container>
        <a>질병관리청 관련기관 바로가기</a>&nbsp;&nbsp;
        <a>보건환경연구원 바로가기</a>&nbsp;&nbsp;
        <a>관련기관 바로가기</a>
      </b-container>
      <hr>
      <b-container>
        <span><strong>신고상담</strong></span>
        <span>보건소</span>
        <span>질병관리청 콜센터 1339</span>
        <span>지역번호+120</span>
        <span>지역번호+114</span>
      </b-container>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js';
// eslint-disable-next-line no-unused-vars
import {totalData, todayData} from './chart-data.js';
// eslint-disable-next-line no-unused-vars
import mapChart from "../src/components/map-chart";


export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      totalData: totalData,
      todayData: todayData,
      tabIndex: 0
    }
  },
  components:{
    mapChart
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onSlideStart(slide) {
      this.sliding = true
    },
    // eslint-disable-next-line no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false
    },
    // eslint-disable-next-line no-unused-vars
    createTotalChart(chartID, chartData){
      const ctx = document.getElementById(chartID)
      // eslint-disable-next-line no-unused-vars
      const myChart = new Chart(ctx,{
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
    createTodayChart(chartID, chartData){
      const ctx = document.getElementById(chartID)
      // eslint-disable-next-line no-unused-vars
      const myChart = new Chart(ctx,{
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
    linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-info', 'text-light']
        } else {
          return ['bg-light', 'text-info']
        }
      }
  },
  mounted() {
      this.createTodayChart('today-chart', this.todayData);
      this.createTotalChart('total-chart', this.totalData);
  }
}
</script>

<style>
.right-header a{
  text-decoration: none;
}

button{
  border: 0;
  outline: 0;
}

ul li{
  list-style-type: none;
  float: left;
  outline: 1px;
}

.header{
  margin: 20px 0 20px 0;
}

#main{
  background-color:#f8f8f8;
}

/* 메인 광고 */
.ad-img{
  margin: 20px 0 20px 0;
  border: 1px solid lightgrey;
  width: 100%;
  height: 80px;
}

/* left-main */
/* 안내 */
.announce{
  margin-bottom: 5px;
}

.content{
  color: #174069;
}

.content-info{
  font-size: 12px;
}

.details{
  margin-left: 140px;
}

/* 일일 확진자 */
.today{
  height: 55px;
  text-align: center;
}

.totay-confirmed-person{
  background-color: lightgrey;
  width : 150px;
  height: 50px;
  padding-top: 12px;
  margin-left: -40px;
}

.korea, .abroad{
  background-color: #288000;
  width : 155px;
  height: 50px;
  color: white;
  padding-top: 12px;
  margin-left: -40px;
}

.confirmed-person-num{
  color: yellow;
}

/* 누적 확진자 */
.total{
  color: white;
  text-align: center;
  margin-bottom: -10px;
}

.total-confirmed-person{
  background-color: #0099ff;
  width: 155px;
  padding-top: 12px;
  margin-left: -40px;
}

.release{
  background-color: #006699;
  width: 100px;
  padding-top: 12px;
  margin-left: -40px;
}

.cure{
  background-color: #174069;
  width: 120px;
  padding-top: 12px;
  margin-left: -55px;
}

.dead{
  background-color: #808080;
  width: 90px;
  padding-top: 12px;
  margin-left: -50px;
}

/* 검사현황 차트 */
/* 누적검사수 */
.total-live{
  margin-bottom: 10px;
  background-color: white;
  border-top: 5px solid #174069;
  height: 165px;
}

.test{
  font-size: 12px;
  background-color: #eafdff;
  height: 150px;
}

.test-content{
  text-align: center;
  color: #174069;
}

.total-test{
  color: gray;
  margin-bottom: 10px;
}

.total-test span{
  color: #174069;
  float: right;
}

.total-test-form{
  font-size: 10px;
}

.total-live-info p{
  font-size: 10px;
  margin-bottom: -1px;
  text-align: center;
}

.total-chart-num{
  color: #174069;
}

.total-chart-percent{
    color: #174069;
}

.total-chart-ing{
  margin-top: 15px;
}

.total-chart-minus{
  margin-top: 15px;
}

/* 일별 확진환자 발생 및 완치 추세 차트 */
.today-live{
  margin-bottom: 10px;
  background-color: white;
  border-top: 5px solid #174069;
}

.today-live-info{
  background-color: #e6f6ff;
  text-align: center;
  color: #174069;
  padding-bottom: 5px;
}

.card-ad{
  margin-bottom: 10px;
}

/* right main */
/* 지도 */



/* 뉴스 & 이슈 */
.news-issue{
  margin-bottom: 10px;
  background-color: white;
  border-top: 5px solid #174069;
  height: 150px;
}

.news-issue-info{
  text-align: center;
  color:#145663;
  margin-top: 10px;
}

.news-issue-more{
  background-color: #009fd1;
  border-radius: 12px;
  color: white;
  padding: 2px;
}

/* 코로나 19 팩트체크 */
.fact-check{
  margin-bottom: 10px;
  background-color: white;
  border-top: 5px solid #174069;
  height: 150px;
}

.fact-check-info{
  text-align: center;
  color:#585041;
  margin-top: 10px;
}

.fact-check-more{
  background-color: #009fd1;
  border-radius: 12px;
  color: white;
  padding: 2px;
}

/* footer */
.footer-ad{
  width: 100%;
  margin: 30px auto;
}

.footer-ad-frame{
  background-color: lightgrey;
}

.footer-ad-img{
  width: 300px;
  margin: 15px;
}

.footer-ad-img-collect{
  width: 1000px;
  margin: 0 auto;
}

.footer{
  padding: 20px 0 20px 0;
  background-color: #f8f8f8;
}

</style>