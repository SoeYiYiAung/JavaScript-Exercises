$(document).ready(function(){
    //select elements

    let lis=$('li');
    console.log(lis);

    let hotitems=$('.hot');
    console.log(hotitems);

    let items=$('.hot,.promotion');
    console.log(items);

    let id_items=$('#featured');
    console.log(id_items);

    let username=$('#name');
    let password=$('#pwd');
    console.log(username);
    console.log(password);

    console.log(lis.text());

    console.log($('li:even'));

    //css
    $('li:even').css('background-color','green');
    $('li:even,.hot').css('text-transform','uppercase');

    //class
    $('li:first').addClass('first');
    $('li.promotion').removeClass('promotion');

    //event
    $('.btnToggle').click(function(){
        $('li:last').toggleClass('first');
    })

    console.log($('li:first').hasClass('first'));

    //Manage Element
    $('ul').append('<li><h3>Append Element</h3></li>');
    $('ul').prepend('<li><h3>Prepend Element</h3></li>');

    let new_element=$('<p>Paragraph</p>');
    new_element.appendTo('ul');

    //attribute attr

    let gender=$('<input>');
    gender.attr('type','radio');
    gender.attr('name','gender');

    $('ul').append(gender);
    $('ul').append('<label>Male</label>')
    
    
})