<template>
    <nav id="sidebar">
      <ul class="list-unstyled components">
        <li><a href="#"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</a></li>
        <li> <router-link to="/recent/orders">Recentss Orders</router-link></li>
      <li>
  <router-link to="/testapi">testapi</router-link>
      <li>

        <li><a href="/recent/orders"><i class="fa fa-files-o" aria-hidden="true"></i> Recent Orders</a></li>
        <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i> Invoice Lookup</a></li>
        <li>
          <a href="#" data-toggle="collapse" aria-expanded="false">Administration</a>
          <ul class="collapse list-unstyled" id="homeSubmenu">
            <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i> Create User</a></li>
            <li><a href="#"><i class="fa fa-lock" aria-hidden="true"></i> User Permissions</a></li>
            <li><a href="#"><i class="fa fa-table" aria-hidden="true"></i> User Activity Log</a></li>
          </ul>
        <li><a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> PO Calendar</a></li>
        <li><a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> Shipment Calendar</a></li>
         </ul>
    </nav>
</template>
 <script>
export default {

}
</script>

 
