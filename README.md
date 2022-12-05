# About this folder

This folder provides an playable interface of the Cryptator project implemented [here](https://github.com/arnaud-m/cryptator) (note that this link provides also all the details about what cryptarithms are and how you can solve them). 

This interface uses the [React Native](https://reactnative.dev/) framework, allowing to run the application both on Android and Apple smartphones. 

# The application structure

- Welcome screen
- Home page
  - Play a classic game
  - Generate a cryptarithm
  - Creation your cryptarithm
- Help panel
- Credits

# The home page
In the home page you are able to select how to interact with Cryptarithms. You can play a game, where you can solve a cryptarithm yourself, generate automatically a cryptarithm with existing words coming from different thematic, create your custom cryptarithm and verify its validity.

## Play a game


<table>
  <tbody>
    <tr>
      <td>
      <img src="readmeImages/sendmoremoney.png" alt="sendmoremoney" width="300"> 
      </td>
      <td>
          You are able to solve yourself one of the proposed cryptarithms with the following tools:  
        <ul>
        <li>
          <img src="font/icons/pencil.svg" alt="the bucket" width="20" style="background:white"/> The pencil allowing you to write small annotation on a letter in order to simplify the solution.
        </li>
        <li>
          <img src="font/icons/pen.svg" alt="the bucket" width="20" style="background:white"/> The pen, allowing you to make an affectation to a letter of the cryptarithm.
        </li>
        <li>
          <img src="font/icons/bucket.svg" alt="the bucket" width="20" style="background:white"/> The bucket, allowing you to color the letters of the cryptarithms to visually help your solving approach.
        </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


<!-- -  [![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://youtu.be/vt5fpE0bzSY) -->


Note that in the **easy** mode, invalid affectations will appear in red and that the pencil avoid to enter already used numbers.

When the game is finished, a congratulation popup is triggered.

## Generate a cryptarithm

## Create your cryptarithm
  

# TODO

- The app should also be run on a browser (Chrome, Mozzilla, Safari...)
- Add a page to set the cryptarithm config (allow leading zeros, repetitions...)
