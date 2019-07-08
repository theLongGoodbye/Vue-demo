<template>
  <main class="login">
    <h1>Please login to continue</h1>
    <SmartForm class="form" :title="title" :operation="operation" :valid="valid">
      <template>
        <FormInput name="username" v-model="username" placeholder="Username" />
        <FormInput name="password" type="password" v-model="password" placeholder="Password" />
        <template v-if="mode ==='signup'">
          <FormInput
            name="verify-password"
            type="password"
            v-model="password2"
            placeholder="Retype Password"
            :invalid="retypePasswordError"
          />
          <FormInput name="email" type="email" v-model="email" placeholder="Email" />
        </template>
        <template slot="actions">
          <template v-if="mode ==='login'">
            <button type="button" class="secondary" @click="mode ='signup'">Sign up</button>
            <button type="submit" :disabled="!valid" @click.native="login">Login</button>
          </template>
          <template v-else-if="mode ==='signup'">
            <button type="button" class="secondary" @click="mode ='login'">Back to login</button>
            <button type="submit" :disabled="!valid" @click.native="signup">Create account</button>
          </template>
        </template>
      </template>
    </SmartForm>
  </main>
</template>
 </SmartForm>
    <form>
      <FormInput
        @input="val => username = val"
        name="username"
        v-model="username"
        placeholder="Username"
      />
    </form>
  </main>
</template> 
<script>
import db from "../database";
const log = console.log.bind(console);
export default {
  data() {
    return {
      mode: "login",
      username: "",
      password: "",
      password2: "",
      email: ""
    };
  },
  computed: {
    title() {
      const modeObj = {
        login: "Login",
        signup: "Create a new account"
      };
      // console.log('this', modeObj.this.mode)
      return modeObj[this.mode];
    },
    retypePasswordError() {
      return this.password2 && this.password !== this.password2;
    },
    signupValid() {
      return this.password2 && this.email && !this.retypePasswordError;
    },
    valid() {
      return (
        this.username &&
        this.password &&
        (this.mode !== "signup" || this.signupValid)
      );
    }
  },
  methods: {
    async operation() {
      await this[this.mode]();
    },
    async login() {
      const users = db.local.get("users");
      if (!users) {
        alert("请先注册！");
        return;
      }
      if (
        users.some(
          item =>
            item.username === this.username && item.password === this.password
        )
      ) {
        // 跳转到登录后的页面
        this.$state.username = this.username;
        log("this.$route.params.wantedRoute", this.$route.params.wantedRoute);
        this.$router.replace(
          this.$route.params.wantedRoute || { name: "home" }
        );
      } else {
        alert("账号密码不正确！");
      }
    },
    async signup() {
      const users = db.local.get("users") || [];
      const value = {
        username: this.username,
        password: this.password,
        email: this.email
      };
      // 更新注册用户数组
      users.push(value);
      db.local.set("users", users);
      this.mode = "login";
    }
  }
};
</script>


<style lang="stylus" scoped>.form {
  .content {
    max-width: 400px;
  }
}
