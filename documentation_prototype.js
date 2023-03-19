var templates = ["tabs_5_to_6",]

function regenerate_templates(){
for ( t in templates ) {
    divs = document.querySelectorAll('#show_'+templates[t]);
    divs.forEach((div) => {
      div.innerHTML = '';
    });

    const template = document.querySelector('#' + templates[t]);
    const clonedTemplate = template.content.cloneNode(true);
    divs = document.querySelectorAll('#show_'+templates[t]);
    divs.forEach((div) => {
      div.appendChild(clonedTemplate);
    });
}
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    regenerate_templates()
}




