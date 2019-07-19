<template>
    <div class="container">
        

            <form style="padding-top:50px!important;">
                
                    <div class="form-group">
                        <p style="text-align: left!important;">* All Fields are required</p>
                      <label for="exampleInputEmail1" style="text-align: left!important;"></label>
                      <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Payable Amount">
                      
                    </div>
                    <div class="form-group">
                      
                      
                            <input class="form-control" type="text" :placeholder ="welcome" readonly>
                    </div>
                    <div class="form-group">
                      
                          <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Full Name (only Alphabets)">
                          
                        </div>
                        <div class="form-group">
                           <input type="text" class="form-control" id="exampleI" aria-describedby="emailHelp" placeholder="Mobile Number (10 Digits)">
                                
                              </div>
                              <div class="form-group">
                                    <input type="email" class="form-control" id="exampleI" aria-describedby="emailHelp" placeholder="Email">
                                         
                                       </div>
                                       <div class="form-group">
                                            <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address"></textarea>
                                                 
                                               </div>
                    <p style="text-align: right!important;">
                    <button type="submit" class="square_btn">Submit</button>
                    <button type="submit" class="square_bt">Cancel</button></p>
                </p>
                    
                  </form>
    </div>
</template>
<script>
  export default {
name: "Donate",
props:['msg'],
data() {
  return {
     welcome:'',
     
    
  }
},
mounted(){
  if(this.msg){
    this.welcome=this.msg
  }
}

  }
</script>
<style>
    .square_btn
  {
      display: inline-block;
      padding: 7px 20px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
      text-decoration:none;
      color: #FFF!important;
      background: #9ACD32!important;
      transition: .4s;
  } 
  .square_bt{
      
    display: inline-block;
      padding: 7px 20px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
      text-decoration:none;
      color: black!important;
      background: white!important;
      transition: .4s;
  }
</style>