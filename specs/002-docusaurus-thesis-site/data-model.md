# Data Model

This project is a static Docusaurus website. The primary "data model" is the file and directory structure of the content within the `docs/` directory.

## Content Structure

The thesis content is organized hierarchically:

- **Root (`docs/`)**: Contains all the documentation pages.
- **Front Matter (`docs/00-front-matter/`)**: A directory containing the initial pages of the thesis, such as the Certificate, Dedication, and Abstract. The numerical prefix ensures correct ordering.
- **Chapters (`docs/01-chapter-one/`, etc.)**: Each chapter of the thesis gets its own directory. The numerical prefix dictates the order in the sidebar and in the final combined document.
- **Pages (`*.md`)**: Each markdown file represents a single page or a section of a chapter.

## Configuration

- **`docusaurus.config.js`**: Defines the site's metadata, theme, plugins, and navigation structure (sidebar). The sidebar configuration reads the file structure to generate the navigation.
- **`_category_.json`**: Files with this name inside a directory define the properties of that directory when displayed in the sidebar, such as its label and position.

This file-based approach is typical for static site generators and requires no database or traditional data modeling.
