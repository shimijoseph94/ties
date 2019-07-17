<template>
    <div>
        <div class="jj" style="padding-top:20px!important;padding-bottom:40px!important;">
            <h2 style="color: white!important;text-align: center!important;padding-top:20px!important;"><strong>Community Development</strong></h2>
           <br>
            <div class="row" style="padding-left:20px!important;padding-right:20px!important;">
                <div class="col-md-3">
                        <div class="verticalLine">
                  <h4 style="color:darkgreen!important;padding-left:150px;">WASH</h4></div>  
                </div>
                <div class="col-md-3">
                    <div class="verticalLine">
                        <h4 style="color:white!important;">Biodiversity Enhancement</h4>
                  </div>  </div>
                    <div class="col-md-2">
                            <div class="verticalLine">
                            <h4 style="color:white!important;">Eco-Tourism</h4></div>
                        </div>
                        <div class="col-md-3">
                                <h4 style="color:white!important;">Indian Snakebite Initiative</h4>
                            </div>
            </div>
        </div>
        <!--2nd section-->
        <div class="container">
            
            <div class="row">
                    
            <div class="col-md-8" style="padding-top:30px!important;">
        
            <h5 style="color:black!important;text-align:left!important;"><strong>WASH- Water, Sanitation & Hygiene</strong></h5>
            <br>
            <p style="text-align:left!important;">
            <img src="../assets/River Conservation.jpg" style="width:100% ;height:auto;"></p>
            <br>
            <h5 style="color:black!important;text-align: left!important;"><strong>RIVER CONSERVATION</strong></h5>
            <br>
            <h5 style="color:black!important;text-align: left!important;"><strong><i>Ente Manimalayar – Manimala River Conservation Project</i></strong></h5>
            
            <p class="para">A community initiative led by Ente Manimalayar (My Manimala River) Peoples’ Fraternity for the restoration of watershed, rejuvenating agriculture, promoting responsible tourism, etc.</p>
            <p class="para" style="padding-left:30px!important;">• 	> 100km rivulets restored</p>
            <p class="para" style="padding-left:30px!important;">•	5 Peoples Fraternity group actively working</p>
            <p class="para" style="padding-left:30px!important;">•	Community Sewage Treatment plant at Mundakayam (initiated)</p>
            <br>
            <h5 style="color:black!important;text-align: left!important;"><strong><i>Chalakudy River Conservation Project</i></strong></h5>
            <p class="para">As a novel community initiative a Participatory Conservation Project for the river was implemented in three phases covering a period of three years (2016- 2019).</p>
            <p class="para" style="padding-left:30px!important;">•  During the first year river bank schools were selected for preparing biodiversity register by biodiversity survey, exploring river and riparian biodiversity; cleaning drive; planting of bamboos and releasing fingerlings of native fish species; and also awareness programmes (street plays, river walks, rallies, etc.) my river my life – get list of schools.</p>
            <p class="para" style="padding-left:30px!important;">•  During the second year awareness programmes for community groups; river bank protection activities like planting of trees, cleaning drive; rain water harvesting pits; and waste management provisions in households in order to curb pollution of river like compost pit and soak pit in 50 houses.</p>
            <p class="para" style="padding-left:30px!important;">•  During the third year, extended its activities to the watershed area of the river and restored one rivulet of the river (Thalikathodu) which is a tributary of the Chalakudypuzha and also a seminar on post-flood ecological scenario in Kerala with respect to Chalakudy River was conducted.</p>
            <b-carousel
            id="carousel-1"
             v-model="slide"
             :interval="4000"
             controls
             indicators
             background="#ababab"
             img-width="1024"
             img-height="480"
             style="text-shadow: 0px 0px 2px #000"
             fade
             indicators
             @sliding-start="onSlideStart"
             @sliding-end="onSlideEnd"
           >
             <b-carousel-slide  img-src :img-src="require('../assets/River Conservation1.jpg')">
               <h1>River Conservation - Algal Bloom due to industrial effluents</h1>
             </b-carousel-slide>
       
            <b-carousel-slide img-src :img-src="require('../assets/river1.jpg')">
               <h1>River Conservation - Algae at Karimpukayam check dam</h1>
             </b-carousel-slide>
       
              <b-carousel-slide  img-src :img-src="require('../assets/river2.jpg')">
               <h1>River Conservation - Water Quality Testing in the Manimala River</h1>
             </b-carousel-slide>
  
            
              <h1></h1>
            </b-carousel-slide>
             
            
            </b-carousel> 
          </div>
  
         
            
                    
          <div class="col-md-4" style="padding-top:30px!important;">
              <div class="card sidebar" style=" padding-left:10px!important;padding-right:10px!important;padding-top:20px!important;">
           <h4 style="color:black!important;text-align: left!important;padding-left:20px!important;"><strong>Projects</strong></h4><br>
          <router-link to ="Jalanidhi" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>1. Jalanidhi -Rural drinking water and sanitation</strong></h6></router-link>
          <!--<button v-on:click="say('River')">River</button>-->
          <br>
          <router-link to="RiverRelinking" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>2. River Relinking</strong></h6></router-link>
           <br>
          <router-link to="RiverConservation" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>3. River Conservation</strong></h6></router-link>
           <br>
          <router-link to="PondRejuvenation" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>4. Pond Rejuvenation</strong>
              </h6></router-link><br>
           <router-link to="Domesticsolidwaste" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>5. Domestic Solid Waste Management</strong>
              </h6></router-link><br>
           <router-link to="" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>6. Household Sewage Treatment</strong>
              </h6></router-link>
              <br>
              <br>
              <br>
              <p style="text-align:left!important;padding-left:20px!important;">
              <router-link to="" class="sqbtn"style="padding-left:70px!important;padding-right:70px!important;padding-bottom:15px!important;padding-top:15px!important;text-decoration:none;" ><strong>Capacity Building</strong></router-link><br></p>
              <p style="text-align: left!important;padding-left:20px!important;" > <router-link to="" class="sqbtn" style="padding-left:30px!important;padding-bottom:10px!important;padding-top:10px!important;text-decoration:none;" ><strong>Environmental Education & Outreach</strong></router-link></p>
                <p style="text-align: left!important;padding-left:20px!important;"> <router-link to="" class="sqbtn" style="padding-left:70px!important;padding-right:30px!important;padding-bottom:15px!important;padding-top:15px!important;text-decoration:none;" ><strong>Research & Development</strong></router-link></p>
            </div></div>
            </div>
           
                              
        </div>
      
        <br>
    </div>
  </template>
 
  <script>
   
    export default {
  name: "Jalanidhi",
 
  data() {
    return {
        seen1:false,
        seen2:false,
       
      
    }
  },
  methods: {
    say: function (message) {
      console.log(message)
     
      if(message == 'River'){
        console.log('hiii')
        seen1:true;
        if(seen1){
          console.log('true')
          Else 
          console.log('false')
        }
  
      }
    }
  }
  
      }
  
    
  </script>
  <style>
    .jj{
        background-color: #9ACD32!important;
    }
    .verticalLine{
    border-right: thick solid #006400 !important;
  padding-right:20px!important;
    }
    .para {
  margin: 0;
    color: black!important;
    font-size: 15px!important;
    line-height: 1.5 !important;
    text-align: justify !important;
    display: block !important;
    margin-block-start: 1em !important;
    margin-block-end: 1em !important;
    margin-inline-start: 0px !important;
    margin-inline-end: 0px !important;
  }
  
  
      
    .sqbtn
  {
  
      display: inline-block;
    
      padding-top: 7px;
    padding-right: 7px;
    padding-bottom: 7px;
    padding-left: 7px;
     
      text-decoration: none;
      background-color: white!important;
      transition: .4s;
  } 
  .sidebar{
  background-color: #84fb95;
  background-image: linear-gradient(315deg, #84fb95 0%, #cef576 74%); 
  }
  
  </style>