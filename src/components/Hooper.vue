<template>

<div>
  <hooper :infiniteScroll="true" :itemsToShow="4"   :progress="true" :autoPlay="true" :playSpeed="5000" :settings="hooperSettings">
    
     
       <!--<slide>
            <div class="col-md-12">
               <img src="../assets/l1.jpg" style="width:250px; height:250px;">
            </div>  
          </slide> -->
    <slide>
      <div class="col-md-12">
        <img src="../assets/partner2.png">
      </div>  
    </slide> 
     
   
  
   <slide>
        <div class="col-md-12">
            <img src="../assets/partner3.png">
        </div>  
      </slide> 

      <slide>
        <div class="col-md-12">
            <img src="../assets/pp.jpg" style="width:100%; height:auto;">
        </div>  
      </slide> 
      <slide>
        <div class="col-md-12">
            <img src="../assets/l18.png" style="width:100%; height:auto;">
        </div>  
      </slide> 
      
  <slide>
    <div class="col-md-12">
      <img src="../assets/l16.png" style="width:100%; height:auto;">
  </div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l20.png" style="width:100%; height:auto;">
</div>  
</slide>
<slide>
  <div class="col-md-12">
    <img src="../assets/l21.png" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l22.png" style="width:100%; height:auto;">
</div>  
</slide>
<slide>
  <div class="col-md-12">
    <img src="../assets/l10.png" style="width:100%; height:auto;">
</div>  
</slide> 




  <div class="col-md-12">
    <img src="../assets/l2.gif" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l8.png" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l9.jpg" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l11.jpg" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l12.jpg" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l13.png" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l16.png" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l17.png" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l18.png" style="width:100%; height:auto;">
</div>  
</slide> 

<slide>
  <div class="col-md-12">
    <img src="../assets/l7.png" style="width:100%; height:auto;">
</div>  
</slide> 

<slide>
  <div class="col-md-12">
    <img src="../assets/l19.png" style="width:100%; height:auto;">
</div>  
</slide> 
<slide>
  <div class="col-md-12">
    <img src="../assets/l15.jpg" style="width:100%; height:auto;">
</div> 
 </slide>


    
<hooper-navigation slot="hooper-addons" style="padding-left:80px!important;"></hooper-navigation>
  </hooper>
</div>

</template>
<script>
  import {
  Hooper,
  Slide,
  Navigation as HooperNavigation 
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  export default {
     components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 5,
            pagination: 'fraction'
          }
        }
      }
    };
  }

 }
</script>
<style>

@media (min-width:375px) {
.hooper{
    
    
    width: 100%;
    height: auto; 
}
}
@media only screen   
and (min-device-width : 320px)   
and (max-device-width : 480px)  
{ 
  .hooper{
    
    
    width: 100%;
    height: auto; 
}
}

a{
  color:black!important;
  
}
.bk{
  background-color:grey;
}
.two {
  border-style: solid;
  border-width: 1px;
  border-color:black;
 
}

.so{
 background-color: brown!important;
}
.para {
    color: black !important;
      font-size: 15px !important ;
      line-height: 1.5 !important;
      text-align: justify !important;
      display: block !important;
      margin-block-start: 1em !important;
      margin-block-end: 1em !important;
      margin-inline-start: 0px !important;
      margin-inline-end: 0px !important;
  }
  .square_btn
  {
      display: inline-block;
      padding: 7px 20px;
      border-radius: 25px;
      text-decoration: none;
      color: #FFF;
      background: cornflowerblue;
      transition: .4s;
  }
</style>
