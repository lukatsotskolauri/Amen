$(`.burger`).click(function (e) { 
    e.preventDefault();
    $(`.nav-bar-menu`).addClass(`show`);
    $(`.blur`).addClass(`bl`);
    $(`.blur`).removeClass(`nn`);
    $(`.nav-bar-menu`).removeClass(`hide`);
    $(`html`).css(`overflow`, `hidden`);
});
$(`#close-burger`).click(function (e) { 
    e.preventDefault();
    $(`.nav-bar-menu`).addClass(`hide`);
    $(`.nav-bar-menu`).removeClass(`show`);
    $(`.blur`).addClass(`nn`);
    $(`.blur`).removeClass(`bl`);
    $(`html`).css(`overflow`, `scroll`);
});
$(`.blur`).click(function (e) { 
    e.preventDefault();
    $(`html`).css(`overflow`, `scroll`);
    $(`.nav-bar-menu`).addClass(`hide`);
    $(`.nav-bar-menu`).removeClass(`show`);
    $(`.blur`).addClass(`nn`);
    $(`.blur`).removeClass(`bl`);
});

