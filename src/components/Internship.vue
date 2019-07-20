<template>
    <div>
        <div class="jj" style="padding-top:20px!important;padding-bottom:40px!important;">
            <h2 style="color: white!important;text-align: center!important;padding-top:20px!important;"><strong>Partner with Us</strong></h2>
           <br>
          <!--<div class="row" style="padding-left:20px!important;padding-right:20px!important;">
                <div class="col-md-3">
                        <div class="verticalLine">
                            <router-link to="Corporate" style="text-decoration: none!important;">
                  <h4 style="color:white!important;">Corporates</h4></router-link></div>  
                </div>
                <div class="col-md-2">
                    <div class="verticalLine">
                            <router-link to="IndividualPartnership" style="text-decoration: none!important;">
                        <h4 style="color:white!important;">Individuals</h4></router-link>
                  </div>  </div>
                    <div class="col-md-3">
                            <div class="verticalLine">
                                    <router-link to="Internship" style="text-decoration: none!important;">
                            <h4 style="color:white!important;">Internships</h4></router-link></div>
                        </div>
                        <div class="col-md-2">
                                <div class="verticalLine">
                                        <router-link to="Volunteer" style="text-decoration: none!important;">
                                <h4 style="color:white!important;">Volunteer</h4></router-link></div>
                            </div>
                            <div class="col-md-2">
                                    <router-link to="Jobs" style="text-decoration: none!important;">
                                <h4 style="color:white!important;">Jobs</h4></router-link>
                            </div>
            </div>-->
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
                    <div class="horizontal" ></div><br>
                  </div>
                  <div class="col-md-2">
                      <div class="verticalLine">
                              <router-link to="IndividualPartnership" style="text-decoration: none!important;">
                          <h4 style="color:white!important;">Individuals</h4></router-link>
                    </div> 
                    <div class="horizontal" ></div><br>
                   </div>
                      <div class="col-md-2">
                              <div class="verticalLine">
                                      <router-link to="Internship" style="text-decoration: none!important;">
                              <h4 style="color:white!important;">Internships</h4></router-link></div>
                              <div class="horizontal" ></div><br>
                          </div>
                          <div class="col-md-2">
                                  <div class="verticalLine">
                                          <router-link to="Volunteer" style="text-decoration: none!important;">
                                  <h4 style="color:white!important;">Volunteer</h4></router-link></div>
                                  <div class="horizontal" ></div><br>
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
        
            <h5 style="color:black!important;text-align:left!important;"><strong>Internships</strong></h5>
            <br>
            <!--<p style="text-align:left!important;">
            <img src="../assets/jalanidhi.png" style="width:100%; height:auto;"></p>-->
            
            
            <p class="para">Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsums Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.</p>
             
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
@media only screen   
and (min-device-width : 640px)   
and (max-device-width : 1024px)  
{ 
    .verticalLine{
    border-right: thick solid #006400 !important;
  padding-right:20px!important;
    }
}
@media only screen   
and (min-device-width : 1025px)   
and (max-device-width : 1500px)  
{ 
    .verticalLine{
    border-right: thick solid #006400 !important;
  padding-right:20px!important;
    }
}
@media only screen   
and (min-device-width : 1501px)   
and (max-device-width : 1700px)  
{ 
    .verticalLine{
    border-right: thick solid #006400 !important;
  padding-right:20px!important;
    }
}
@media only screen   
and (min-device-width : 1701px)   
and (max-device-width : 2000px)  
{ 
    .verticalLine{
    border-right: thick solid #006400 !important;
  padding-right:20px!important;
    }
}
@media only screen   
and (min-device-width : 320px)   
and (max-device-width : 480px)  
{ 
  .horizontal{
    border: 2px solid#006400!important;
        width: 300px;
        height: 0px;
  }
}
@media only screen   
and (min-device-width : 481px)   
and (max-device-width : 640px)  
{ 
  .horizontal{
    border: 2px solid#006400!important;
        width: 500px;
        height: 0px;
  }
}
@media only screen   
and (min-device-width : 640px)   
and (max-device-width : 768px)  
{ 
  .horizontal{
    border: 2px solid#006400!important;
        width: 500px;
        height: 0px;
  }
}
</style>