/*Электронная цифровая подпись*/

window.onload = function() {
    let block = document.createElement('div');
    block.className = 'eds-content';
    block.id = 'eds-template';
    block.style.display = 'none';

    document.body.append(block);

    tippy('[data-eds]', {
        content(reference) {
            const key = reference.getAttribute('data-key');
            const name = reference.getAttribute('data-name');
            const date = reference.getAttribute('data-date');
            const edsTemplate = document.getElementById('eds-template');
            return edsTemplate.innerHTML = '<h3 style="margin-top:0;margin-bottom: 0;line-height: 1">Document Sign</h3>' +
                '<h5 style="margin-top: 5px">Simple Electic Sign</h5>' +
                '<b>' + name + '</b><br>' +
                'Director<br>' +
                'Date of sign:  ' + date + '</p>' +
                '<p style="margin-bottom: 0">Key (SHA-1):  ' + key + '</p>';
        },

        allowHTML: true,
        theme: 'light',
        maxWidth: 400,
        placement: 'bottom',
        arrow: false,
    });
};