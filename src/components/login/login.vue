<template>
  <div id="aa">
    <div style="margin: auto;width: 300px"><span
      style="font-size: 36px;font-weight: bold;color: red;text-align: center">{{message}}</span></div>
    <div id="login">
      <form>
        <table>
          <tr>
            <td style="font-weight: bold">{{json.user}}</td>
            <td><input type="text" v-model="form.username" ref="userAccount" placeholder="请输入用户名"></td>
          </tr>
          <tr>
            <td style="font-weight: bold">{{json.pwd}}</td>
            <td><input type="password" v-model="form.password" ref="password" placeholder="请输入密码"></td>
          </tr>
          <tr>
            <td>
              <el-button type="primary" native-type="submit" @click="login"
              >登录
              </el-button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>

</template>

<script>
  import {login} from '../../api/login/login.js'

  export default {
    name: 'Login',
    data: function () {
      return {
        message: '智慧水务综合平台',
        json: {
          user: '用户名',
          pwd: '密码'
        },
        register: '登录',
        form: {
          username: 'zengbaihua',
          password: '123456',
        },
      }
    },
    methods: {

      login() {
        let param={
          userAccounts:"zengbaihua",
          userPassword:123456
        }

        login(param).then((res)=>{
          let data = res.data.data;
          this.$store.commit('setToken',JSON.stringify(data.token))
          this.menuInfos = data.menus;
        },(res)=>{
        });
      },

      jump() {
        let param = {
          userAccounts: "zengbaihua",
          userPassword: 123456
        }
        let _this = this;
        login(param).then((res)=> {
          this.$notify({title: '成功', message: '登陆成功', type: 'success'});
//          this.$router.push({path: '/screen'})
        }, (res)=> {
          _this.$notify.error({message: "登陆失败", title: '错误'});
        });
      }
    },
    mounted(){

    }

  }
</script>

<style scoped>
  #login {
    position: absolute;
    width: 225px;
    height: 90px;
    float: right;
    right: 50px;
    top: 200px;
    background-color: #8c939d;
  }

  #aa {
    /* 填充屏幕*/
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: sans-serif;
    /*添加背景图片，及其样式*/
    background: url(../../../../gis2d/testapp/src/assets/image/assets/image/timg.jpg);
    background-size: cover;
    background-position: center 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

</style>
