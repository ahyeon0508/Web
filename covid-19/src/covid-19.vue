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
                  <b-col cols="12">
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
                    <!-- <b-button type="submit">Search</b-button> -->
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
    
    <b-container>
      <div class="ad">
        <img class="ad-img" alt="사회적 거리 두기 수도권 2.5단계, 비수도권 2단계 유지">
      </div>
    </b-container>

    <b-container>
      <div class="left-main">
          <div class="announce">
            <p><strong>환자 현황</strong>(1.25.00시 기준, '20.1.3. 이후 누계)</p>
            <p>자세히</p>
          </div>

          <div class="today">
            
          </div>

          <div class="total">

          </div>

          <div class="total-chart">

          </div>

          <div class="today-chart">

          </div>

          <div class="card-ad">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template #img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>

              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                  a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
              </b-carousel-slide>
            </b-carousel>


            <p class="mt-4">
              Slide #: {{ slide }}<br>
              Sliding: {{ sliding }}
            </p>
          </div>
      </div>

      <div class="right-main">

      </div>
    </b-container>


    <b-container>
      <div class="footer">

      </div>
    </b-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
a:link,
a:visited,
a:hover {
    color: gray;
    text-decoration: none;
}

button{
    border: 0;
    outline: 0;
}

.header{
  margin: 20px 0 20px 0;
}

.ad-img{
  border: 1px solid gray;
}

</style>