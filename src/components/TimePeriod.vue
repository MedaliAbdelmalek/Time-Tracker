<template>
    <div class="periods">
        <div class="current-period">
            <div class="period-n">Period {{index}}</div>
            <div class="current" v-if="period.running">Current Period</div>
        </div>
        
        <div class="time-all">
            <div class="average-time" v-if="period.running === false ">{{new Date(period.startedAt).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true}) }} - {{new Date(period.endedAt).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})}}</div>
            <div class="average-time" v-else>Started {{new Date(period.startedAt).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true}) }}</div>
            <div class="time">{{formatTime(period.duration)}}</div>
        </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: ['period','index'],
    methods: {

        formatTime(time){
            let hours = Math.floor(time / 3600);
            if (hours < 10){
                hours = '0' + hours 
            }
            time %= 3600;
            let minutes = Math.floor(time / 60);
            if (minutes < 10){
                minutes = '0' + minutes 
            }
            let seconds = time % 60;
            if (seconds < 10){
                seconds = '0' + seconds 
            }
             return hours +':'+ minutes + ':'+ seconds
        }
    },
  
})
</script>
<style lang="scss">
.current{
    color: $grey;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
}
.period-n{
    color: rgb(88, 98, 115);
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
}
.average-time{
    color: $grey;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
}

.time{
    color: $blue;
    font-size: 22px;
    font-weight: 700;
    line-height: 18px;
    margin-left: 30px;
}
.time-all{
    display:flex;
    justify-content: space-between;
}
.periods{
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid $green;
    padding: 40px;
    align-items: center;
}
</style>
