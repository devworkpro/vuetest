
<template>

  <div class="mains">

<call-dialog-linkHeader></call-dialog-linkHeader>
  
  <div class="row mr-0">

    <div class="col-md-3 pr-0">

       <call-dialog-link></call-dialog-link>


    </div>

    <!-- Page Content -->
    <div class="col-md-9 pl-0 pr-0">

      <div id="content" class="data_content">

      <h3 class="breadc">Home Dashboard</span></h3>
      
  
    
      </div>
    </div>
  </div>

</div>
 
</template>

<script>

  import SideBar from './Sidebar.vue'
    import Header from './header.vue'


export default {
  data () {
    return {
      msg: "sd",

    }
  },
   components: {
            'call-dialog-link': SideBar,
            'call-dialog-linkHeader': Header,
      }  
    }   
</script>

