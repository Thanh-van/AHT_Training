function slide(a) {
	var	slider_show=$('.blog__main');
	var key=".blog__main__item"+a;
	children__slide(slider_show,key,'show');
	var item_click=$('.btn-slide ul li');
	key=".bt"+a;
	children__slide(item_click,key,'btn-active');
}
function children__slide(a,key,name) {
	a.children().removeClass(name);
	a.children(key).addClass(name);
}
function nav_bar() {
	var x=$(".nav-link");
	var body=$("body");
	console.log(x[0].className);
	if (x[0].className === "nav-link Menu_bar") {
		body.css("margin-left","0");
		body.css("transition","all .3s ease");
		x.removeClass('Menu_bar');
	}else{
		x.addClass('Menu_bar');	
		body.css("margin-left","-60%");
				body.css("transition","all .3s ease");
	}
}
function seach() {	$('.seach_box').addClass("seach__active"); }
function seach_close() {	$('.seach_box').removeClass("seach__active");}

function Remove_item_cart() {
	var xoa=$('.delete');
 		for(cls of xoa)
 		{
 			cls.addEventListener('click', (e)=>{
 			 	var x= e.target.parentNode;
 			 	console.log(e);
 			 	x.parentNode.remove();
 			}
 			);
 		}
}
var list_product=[];
function add_cart() {
	var add=$('.add-cart');
	var item__cart=[];
	for(addd of add){
	addd.addEventListener('click', (e)=>{
 			 	var x= e.target.parentNode;
 			 	var img= x.offsetParent.children[0].outerHTML;
 			 	var name= x.offsetParent.parentNode.children[1].firstElementChild.innerText;
 			 	var price=x.offsetParent.parentNode.children[1].lastElementChild.children[0].lastElementChild.innerText;
  				item__cart=[img,name,price];
  				list_product.push(item__cart);
  				alert('Thêm Thành Công !');
  				console.log(list_product);
  				Note_ADD_cart();
  				Remove_item_cart();
  			}
 			);
	}
	
}
function add__item__cart() {
	
}
function Note_ADD_cart() {
	var x=$('.shop__cart__row');
	$('.shop__cart__item').remove();
	var shop__cart ="<div class='shop__cart__item'>";
	var cart__img='<div class="cart__item__img">';
	var cart__name='<div class="cart__item__name">';
	var cart__price='<div class="cart__item__price">';
	var cart__de='<div class="delete"><i class="fas fa-trash"></i></div>';
	for (var i = 0; i < list_product.length; i++) {
		x.append(shop__cart+cart__img +'<a href="">'+list_product[i][0]+'</a></div>'+cart__name+'<p>'+list_product[i][1]+'</p></div>'+cart__price+'$100</div>'+cart__de+'</div>');
	}
}
function Autocomplete() {
	var availableTags = [];
    var name = $('.product-name p');
    for (var i = 0; i < name.length; i++) {
    	availableTags.push(name[i].innerText);
    }
    $( "#tags" ).autocomplete({
      source: availableTags
    });
}

$(document).ready(function(){
	slide(2);
   Remove_item_cart(); 
   add_cart();
   Autocomplete();
});
