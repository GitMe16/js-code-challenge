$('.carousel').carousel({
    interval: false
});

$('document').ready(function(){
    if ($('div.slide-indicator[rel="0"]').hasClass('active') !== false) {
        $('div.slide-indicator[rel="0"]').addClass('active');
    }
    $('div.slide-indicator[rel="0"] img.slide-inactive, div.slide-indicator[rel="1"] img.slide-active, div.slide-indicator[rel="2"] img.slide-active').css('display', 'none');
    $('div.slide-indicator[rel="0"] p').css('font-family', 'Manrope Bold, Helvetica, sans-serif');
    $('div.slide-indicator[rel="1"] p, div.slide-indicator[rel="2"] p').css('font-family', 'Manrope Regular, Helvetica, sans-serif');
    $('button[data-slide="prev"], button.submitBtn, div.row.reset').css('display', 'none');
    $('div.err-input-addr, div.err-input-amt, div.err-input-otp').css('display', 'none');
    $('input#input-address, input#input-amount, input#input-otp').removeClass('input-border-err').val('');
});

$('button[data-slide="next"]').click(function(){
    $('div.err-input-addr, div.err-input-amt, div.err-input-otp').css('display', 'none');
    $('input#input-address, input#input-amount, input#input-otp').removeClass('input-border-err');
    const nonDigitRegex = /[^\d.]{1,}/;
    if ($('input#input-address').val().trim().length !== 34) {
        $('div.err-input-addr').css('display', 'block');
        $('input#input-address').addClass('input-border-err');
        return false;
    } else {
        let inputAmount = $('input#input-amount').val().trim();
        if (inputAmount.length > 0) {
            if (nonDigitRegex.test(inputAmount) === false) {
                if (inputAmount.indexOf('-') > -1) {
                    $('div.err-input-amt').css('display', 'block');
                    $('input#input-amount').addClass('input-border-err');
                    return false;    
                } else {
                    let amountArr = inputAmount.split('.');
                    if (amountArr.length > 1) {
                        if (amountArr.length > 2 || amountArr[1].length > 2) {
                            $('div.err-input-amt').css('display', 'block');
                            $('input#input-amount').addClass('input-border-err');
                            return false;
                        }
                    }
                }
            } else {
                $('div.err-input-amt').css('display', 'block');
                $('input#input-amount').addClass('input-border-err');
                return false;
            }
        } else {
            $('div.err-input-amt').css('display', 'block');
            $('input#input-amount').addClass('input-border-err');
            return false;
        }
    }
    $('div.slide-indicator[rel="1"] img.slide-inactive, div.slide-indicator[rel="0"] img.slide-active, div.slide-indicator[rel="2"] img.slide-active').css('display', 'none');
    $('div.slide-indicator[rel="1"] img.slide-active, div.slide-indicator[rel="0"] img.slide-inactive, div.slide-indicator[rel="2"] img.slide-inactive').css('display', 'inline');
    $('div.slide-indicator[rel="1"]').addClass('active');
    $('div.slide-indicator[rel="0"], div.slide-indicator[rel="2"]').removeClass('active');
    $('div.slide-indicator[rel="1"] p').css('font-family', 'Manrope Bold, Helvetica, sans-serif');
    $('div.slide-indicator[rel="0"] p, div.slide-indicator[rel="2"] p').css('font-family', 'Manrope Regular, Helvetica, sans-serif');
    $('button[data-slide="prev"], button.submitBtn').css('display', 'block');
    $('button[data-slide="next"], div.row.reset').css('display', 'none');
});

$('button[data-slide="prev"]').click(function(){
    $('div.slide-indicator[rel="0"] img.slide-inactive, div.slide-indicator[rel="1"] img.slide-active, div.slide-indicator[rel="2"] img.slide-active').css('display', 'none');
    $('div.slide-indicator[rel="0"] img.slide-active, div.slide-indicator[rel="1"] img.slide-inactive, div.slide-indicator[rel="2"] img.slide-inactive').css('display', 'inline');
    $('div.slide-indicator[rel="0"]').addClass('active');
    $('div.slide-indicator[rel="1"], div.slide-indicator[rel="2"]').removeClass('active');
    $('div.slide-indicator[rel="0"] p').css('font-family', 'Manrope Bold, Helvetica, sans-serif');
    $('div.slide-indicator[rel="1"] p, div.slide-indicator[rel="2"] p').css('font-family', 'Manrope Regular, Helvetica, sans-serif');
    $('button[data-slide="prev"], button.submitBtn, div.row.reset').css('display', 'none');
    $('button[data-slide="next"]').css('display', 'block');
});

$('button.submitBtn').click(function(){
    $('div.err-input-addr, div.err-input-amt, div.err-input-otp').css('display', 'none');
    $('input#input-address, input#input-amount, input#input-otp').removeClass('input-border-err');
    if ($('input#input-otp').val().length !== 6) {
        $('div.err-input-otp').css('display', 'block');
        $('input#input-otp').addClass('input-border-err');
        return false;
    } else {
        if ($('input#input-otp').val().indexOf('-') > -1 || $('input#input-otp').val().indexOf('.') > -1) {
            $('div.err-input-otp').css('display', 'block');
            $('input#input-otp').addClass('input-border-err');
            return false;
        }
    }
    $('button[data-slide="next"]').css('display', 'block');
    $('button[data-slide="prev"], button.submitBtn, div.row.buttons').css('display', 'none');
    $('.carousel').carousel('next');
    setTimeout(function(){
        $('div.slide-indicator[rel="0"] img.slide-active, div.slide-indicator[rel="1"] img.slide-active, div.slide-indicator[rel="2"] img.slide-inactive').css('display', 'none');
        $('div.slide-indicator[rel="0"] img.slide-inactive, div.slide-indicator[rel="1"] img.slide-inactive, div.slide-indicator[rel="2"] img.slide-active').css('display', 'inline');
        $('div.slide-indicator[rel="2"]').addClass('active');
        $('div.slide-indicator[rel="0"], div.slide-indicator[rel="1"]').removeClass('active');
        $('div.slide-indicator[rel="2"] p').css('font-family', 'Manrope Bold, Helvetica, sans-serif');
        $('div.slide-indicator[rel="0"] p, div.slide-indicator[rel="1"] p').css('font-family', 'Manrope Regular, Helvetica, sans-serif');
        $('span.amount').text($('input#input-amount').val().trim());
        $('span.account-no').text($('input#input-address').val().trim());
        $('input#input-amount, input#input-address, input#input-otp').val('');
        $('.carousel').carousel('next');
        $('div.row.reset').css('display', 'block');
    }, 4000);
});

$('button.resetBtn').click(function(){
    $('div.slide-indicator[rel="0"] img.slide-inactive, div.slide-indicator[rel="1"] img.slide-active, div.slide-indicator[rel="2"] img.slide-active').css('display', 'none');
    $('div.slide-indicator[rel="0"] img.slide-active, div.slide-indicator[rel="1"] img.slide-inactive, div.slide-indicator[rel="2"] img.slide-inactive').css('display', 'inline');
    $('div.slide-indicator[rel="0"]').addClass('active');
    $('div.slide-indicator[rel="1"], div.slide-indicator[rel="2"]').removeClass('active');
    $('div.slide-indicator[rel="0"] p').css('font-family', 'Manrope Bold, Helvetica, sans-serif');
    $('div.slide-indicator[rel="1"] p, div.slide-indicator[rel="2"] p').css('font-family', 'Manrope Regular, Helvetica, sans-serif');
    $('div.row.reset, button[data-slide="prev"], button.submitBtn').css('display', 'none');
    $('button[data-slide="next"]').css('display', 'block');
    $('div.row.buttons').css('display', 'flex');
});