<template>
  <div>
    <header class="header">
      <el-menu
        :default-active="$route.path"
        class="menu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        :router="true"
        active-text-color="#ffd04b">
        <el-menu-item index="/">home</el-menu-item>
        <el-menu-item index="/about">about</el-menu-item>
        <el-menu-item index="/user">用户</el-menu-item>
        <el-menu-item index="/chat">聊天</el-menu-item>
      </el-menu>
      <div class="userinfo">
        <a href="javascript:;" @click="login(1)" v-if="!$root.userInfo.id">登录</a>
        <a href="javascript:;" @click="login(0)" v-if="!$root.userInfo.id">注册</a>
        <span v-if="$root.userInfo.id">{{$root.userInfo.username}}</span>
        <a href="javascript:;" @click="logout" v-if="$root.userInfo.id">退出</a>
      </div>
    </header>
    <router-view></router-view>
    <el-dialog
      :title="dialogData.title"
      :visible.sync="dialogData.show"
      width="30%">
      <el-form ref="form" :model="dialogData.data" :rules="rules" class="dialog" label-width="100px">
        <el-form-item label="名字" v-if="!dialogData.type">
          <el-input v-model="dialogData.data.name" placeholder='名字'></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="dialogData.data.username" placeholder='用户名'></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="dialogData.data.password" type="password" placeholder='密码'></el-input>
        </el-form-item>
        <!--<el-form-item label="密码验证" v-if="!dialogData.type" prop="passwordCheck">-->
        <!--<el-input v-model="dialogData.data.passwordCheck" type="password" placeholder='密码验证'></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="头像" v-if="!dialogData.type">
          <el-upload
            class="avatar-uploader"
            action="/api/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="dialogData.data.avatar" :src="'/api/public/uploads/'+dialogData.data.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="性别" v-if="!dialogData.type">
          <el-radio-group v-model="dialogData.data.sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogData.show = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ajax from '@/service/ajax.js'

    interface DialogData {
        show: boolean,
        title: string,
        type: number, // 1登录， 0注册
        data?: any,
    }

    interface ResData {
        code: number,
        message: string
        data?: any,
    }

    // @ts-ignore
    import VueSocketIO from 'vue-socket.io'

    @Component
    export default class Home extends Vue {
        private activeIndex: string = '';
        private dialogData: DialogData = {
            show: false,
            title: '',
            type: 0,
            data: {}
        };
        private rules: object = {
            username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
            password: [{required: true, message: '请输入密码', trigger: 'blur'}],
            passwordCheck: [
                {required: true, message: '请输入密码', trigger: 'blur'},
                {
                    validator: (rule: any, value: string, callback: any) => {
                        const passwordText: string = 'password';
                        const that: any = this;
                        if (value === '') {
                            callback(new Error('请再次输入密码'));
                        } else if (value !== this.dialogData.data[passwordText]) {
                            console.log(this.dialogData)
                            callback(new Error('两次输入密码不一致!'));
                        } else {
                            callback();
                        }
                    }, trigger: 'blur'
                }
            ],
        };
        private userInfo: object = {};

        private mounted() {
            this.getUserinfo()
        }

        // 上传
        private handleAvatarSuccess(res: any, file: any) {
            const that: any = this;
            if (res.code === 200) {
                that.dialogData.data.avatar = res.data;
            }
        }

        private beforeAvatarUpload(file: any) {
            const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
            const isLt2M = file.size / 1024 / 1024 < 2;
            const that: any = this;
            if (!isJPG) {
                that.$message.error('上传头像图片只能是 JPG或PNG 格式!');
            }
            if (!isLt2M) {
                that.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }

        private login(type: number, p: (res: ResData) => any) {
            this.dialogData = {
                show: true,
                title: type ? '登录' : '注册',
                type,
                data: {
                    username: 'admin',
                    password: 'admin'
                }
            }
        }

        private getUserinfo() {
            const that: any = this;
            ajax.getUserInfo((res: ResData) => {
                if (res.code === 200) {
                    that.$root.userInfo = res.data;
                    // that.socketInit(res)
                }
            })
        }

        private socketInit(res: ResData) {
            console.log(res)
            Vue.use(new VueSocketIO({
                debug: true,
                connection: `http://localhost:7001/chat?userId=${res.data.username}`,
                // vuex: {
                //     store,
                //     actionPrefix: "SOCKET_",
                //     mutationPrefix: "SOCKET_"
                // }
            }));
            // setTimeout(() => {
            //     const sockets: any = (this as any).sockets;
            //     console.log(sockets)
            //     if (sockets) {
            //         sockets.subscribe('connect', (data: any) => {
            //             console.log('后台重连成功');
            //         });
            //         sockets.subscribe('onMessage', (data: any) => {
            //             data.isMy = false;
            //             this.$store.commit('SOCKET_sendChat', data);
            //         });
            //     } else {
            //         this.socketInit(res)
            //     }
            // }, 500)


        }

        private submit() {
            (this.$refs.form as any).validate((valid: boolean) => {
                if (valid) {
                    if (this.dialogData.type === 1) {
                        ajax.login(this.dialogData.data, (res: ResData) => {
                            const that: any = this;
                            if (res.code === 200) {
                                this.dialogData.show = false;
                            }
                            that.$message(res.message);
                        })
                    } else {
                        ajax.editUser(this.dialogData.data, (res: ResData) => {
                            const that: any = this;
                            if (res.code === 200) {
                                this.dialogData.show = false;
                                that.$message(res.message);
                            } else {
                                that.$message.error(res.message)
                            }

                        })
                    }

                } else {
                    return false;
                }
            });
        }

        private logout() {
            ajax.logout()
        }
    }
</script>
<style scoped lang=scss>
  .header {
    display: flex;
    align-items: center;
    background-color: #545c64;
    height: 60px;
    color: #fff;
    justify-content: space-between;
    .menu {
      margin-left: 50px;
    }
    .userinfo {
      margin-right: 50px;
      display: flex;
      a {
        color: #fff;
        text-decoration: none;
        margin: 0 10px;
      }
    }
  }
</style>
