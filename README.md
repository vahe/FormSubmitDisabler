FormSubmitDisabler
==================

- Disables the submit button if any of the required fields are empty.
- Enables  the submit button if all of the required fields are filled.

###Requirements 
- jQuery


###Usage
To enable FormSubmitDisabler for a form, simply append "fbdForm" to the id attribute.

####Example form: 
```html
<form id="fbdForm">

  Username:         <input type="text" value="" size="30" name="user" id="username" >
  Email:            <input type="email" value="" size="30" name="email" id="email">
  Password:         <input type="password" size="30" name="password" id="password">

  <input type="submit" value="Submit">
</form>
```
