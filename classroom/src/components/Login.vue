<template>
  <div class="login">
    <div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        size="small"
        label-width="66px"
        label-position="left"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="格言" prop="motto">
          <el-input v-model="ruleForm.motto"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login(ruleForm)">登录</el-button>
          <el-button type="primary" @click="signup(ruleForm)">注册</el-button>
          <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
import db from "../utils/database";
const log = console.log.bind(console);
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
        motto: ""
      },
      rules: {
        name: [{ required: true, message: "同学你叫啥？", trigger: "blur" }],
        password: [{ required: true, message: "密码来一发", trigger: "blur" }]
      },
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
    // 注册
    signup(formName) {
      const users = db.local.get("users") || [];
      const value = {
        username: formName.username,
        password: formName.password,
        motto: formName.motto
      };
      // 更新注册用户数组
      users.push(value);
      db.local.set("users", users);
      alert("注册成功，欢迎加入");
      // this.mode = "login";
    },

    // 登录
    async login(formName) {
      const users = db.local.get("users");
      if (!users) {
        alert("请先注册！");
        return;
      }
      if (
        users.some(
          item =>
            item.username === formName.name &&
            item.password === formName.password
        )
      ) {
        // 跳转到登录后的页面
        // this.$state.username = this.username;
        // log("this.$route.params.wantedRoute", this.$route.params.wantedRoute);
        this.$state.username = formName.name;
        console.log("username", this.$state);
        this.$router.replace(
          this.$route.params.wantedRoute || { name: "contentTable" }
        );
      } else {
        alert("账号密码不正确！");
      }
    }

    // async operation() {
    //     await this[this.mode]();
    // },
  }
};
</script>


<style lang="scss" scoped>
.login {
  width: 805px;
  padding: 0;
  margin: 100px auto;
  /*display: flex;*/
  /*justify-content: center;*/
  .el-input {
    width: 280px;
  }
}
</style>
