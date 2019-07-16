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
        
            <h4 style="color:black!important;text-align:left!important;"><strong>WASH- Water, Sanitation & Hygiene</strong></h4>
            <br>
           <!-- <p style="text-align:left!important;">
           <img src="../assets/River Conservation.jpg" style="width:100% ;height:auto;"></p>-->
            <br>
            <h5 style="color:black!important;text-align: left!important;"><strong>POND REJUVENATION</strong></h5>
            <p class="para">Conservation of ponds is the best solution for problems of the water scarcity and groundwater depletion in the community. Each of the ponds is rejuvenated to cater specific community needs such as recharging neighboring water sources, community water education centre, boating, swimming, direct domestic use, etc.</p>
            <p class="para" style="padding-left:30px!important;">• Peringamkulam pond, Kodakara Panchayat as wayside leisure point and community water education centre.</p>
            <p class="para" style="padding-left:30px!important;">• Marathampally pond, Kodakkara Panchayat as a source for bathing, swimming, recharging neighbouring water resources etc. </p>
            <p class="para" style="padding-left:30px!important;">• Kothakulam pond, Puliparakunnu, Kodakara Panchayat as a geologically pivotal water storage that supports 3-4 neighbouring ponds during summer.</p>
            <p class="para" style="padding-left:30px!important;">• Kallamkulam pond, Perambra, Kodakara Panchayat provides water for household use for 100+ households.</p>
            <p class="para" style="padding-left:30px!important;">• Therikulam pond, Kalamassery Muncipality as a community bathing and swimming resource.</p>
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
  
        </div><br>
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