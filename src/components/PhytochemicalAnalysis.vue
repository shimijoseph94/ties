<template>
        <div>
            <div class="jj" style="padding-top:20px!important;padding-bottom:40px!important;">
                <h2 style="color: white!important;text-align: center!important;padding-top:20px!important;"><strong>Services</strong></h2>
               <br>
                <div class="row" style="padding-left:20px!important;padding-right:20px!important;">
                    <div class="col-md-3">
                            <div class="verticalLine">
                      <h4 style="color:white!important;padding-left:100px;">Water Quality</h4></div>  
                    </div>
                    <div class="col-md-3">
                        <div class="verticalLine">
                            <h4 style="color:white!important;">Antimicrobial Tests</h4>
                      </div>  </div>
                        <div class="col-md-3">
                                <div class="verticalLine">
                                <h4 style="color:white!important;">Phytochemical Analysis</h4></div>
                            </div>
                            <div class="col-md-3">
                                    <h4 style="color:white!important;padding-right:80px!important;">Soil Sample Analysis
                                        </h4>
                                </div>
                </div>
                
                <div class="row" style="padding-left:20px!important;padding-right:20px!important;">
                        <div class="col-md-4">
                                <div class="verticalLine">
                          <h4 style="color:white!important;padding-left:100px;">Nutritional analysis
                            </h4></div>  
                        </div>
                        <div class="col-md-4">
                            <div class="verticalLine">
                                <h4 style="color:white!important;">Microbiological Analysis
                                    </h4>
                          </div>  </div>
                            <div class="col-md-4">
                                   
                                    <h4 style="color:white!important;padding-right:150px!important;">Toxicological Tests
                                        </h4>
                                </div>
                               
                    </div>
            </div>
            <!--2nd section-->
            <div class="container">
                
                <div class="row">
                        
                <div class="col-md-8" style="padding-top:30px!important;">
            
                        <h4 style="color:black!important;text-align:left!important;"><strong>Phytochemical Analysis</strong></h4>
                </div>
    
            
                
                        
                <div class="col-md-4" style="padding-top:30px!important;">
                    <div class="card sidebar" style=" padding-left:10px!important;padding-right:10px!important;padding-top:20px!important;">
                 <h4 style="color:black!important;text-align: left!important;padding-left:20px!important;"><strong>Projects</strong></h4><br>
                <router-link to ="Watersampleanalysis" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>1. Water sample analysis
                    </strong></h6></router-link>
                <!--<button v-on:click="say('River')">River</button>-->
                <br>
                <router-link to="AntimicrobialTests" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>2. Antimicrobial Tests
                    </strong></h6></router-link>
                 <br>
                <router-link to="PhytochemicalAnalysis" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>3. Phytochemical Analysis
                    </strong></h6></router-link>
                 <br>
                <router-link to="NutritionalAnalysis" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>4. Nutritional analysis
                    </strong>
                    </h6></router-link><br>
                 <router-link to="MicrobiologicalAnalysis" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>5. Microbiological Analysis
                    </strong>
                    </h6></router-link><br>
                 <router-link to="SoilsampleAnalysis" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>6. Soil Sample Analysis
                    </strong>
                    </h6></router-link><br>
                    <router-link to="Toxicological" style="text-decoration: none!important;"><h6 style="text-align: left!important;padding-left:20px!important;"><strong>7. Toxicological Tests

                        </strong>
                        </h6></router-link>
                    <br>
                    <br>
                    <br>
                    <p style="text-align:left!important;padding-left:20px!important;">
                    <router-link to="" class="sqbtn"style="padding-left:70px!important;padding-right:70px!important;padding-bottom:15px!important;padding-top:15px!important;text-decoration:none;" ><strong>Request a Service</strong></router-link><br></p>
                    <br>
                    <br>
                  </div></div>
                  
                </div>
    
            </div><br>
        </div>

        <!--Services-->
       

        
    </template>
    <script>
        export default {
      name: "Services",
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