
// メニューボタンのクリックイベント
$(".openbtn").click(function () {
	$(this).toggleClass('active'); // メニューボタンに 'active' クラスをトグル   クラスをトグル（Toggle）するというのは、特定のHTML要素にCSSクラスを追加または削除する操作を指します。
    $("#g-nav").toggleClass('panelactive'); // ナビゲーションパネルに 'panelactive' クラスをトグル
    $(".circle-bg").toggleClass('circleactive'); // 背景のサークルに 'circleactive' クラスをトグル
});

// ナビゲーションリンクがクリックされたときのイベント
$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active'); // メニューボタンから 'active' クラスを削除
    $("#g-nav").removeClass('panelactive'); // ナビゲーションパネルから 'panelactive' クラスを削除
    $(".circle-bg").removeClass('circleactive'); // 背景のサークルから 'circleactive' クラスを削除
});

// ナビゲーションリンクまたはフッターリンクがクリックされたときのスムーズスクロール
$('#g-nav a,#footer a').click(function () {

    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
     $(elmHash).css("position","relative");//idの上部の距離を取得するために1時的にstickyを無効にする
     var pos = $(elmHash).offset().top;	//idの上部の距離を取得
     $(elmHash).css("position","sticky");//stickyを有効に戻す
     $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
     return false; 
 
 });

// スクロールに応じてアニメーションを実行するための関数
function fadeAnime(){
    // 画面内に要素が入ったらアニメーションを実行
	$('.glideTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		    $(this).addClass('glide'); // 要素が視界に入ったら 'glide' クラスを追加
		}else{
		    $(this).removeClass('glide'); // 要素が視界から外れたら 'glide' クラスを削除
		}
	});	
}

// テキストが滑らかに表示されるアニメーションを実行するための関数
function glideTextAnime() {
	$('.glideTextTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		    $(this).addClass('glideTextAppear'); // 要素が視界に入ったら 'glideTextAppear' クラスを追加
		}else{
		    $(this).removeClass('glideTextAppear'); // 要素が視界から外れたら 'glideTextAppear' クラスを削除
		}
	});	
}

// スクロールイベントが発生したときにアニメーションを実行
$(window).scroll(function () {
    fadeAnime(); // スクロール時に fadeAnime 関数を呼び出し
	glideTextAnime(); // スクロール時に glideTextAnime 関数を呼び出し
});

// ページ読み込み時に実行される処理
$(window).on('load', function(){
    $("#loading-logo").delay(1200).fadeOut('slow'); // ローディングロゴを1200ミリ秒後にフェードアウト
    $("#loading").delay(1500).fadeOut('slow', function(){ // ローディング画面を1500ミリ秒後にフェードアウト
        $('body').addClass('appear'); // フェードアウト後にbodyに 'appear' クラスを追加
    });

    // 背景が伸びた後にアニメーションを実行
    $('.loadingbg').on('animationend', function() {
        fadeAnime();
	    glideTextAnime();
    });
});

document.querySelectorAll('.card').forEach(card => {
	card.addEventListener('mousemove', (e) => {
	  const rect = card.getBoundingClientRect();
	  const x = e.clientX - rect.left;
	  const y = e.clientY - rect.top;
	  const xPercent = (x / rect.width) - 0.5;
	  const yPercent = (y / rect.height) - 0.5;
  
	  const tiltAmount = 20; // カードの傾きの強さ
	  card.style.transform = `perspective(1000px) rotateX(${yPercent * tiltAmount}deg) rotateY(${xPercent * tiltAmount}deg)`;
	});
  
	card.addEventListener('mouseleave', () => {
	  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
	});
  });



  VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 25,
	speed: 400,
	glare: true,
	"max-glare": 1,
  });

