<template>

<div>
  <hooper :infiniteScroll="true" :itemsToShow="4"   :progress="true" :autoPlay="true" :playSpeed="8000">
    
      <slide>
          <div class="col-md-12">
             <img src="../assets/partner1.png" style="width:100%;height:auto;" >
          </div>  
        </slide> 
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
 }
</script>
<style>
.bgt{
  height:auto;
  width:auto;
 
}
@media (min-width: 576px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto !important; 
}
}

@media (min-width:375px) {

.bgt{
  height:auto;
  width:300px;
 
}
}
@media (min-width:375px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:1281px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:1441px) {
.hooper{
    position: relative;
   
    width: auto;
    height: auto; 
}
}
@media (min-width:1025px) {
.hooper{
    position: relative;
  
    width: auto;
    height: auto; 
}
}
@media (min-width:768px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}
@media (min-width:320px) {
.hooper{
    position: relative;
    
    width: auto;
    height: auto; 
}
}

h1, h2 {
  font-weight: normal;
}
@media (min-width:1441px) {
.bgt{
  height:auto;
  width:auto; 
}
}

a{
  color:black!important;
  font-weight:bold!important;
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
