function validator(options) {
    var formElement = document.querySelector(options.form);
    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage;

        var rules = selectorRules[rule.selector];

        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }


    // Hàm lấy element của form cần validate
    if (formElement) {

        formElement.onsubmit = function(e) {
            e.preventDefault();
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                validate(inputElement, rule);
            })

        }
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);

            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                }

                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }
}

validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        }
    }
}

validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        }
    }
}

validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}

validator.isConfirmed = function(selector, getConfirmed, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmed ? undefined : message || 'gia tri nhap khong dung';
        }
    }
}