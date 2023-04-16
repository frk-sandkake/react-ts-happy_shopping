<div id="top"></div>

# The Ecom store react-ts-happy_shopping

<p align="center">
	A course assignment in JavaScript frameworks for 2.year students in <br> Front-End Development, at Noroff VOC Oslo, Norway <br>
    • Student: Linda Sandaker, aka frk.Sandkake
</p>

<br/>

<p align="center">
	<a href="#Project-details">Project Details</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
</p>

<br/>

## Project details:

**Intro:**

The aim of this course assignment was to build an e-commerce store
using React framework, fetching the products from the API provided by Noroff,
and hosting it with Netlify or similar.

The assignment required the creation of several pages, including a homepage,
individual product page, cart page, checkout success page, and contact page.

There where no requirement to use TypeScript, CSS Framework, styled-components,
or CSS Modules. See the other requirements listed under **Key Features**.

## Key Features
- **`<Layout/>` component containing:**
    - A Header, with a:
        - NavBar (React Router to switch between pages)
        - Cart icon that:,
            - displaying number of items in cart,
            - with overlay displaying the cart item count,
            - linked to Cart page.
    - A Footer
- **HomePage with:**
    - List of all fetched products displayed as cardComponents.
    - CardComponents has a "View product" button linked to ProductPage.
    - A auto-complete search bar, filtering product name, linked to productPage.
- **ProductPage that:**
    - Displays product title, description, and image.
    - Displays price, or discounted price if any.
    - Has an `Add to cart` button which adds the product to the cart when clicked.
    - Shows Product reviews, if any.
- **CartPage that:**
    - Lists all added products, with prices, and the total sum.
    - Has a `Checkout` button, which clears the cart and takes user to CheckoutSuccessPage.
- **CheckoutSuccessPage that:**
    - Displays an order success message to user and provides a link back to the store.
- **ContactPage that**:
    - Displays following inputs, with validation:
        - Full name (Minimum number of characters is 3, required)
        - Subject (Minimum number of characters is 3, required)
        - Email (Must be a valid email address, required)
        - Body (Minimum number of characters is 3, required)
    - Shows submitted form date in console, if validated.

<br/>

## How To Use:

* Fork and/or Clone this repo

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

<details>
<summary style="color: darkseagreen">
Toggle for more instructions:
</summary>

On GitHub:

- Fork this repo to get your own copy AND/OR
- Copy the code URL or SSH link that you find under `<> Code` button

Locally, on your PC:

- In Terminal
    - `cd .\path\ ` to directory/folder for your local workspace
    - run:`git clone <Github repo URL or SHH>`
    - then `cd .\path\` to new folder with repo name
- Then open your IDE/code editor
    - Open the directory (or folder) with your cloned repo
</details>

<br/>

 * Command lines to run in terminal:

| Commands          | Description                                                |
|-------------------|------------------------------------------------------------|
| `npm install`     | Installs all packages in Package.json in the node modules  |
| `npm run dev`     | To see the whole project in local host                     |
| `npm run build`   | Builds the project into minified version (dist folder)     |
| `npm run preview` | To preview the project in minified mode (from dist folder) |



<details style="color: powderblue; font-family: 'Lucida Console', sans-serif">
<summary>
Good to know `npm` Command lines:
</summary>

| Commands                          | Description                                       |
|-----------------------------------|---------------------------------------------------|
| `npm init -y`                     | Will initiate  a new Node JS project Package.json |
| `npm outdated`                    | To see the outdated packages                      |
| `npm update`                      | Updates the project dependencies                  |
| `npm update <packagename>`        | Updates a specific project dependency             |
| `npm uninstall <package_name>`    | Uninstalls a project dependency                   |
| `npm update -g`                   | Use -g flag for global dependencies               |
| `npm update -D` or `--save-dev`   | Use -d or --dev flag for devDependencies          |
| `npm uninstall -g <package_name>` |                                                   |

</details>

<br/>

## Credits

- [vite JS dev guide](https://vitejs.dev/guide/)
- [Noroff API](https://api.noroff.dev/docs/static/index.html#/)
- [React JS dev](https://react.dev/)
- [React Bootstrap UI](https://react-bootstrap.github.io/)
- [Axios http for fetch API](https://axios-http.com/docs/intro/)
- [WebDevSimplified YouTube - React TypeScript Shopping cart](https://youtu.be/lATafp15HWA)
- [WebDevSimplified Github Repo](https://github.com/WebDevSimplified/react-ts-shopping-cart)
- [iconfinder cart svg](https://www.iconfinder.com/icons/1564496/basket_cart_shop_shopping_store_icon)
- [GitHub Docs](https://docs.github.com/en)
- [Shield Badges](https://shields.io/)


<div style="text-align: end">
    <p>(
        <a href="#top" style="color: powderblue">
            back to top
        </a>
        )
    </p>
</div>
