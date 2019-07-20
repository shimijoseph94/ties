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
                    <h4 style="color:white!important;">Biodiversity Enhancement</h4>
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
      
          <h5 style="color:black!important;text-align:left!important;"><strong>WASH- Water, Sanitation & Hygiene</strong></h5>
          <br>
          <p style="text-align:left!important;">
          <img src="../assets/Riverrelink.png" style="width:100% ;height:auto;"></p>
          
          <p class="para">Rejuvenation of riverine system is an approach to conserve the riverbed, riparian ecosystem and most importantly, the watershed. It aids re-establishing adequate flow of water in rivulets that have been encroached or have dried up. The sustainability of such an initiative is entirely dependent on community participation. 

          </p>
           
           <p class="para">Meenachil is the main river passing through 34 Gram Panchayats and 4 municipalities in Kottayam district. Meenanthara and Kodoor rivers are its tributaries, which were connected in the past at many locations through small streams and rivulets (puzha), but many such connections have been lost because of change in land use and encroachments. Cutting off small water channels in this manner has resulted in thousands of acres of paddy fields turning barren. The Meenachil River was once an ideal breeding ground for more than 70 varieties of fishes but now the aquatic diversity has been drastically depleted because of decreasing inflow of water. Illegal sand mining has also altered the original course of the river.</p>
          
           <p class="para">Meenachil-Meenanthara-Kodoor Rejoining Peoples Collective (MMKRPC) evolved to rejuvenate these three rivers by re-joining them through the connecting rivulets and streams. As technical partner to this massive project, TIES has the responsibility for research, developing initiatives, implementing activities and reaching out to potential partners to support project activities such as the one at Elipulikkattukadavu.
           <h5 style="color:black!important;text-align: left!important;">River Relinking at Elipulikkattukadavu</h5>
         <p class="para">Elipulikkattukadavu is on the Meenanthara river near Kottayam. The area is criss-crossed with a number of distorted and polluted rivulets.  In some locations, the original paths of the streams had been completely blocked by soil deposition, weed growth and dumped household waste. During the course of this project, obstructions to free flow of water were removed, rivulet banks reinforced and, wherever necessary, new bridges were constructed for ease of access. </p>
         <p class="para">There was hands-on participation with the community turning out in force armed with shovels and buckets. Heavy machinery had to used in some instances when illegal encroachments were removed or restrained. The work was accomplished with all sections of the community participating; farmers, local women self-help groups, government officers including representatives of Agriculture and Irrigation Departments, agriculture engineers, scientists, researchers, elected representatives etc.</p>
         <p class="para">As a result of this initiative. the revived rivers recharged open wells nearby which helped hundreds of households overcome hydrological drought during the last summer, As part of the project, over 1200 acres of abandoned fields have been restored with paddy cultivation after 20-25 years. Also, during the 2018 flood disaster in Kerala, these rejuvenated rivulets helped in flood control by enabling free flow of water.</p>
         <p class="para">With the restart of agriculture, the farmers have taken on the responsibility of keeping the water flow uninterrupted and unpolluted, turning formerly abandoned and waste-choked rivulets into beautiful inland waterways.

        </p>
        <p class="para">The project began at Elipulikkattukadavu and has restored around 156 km of rivulets and streams. Almost 55 rivulets were restored as part of this. The Meenachil-Meenathara-Kodur river complex still has more than 3000 small streams and rivulets that have been killed by neglect. Reviving these areas would give a new lease of life to many acres of farmlands. These areas are being mapped and the community engaged with in preparation for similar projects.</p> 

<br>
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
 <b-carousel-slide  img-src :img-src="require('../assets/RiverRelink1.png')">
   <h1>Boating on the Meenanthara at Elipulikkattukadavu</h1>
 </b-carousel-slide>

<!--<b-carousel-slide img-src :img-src="require('../assets/RiverRelink2.png')">
   <h1>Meenachil-Meenanthara-Kudoor Relinkink Map</h1>
 </b-carousel-slide>-->

  <b-carousel-slide  img-src :img-src="require('../assets/RiverRelink3.png')">
   <h1>Padiyarakkadavu Inland Waterway</h1>
 </b-carousel-slide>
 <b-carousel-slide  img-src :img-src="require('../assets/RiverRelink4.png')">
  <h1>Kanjikuzhy Canal</h1>
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



    .jj{
        background-color: #9ACD32!important;
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