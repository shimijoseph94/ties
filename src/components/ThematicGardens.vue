<template>
    <div>
        <div class="jj" style="padding-top:20px!important;padding-bottom:40px!important;">
            <h2 style="color: white!important;text-align: center!important;padding-top:20px!important;"><strong>Community Development</strong></h2>
           <br>
           <div class="row" style="padding-left:20px!important;padding-right:20px!important;">
              <div class="col-md-3">
                      <div class="verticalLine">
                <h4 style="color:darkgreen!important;"class="wash">WASH</h4></div><br>
                <div class="horizontal" ></div><br>
              </div>
              <div class="col-md-3">
                  <div class="verticalLine">
                     <router-link to="ThematicGardens" style="color:white!important;text-decoration: none!important;"> <h4 style="color:white!important;">Biodiversity Enhancement</h4></router-link>
                </div> <br> <div class="horizontal" ></div><br>
               </div>
                  <div class="col-md-2">
                          <div class="verticalLine">
                          <h4 style="color:white!important;">Eco-Tourism</h4>  </div> <br>
                          <div class="horizontal" ></div><br>
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
        
            <h4 style="color:black!important;text-align:left!important;"><strong>Biodiversity Enhancement</strong></h4>
            <br>
           <!-- <p style="text-align:left!important;">
           <img src="../assets/River Conservation.jpg" style="width:100% ;height:auto;"></p>-->
            <br>
            <h5 style="color:black!important;text-align: left!important;"><strong>Themtic Gardens</strong></h5>
            <p class="para">Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsums Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.</p>
            
        </div>
  
        
        <div class="col-md-4" style="padding-top:30px!important;">
                <div class="card sidebar" style=" padding-left:10px!important;padding-right:10px!important;padding-top:20px!important;">
             <h4 style="color:black!important;text-align: left!important;padding-left:20px!important;"><strong>Projects</strong></h4><br>
            <router-link to ="ThematicGardens" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>1. Thematic Gardens</strong></h6></router-link>
            <!--<button v-on:click="say('River')">River</button>-->
            <br>
            <router-link to="Pachappu" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>2. Pachappu – small forest in urban spaces
            </strong></h6></router-link>
             <br>
            <router-link to="Thanal" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>3. Thanal - Green Belt
            </strong></h6></router-link>
             <br>
            <router-link to="Pachamuttam" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>4. Pachamuttam -  Multifunctional Homestead gardens
            </strong>
                </h6></router-link><br>
             <router-link to="Ottamooli" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>5. Ottamooli- medicnal plants for home
            </strong>
                </h6></router-link><br>
             <router-link to="Plantdiversity" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>6. Plant Diversity Awareness
            </strong>
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
  @media only screen   
and (min-device-width : 1000px)   
and (max-device-width : 1500px)  
{ 
    .wash{
    
  padding-left:150px!important;
    }
}
@media only screen   
and (min-device-width : 1501px)   
and (max-device-width : 1700px)  
{ 
    .wash{
   
  padding-left:150px!important;
    }
}
@media only screen   
and (min-device-width : 1701px)   
and (max-device-width : 2000px)  
{ 
    .wash{
    
  padding-left:150px!important;
    }
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
    border: 1px solid#006400!important;
        width: 500px;
        height: 0px;
  }
}
@media only screen   
and (min-device-width : 640px)   
and (max-device-width : 768px)  
{ 
  .horizontal{
    border: 1px solid#006400!important;
        width: 500px;
        height: 0px;
  }
}
  </style>