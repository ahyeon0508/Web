<template>
    <div class="map-chart">
        <b-row>
            <b-col cols="7">
                <div class="map-frame">
                    <p>시도를 클릭하시면 상세 현황을 확인할 수 있습니다.</p>
                    <p>지역 내 상세단계 있음</p>
                    <button><span class="name">서울</span><span class="num">2.5</span></button>
                    <img class="map" src="@/assets/southKoreaHigh.svg">
                </div>
            </b-col>
            <b-col cols="5">
                <b-row>
                    <div class="map-info">
                        <div class="stage-info">
                            <br>
                            <h4>전국</h4>
                            <b-row>
                                <div class="circle-4"></div>
                                <h5>2.5단계</h5>
                            </b-row>
                            <p>- 수도권 3개 (서울,인천,경기)</p>
                            <b-row>
                                <div class="circle-3"></div>
                                <h5>2단계</h5>
                            </b-row>
                            <p class="region-num">- 충청권 4개 (세종,대전,충북,충남)</p>
                            <p class="region-num">- 호남권 3개 (광주,전북,전남)</p>
                            <p class="region-num">- 경북권 2개 (대구,경북)</p>
                            <p class="region-num">- 경남권 3개 (부산,울산,경남)</p>
                            <p class="region-num">- 강원 1개 (강원)</p>
                            <p class="region-num">- 제주 4개 (1주)</p>
                        </div>
                    </div>
                </b-row>
                <b-row>
                    <div class="etc-info">
                        코로나19백신치료제 정보를 한눈에
                    </div>
                    <div class="etc-info">
                        코로나19 국민제안
                    </div>
                    <div class="etc-info">
                        지자체용 대응지침
                    </div>
                    <div class="etc-info">
                        선별진료소국민안심병원<br>
                        호흡기전담클리닉 찾기
                    </div>
                    <div class="etc-info">
                        대상별 피해지원 정책
                    </div>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>


<script>
export default {
   data(){
       return {
        //    title : "HOME-VUE"
       }
   }
}
</script>

<style>
button{
    background-color: white;
}

.map-chart{
    margin-bottom: 10px;
    background-color: white;
    border-top: 5px solid #174069;
}

.map{
    margin: 0 0 20px 5px;
}

.map-frame p{
    font-size: 10px;
    margin: 5px 0 0px 15px;
}

.map-info{
    border-left: 1px solid lightgray;
}

.stage-info{
    margin-left: 15px;
}

.region-num{
    margin-bottom: 3px;
}

.etc-info{
    margin-bottom: 1px;
    width: 265px;
    padding: 10px 0 10px 0;
}

.etc-info:nth-child(1){
    background-color: navy;
    color:white;
}

.etc-info:nth-child(2){
    background-color: green;
    color:white;
}

.etc-info:nth-child(3){
    background-color: rgb(54, 117, 126);
    color:white;
}

.etc-info:nth-child(4){
    background-color: rgb(53, 53, 148);
    color:white;
}

.etc-info:nth-child(5){
    background-color: lightskyblue;
    color:white;
}

.circle-4{
    width: 15px;
    height: 15px;
    background-color: rgb(251, 112, 0);
    border-radius: 50px;
    margin: 5px 5px 0 15px;
}

.circle-3{
    width: 15px;
    height: 15px;
    background-color: rgb(255, 185, 17);
    border-radius: 50px;
    margin: 5px 5px 0 15px;
}

</style>