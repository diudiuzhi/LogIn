var $ = function(name) {return document.querySelector(name);}
var $$ = function(name) {return document.querySelectorAll(name);}

function onTypeSelectChange(value) {
    var $fragments = $$('.m-fragment');

    Array.prototype.forEach.call($fragments, function($fragment, i) {
        $fragment.classList[value == i ? 'add' : 'remove']('z-crt');
    });
}

function onFormInput($form) {
    var $submitBtn = $form.getElementsByTagName('button')[0];

    $submitBtn.disabled = !Array.prototype.every.call($form.elements, function($element) {
        if($element.tagName === 'INPUT' || $element.tagName === 'TEXTAREA')
            return $element.dataset.optional !== undefined || ($element.value && $element.value.trim());
        else
            return true;
    });
}

function onENInput($input) {
    var reg = /[^\w\- ]/g;
    if(reg.test($input.value))
        $input.value = $input.value.replace(reg, '');
}

function onIDCardInput($input) {
    var reg = /[^\dxX]/g;
    if(reg.test($input.value))
        $input.value = $input.value.replace(reg, '');
}

// main
var $forms = $$('form');
Array.prototype.forEach.call($forms, function($form) {
    $form.reset();
    var $select = document.querySelector('select[name=type]');
    $select && ($select.value = 0);
});