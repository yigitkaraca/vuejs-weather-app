<template>
  <div class="city">
    <div class="city-box" v-for="(city, index) in cities" :key="index">    
      <div class="city__name">
        {{city.name}}
      </div>
      <div class="city__temp">
        {{Math.floor(city.main.temp)}} &#8451;
      </div>  
      <div class="city__weather__status" v-for="weatherItem in city.weather" :key="weatherItem.id">
        <div class="city__temp__image">
          <img :src="cdnPath +'/'+weatherItem.icon+'.png'" alt="">
        </div>
        <div class="city__temp__description">
          {{weatherItem.description}}
        </div>       
      </div>
      <div>
        <div class="city__wind">
          Wind : {{city.wind.speed}} / m.s {{city.wind.deg ? '('+city.wind.deg+')' : ''}}
        </div>
      </div>
      <div class="city__detail__btn_wraper">
        <router-link :class="['city__detail__btn']" :to="`/detail/${city.id}`">More weather in your city</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import config from './../config';
import store from './../store';
import {mapState} from 'vuex';

export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      cities: state => state.cities.list,
      citiesTemp: state => state.cities.list.main,
    }),     
    cdnPath :function(){
      return config.cdnPath;
    }  
  },
  methods:{
    getCities(url){
      return axios.get(url)
        .then((res) => {
          this.$store.dispatch('setStateData', {key: 'cities', data: res.data});
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  created(){
    const url = config.apiRoot+'/group?id=745044,2988507,2950159,2643743,6539761&units=metric&APPID='+config.apiKey;
    if ((this.$store.state.cities).length == 0){
      this.getCities(url)
    }
  }
}
</script>

