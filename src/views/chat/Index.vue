<template>
  <div class="chat">
    <div class="chat-left">
      <p v-for="(item,i) in userList" :key="i" v-if="item.id!==$root.userInfo.id"
         :class="chatInfo.username==item.username?'active':''">
        <el-button :type="chatInfo.toUser===item.username ? 'primary' : 'text'" @click="selectChatTo(item.username)">
          {{item.username}}
        </el-button>
      </p>
    </div>
    <div class="chat-right">
      <div class="msg-list">
        <div class="msg-item" v-for="(item,i) in chatRoom[chatInfo.toUser]" :key="i" :class="item.isMy?'right':'left'">
          <span class="iconfont icon-boy msg-avatar"></span>
          <span class="msg-content">{{item.message}}</span>
        </div>
      </div>
      <div class="msg-input">
        <el-input type="textarea" :rows="3" v-model='msgInput'></el-input>
        <el-button type="primary" @click="subMsg" :disabled="!chatInfo.toUser||!msgInput">发送</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ajax from '@/service/ajax.js'

    interface ResData {
        code: number,
        message: string
        data?: any,
    }

    @Component
    export default class Chat extends Vue {
        // constructor() {
        //     super();
        //     this.socketInit();
        // }

        private msgInput: string = '';
        private userList: object = [];
        private chatInfo: any = {};
        private chatRoom: any = {
            root: [],
            admin: [],
            test: [],
        };

        private mounted() {
            this.getUserList();
            setTimeout(() => {
                this.socketInit();
            }, 1000)
        }

        private socketInit() {
            const sockets: any = (this as any).sockets;
            sockets.subscribe('connect', (data: any) => {
                console.log('后台重连成功');
            });
            sockets.subscribe('onMessage', (data: any) => {
                data.isMy = false;
                // this.$store.commit('SOCKET_sendChat', data);
                this.chatRoom[this.chatInfo.toUser].push(data)
            });
        }

        private subMsg() {
            const msgCon: object = {
                toUser: this.chatInfo.toUser,
                message: this.msgInput,
                isMy: true
            };
            (this as any).$socket.emit('onSend', msgCon);
            this.chatRoom[this.chatInfo.toUser].push(msgCon);
            // this.$store.commit('SOCKET_sendChat', msgCon);
            this.msgInput = ''
        }

        // 获取用户列表
        private getUserList() {
            ajax.getUserList((res: ResData) => {
                if (res.code === 200) {
                    this.userList = res.data;
                }
            })
        }

        private selectChatTo(username: string) {
            const user = 'toUser';
            this.$set((this as any).chatInfo, 'toUser', username);
            this.$store.commit('SOCKET_createToUser', username);

        }

        // get chatList() {
        //     return this.$store.state.chatList[this.chatInfo.toUser] || []
        // }
    }
</script>

<!--<script>-->
<!--export default {-->
<!--name: "chat",-->
<!--data() {-->
<!--return {-->
<!--msgInput: ''-->
<!--}-->
<!--},-->
<!--sockets: {-->
<!--connect(data) {-->
<!--console.log('链接成功')-->
<!--},-->
<!--disconnect(data) {-->
<!--console.log(data, 'disconnect断开链接')-->
<!--},-->
<!--customEmit(data) {-->
<!--console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')-->
<!--},-->
<!--// 接受消息-->
<!--onMessage(data) {-->
<!--console.log('后台返回的消息：', data)-->
<!--}-->
<!--},-->
<!--methods: {-->
<!--subMsg() {-->
<!--this.$socket.emit('chat', this.msgInput)-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<style scoped lang="scss">
  .chat {
    width: 600px;
    margin: 50px auto;
    display: flex;
    height: 500px;
    border: 1px solid #eee;
    .chat-left {
      width: 200px;
      border-right: 1px solid #eee;
      .el-button {
        width: 100%;
        text-align: left;
        padding-left: 10px;
        font-size: 16px;
        border-radius: 0;
        &.active {
          background-color: #409EFF;
          color: #fff;
        }
      }
    }
    .chat-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .msg-item {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        margin: 10px 0;
        &.left {
        }
        &.right {
          flex-direction: row-reverse;
        }
        .msg-avatar {
          font-size: 22px;
        }
        .msg-content {
          border: 1px solid #eee;
          border-radius: 10px;
          max-width: 50%;
          margin: 0 10px;
          padding: 10px 20px;
        }
      }
      .msg-input {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
