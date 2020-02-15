<template>
  <div class="user">
    <div style="margin-bottom: 30px;">
      <el-button type="primary" @click="editUser()">新增用户</el-button>
      <el-button type="danger" @click="deleteUsers()">批量删除用户</el-button>
    </div>
    <el-table
      :data="userList"
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="200">
      </el-table-column>
      <el-table-column
        label="性别"
        width="100" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.sex==1?'男':scope.row.sex==2?'女':''}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="头像"
        align="center"
        width="300">
        <template slot-scope="scope">
          <img class="table-avatar" v-if="scope.row.avatar" :src="'/api/public/uploads/'+scope.row.avatar" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="file"
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editUser(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="deleteUser(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="dialogData.title"
      :visible.sync="dialogData.show"
      width="30%">
      <el-form ref="form" :model="dialogData.data" class="dialog" label-width="100px">
        <el-form-item label="名字">
          <el-input v-model="dialogData.data.name"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="dialogData.data.username"></el-input>
        </el-form-item>
        <!--<el-form-item label="密码">-->
        <!--<el-input v-model="dialogData.data.password"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="头像">
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
        <el-form-item label="性别">
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
    import tool from '@/util/tool.js'

    interface ResData {
        code: number,
        message: string
        data?: any,
    }

    interface DialogData {
        show: boolean,
        title: string
        data?: object,
    }
    @Component
    export default class User extends Vue {
        private userList: object = [];
        private dialogData: DialogData = {
            show: false,
            title: '新增',
            data: {}
        };
        private multipleSelection: any = [];

        // 挂载
        private mounted() {
            this.getUserList()
        }

        // 获取用户列表
        private getUserList() {
            ajax.getUserList((res: ResData) => {
                if (res.code === 200) {
                    this.userList = res.data;
                }
            })
        }

        // 编辑框
        private editUser(item: DialogData) {
            this.dialogData = {
                show: true,
                title: item ? '编辑' : '新增',
                data: Object.assign({}, item) || {}
            }
        }

        // 提交
        private async submit() {
            const config: any = Object.assign({}, this.dialogData.data);
            ajax.editUser(config, (res: ResData) => {
                const that: any = this;
                if (res.code === 200) {
                    this.dialogData.show = false;
                    that.$message(res.message);
                    this.getUserList();
                } else {
                    that.$message.error(res.message)
                }
            })
        }

        // 删除
        private deleteUser(id: number) {
            ajax.deleteUser({id}, (res: ResData) => {
                if (res.code === 200) {
                    this.getUserList();
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

        private handleSelectionChange(val: any) {
            this.multipleSelection = val;
        }

        // 批量删除
        private deleteUsers() {
            (this as any).$confirm('此操作将永久删除用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const id: string = this.multipleSelection.map((o: any) => o.id).join(',')
                ajax.deleteUser({id}, (res: ResData) => {
                    if (res.code === 200) {
                        this.getUserList();
                    }
                })
            });
        }
    }
</script>

<style scoped lang="scss">
  .user {
    width: 1280px;
    margin: 30px auto;
    .dialog {
      text-align: left;
    }
    .table-avatar {
      width: 80px;
      height: 80px;
    }

  }
</style>
<style lang=scss>
  .avatar-uploader {
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409EFF;
      }
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
</style>
