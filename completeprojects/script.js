$(document).ready(function () {
    // Toggle menu on click
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Handle window scroll and load events
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});


// Fix for Image Paths and Error Handling

function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    
    // Loop through each project and generate the HTML
    projects.forEach(project => {
        // Ensure the image path is correct, handle potential missing images
        let projectImage = `/assets/images/projects/${project.image}.png`;
        
        // Check if the image exists, otherwise provide a fallback image
        let imgTag = `<img draggable="false" src="${projectImage}" alt="project" onerror="this.onerror=null; this.src='/assets/images/projects/fallback.png';" />`;

        projectsHTML += `
            <div class="grid-item ${project.category}">
                <div class="box tilt" style="width: 380px; margin: 1rem">
                    ${imgTag}
                    <div class="content">
                        <div class="tag">
                            <h3>${project.name}</h3>
                        </div>
                        <div class="desc">
                            <p>${project.desc}</p>
                            <div class="btns">
                                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                                <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    projectsContainer.innerHTML = projectsHTML;
}
 
// Change title and favicon on page visibility change
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Jigar Sable";
        $("#favicon").attr("href", "/assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "/assets/images/favhand.png");
    }
});

// Fetch projects data from JSON file
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => data);
}

// Function to display projects dynamically
function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    
    // Loop through each project and generate the HTML
    projects.forEach(project => {
        // Ensure the image path is correct, handle potential missing images
        let projectImage = `/assets/images/projects/${project.image}.png`;
        
        // Check if the image exists, otherwise provide a fallback image
        let imgTag = `<img draggable="false" src="${projectImage}" alt="project" onerror="this.onerror=null; this.src='/assets/images/projects/fallback.png';" />`;

        projectsHTML += `
            <div class="grid-item ${project.category}">
                <div class="box tilt" style="width: 380px; margin: 1rem">
                    ${imgTag}
                    <div class="content">
                        <div class="tag">
                            <h3>${project.name}</h3>
                        </div>
                        <div class="desc">
                            <p>${project.desc}</p>
                            <div class="btns">
                                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                                <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    projectsContainer.innerHTML = projectsHTML;

    // Isotope filter for projects
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // Filter items based on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

// Fetch projects and render them
getProjects().then(data => {
    showProjects(data);
});

// Start of Tawk.to Live Chat Integration
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat Integration

// Disable Developer Tools
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false; // Disable F12 key (Developer Tools)
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false; // Disable Ctrl + Shift + I (Developer Tools)
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false; // Disable Ctrl + Shift + C (Developer Tools)
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false; // Disable Ctrl + Shift + J (Console)
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false; // Disable Ctrl + U (View Source)
    }
};
