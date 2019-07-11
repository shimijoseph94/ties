<template>
  <div>
    
    <b-carousel
      
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      
    >
      <b-carousel-slide  
     img-src="http://ties.org.in/uploads/banner/20.JPG" >
     <div class="hovereffect">
      <h3 class="header">Welcome to Tropical Institute of Ecological Sciences</h3></div>
    
    </b-carousel-slide>
      <b-carousel-slide
      
        img-src="http://ties.org.in/uploads/banner/18.jpg"
      > <div class="hovereffect">
        <h3 class="header">2nd Meenachil Dragonfly Survey 2017</h3></div>
      <!--<div class="sqrr" >
          <div class="row">
              <div class="col-md-4">
              <h4 style="padding-top:20px!important;padding-bottom:20px!important;" >AIM</h4>
              </div>
              <div class="col-md-4">
                  <h4 style="padding-top:20px!important;padding-bottom:20px!important;">MISSION</h4>
                  </div>
                  <div class="col-md-4">
                      <h4 style="padding-top:20px!important;padding-bottom:20px!important;">VISION</h4>
                      </div>
            </div>
        </div>-->
    </b-carousel-slide>
      <b-carousel-slide
        
        img-src="http://ties.org.in/uploads/banner/6.jpg">
        <div class="hovereffect">
        <h3 class="header">Welcome to Tropical Institute of Ecological Sciences</h3></div>
     <!-- <div class="sqrr" >
          <div class="row">
              <div class="col-md-4">
              <h4 style="padding-top:20px!important;padding-bottom:20px!important;">AIM</h4>
              </div>
              <div class="col-md-4">
                  <h4 style="padding-top:20px!important;padding-bottom:20px!important;">MISSION</h4>
                  </div>
                  <div class="col-md-4">
                      <h4 style="padding-top:20px!important;padding-bottom:20px!important;">VISION</h4>
                      </div>
            </div>
        </div>--></b-carousel-slide>
      <b-carousel-slide
     
      img-src="http://ties.org.in/uploads/banner/17.jpg"
    > <div class="hovereffect">
      <h3 class="header">Welcome to Tropical Institute of Ecological Sciences</h3></div>
    <!--<div class="sqrr" >
        <div class="row">
            <div class="col-md-4">
            <h4 style="padding-top:20px!important;padding-bottom:20px!important;">AIM</h4>
            </div>
            <div class="col-md-4">
                <h4 style="padding-top:20px!important;padding-bottom:20px!important;">MISSION</h4>
                </div>
                <div class="col-md-4">
                    <h4 style="padding-top:20px!important;padding-bottom:20px!important;">VISION</h4>
                    </div>
          </div>
      </div>--></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
   export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style>
  .sqrr
{
      border-radius: 25px;
      text-decoration: none;
      color:black;
    
      background:#9ACD32!important;
      transition: .4s;
  }
  .hovereffect  h3.header {
    bottom: 80px;
    padding-top:10px!important;
    padding-bottom:10px!important;
    padding-left:20px!important;
    padding-right:20px!important;
    position: absolute;
    text-align: center;
    
    
   background-color:rgba(0,0,0,0.5);
   color:white;
    
  }
  
  
</style>