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
        
            <h5 style="color:black!important;text-align:left!important;"><strong>Volunteer with Us</strong></h5>
            <br><br>
            <!--<p style="text-align:left!important;">
            <img src="../assets/jalanidhi.png" style="width:100%; height:auto;"></p>-->
            
            
            <h5 style="color:black!important;text-align: left!important;"><strong>We are always looking for people who can support our activities in the field.</strong></h5> 
            <p class="para">Please email your resume to <a href="support@ties.org.in" style="color:blue!important;">support@ties.org.in</a> and we will get back to you with volunteering opportunities.
                </p>
            <br>
             
             </div>

        
            
                    
            
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

</style>