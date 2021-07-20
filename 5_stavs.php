<?php
$title = "Welcome";                   // (1) Set the title
include "header.php";                 // (2) Include the header
?>

<!-- begin page content -->
<div id="container">

  <div id="leftThing">
    <button class=btn first value=5-001 onclick=myFunction()>5-001</button>
    <button class=btn first value=5-002 onclick=myFunction()>5-002</button>
    <button class=btn first value=5-003 onclick=myFunction()>5-003</button>
    <button class=btn first value=5-004 onclick=myFunction()>5-004</button>
    <button class=btn first value=5-005 onclick=myFunction()>5-005</button>
    <button class=btn first value=5-006 onclick=myFunction()>5-006</button>
    <button class=btn first value=5-007 onclick=myFunction()>5-007</button>
    <button class=btn first value=5-008 onclick=myFunction()>5-008</button>
    <button class=btn first value=5-009 onclick=myFunction()>5-009</button>
  </div>

  <div id="content">
    <img src='/work/img/5_stavs.png' />
  </div>
</div>
<!-- end page content -->

<?php
include "footer.php";                 // (3) Include the footer