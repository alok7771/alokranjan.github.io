Put two files in this folder before/after pushing:

1. photo.jpg (or .png) — your headshot.
   Then in index.html, replace the .photo-slot <div> with:
   <img src="assets/photo.jpg" alt="Alok Ranjan" class="photo">
   and add this to style.css:
   .photo{ width:150px; height:150px; border-radius:50%; object-fit:cover; }

2. Alok_Ranjan_CV.pdf — your compiled CV PDF.
   The site already links to assets/Alok_Ranjan_CV.pdf from the
   nav bar and the footer, so it will work as soon as the file
   is here with that exact name.

You can delete this README.txt once both files are in place.
