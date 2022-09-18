<template>
  <div class="hello">
    <div>
      <div class="head">
        <div class="date">Today, {{currentDate()}}</div>
        <div class="start-stop-total">
          <div class="start-stop">
            <div v-if="periods.length > 0">
              <div class="stop" v-if=" periods[0].running">
                <button class="stop_btn" @click="stopPeriod"><i class="fa fa-stop" aria-hidden="true"></i> Stop</button>
              </div>
              <div class="start" v-else>
                <button class="start_btn" @click="startPeriod" ><i class="fa fa-play" aria-hidden="true"></i> Start</button>
              </div>
            </div>
            <div class="start">
              <button class="start_btn" @click="addPeriod" ><i class="fa fa-clock-o" aria-hidden="true"></i> Start new</button>
            </div>
          </div>
        <TotalTime :time="totalTime"/>
          
        </div>
      </div>
      <div class="all-periods">
        <div v-for=" (period,index)  in periods" :key="period.startDate">
          <TimePeriod :period="period" :index="periods.length-index"/>
        </div>
      </div>
      <div class="total-div">
        <p class="total-p">Total</p>
        <TotalTime :time="totalTime"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '@/assets/style.scss'

</style>

<script lang="ts">
import TimePeriod from './TimePeriod.vue';
import TotalTime from './totalTime.vue';
import axios from 'axios';
export default {
  name: 'TimeTracker',
  props: {
    msg: String
  },
  components:{ TimePeriod, TotalTime },
   data(){
    return {
      periods : [],
    }
  },
  methods:{
    async addPeriod(){
      if(this.periods.length >0 ){
        await axios.patch(`http://localhost:3000/periods/${this.periods[0].id}`,{endedAt:new Date() , running:false,duration:this.periods[0].duration})
        this.periods[0] = {...this.periods[0] , endedAt:new Date() , running:false }
      }
      await axios.post(`http://localhost:3000/periods`,{}).then(response => 
      this.periods.unshift(response.data))
    


    },
    stopPeriod() {
      this.periods[0] = {...this.periods[0] , endedAt:new Date() , running:false }
    },
    currentDate() {
      let date= new Date().toLocaleString('en-us',{day:'numeric' , month:'long'}) 
      return date;
    },
    startPeriod() {
      this.periods[0] = {...this.periods[0] , running:true }
    },
    increaseTime(){
        if (this.periods.length > 0 && this.periods[0].running) {
            this.periods[0].duration =  this.periods[0].duration + 1 
        }
     },
  },
  computed:{
    totalTime: function() {
      return this.periods.reduce((acc, period) => {
       
        return acc + period.duration
      }, 0);
    }
  },
  async mounted() {
      axios
      .get('http://localhost:3000/periods')
      .then(response => 
      this.periods = response.data)
      setInterval(()=>this.increaseTime(),1000)
  },
  async unMounted() {
      if(this.periods.length > 0 ){
          axios.patch(`http://localhost:3000/periods/${this.periods[0].id}`,{ duration:this.periods[0].duration})
        .then(response => 
        this.periods = response.data)
      }
     
    
  }

}
</script>
