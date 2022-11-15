<?php
    ob_start();
    //include header
    include("header.php");

?>
            
<?php 

    /*  include cart template  */
    count($product->getdata('cart')) ? include ('Templates/_cart-template.php') : include ('Templates/not_found/_cart-notfound.php') ;
    /*  include cart template  */

    /*  include wishlist template  */
    count($product->getdata('wishlist')) ? include ('Templates/wishlist_template.php') : include ('Templates/not_found/_wishlist-notfound.php') ;
    /*  include wishlist template  */

    /*  include new phones  */
    include ('Templates/_new-phones.php');
    /*  include new phones  */


?>

<?php
    //include footer
    include("footer.php");

?>