<script>
    // Get all the job title elements
    var jobTitles = document.querySelectorAll('h3');

    // Add click event listeners to each job title
    jobTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            // Toggle the visibility of the next sibling element (description)
            var description = title.nextElementSibling;
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
</script>