<template>
   <div>
     <h1>{{ msg }}</h1>
   </div>
</template>
<script>
export default {

  data () {
    return {
      msg: 'Welcome'
    }
  },
   methods:{
     getUnits: function() {
console.log("df");

 var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", "http://localhost:3000/recent/orders", true);
    xmlhttp.send();

     }
 },
 beforeMount(){
    this.getUnits()
 }
}
</script>
