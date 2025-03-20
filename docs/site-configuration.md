# Site Configuration

Before publishing your Docusaurus website, you must update its configuration to ensure it displays the correct branding and functions correctly on your chosen domain. In this section, we’ll edit the **docusaurus.config.js** file to:

* Set your site title
* Define your site URL and base URL
* Update your favicon

## Editing the configuration file

1. Open your Docusaurus project folder. You'll find the **docusaurus.config.js** file in the root directory.

    ![Location of the Docusaurus configuration file](/img/docs/misc/docusaurus-config-location.png)

2. Open **docusaurus.config.js** in your preferred code editor (such as Visual Studio Code). This file holds all the main configuration settings for your site.

    ![Content of the Docusaurus configuration file](/img/docs/misc/docusaurus-config-content.png)

3. Locate the **title** property in the configuration object. Change it to your desired site name. This title appears in the browser tab and header.

    ```
    title: 'My Website'
    ```

4. Find the **tagline** property in your configuration and update its value to your chosen tagline. This text appears directly below the title on the home page.

    ```
    tagline: 'Read about many cool things'
    ```

5. Locate the **favicon** property and update it with the path to your favicon file. This icon appears in the browser tab.

    ```
    favicon: 'img/favicon.ico'
    ```
6. Find the **url** property and replace 'https://example.com' with the actual domain where your site will be live. This ensures that all generated links and paths reflect your final hosting environment.

7. Look for the **navbar** section inside `themeConfig`.

    ```js
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        ...
    ```

    * Modify the `title` to match your website's name.
    * Change the default logo by replacing **img/logo.svg** with your own logo file.

8. Locate the **footer** property and customize the follter according to your preferences. For example, you can:
   
    ```js
    footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              ...
    ```

    * Replace the existing links with your own.
    * Delete any links that you don't want to display.
    * Disable the footer by setting it to footer: false or removing it entirely from the configuration file.

9. Customize or remove the GitHub link in the navbar.

    ```js
    {
        href: 'https://github.com/facebook/docusaurus',
        label: 'GitHub',
        position: 'right',
    },
    ```

After updating the configuration, start the local server by running npm run start and preview your site. Ensure that the homepage reflects the changes you made.

    ![Modified homepage](/img/docs/misc/docusaurus-home-header.png)

## Customizing the homepage

Docusaurus provides a flexible structure for customizing your homepage. The two main files you'll need to modify are **src/pages/index.js** (the main homepage component) and **src/components/HomepageFeatures/index.js** (the components section).

### Understanding the homepage structure

![Homepage structure](/img/docs/misc/docusaurus-homepage-structure.png)

Your homepage consists of two main parts:

* **Header section**: Contains your site title, tagline, and a call-to-action button.
* **Features section**: Displays a grid of features with icons and descriptions.

#### Customizing the header section

1. Navigate to the **src/pages/index.js** file.

    ![Docusaurus index page](/img/docs/misc/docusaurus-index-page.png)

2. Find the **Link** section.

    ```
    <Link
    className="button button--secondary button--lg"
    to="/docs/intro">
    Docusaurus Tutorial - 5 Min ⏱️
    </Link>
    ```

3. Modify the call-to-action button:

    * Change the default text (`Docusaurus Tutorial - 5 Min`).
    * Modify the destination URL in the **to** field.

#### Customizing the features section

1. Navigate to the **src/components/HomepageFeatures/index.js** file.

    ![Docusaurus features page](/img/docs/misc/docusaurus-features-page.png)

2. Replace the SVG images:
   
   * Add your custom image files to the **static/img/** directory.

    ![Image directory](/img/docs/misc/docusaurus-image-directory.png)

   * Update the import paths accordingly.
   * Update the title and descriptions for your new image files.

    ![Adding a custom image](/img/docs/misc/docusaurus-adding-custom-image.png)

3. Adjust the column layout:

    * Change **col col--4** to modify column widths. For example, you can specify **col col--6** for two columns.

    ```
        function Feature({Svg, title, description}) {
            return (
                <div className={clsx('col col--6')}>
    ```

    ![Two-column layout](/img/docs/misc/docusaurus-two-columns.png)

## Customizing styles

Docusaurus uses [Infima](https://infima.dev/) as its underlying CSS framework. You have multiple options to customize your website:

* **Global CSS**
Site-wide styling through custom CSS files

* **CSS Modules**
Component-scoped styles

* **CSS-in-JS**
Through libraries like styled-components (requires additional setup)

* **Tailwind CSS**
Utility-first styling (requires additional setup)

In this tutorial, we'll focus on the first approach - site-wide styling using custom CSS files.

1. Find your global CSS file at **src/css/custom.css**. This is where you'll customize colors and other global styles.

2. Locate the CSS rule for :root and update the color variables as needed. You can use the tool available at [Docusaurus Infima Styling](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima) to define your color scheme. Simply specify the primary color, and the tool will automatically generate all other shades for you. For example:

    ![Docusaurus Infima Styling](/img/docs/misc/docusaurus-infima-styling.png)

    After generating the CSS styles, copy them and replace the corresponding variables in **src/css/custom.css**.

    ```css
    :root {
    --ifm-color-primary: #4169e1; /* Your primary brand color */
    --ifm-color-primary-dark: #3a5ecc;
    --ifm-color-primary-darker: #3457bf;
    --ifm-color-primary-darkest: #2a479d;
    --ifm-color-primary-light: #5479e3;
    --ifm-color-primary-lighter: #6889e6;
    --ifm-color-primary-lightest: #7c99e9;
    ```
    
If you want to update styles for both light and dark modes, you also need to replace the styles for the dark mode.

    ```css
    /* Dark mode adjustments */
    [data-theme='dark'] {
    --ifm-color-primary: #6889e6;
    --ifm-color-primary-dark: #5479e3;
    --ifm-color-primary-darker: #4169e1;
    --ifm-color-primary-darkest: #3a5ecc;
    --ifm-color-primary-light: #7c99e9;
    --ifm-color-primary-lighter: #90a9ec;
    --ifm-color-primary-lightest: #a4b9ef;
    --ifm-background-color: #1e2125;
    --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
    }

    ```
