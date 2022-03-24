The goal of this coding exam is to quickly get you off the ground with **Lists and Keys**.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/multilingual-greetings-output.gif" alt="multilingual-greetings" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/multilingual-greetings-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the **English** language button should be active and the **English** greeting image should be displayed.
- When the user clicks on a language button, then the corresponding greeting image should be displayed.
- The `App` component consists of the `languageGreetingsList`. It consists of a list of image details objects with the following properties in each object

  | Key          | Data Type |
  | ------------ | --------- |
  | id           | Number    |
  | imageUrl     | String    |
  | buttonText   | String    |
  | imageAltText | String    |

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instruction is required for the tests to pass**

- The image should have the alt attribute value as the key `imageAltText` from `languageGreetingsList` provided

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #db1c48; width: 150px; padding: 10px; color: black">Hex: #db1c48</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
