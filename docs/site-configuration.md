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

7. Locate the **footer** property and customize the follter according to your preferences. For example, you can:
   
    ```
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