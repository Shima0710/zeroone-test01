


$(document).ready(function() {
	const numStars = 100; // 星の数
	const starContainer = $('#star-background');
  
	for (let i = 0; i < numStars; i++) {
	  const star = $('<div class="star"></div>');
	  const size = Math.random() * 3; // 星のサイズをランダムに
	  const posX = Math.random() * 100; // 星の位置Xをランダムに
	  const posY = Math.random() * 100; // 星の位置Yをランダムに
	  const animationDuration = Math.random() * 10 + 5; // アニメーションの長さをランダムに
  
	  star.css({
		width: size + 'px',
		height: size + 'px',
		top: posY + '%',
		left: posX + '%',
		animation: `twinkle ${animationDuration}s infinite alternate`
	  });
  
	  starContainer.append(star);
	}
  });