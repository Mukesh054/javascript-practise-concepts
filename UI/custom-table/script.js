const search = document.querySelector(".input-group input"),
  tableRows = document.querySelectorAll("tbody tr"),
  tableHeadings = document.querySelectorAll("thead th");

search.addEventListener("input", searchTable);

// Search function
function searchTable() {
  tableRows.forEach((row, i) => {
    let rowData = row.textContent.toLowerCase(),
      searchData = search.value.toLowerCase();

    row.classList.toggle("hide", rowData.indexOf(searchData) < 0);
    row.style.setProperty("--delay", i / 25 + "s");
  });

  document.querySelectorAll("tbody tr:not(.hide)").forEach((visibleRow, i) => {
    visibleRow.style.backgroundColor = i % 2 == 0 ? "transparent" : "#0000000b";
  });
}

// Sort table
tableHeadings.forEach((head, i) => {
  let sort_asc = true;

  head.onclick = () => {
    tableHeadings.forEach((h) => h.classList.remove("active"));
    head.classList.add("active");

    document
      .querySelectorAll("td")
      .forEach((td) => td.classList.remove("active"));
    tableRows.forEach((row) => {
      row.querySelectorAll("td")[i].classList.add("active");
    });

    head.classList.toggle("asc", sort_asc);
    sort_asc = head.classList.contains("asc") ? false : true;

    sortTable(i, sort_asc);
  };
});

function sortTable(column, sort_asc) {
  [...tableRows]
    .sort((a, b) => {
      let first_row = a
          .querySelectorAll("td")
          [column].textContent.toLowerCase(),
        second_row = b.querySelectorAll("td")[column].textContent.toLowerCase();

      return sort_asc
        ? first_row < second_row
          ? 1
          : -1
        : first_row < second_row
        ? -1
        : 1;
    })
    .map((sorted_row) =>
      document.querySelector("tbody").appendChild(sorted_row)
    );
}
