<template>
  <div class="login">
    <div style="text-align: center;margin-bottom: 30px;">
      <el-radio-group v-model="dialogData.type">
        <el-radio-button :label="1">登录</el-radio-button>
        <el-radio-button :label="0">注册</el-radio-button>
      </el-radio-group>
    </div>
    <el-form ref="form" :model="dialogData.data" :rules="rules" class="login-form" label-width="100px">
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
      <el-form-item label="年龄" v-if="!dialogData.type">
        <el-input v-model.number="dialogData.data.age" placeholder='年龄'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">{{dialogData.type?'登录':'注册'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
    import JSEncrypt from 'jsencrypt';
    import {Component, Vue} from 'vue-property-decorator';
    import ajax from '@/service/ajax.js'
    import tool from '@/util/tool.js'

    interface ResData {
        code: number,
        message: string
        data?: any,
    }

    interface DialogData {
        show: boolean,
        title: string,
        type: number, // 1登录， 0注册
        data?: any,
    }

    @Component
    export default class User extends Vue {
        private userList: object = [];
        private dialogData: DialogData = {
            show: false,
            title: '新增',
            type: 1,
            data: {
                username: 'admin',
                password: 'admin'
            }
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

        // 提交
        private submit() {
            (this.$refs.form as any).validate(async (valid: boolean) => {
                if (valid) {
                    const config = Object.assign({}, this.dialogData.data);
                    config.password = await tool.JSEncrypt(this.dialogData.data.password);
                    if (this.dialogData.type === 1) {
                        ajax.login(config, (res: ResData) => {
                            const that: any = this;
                            if (res.code === 200) {
                                this.dialogData.show = false;
                            }
                            that.$message(res.message);
                        })
                    } else {
                        ajax.register(config, (res: ResData) => {
                            const that: any = this;
                            if (res.code === 200) {
                                this.dialogData.show = false;
                                that.$message(res.message);
                            } else {
                                that.$message.error(res.message)
                            }

                        })
                    }
                    // this.getPublicKey();
                } else {
                    return false;
                }
            });
        }

        // getPublicKey
        private async getPublicKey() {
            ajax.getPublicKey((resKey: ResData) => {
                if (resKey.code === 200) {
                    const encrypt = new JSEncrypt();
                    encrypt.setPublicKey(resKey.data);
                    const config = Object.assign({}, this.dialogData.data);
                    config.password = encrypt.encrypt(this.dialogData.data.password);

                }
            })
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
    }
</script>

<style scoped lang="scss">
  .login {
    width: 600px;
    margin: 50px auto;
    border: 1px solid #999;
    padding: 30px;
  }
</style>
<style lang=scss>
</style>
