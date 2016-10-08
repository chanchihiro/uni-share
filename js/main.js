$(function(){

	//スムーススクロールの起動
	smoothScroll.init({
		speed: 1000 ,
		easing: 'easeInOutCubic',
		offset: "50px",
	}) ;

	//クリックするとcoverを変更
	$("#one").on("click",function(){
		$(".main-cover").attr("src","img/cover1.jpg");
	});
	$("#two").on("click",function(){
		$(".main-cover").attr("src","img/cover2.jpg");
	});
	$("#three").on("click",function(){
		$(".main-cover").attr("src","img/cover3.jpg");
	});

});