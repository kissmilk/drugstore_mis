<template>
  <div class="main">
    <sign-header></sign-header>
    <div role="main" style="margin-top: 25px;">
      <div id="js-pjax-container">
        <div id="register" class="auth-form px-3">
          <form accept-charset="UTF-8" action="" method="post">
            <div class="auth-form-body mt-3">
              <label for="login_field">Username</label>
              <div class="glyph">
                <i class="glyphicon glyphicon-user opt_search "></i>
                <input id="login_field" type="text" name="login" class="form-control input-block" tabindex="1">
              </div>
              <label for="password">Password</label>
              <div class="glyph">
                <i class="glyphicon glyphicon-lock opt_search "></i>
                <input id="password" type="password" name="password" class="form-control input-block" tabindex="2">
              </div>
              <label for="confirmPassword">Confirm Password</label>
              <div class="glyph">
                <i class="glyphicon glyphicon-lock opt_search "></i>
                <input id="confirmPassword" type="password" name="password" class="form-control input-block" tabindex="3">
              </div>
              <label for="authCode">Auth Code</label>
              <div class="glyph">
                <i class="glyphicon glyphicon-transfer opt_search "></i>
                <input id="authCode" type="password" name="password" class="form-control input-block" tabindex="4">
              </div>
              <input type="submit" name="commit" class="btn btn-primary btn-block" tabindex="5" value="Register">
              <input type="submit" name="commit" class="btn btn-success btn-block" tabindex="6" value="Return to the login">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import signHeader from '../components/signHeader'
  export default {
    components: { signHeader }
  }
</script>

<style scoped>
  .auth-form {
    width: 340px;
    margin: 0 auto;
  }
  .auth-form-body {
    border-top: 1px solid #d8dee2;
    border-radius: 5px;
  }
  .auth-form-body {
    padding: 20px;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #d8dee2;
    border-top: 0;
    border-radius: 5px;
    opacity: 1;
  }
  .auth-form label {
    display: block;
    margin-bottom: 7px;
  }
  .auth-form-body .input-block {
    margin-top: 5px;
    margin-bottom: 15px;
    padding-left: 35px;
  }
  .auth-form .btn {
    margin-top: 20px;
  }
  .glyph {
    position: relative;
  }
  .opt_search {
    width: 30px;
    height: 30px;
    display: inline-block;
    position: absolute;
    top: 10px;
    margin-left: 5px;
    text-align: center;
  }
</style>