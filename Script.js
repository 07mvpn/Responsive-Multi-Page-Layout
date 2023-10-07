function loadPage(page) {
  // Hide all page content
  document.getElementById('pageContent').style.display = 'none';
  document.getElementById('page2Content').style.display = 'none';
  document.getElementById('page3Content').style.display = 'none';

  if (page === 'home') {
    document.getElementById('pageContent').style.display = 'block';
  } else {
    // Show the selected page content
    document.getElementById(page + 'Content').style.display = 'block';
  }
}