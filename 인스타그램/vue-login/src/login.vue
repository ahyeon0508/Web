<template>
<div class="container">
  <div class="login-img">
    <img src="../../img/instagram-img.jpg" class="instagram-img">
  </div>
  <div class="login-form">
    <form v-on:submit.prevent="submitForm">
      <md-card>
        <md-card-header>
          <div class="logo"><img src="../../img/logo.png" class="logo-img"></div>
        </md-card-header>
        
        <md-card-content>
          <md-field>
            <label for="username">전화번호, 사용자 이름 또는 이메일 </label>
            <md-input v-model="username" ></md-input>
          </md-field>
          <md-field>
            <label for="password">비밀번호 </label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
          <md-card-actions class="btn-action">
            <md-button class="md-raised md-primary login-btn" type="submit">로그인</md-button>
          </md-card-actions>
          <div class="dif-login">
            <p class="line">또는</p>
            <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522oa4zi81nibfov1oqywfp13cnpz7yofskdn4sd62v73joga3a8ws%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dko_KR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd93955ee-65c4-44bf-9b70-0bee954704eb%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522oa4zi81nibfov1oqywfp13cnpz7yofskdn4sd62v73joga3a8ws%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0">
                <p class="facebook"><strong>Facebook으로 로그인</strong></p>
            </a>
            <a href="https://www.instagram.com/accounts/password/reset/">
                <p class="pw">비밀번호를 잊으셨나요?</p>
            </a>
          </div>
        </md-card-content>


      </md-card>
    </form>
  </div>
  <div class="footer">
    <div class="info">
        <div class="info-top">
            <span>소개 &nbsp;&nbsp;</span><span>블로그 &nbsp;&nbsp;</span><span>채용 정보 &nbsp;&nbsp;</span><span>도움말 &nbsp;&nbsp;</span>
            <span>API &nbsp;&nbsp;</span><span>개인정보처리방침 &nbsp;&nbsp;</span><span>약관 &nbsp;&nbsp;</span><span>인기계정 &nbsp;&nbsp;</span>
            <span>해시태그 &nbsp;&nbsp;</span><span>위치 &nbsp;&nbsp;</span><span>약관 &nbsp;&nbsp;</span><br>
        </div>
        <div class="info-bottom">
            <span>뷰티 &nbsp;&nbsp;</span><span>댄스 및 공연 &nbsp;&nbsp;</span><span>피트니스 &nbsp;&nbsp;</span><span>식음료 &nbsp;&nbsp;</span>
            <span>집 및 정원 &nbsp;&nbsp;</span><span>음악 &nbsp;&nbsp;</span><span>시각 예술 &nbsp;&nbsp;</span>
        </div>
    </div>
    <div class="setting">
        <select>
            <option>Afrikaans</option>
            <option>English</option>
            <option selected>한국어</option>
        </select>
        <span>
            &nbsp;&nbsp;&nbsp;&nbsp;© 2021 ahyeon
        </span>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data: function(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    submitForm: function(){
      console.log(this.username, this.password)      
    }
  }
}
</script>

<style>
  .container{
    margin: 120px auto 0 auto;
    display: grid;
    grid-template-columns: 300px 350px;
    column-gap: 2em;
    justify-content: center;
  }

  .btn-action{
    margin: -5px 0 10px 0;
  }

  .instagram-img{
    width: 300px;
  }

  .login-btn{
    width: 100%;
  }

  .line{
    width: 100%;
    margin: 0 0 20px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    color: gray;
}

.line:after{
    display: inline-block;
    margin: 0 0 3px 20px;
    height: 1px;
    content: " ";
    text-shadow: none;
    background-color: #999999;
    width: 38%;
}

.line:before{
    display: inline-block;
    margin: 0 20px 3px 0;
    height: 1px;
    content: " ";
    text-shadow: none;
    background-color: #999999;
    width: 38%;
}

.dif-login{
  text-align: center;
}

.dif-login a{
    color: #385185;
}

.pw{
    font-size: 11px;
}

.footer{
    display: grid;
    grid-column: 1;
    font-size: 10px;
    margin-top: 80px;
    text-align: center;
}
</style>