
$(document).ready(function () {
  AOS.init();
  $(".card1").css({
    'height': ($(".card2").height() + 'px')
  });
  $(".ul1").css({
    'height': ($(".ul2").height() + 'px')
  });

  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
});

$(window).resize(function () {
  console.log("asd");
  $(".card1").css({
    'height': ($(".card2").height() + 'px')
  });
});

$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

var hely=document.getElementById("year");
ev=new Date()
hely.innerHTML=ev.getFullYear();


// let mini = ["29.900","39.900", "49.900"];
// let midi = ["59.900", "69.900", "79.900"];
// let maxi = ["89.900", "99.900", "119.900"];

// console.table(mini);

// var x = document.getElementById("minihour");
// x.addEventListener('change', (event) => {
//     beszur=document.getElementById('miniprice');
//     document.getElementById('minilabel').innerHTML=x.value+' óra';
//     switch (x.value) {
//         case '1':
//             beszur.innerHTML=mini[0]+" Ft";
//             break;
//         case '1.5':
//             beszur.innerHTML=mini[1]+" Ft";
//             break;
//         case '2':
//             beszur.innerHTML=mini[2]+" Ft";
//             break;
//     }
// });

// var y = document.getElementById("midihour");
// y.addEventListener('change', (event) => {
//     beszur=document.getElementById('midiprice');
//     document.getElementById('midilabel').innerHTML=y.value+' óra';
//     switch (y.value) {
//         case '3':
//             beszur.innerHTML=midi[0]+" Ft";
//             break;
//         case '4':
//             beszur.innerHTML=midi[1]+" Ft";
//             break;
//         case '5':
//             beszur.innerHTML=midi[2]+" Ft";
//             break;
//     }
// });

// var z = document.getElementById("maxihour");
// z.addEventListener('change', (event) => {
//     beszur=document.getElementById('maxiprice');
//     document.getElementById('maxilabel').innerHTML=z.value+' óra';
//     switch (z.value) {
//         case '6':
//             beszur.innerHTML=maxi[0]+" Ft";
//             break;
//         case '7':
//             beszur.innerHTML=maxi[1]+" Ft";
//             break;
//         case '8':
//             beszur.innerHTML=maxi[2]+" Ft";
//             break;
//     }
// });

