
$(document).ready(function(){

    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1
    });
    
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    //for new phones
    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    //for blogs
    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });

    //iso filters
    var $grid = $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    });

    //filter item on button click
    $(".button-group").on("click","button",function(){
        var filterVlaue = $(this).attr('data-filter');
        $grid.isotope({ filter:filterVlaue});
    });

    //product qty section 
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    let $deal_price = $("#deal-price");
    //let $qty_input = $(".qty .qty_input");

    //press to button up
    $qty_up.click(function(e){

        let $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        let $price = $(`.product_price[data-id='${$(this).data("id")}']`);

        //change product price using ajax call
        $.ajax({url:"Templates/ajax.php", type:'post', data:{ itemid: $(this).data("id")}, success: function(result){
            let obj = JSON.parse(result);
            let item_price = obj[0]['item_price'];

            if($qty_input.val()>=1 && $qty_input.val()<=9){
                $qty_input.val(function(i,oldval){
                    return ++oldval;
                })

                //increasing the price of product
                $price.text(parseInt(item_price*$qty_input.val()).toFixed(2));

                //suptotal price
                let subtotal = parseInt($deal_price.text())+parseInt(item_price);
                $deal_price.text(subtotal.toFixed(2));
            }

            

        }}); //closing ajax request
   
    });

    //press to button down
    $qty_down.click(function(e){
        let $qty_input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        let $price = $(`.product_price[data-id='${$(this).data("id")}']`);

        //change product price using ajax call
        $.ajax({url:"Templates/ajax.php", type:'post', data:{ itemid: $(this).data("id")}, success: function(result){
            let obj = JSON.parse(result);
            let item_price = obj[0]['item_price'];

            if($qty_input.val()>1 && $qty_input.val()<=10){
                $qty_input.val(function(i,oldval){
                    return --oldval;
                })
                //decreasing the price of product
                $price.text(parseInt(item_price*$qty_input.val()).toFixed(2));

                //suptotal price
                let subtotal = parseInt($deal_price.text())-parseInt(item_price);
                $deal_price.text(subtotal.toFixed(2));

            }

            
        }}); //closing ajax request

    });

    

});

