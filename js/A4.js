let next=document.getElementById('next');
next.onclick=newItem;

function newItem(){
    let div=document.createElement('div');
    div.classList.add('row');


    let label_item=document.createElement('label');
    label_item.classList.add('form-label');
    label_item.innerHTML='Item Name';

    let inputbox_item=document.createElement('input');
    inputbox_item.classList.add('form-control');
    inputbox_item.type='text';

    let div1=document.createElement('div');
    div1.classList.add('col-md-3');
    div1.appendChild(label_item);
    div1.appendChild(inputbox_item);


    let label_qty=document.createElement('label');
    label_qty.classList.add('form-label');
    label_qty.innerHTML='Quantity';

    let inputbox_qty=document.createElement('input');
    inputbox_qty.classList.add('form-control');
    inputbox_qty.type='text';

    let div2=document.createElement('div');
    div2.classList.add('col-md-2');
    div2.appendChild(label_qty);
    div2.appendChild(inputbox_qty);


    let label_price=document.createElement('label');
    label_price.classList.add('form-label');
    label_price.innerHTML='Unit Price';

    let inputbox_price=document.createElement('input');
    inputbox_price.classList.add('form-control');
    inputbox_price.type='text';

    let div3=document.createElement('div');
    div3.classList.add('col-md-2');
    div3.appendChild(label_price);
    div3.appendChild(inputbox_price);


    let label_total=document.createElement('label');
    label_total.classList.add('form-label');
    label_total.innerHTML='Unit Price';

    let inputbox_total=document.createElement('input');
    inputbox_total.classList.add('form-control');
    inputbox_total.type='text';

    let div4=document.createElement('div');
    div4.classList.add('col-md-3');
    div4.appendChild(label_total);
    div4.appendChild(inputbox_total);


    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    let form=document.getElementById('form');
    form.appendChild(div);
    
}
