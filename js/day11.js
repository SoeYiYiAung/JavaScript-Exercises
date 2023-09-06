$(document).ready(function(){
    $('.delete').click(function(){
        let tr=$(this).parent('td').parent('tr');
        console.log(tr);
        let id=tr.attr('id');
        console.log(id);

        //tr.hide();

        
    })
    console.log($('.first').nextAll());
    let last=$('li:last');
    console.log(last);
    console.log($('.first').nextUntil(last));

    last.prevUntil($('.first')).addClass('hot');

    $('.hide').click(function(){
        $('.flower').hide();
    })
    $('.show').click(function(){
        $('.flower').show(2000,function(){
            console.log('complete')
        });
    })
    $('.toggle').click(function(){
        $('.flower').toggle();
    })

    $('.fadein').click(function(){
        $('.flower').fadeIn(2000);
    })

    $('.fadeout').click(function(){
        $('.flower').fadeOut(2000);
    })

    $('.fadetoggle').click(function(){
        $('.flower').fadeToggle(2000);
    })

    $('.fadeto').click(function(){
        $('.flower').fadeTo('slow',0.5);
    })

})