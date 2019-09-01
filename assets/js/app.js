function openTab(evt, tab) {
    evt.preventDefault();
    clearInterval(randomTabs);
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // display load load more button

    var loadMore = document.getElementById('loadSuppProducts');
    var products = document.getElementById(tab).getElementsByClassName('supp-product');

    if (products.length > 8) {
        loadMore.style.display = 'block';
    } else {
        loadMore.style.display = 'none';

    }


    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}


function randomActiveTab() {
    var tabs, ranNum;
    ranNum = Math.floor((Math.random() * 6));
    tabs = document.getElementsByClassName('tabcontent');

    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabs[ranNum].style.display = "block";

}

var url = window.location.pathname;

if (url.indexOf('products') == -1) {
    randomActiveTab();
    var randomTabs = setInterval(randomActiveTab, 5000);
}


//load more button script for staff Gallery

$(document).ready(function () {
    $(".mylan").slice(0, 8).show();
    if ($(".mylan:hidden").length != 0) {
        $("#loadSuppProducts").show();
    }
    $("#loadSuppProducts").on('click', function (e) {
        e.preventDefault();
        $(".mylan:hidden").slice(0, 8).slideDown();
        if ($(".mylan:hidden").length == 0) {
            $("#loadSuppProducts").fadeOut('slow');
        }
    });
});


$(document).ready(function () {
    $(".medtrue").slice(0, 8).show();
    if ($(".medtrue:hidden").length != 0) {
        $("#loadSuppProducts").show();
    }
    $("#loadSuppProducts").on('click', function (e) {
        e.preventDefault();
        $(".medtrue:hidden").slice(0, 8).slideDown();
        if ($(".medtrue:hidden").length == 0) {
            $("#loadSuppProducts").fadeOut('slow');
        }
    });
});

$(document).ready(function () {
    $(".zmc").slice(0, 8).show();
    if ($(".zmc:hidden").length != 0) {
        $("#loadSuppProducts").show();
    }
    $("#loadSuppProducts").on('click', function (e) {
        e.preventDefault();
        $(".zmc:hidden").slice(0, 8).slideDown();
        if ($(".zmc:hidden").length == 0) {
            $("#loadSuppProducts").fadeOut('slow');
        }
    });
});

$(document).ready(function () {
    $(".riva").slice(0, 8).show();
    if ($(".riva:hidden").length != 0) {
        $("#loadSuppProducts").show();
    }
    $("#loadSuppProducts").on('click', function (e) {
        e.preventDefault();
        $(".riva:hidden").slice(0, 8).slideDown();
        if ($(".riva:hidden").length == 0) {
            $("#loadSuppProducts").fadeOut('slow');
        }
    });
});