<template>
    <div class="navv" style="background-color: black!important;">
    <b-navbar  toggleable="lg" type="dark" variant="dark" style="background-color: black!important;">
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <a href="Home"><b-nav-text><h6 style="color:black;"></h6></b-nav-text></a>
       <a href="Home"><b-nav-text><h6 style="color:black;"></h6></b-nav-text></a>
         <b-img :src="require('../assets/ph1.png')" style=" width:50px; height:auto;text-align: center!important;padding-bottom:10px;"></b-img>
        <a href=""><b-nav-text><h6 style="color:white;">+91-481-2503988     </h6></b-nav-text></a>
        <a href=""><b-nav-text><h6 style="color:white;padding-left:20px!important;">   | </h6></b-nav-text></a>
        <b-img :src="require('../assets/mail.png')" style=" width:50px; height:auto;text-align: center!important;padding-bottom:10px;padding-left:20px!important;"></b-img>
        <a href=""><b-nav-text><h6 style="color:white;padding-left:10px!important;">tropicalschool@gmail.com</h6></b-nav-text></a>
        <b-collapse is-nav id="nav_collapse">
          
          <b-nav-item href="#" class="mx-auto"></b-nav-item>
          <b-nav-item><a href="#">
            <font-awesome-icon :icon="['fab', 'facebook-f']" style=" border-radius: 50%;  border: 1x solid grey;
            padding:10px;  width:40px; height:40px;" size="1x" /></a> </b-nav-item>
         <b-nav-item > <a href="#">
          <font-awesome-icon :icon="['fab', 'youtube']" style=" border-radius: 40%;  border: 1x solid grey;
        padding:10px; width:40px; height:40px;" size="1x" /></a> </b-nav-item>
          <b-nav-item> <a href="#">
            <font-awesome-icon :icon="['fab', 'twitter']" style=" border-radius: 50%;  border: 1x solid grey;
       padding:10px;  width:40px; height:40px;" size="1x" /></a></b-nav-item>
         <b-nav-item><!--<a href="#">
           <font-awesome-icon :icon="['fab', 'google']" style=" border-radius: 50%;  border: 1x solid grey;
       padding:10px;  width:40px; height:40px;" size="1x" /></a>--></b-nav-item>
        
          
         </b-collapse>
         </b-navbar-nav toggleable="lg"> 
       <b-navbar-brand>
          <!--<a href="Home">  <b-img :src="require('../assets/isilogo.jpg')" style="margin-left:20px; width:100px; height:auto;"></b-img></a>-->
          </b-navbar-brand>
      </b-navbar>
    </div>
    </template>
    
    <script lang="js">
       export default    {
         name: 'app-header'
                         }
    </script>
    
    <style>
      
    .navbar .nav-text .h3{
      text-align:center;
    }
    .navbar-toggler{
        
        background-color:black  !important;
      
    }
    .navvink{
      color:black !important;
      
    }
    .nav-item a{
      color:black  !important;
   
    }
    a:hover{
      color:black  !important;
    }
    
    @media (min-width: 1281px) {
      .navbar-expand-lg .navbar-nav .nav-link  .nav-item  {
      
        margin-right: 15px;
        margin-left: 15px;
        padding-left:100px; 
         
    }
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      .navbar-expand-lg .navbar-nav .nav-link  .nav-item .nav-text .h3 {
      
        margin-right: 15px;
        margin-left: 15px;
        padding-left:200px;
        font-size:12px;
        text-align:center;  
    }
    }
    @media (min-width: 768px) and (max-width:1024px) {
      .navbar-expand-lg .navbar-nav .nav-link  .nav-item  .nav-text .h3{
       
        margin-right: 15px;
        margin-left: 15px;
        padding-left:150px; 
    }
    }
    @media (min-width: 481px) and (max-width: 767px) {
      .navbar-expand-lg .navbar-nav .nav-link  .nav-item {
      
        margin-right: 15px;
        margin-left: 15px;
        padding-left:100px;
      }
    }
    @media (min-width: 320px) and (max-width: 480px) {
       .navbar-expand-lg .navbar-nav .nav-link  .nav-item {
      
        margin-right: 15px;
        margin-left: 15px;
        padding-left:100px;
      }
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    
    li {
      display: inline-block;
      margin: 0 10px;
      hover-color:black  !important;
         text-decoration: none;
    }
    
    a {
      color: black;
      font-weight:normal !important;
      font-size:16px !important;
      
    }
    a:hover{
      color:black !important;
    }
     a :hover{
        text-decoration: none !important;
    }
    .fa-facebook-f {
    background: #3B5998;
    color: white;
  }

  .fa-twitter {
    background: #55ACEE;
    color: white;
  }

  .fa-google {
    background: #dd4b39;
    color: white;
  }

  .fa-linkedin {
    background: #007bb5;
    color: white;
  }
  

  .fa-youtube {
    background: #bb0000;
    color: white;
  }

  .fa-instagram {
    color: white;
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, .25);
  }
    
    </style>