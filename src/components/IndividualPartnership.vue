<template>
    <div>
        <div class="jj" style="padding-top:20px!important;padding-bottom:40px!important;">
            <h2 style="color: white!important;text-align: center!important;padding-top:20px!important;"><strong>Partner with Us</strong></h2>
           <br>
           <div class="row" style="padding-left:20px!important;padding-right:20px!important;">
            <div class="col-md-1">
              <div class="verticalLine"> 
                  <router-link to="Corporate" style="text-decoration: none!important;">
        <h4 style="color:white!important;"></h4></router-link></div>  
      </div>
              <div class="col-md-2">
                      <div class="verticalLine"> 
                          <router-link to="Corporate" style="text-decoration: none!important;">
                <h4 style="color:white!important;">Corporates</h4></router-link></div>  
              </div>
              <div class="col-md-2">
                  <div class="verticalLine">
                          <router-link to="IndividualPartnership" style="text-decoration: none!important;">
                      <h4 style="color:white!important;">Individuals</h4></router-link>
                </div>  </div>
                  <div class="col-md-2">
                          <div class="verticalLine">
                                  <router-link to="Internship" style="text-decoration: none!important;">
                          <h4 style="color:white!important;">Internships</h4></router-link></div>
                      </div>
                      <div class="col-md-2">
                              <div class="verticalLine">
                                      <router-link to="Volunteer" style="text-decoration: none!important;">
                              <h4 style="color:white!important;">Volunteer</h4></router-link></div>
                          </div>
                          <div class="col-md-1">
                                  <router-link to="Jobs" style="text-decoration: none!important;">
                              <h4 style="color:white!important;">Jobs</h4></router-link>
                          </div>
                          
          </div>
        </div>
        <!--2nd section-->
        <div class="container">
            
            <div class="row">
                    
            <div class="col-md-12" style="padding-top:30px!important;">
        
            <h5 style="color:black!important;text-align:left!important;"><strong>Individual Partnerships
                </strong></h5>
            <br>
            <!--<p style="text-align:left!important;">
            <img src="../assets/jalanidhi.png" style="width:100%; height:auto;"></p>-->
            
            
            <p class="para">While every bit of support is crucial for our projects, we would still like to request you to try and keep your donation above ₹1500 for it to make an impact on the ground</p>
             
            <br>
             
           <div class="row">
               <div class="col-md-4">
                   <div class="card cdd" >
                      <h5 style="color:black!important;">Adopt a River</h5>
                      <br>
                      
                      <h6 style="color:black!important;">Support Manimala River Conservation</h6> 
                      <br>
                      <br>
                     <p style="text-align: center!important;">

                     <!-- <button id="donat" v-on:click="say('hi')"  style="text-decoration:none;" >DONATE NOW</button>-->
                     <!--<router-link to="Donate" id="donat" v-on:click="value" style="text-decoration:none;" >DONATE NOW</router-link>-->
                     <router-link :to="{name:'Donate',params:{msg:'Manimala River Conservation'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link>
                  
                    </p>

                    </div>
               </div>

               <div class="col-md-4">
                    <div class="card cdd" >
                       <h5 style="color:black!important;">A Vial of Life</h5>
                       <br>
                       
                       <h6 style="color:black!important;">Provide Antivenom to treat snakebite</h6> 
                        <br>
                        <p style="text-align: center!important;">
                          
                        <!--<a href="" id="donat" v-on:click="value" >DONATE NOW</a>-->
                       
                       
                         <router-link :to="{name:'Donate',params:{msg:'Vial for life'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link>
                        
                        <!--<router-link to="Donate2" id="donat" v-on:click="value" style="text-decoration:none;" >DONATE NOW</router-link>--></p>
                    </p>
                    </div>
                </div>

                <div class="col-md-4">
                        <div class="card cdd" >
                           <h5 style="color:black!important;">Junior Naturalist Course</h5>
                           <br>
                           
                           <h6 style="color:black!important;">
                                Sponsor environmental  education for kids
                                
                            </h6> 
                            <br><br>
                        <p style="text-align: center!important;">
                            <router-link :to="{name:'Donate',params:{msg:'Junior Naturalist Course'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link>
                       </p>
                        </div>
                    </div>
           </div>
<br>
<br>

           <div class="row">
                <div class="col-md-4">
                    <div class="card cdd" >
                       <h5 style="color:black!important;">- 100 -
                        </h5>
                       <br>
                       <br>
                       <h6 style="color:black!important;">Support  Snakebite  Awareness Workshops
                        </h6> 
                        <br><br>
                        <p style="text-align: center!important;">
                            
                       <!-- <a href="" id="donat" >DONATE NOW</a>-->
                       <router-link :to="{name:'Donate',params:{msg:'100'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link>
                    </p>
                    </div>
                </div>
 
                <div class="col-md-4">
                     <div class="card cdd" >
                        <h5 style="color:black!important;">Thanal</h5>
                        <br>
                        <br>
                        <h6 style="color:black!important;">Sponsor a  Roadside Green Belt</h6> 
                         <br><br>
                        <p style="text-align: center!important;">
                       <!-- <a href="" id="donat" >DONATE NOW</a>-->
                       <router-link :to="{name:'Donate',params:{msg:'Thanal'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link>
                    
                      </p>
                     </div>
                 </div>
 
                 <div class="col-md-4">
                         <div class="card cdd" >
                            <h5 style="color:black!important;">Pachappu
                                </h5>
                            <br>
                            
                            <h6 style="color:black!important;">
                                    Transform Urban Wastelands into Green Spaces

                                 
                             </h6> 
                             <br><br>
                        <p style="text-align: center!important;">
                            <router-link :to="{name:'Donate',params:{msg:'Pachappu'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link></p>
                         </div>
                     </div>
            </div>
            <br>
            <br>
            <div class="row">
                    <div class="col-md-4">
                        <div class="card cdd" >
                           <h5 style="color:black!important;">Ottamooli

                            </h5>
                           <br>
                           
                           <h6 style="color:black!important;">
                                Sponsor a Medicinal Plant Project
                                
                            </h6> 
                            <br><br>
                        <p style="text-align: center!important;">
                          <router-link :to="{name:'Donate',params:{msg:'Medicinal Plant Project'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link></p>
                        </div>
                    </div>
     
                    <div class="col-md-4">
                         <div class="card cdd" >
                           <br>
                            <h6 style="color:black!important;">Make a general donation to TIES
<br><br><br>
                                    
                             </h6> 
                             <br>
                        <p style="text-align: center!important;">
                          <router-link :to="{name:'Donate',params:{msg:'TIES'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link>
                        </p><br>
                         </div>
                     </div>
     
                     <div class="col-md-4">
                             <div class="card cdd" >
                                <br>
                                <h6 style="color:black!important;">
                                        Support TIES corpus fund

                                     <br><br><br>
                                 </h6> 
                                 <br><br>
                        <p style="text-align: center!important;">
                          <router-link :to="{name:'Donate',params:{msg:'TIES Corpus Fund'}}" id="donat" style="text-decoration: none!important;">DONATE NOW</router-link>
                      
                      
                      
                       </p>
                             </div>
                         </div>
                </div>
                      
           <br><br><br>
    <div class="row">
     <div class="col-md-6">
         <p style="text-align:left!important;">
     <a href=""  class="sqbt" style="color: white!important;text-decoration: none!important;">Download CSR Brochure</a></p>
           </div>

           <div class="col-md-6">
                <p>
                <a href=""  class="sqbt" style="color: white!important;text-decoration: none!important;">More information on Partnerships
                        Link to Google Form – TIES Partnerships
                        </a></p>
                      </div></div>
                        </div>

        
            
                    
            
            </div>

        </div><br>

    </div>
</template>
<script>
    export default {
  name: "IndividualPartnership",
  data() {
    return {
      
          }
  },
 
  
    }
</script>
<style>
    .jj{
        background-color: #9ACD32!important;
    }
    .verticalLine{
    border-right: thick solid #006400 !important;
  padding-right:10px!important;
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
.cdd{
    padding-top: 20px!important;
    padding-bottom: 20px!important;
    padding-left: 20px!important;
    padding-right: 20px!important;
    background-color: #84fb95;
background-image: linear-gradient(315deg, #84fb95 0%, #cef576 74%); 
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
  .sqbt
  {

      display: inline-block;
    
      padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
     
      text-decoration: none;
      background-color: green!important;
      transition: .4s;
  } 
.sidebar{
  background-color: #84fb95;
background-image: linear-gradient(315deg, #84fb95 0%, #cef576 74%); 
}
#donat {
     padding-top:10px;
     padding-bottom:10px;
     padding-right:5px;
     padding-left:5px;
     
     border:none;
     border:solid 2px 	#006400!important;
     border-radius: 5px;
     background: rgba(255, 255, 255,0);
     font-size: 25px;
}


</style>