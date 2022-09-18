<template>
    <div class="total">{{formatTime(time)}}</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        props: ['time'],
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
    .total{
    color: $green;
    font-size: 22px;
    font-weight: 700;
    line-height: 18px;
}
</style>