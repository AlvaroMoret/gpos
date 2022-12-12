
/*	Define Click Event for Mobile */
if( 'ontouchstart' in window ){ var click = 'touchstart'; }
else { var click = 'click'; }


/*	Click menu toggle */
$('div.toggle').on(click, function(){
	if( flag ){
		if( !$(this).hasClass('minus') ){ openMenu(); } 
		else { closeMenu(); }
	}
});


/*	Click menu icons */
$('div.menu ul li a').on(click, function(e){
	//e.preventDefault();
	//closeMenu();
});


/*	Open/ Close Menu Functions */
var flag = true; // Prevent menu change while animating
function openMenu(){
	flag = false;
	
	// Remove circle
	$('div.circle').remove();
				
	// Update toggle
	$('div.toggle').addClass('minus');
	$('div.y').addClass('minus');
	setTimeout(function(){ $('div.x').addClass('stretch'); }, 100);
	setTimeout(function(){ $('div.x').removeClass('stretch'); }, 300);
	
	// Move content
	$('div.content').addClass('bounce');
	setTimeout(function(){ $('div.content').removeClass('bounce').addClass('open'); }, 250);
	
	// Animate menu icons
	$('div.menu ul li').addClass('animate');
	$('div.menu ul li').addClass('move');
	setTimeout(function(){ $('div.menu ul li').addClass('color'); }, 200);
	setTimeout(function(){ flag = true; }, 400);
}

function closeMenu(){
	flag = false;
			
	// Update toggle
	$('div.toggle').removeClass('minus');
	$('div.y').removeClass('minus');
	$('div.x').addClass('shrink');
	setTimeout(function(){ $('div.x').removeClass('shrink'); }, 200);
	
	// Move content
	$('div.content').removeClass('open');
	
	// Reset menu icons
	setTimeout(function(){					
		$('div.menu ul li').removeClass('animate');
		$('div.menu ul li').removeClass('color move');
		flag = true;
	}, 300);
}