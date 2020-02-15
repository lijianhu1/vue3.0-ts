<template>
  <div class="h-calendar">
    <div class="h-calendar-header">
      <div class="hc-h-left hc-h-tool">
        <button :disabled="baseData.today===baseData.currentDate" @click="toToday">今天</button>
        <button @click="selectDate(-1)">
          <i class="iconfont icon-xiangzuo1"></i>
        </button>
        <button @click="selectDate(+1)">
          <i class="iconfont icon-xiangyou"></i>
        </button>
      </div>
      <div class="hc-h-center">
        <h2>{{baseData.currentDate}}</h2>
      </div>
      <div class="hc-h-tool hc-h-right">
        <button :disabled="baseData.type==='month'" @click="selectType('month')">month</button>
        <button :disabled="baseData.type==='week'" @click="selectType('week')">week</button>
        <button :disabled="baseData.type==='day'" @click="selectType('day')">day</button>
      </div>
    </div>
    <div class="h-calendar-body">
      <table class="h-table" cellspacing="0">
        <thead>
          <tr v-if="baseData.type!=='day'">
            <th style="width:50px;" v-if="baseData.type === 'week'"></th>
            <th v-for="(item,i) in tableHead" :key="i">
              {{item.week}}
              <span v-if="baseData.type === 'week'">{{item.month+1}}/{{item.day}}</span>
            </th>
          </tr>
          <tr v-else>
            <th style="width:50px;"></th>
            <th>{{weekString[new Date(baseData.currentDate).getDay()]}}</th>
          </tr>
        </thead>
        <tbody v-if="baseData.type==='month'" class="month">
          <tr v-for="(weekItem, weekIndex) in groupByWeek" :key="weekIndex">
            <td v-for="(dayItem, dayIndex) in weekItem" :key="dayIndex" :class="baseData.today==dayItem._date?'active':''">
              <p class="h-flex-jc_end">
                <a href="javascript:;" :class="dayItem.month == baseData.currentMonth? '':'other-month'">{{dayItem.day}}</a>
              </p>
              <div v-for="(event, evI) in dayItem.eventList" :key="evI" class="event">{{event.title}}</div>
            </td>
          </tr>
        </tbody>
        <tbody v-if="baseData.type==='week'" class="week">
          <tr>
            <td>
              <div v-for="(minuteItem, i) in dateList[0].eventList" :key="i" class="cell">
                <span v-if="i%2===0">{{minuteItem.time}}</span>
              </div>
            </td>
            <td v-for="(dayItem, dayIndex) in dateList" :key="dayIndex" :class="baseData.today==dayItem._date?'active':''">
              <div v-for="(event, i) in dayItem.eventList" :key="i" class="cell"></div>
            </td>
          </tr>
        </tbody>
        <tbody v-if="baseData.type==='day'" class="day">
          <tr>
            <td>
              <div v-for="(minuteItem, i) in dateList[0].eventList" :key="i" class="cell">
                <span v-if="i%2===0">{{minuteItem.time}}</span>
              </div>
            </td>
            <td :class="baseData.today==dateList[0]._date?'active':''">
              <div v-for="(minuteItem, i) in dateList[0].eventList" :key="i" class="cell"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import tool from '@/util/tool.js';
  interface StringArray {
    [index: string]: string;
  }
  interface DateBase {
    year: number;
    month: number;
    day: number;
  }
  interface CalendarInfo {
    today: string; // 今天
    defaultMonth: number; // 默认月份  （即今天所在月份，不变）
    currentDate: string; // 当前时间
    currentYear: number; // 当前选中年
    currentMonth: number; // 当前月
    currentDay: number; // 当前日
    type: string; // 展示类型：month, week, day
    maxDay: number; // 每月最大天数
    minute?: number; // 分钟间隔
  }
  interface DateItem extends DateBase {
    _date: any;
    week?: number | string;
    eventList?: object[];
  }
  interface FullEventItem {
    title: string;
    start: string;
    end?: string;
    content?: string;
  }

  @Component
  export default class Count extends Vue {
    // Array<FullEventItem>
    private fullEventData: FullEventItem[] = [
      { title: '就回家', start: '2019-09-21', end: '2019-09-22', content: '萨达萨达撒旦的方法' },
      { title: '事件1', start: '2019-09-21', end: '2019-09-29', content: '事件1事件1' },
      { title: '氪空间地方', start: '2019-09-24 10:30', end: '2019-09-24 12:00', content: '萨达萨达撒旦' },
      { title: '时间1', start: '2019-09-27', end: '2019-09-27', content: '记得提醒' },
      { title: '12346', start: '2019-09-28', end: '2019-09-29', content: '深大' }
    ];
    // 初始化数据信息
    private baseData: CalendarInfo = {
      today: '',
      defaultMonth: 8,
      currentDate: '',
      currentYear: 2019,
      currentMonth: 8,
      currentDay: 25,
      type: 'month',
      maxDay: 0,
      minute: 30
    };
    private weekString: string[] = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    private maxDayList: any = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    private dateList: DateItem[] = [];
    private weekListHead: object[] = [];
    private tableHead: object[] = [];
    private mounted() {
      this.toToday();
    }
    // 今天
    private toToday() {
      const nowDate = new Date();
      this.baseData.currentDate = tool.formatDate(nowDate, 'yyyy-MM-dd');
      this.baseData.today = tool.formatDate(nowDate, 'yyyy-MM-dd');
      const [year, month, day] = [nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()];
      this.baseData.defaultMonth = month;
      this.baseData.currentYear = year;
      this.baseData.currentMonth = month;
      this.baseData.currentDay = day;
      if (this.baseData.type === 'month') {
        this.updateCalendarMonth(year, month, day);
      } else if (this.baseData.type === 'week') {
        this.updateCalendarWeek(year, month, day);
      }
    }
    // 选择上下时间
    private selectDate(type: number): void {
      switch (this.baseData.type) {
        case 'month':
          if (type === +1) {
            // 下一日期
            if (this.baseData.currentMonth >= 11) {
              this.baseData.currentMonth = 0;
              this.baseData.currentYear++;
            } else {
              this.baseData.currentMonth++;
            }
          } else {
            // 上一日期
            if (this.baseData.currentMonth <= 0) {
              this.baseData.currentMonth = 11;
              this.baseData.currentYear--;
            } else {
              this.baseData.currentMonth--;
            }
          }
          this.updateCalendarMonth(this.baseData.currentYear, this.baseData.currentMonth, this.baseData.currentDay);
          break;
        case 'week':
        case 'day':
          const num = this.baseData.type === 'week' ? 7 : 1;
          const currDate = this.baseData.currentDate ? new Date(this.baseData.currentDate) : new Date();
          const newWeekTimestamp = currDate.getTime() + type * num * 24 * 3600 * 1000;
          currDate.setTime(newWeekTimestamp);
          const [year, month, day] = [currDate.getFullYear(), currDate.getMonth(), currDate.getDate()];
          this.baseData.currentYear = year;
          this.baseData.currentMonth = month;
          this.baseData.currentDay = day;
          this.baseData.currentDate = tool.formatDate(`${year}-${month + 1}-${day}`, 'yyyy-MM-dd');
          if (this.baseData.type === 'week') {
            this.updateCalendarWeek(year, month, day);
          } else {
            this.updateCalendarDay(year, month, day);
          }

          break;
        default:
          break;
      }
    }
    // 选择日历类型
    private selectType(type: string): void {
      this.baseData.type = type;
      this.init();
    }
    // 初始化数据
    private init(): void {
      const date = new Date();
      const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
      console.log(this.baseData);
      switch (this.baseData.type) {
        case 'month':
          this.updateCalendarMonth(this.baseData.currentYear || year, this.baseData.currentMonth || month, this.baseData.currentDay || day);
          break;
        case 'week':
          this.updateCalendarWeek(this.baseData.currentYear || year, this.baseData.currentMonth || month, this.baseData.currentDay || day);
          break;
        case 'day':
          this.updateCalendarDay(this.baseData.currentYear || year, this.baseData.currentMonth || month, this.baseData.currentDay || day);
          break;
        default:
          break;
      }
    }

    // 日期格式化方法
    // 1.为了获得每个月的日期有多少，我们需要判断 平年闰年[四年一闰，百年不闰，四百年再闰]
    private isLeapYear = (year: number): boolean => {
      return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    };
    // 2.获得每个月的日期有多少，注意 month - [0-11]
    private getMonthCount = (year: number, month: number): DateItem[] => {
      const count = this.maxDayList[month] || (this.isLeapYear(year) ? 29 : 28);
      return Array.from(
        new Array(count),
        (item, value): DateItem => {
          const day = value + 1;
          return {
            year,
            month,
            day,
            _date: `${year}-${month + 1 >= 10 ? month + 1 : '0' + (month + 1)}-${day >= 10 ? day : '0' + day}`,
            week: this.weekString[new Date(`${year}-${month + 1}-${day}`).getDay()]
          };
        }
      );
    };
    // 3.获得某年某月某日 是星期几，这里要注意的是 JS 的 API-getDay() 是从 [日-六](0-6)，返回 number
    private getWeekday = (year: number, month: number, day?: number): number => {
      return new Date(year, month, day || 1).getDay();
    };
    // 4. 获取上个月的天数
    private getPreMonthCount = (year: number, month: number): DateItem[] => {
      if (month === 0) {
        return this.getMonthCount(year - 1, 11);
      }
      return this.getMonthCount(year, month - 1);
    };
    // 5. 获取下个月的天数
    private getNextMonthCount = (year: number, month: number): DateItem[] => {
      if (month === 11) {
        return this.getMonthCount(year + 1, 0);
      }
      return this.getMonthCount(year, month + 1);
    };
    // 本周第一天
    private showWeekFirstDay = (cuDate?: any): DateItem => {
      const Nowdate: any = cuDate ? new Date(cuDate) : new Date();
      const WeekFirstDay: any = new Date(Nowdate - Nowdate.getDay() * 1000 * 3600 * 24);
      const M = Number(WeekFirstDay.getMonth()) + 1;
      return {
        year: WeekFirstDay.getFullYear(),
        month: Number(WeekFirstDay.getMonth()) + 1,
        day: WeekFirstDay.getDate(),
        week: this.weekString[WeekFirstDay.getDay()],
        _date: WeekFirstDay
      };
    };
    // 本周最后一天
    private showWeekLastDay = (cuDate?: any) => {
      const Nowdate: any = new Date();
      const WeekFirstDay: any = new Date(Nowdate - Nowdate.getDay() * 1000 * 3600 * 24);
      const WeekLastDay: any = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000);
      const M = Number(WeekLastDay.getMonth()) + 1;
      return WeekLastDay.getFullYear() + '-' + M + '-' + WeekLastDay.getDate();
    };
    // 将分钟转换为时间
    private minuteToTime = (minute: number) => {
      const hour = Math.floor(minute / 60);
      const min = minute % 60;
      return `${hour >= 10 ? hour : '0' + hour}:${min >= 10 ? min : '0' + min}`;
    };
    // 获取本周日期
    private getWeekDay(cuDate?: any) {
      const weekFirstDay: DateItem = this.showWeekFirstDay(cuDate);
      console.log('weekFirstDay', weekFirstDay);
      const weekList = Array.from(
        new Array(7),
        (item, value): DateItem => {
          const date = new Date(weekFirstDay._date.getTime() + value * 1000 * 3600 * 24);
          return {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            _date: tool.formatDate(date, 'yyyy-MM-dd'),
            week: this.weekString[date.getDay()]
          };
        }
      );
      return weekList;
    }
    // 更新数据  月份
    private updateCalendarMonth(year: number, month: number, day: number): void {
      if (typeof year === 'undefined' && typeof month === 'undefined' && typeof day === 'undefined') {
        const nowDate = new Date();
        year = nowDate.getFullYear();
        month = nowDate.getMonth();
        day = nowDate.getDate();
      }
      const currentMonth = this.getMonthCount(year, month); // 当前月天数
      const preMonth = this.getPreMonthCount(year, month); // 上月天数
      const nextMonth = this.getNextMonthCount(year, month); // 下月天数
      const whereMonday = this.getWeekday(year, month);
      const preArr = preMonth.slice(-1 * whereMonday || -7);
      const nextArr = nextMonth.slice(0, 42 - currentMonth.length - preArr.length);
      const dateList = [...preArr, ...currentMonth, ...nextArr];
      console.log(dateList);
      for (const item of dateList) {
        for (const evItem of this.fullEventData) {
          evItem.end = evItem.end || evItem.start;
          const date = new Date(item._date);
          const evItemStart = new Date(tool.formatDate(evItem.start, 'yyyy-MM-dd'));
          const evItemEnd = new Date(tool.formatDate(evItem.end, 'yyyy-MM-dd'));
          if (date >= evItemStart && date <= evItemEnd) {
            if (!item.eventList) {
              item.eventList = [];
              this.$set(item, 'eventList', []);
            }
            item.eventList.push(evItem);
          }
        }
      }
      this.dateList = dateList;
      this.baseData.currentDate = tool.formatDate(`${year}-${month + 1}-${day}`, 'yyyy-MM-dd');
      this.baseData.maxDay = this.maxDayList[month] || (this.isLeapYear(year) ? 29 : 28);
      this.tableHead = Array.from(this.weekString, (item, value) => {
        return {
          week: item
        };
      });
    }
    // 周
    private updateCalendarWeek(year: number, month: number, day: number): void {
      const currWeek = this.getWeekDay(`${year}-${month + 1}-${day}`);
      this.tableHead = currWeek;
      console.log(currWeek);

      this.dateList = currWeek.map((item, i) => {
        return this.createDataList(item.year, item.month, item.day);
      });
    }
    // 更新天
    private updateCalendarDay(year: number, month: number, day: number): void {
      this.dateList = [this.createDataList(year, month, day)];
    }
    // 创建周和天 数据格式
    private createDataList(year: number, month: number, day: number): DateItem {
      const minute = Math.ceil(this.baseData.minute || 30);
      const date = `${year}-${month + 1}-${day}`;
      return {
        _date: tool.formatDate(date, 'yyyy-MM-dd'),
        year,
        month,
        day,
        week: this.weekString[new Date(date).getDay()],
        eventList: Array.from(new Array(1440 / minute), (item, i) => {
          return {
            minute: minute * i,
            time: this.minuteToTime(minute * i)
          };
        })
      };
    }

    private get groupByWeek() {
      const weekGroop: any = [[], [], [], [], [], []];
      for (let i = 0; i < this.dateList.length; i++) {
        for (let j = 0; j < weekGroop.length; j++) {
          if (Math.ceil((i + 1) / 7) === j + 1) {
            weekGroop[j].push(this.dateList[i]);
          }
        }
      }
      return weekGroop;
    }
  }
</script>
<style lang="scss" scoped>
@import '../assets/scss/common.scss';
@import '//at.alicdn.com/t/font_1367435_tgq2258ld9.css';
a {
  text-decoration: none;
}
.icon {
  display: inline-block;
}
.h-calendar {
  width: 1600px;
  padding: 10px;
  margin: 0 auto;
  .h-calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .hc-h-tool {
      display: flex;
      align-items: center;
      button {
        border: none;
        outline: none;
        border-bottom: 1px solid $g_color_border;
        border-top: 1px solid $g_color_border;
        border-left: 1px solid $g_color_border;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        min-height: 30px;
        background-color: #f6f6f6;
        padding: 0 8px;
        cursor: pointer;
        &:last-child {
          border-right: 1px solid $g_color_border;
        }
      }
    }
  }
  .h-calendar-body {
    margin-top: 20px;
  }
  .h-table {
    width: 100%;
    border: 1px solid #999;
    table-layout: fixed;
    th,
    td {
      text-align: center;
      vertical-align: middle;
      border-bottom: 1px solid #999;
      border-right: 1px solid #999;
      &:last-child {
        border-right: none;
      }
    }
    th {
      padding: 5px 10px;
    }
    .month td {
      height: 80px;
      padding: 5px;
      vertical-align: top;
      a {
        color: #666;
      }
      .other-month {
        color: #aaa;
      }
      .event {
        font-size: 12px;
        background-color: rgb(138, 202, 221);
        border-radius: 2px;
        margin-bottom: 1px;
        border: 1px solid transparent;
        text-align: left;
        padding: 0 3px;
        &:hover {
          border: 1px solid #ccc;
          cursor: pointer;
        }
      }
    }
    .cell {
      min-height: 30px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.h-flex {
  display: block;
}
.h-flex-jc_end {
  display: flex;
  justify-content: flex-end;
}
.active {
  background-color: #fcf8e3;
}
</style>
