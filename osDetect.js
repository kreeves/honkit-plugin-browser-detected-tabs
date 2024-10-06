// osDetect.js
(function() {
    var detectOS = function() {
        var platform = navigator.platform.toLowerCase();
        if (platform.includes('mac')) {
            return 'Mac';
        } else if (platform.includes('win')) {
            return 'Windows';
        } else if (platform.includes('linux')) {
            return 'Linux';
        }
        return 'Unknown';
    };

    var initializeContentByOs = function() {
        var os = detectOS();
        document.querySelectorAll('[data-os-content]').forEach(function(element) {
            var targetOS = element.getAttribute('data-os-content');
            if (os === targetOS || targetOS === 'all') {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    };

    // Run the toggle function after the document has loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeContentByOs);
    } else {
        initializeContentByOs();
    }

    // Set default active button based on detected OS
    var os = detectOS();
    var defaultButton = document.querySelector(`.osToggle[data-os="${os}"]`);
    if (defaultButton) {
        document.querySelectorAll(`.osToggle[data-os="${os}"]`).forEach(button => {
            button.classList.add('active');
        });
    }

    var toggleOSContent = function(os) {
        document.querySelectorAll('[data-os-content]').forEach(function(element) {
            if (element.getAttribute('data-os-content') === os) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    }

    document.querySelectorAll('button[class="osToggle"]').forEach(function(button) {
        button.addEventListener('click', function() {
            var os = this.getAttribute('data-os'); // Use the data-os attribute to determine which content to show
            toggleOSContent(os);
        });
    });

    document.querySelectorAll('.osToggle').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior

            // Remove active class from all items
            document.querySelectorAll('.osToggle').forEach(item => {
                item.classList.remove('active');
            });

            // Get the data-os attribute of the clicked button
            const os = this.getAttribute('data-os');

            // Add active class to all buttons with the same data-os attribute
            document.querySelectorAll(`.osToggle[data-os="${os}"]`).forEach(item => {
                item.classList.add('active');
            });
        });
    });

})();