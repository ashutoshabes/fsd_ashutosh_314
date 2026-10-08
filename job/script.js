/* =========================================
   BOOKMARK
========================================= */

function toggleBookmark(button) {

    button.classList.toggle("saved");

    if (button.classList.contains("saved")) {

        button.innerHTML = "♥";

    } else {

        button.innerHTML = "♡";

    }
}


/* =========================================
   DETAILS MODAL
========================================= */

function showDetails(
    title,
    company,
    location,
    salary
) {

    document.getElementById(
        "modalJobTitle"
    ).innerText = title;


    document.getElementById(
        "modalCompany"
    ).innerText = company;


    document.getElementById(
        "modalLocation"
    ).innerText = location;


    document.getElementById(
        "modalSalary"
    ).innerText = salary;


    document.getElementById(
        "modalLogo"
    ).innerText =
        company.charAt(0);


    document.getElementById(
        "detailsModal"
    ).classList.add("active");
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    document.getElementById(
        "detailsModal"
    ).classList.remove("active");
}


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

document
    .getElementById("detailsModal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {
                closeModal();
            }

        }
    );


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {
            closeModal();
        }

    }
);


/* =========================================
   SORT JOBS
========================================= */

document
    .getElementById("sort")
    .addEventListener(
        "change",
        function () {

            const sortType =
                this.value;


            const container =
                document.getElementById(
                    "jobsContainer"
                );


            const cards =
                Array.from(
                    container.querySelectorAll(
                        ".job-card"
                    )
                );


            /* Highest salary */

            if (
                sortType ===
                "salary-high"
            ) {

                cards.sort(
                    function (a, b) {

                        return (
                            Number(
                                b.dataset.salary
                            ) -
                            Number(
                                a.dataset.salary
                            )
                        );

                    }
                );
            }


            /* Lowest salary */

            else if (
                sortType ===
                "salary-low"
            ) {

                cards.sort(
                    function (a, b) {

                        return (
                            Number(
                                a.dataset.salary
                            ) -
                            Number(
                                b.dataset.salary
                            )
                        );

                    }
                );
            }


            /* Alphabetical */

            else if (
                sortType === "az"
            ) {

                cards.sort(
                    function (a, b) {

                        return a.dataset.title
                            .localeCompare(
                                b.dataset.title
                            );

                    }
                );
            }


            /* Last updated */

            else if (
                sortType === "recent"
            ) {

                cards.sort(
                    function (a, b) {

                        return (
                            Number(
                                b.dataset.date
                            ) -
                            Number(
                                a.dataset.date
                            )
                        );

                    }
                );
            }


            /* Put cards back */

            cards.forEach(
                function (card) {

                    container.appendChild(
                        card
                    );

                }
            );

        }
    );


/* =========================================
   APPLY BUTTON
========================================= */

function applyJob() {

    alert(
        "Application page will open here."
    );
}