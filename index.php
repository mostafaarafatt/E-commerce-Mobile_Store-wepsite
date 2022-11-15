<?php
    ob_start();
    //include header
    include("header.php");

?>
            
<?php 

    /*  include banner area  */
    include ('Templates/_banner-area.php');
    /*  include banner area  */

    /*  include top sale  */
    include ('Templates/_top-sale.php');
    /*  include top sale  */

    /*  include special price  */
    include ('Templates/_special-price.php');
    /*  include special price  */

    /*  include banner ads  */
    include ('Templates/_banner-ads.php');
    /*  include banner ads  */

    /*  include new phones  */
    include ('Templates/_new-phones.php');
    /*  include new phones  */

    /*  include blogs  */
    include ('Templates/_blogs.php');
    /*  include blogs  */

?>

<?php
    //include footer
    include("footer.php");

?>
