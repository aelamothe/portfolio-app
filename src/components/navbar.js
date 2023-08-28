import React from "react";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg fixed-top"
      style="background-color: var(--lavender-pink);"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">
          Anastasia Lamothe
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="./index.html"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./projects.html">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.linkedin.com/in/anastasia-lamothe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://github.com/aelamothe"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
