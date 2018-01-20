
<template>

  <div class="mains">

<call-dialog-linkHeader></call-dialog-linkHeader>
  
  <div class="row mr-0">

    <div class="col-md-3 pr-0">

       <call-dialog-link></call-dialog-link>


    </div>

    <!-- Page Content -->
    <div class="col-md-9 pl-0 pr-0">
              <div v-show="alertVisible" class="alert22">
  <div class="modal-content" v-if="order && Object.keys(order).length">
      <h3>Order Details: {{order.OrdID}}<img src="../assets/images/pop_i.jpg"> <span @click="alertVisible = false" class="close">&times;</span></h3>
      <div class="row">
        <div class="col-sm-3">
          <div class="box">
            <h6><b>Order Number:</b> {{order.OrdID}}</h6>
            <h6><b>Bill to:</b>{{order.Address.BillTo.Addr1}} </h6>
           
          </div>
        </div><!-- col-sm-3 -->
        
        <div class="col-sm-3">
          <div class="box">
            <h6><b>Order Date:</b>{{order.OrdCreatedDate}} </h6>
            <h6><b>Sold Custmore info:</b> {{order.SoldCustInfo}}</h6>
          
          </div>
        </div><!-- col-sm-3 -->
        
        <div class="col-sm-3">
          <div class="box">
            <h6><b>Order Created Format:</b>{{order.OrdCreatedFormatted}}</h6>
            <h6><b>Branch:</b>{{order.Address.BillTo.City}}</h6>
            
          </div>
        </div><!-- col-sm-3 -->
        
        <div class="col-sm-3">
          <div class="box">
            <h6><b>Bill Custmoreid:</b> {{order.BillCustID}}</h6>
            <h6><b>Sales Person:</b> {{order.SlsprsnDesc}}</h6>
            
          </div>
        </div><!-- col-sm-3 -->
        
      </div><!-- row -->
      <h5>Order Details</h5>
      
      <table>
        <thead>
          <tr>
            <th>Order number</th>
            <th>TotQty</th>
            <th>BillCustID</th>
            <th>Branchid</th>
            <th>Branch Name</th>
            <th>Custmor PO</th>
            <th>AltName</th>
            <th>Allocate Price</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>{{order.OrdNum}}</td>
            <td>{{order.TotQty}}</td>
            <td>{{order.BillCustID}}</td>
            <td>{{order.BranchID}}</td>
            <td>{{order.Branch.BrName}}</td>
            <td>{{order.CustPONum}}</td>
            <td>{{order.Detail.AltName}}</td>
            <td>{{order.AllocAmt}}</td>
          </tr>
        
          
        </tbody>
      </table>
    
      </div>
  </div>
      <div id="content" class="data_content">

      <h3 class="breadc">Home <span>Recent Orders</span></h3>
      
      <div class="recen clearfix">
        <h4><b>Recent</b> Purchase Orders</h4>
        <div class="row m-25">
          <div class="col-md-6">
            
            <form class="form-inline" action="">
              <div class="form-group">
              <label>Show </label>
               <select>
                <option value="volvo">10</option>
                <option value="volvo">10</option>
                <option value="volvo">10</option>
                <option value="volvo">10</option>

              </select><label> Entries</label>
              </div>
            </form>
            
          </div>
          <div class="col-md-6">
            <form class="form-inline pull-right" action="/action_page.php">
              <div class="form-group">
              <label>Search</label>
               <input type="search">
              </div>
            </form>
          </div>
        </div>

        <table>
          <tr>
            <th>OrderID<img src="../assets/images/arrow.jpg"></th>
            <th>Order Created<img src="../assets/images/arrow.jpg"></th>
            <th>Alloc Amount <img src="../assets/images/arrow.jpg"></th>
            <th>InvoiceInfo<img src="../assets/images/arrow.jpg"></th>
            <th>Status <img src="../assets/images/arrow.jpg"></th>
            <th>Actions <img src="../assets/images/arrow.jpg"></th>
          </tr>

          <tr v-for="msgdata in msg">
            <td>{{msgdata.OrdID}}</td>
            <td>{{msgdata.OrdCreatedFormatted}}</td>
             <td>{{msgdata.AllocAmt}}</td>
             <td>{{msgdata.InvoiceInfo}}</td>
             <td>{{msgdata.StatusOptDesc}}</td>
             <td @click="alertVisible = true" v-on:click="select($event)" v-bind:id="msgdata.OrdID">View PurchaseOrder</td>
             </tr>
         
        </table>
        
        <div class="row m-25">
          <div class="col-md-6">
            
            <form class="form-inline" action="">
              <div class="form-group">
              <label>Showing 1 to 7 of 7 entries</label>
               
              </div>
            </form>
            
          </div>
         
        </div>
        
      </div>
        <div class="ftr">
          <div class="row mr-0 ml-0">
            <div class="col-md-6 pl-30"><h4>NextVNI analytics platform is  2016 Allied Inventory Systems, Inc.</h4></div>
            <div class="col-md-6 text-right"><h4>Powered by <span>Allied NextVMI</span></h4></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button @click="alertVisible = true">Open Dialog</button>
</div>
 
</template>

<script>
import Popup from 'vue-popup';
import vue from 'vue';

require('vue-popup/lib/popup.css');
  import SideBar from './Sidebar.vue'
    import Header from './header.vue'


export default {
  name: 'orders',
  mixins: [Popup],
  data () {
    return {
      msg: [],
      order:[],
      showModal: true,
      alertVisible: false
    }
  },
  props: {
        modal: {
          default: true
        },
        closeOnClickModal: {
          default: true
        }
      },


  created: function(){
    this.getUnits();
  },
   components: {
            'call-dialog-link': SideBar,
            'call-dialog-linkHeader': Header,
      },
        methods:{


            select: function (e) {
                  var vueInstance2 = this;
    var id=e.target.id;
    var xmlhttp2;
    xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function(){
    if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200){
      var data=xmlhttp2.responseText;

vueInstance2.order=JSON.parse(data);



        }
    }
    xmlhttp2.open("GET", "http://localhost:3000/recent/orders/:"+id, true);
    xmlhttp2.send();

      },
     getUnits: function() {

            var vueInstance = this;
       var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data=xmlhttp.responseText;
      vueInstance.msg=JSON.parse(data);
      console.log("consoledsdsdsd=>",this.msg);
        }
    }
    xmlhttp.open("GET", "http://localhost:3000/recent/orders", true);
    xmlhttp.send();

     }
 }
    }   
</script>

