<template>
  <section id="wrapper">
    <div
      class="login-register"
      :style="`background-image:url(${baseUrl}images/background/login-register.jpg);`"
    >
      <div class="login-box card">
        <div class="card-body">
          <div
            class="form-horizontal form-material"
            id="loginform"
          >
            <h3 class="box-title m-b-20">Login</h3>
            <div :class="'form-group ' + ((errors.first('email')) ? 'error' : '')">
              <div class="col-xs-12">
                <input
                  name="email"
                  v-validate="'required|email'"
                  v-model="email"
                  class="form-control"
                  type="text"
                  placeholder="E-mail"
                >
                <div
                  v-if="errors.first('email')"
                  class="help-block"
                >
                  <ul role="alert">
                    <li class="teste">{{ errors.first('email') }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import resources from "./resources";
export default {
  name: "Login",
  mixins: [resources]
};
</script>
