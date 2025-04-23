---
sidebar_position: 1
---

# API Documentation with Redocly CLI

You can use **Redocly CLI** to preview and build your API documentation locally. This approach lets you edit your OpenAPI files, see changes instantly, and generate a standalone HTML site for deployment.

## Prerequisites

Before you begin, make sure Node.js v18 or later is installed on your computer.

 👉 **Note**: You can download the latest version of Node.js from [nodejs.org](https://nodejs.org).

## Installing Redocly CLI

1. Install Redocly CLI globally, run:

    ```bash
    $ npm i -g @redocly/cli@latest
    ```

2. Confirm the installation:

    ```bash
    $ redocly --version
    1.25.4
    ```

## Creating your project

1. Create a new folder for your API documentation and navigate into it:

    ```bash
    $ mkdir my-redocly-site
    $ cd my-redocly-site
    ```

2. Add your OpenAPI file (e.g., `pet-store-openapi.json`) to this folder.

You can either:

- Use your own OpenAPI definition, or  
- Download a [`Swagger Petstore JSON`](https://petstore3.swagger.io/api/v3/openapi.json) (right-click the link and choose **Save Link as**)

## Preview the API documentation locally

Start a local development server:

```bash
$ redocly preview-docs pet-store-openapi.json
Using Redoc community edition.
Login with redocly login or use an enterprise license key to preview with the premium docs.

Preview server running at http://127.0.0.1:8080
Watching pet-store-openapi.json and all related resources for changes

Bundling...

Created a bundle for pet-store-openapi.json successfully
GET /: 11.85ms
GET /simplewebsocket.min.js: 3.549ms
GET /hot.js: 2.257ms
GET /openapi.json: 1.341ms
```

By default, the site runs at `http://localhost:8080`. To use a custom port:

```
$ redocly preview-docs -p 8888 pet-store-openapi.json
```

**Example 1**
![Previewing API documentation](/img/docs/api/redocly-preview.png)

**Example 2**
![Previewing API documentation](/img/docs/api/redocly-preview-2.png)

## Edit and see live updates

As you make changes to your OpenAPI file, the local server refreshes automatically. You can instantly review your updates in the browser.

## Build a static HTML file

When your documentation is ready, generate a standalone HTML file:

```bash
$ redocly build-docs pet-store-openapi.json
Found undefined and using theme.openapi options
Prerendering docs

🎉 bundled successfully in: redoc-static.html (232 KiB) [⏱ 3ms].
```

This creates a file called `redoc-static.html`, which you can host on any static web server.

## Host your stati HTML file

Once you have the `redoc-static.html` file, you can host it using any static web hosting service. Here are a few options:

- **GitHub Pages** <br />
  Free and easy for public projects  
- **Netlify** <br />
  Drag-and-drop uploads or Git-based deployment  
- **Vercel** <br />
  Seamless GitHub integration  
- **Internal servers** <br />
  Apache, Nginx, or IIS  
- **Cloud storage** <br />
  S3, Azure Blob, or Google Cloud Storage

### Example - GitHub pages

GitHub Pages is a free and widely used solution for hosting static files directly from your GitHub repository.

1. Go to [github.com](https://github.com/) and create a GitHub repository, for example, `pet-store-openapi`.

2. Clone the repository and move the HTML file into it:

   ```bash
   $ git clone https://github.com/your-username/pet-store-openapi.git
   $ cd pet-store-openapi
   $ mv ../redoc-static.html index.html
   ```

   If you rename the file to `index.html`, the GitHub Pages URL will load the site directly.

3. Push the file to GitHub:

   ```bash
   git add index.html
   git commit -m "Add API documentation"
   git push origin main
   ```

4. Enable GitHub Pages:
   - Go to your repository on GitHub.
   - Navigate to **Settings > Pages**.
   - Select **Deploy from a branch**, choose `main`, and set the folder (`/` or `/docs`).
   - Click **Save** to save the changes.

![GitHub Pages configuration](/img/docs/api/redocly-github-pages-config.png)

GitHub will generate a public URL like:

   ```
   https://your-username.github.io/pet-store-openapi/
   ```