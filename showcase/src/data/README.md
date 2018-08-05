## Create a new user

1. Copy the user template to a new file.
2. Fill in the values with your own information.
3. Edit the `dataIndex.js` file to `import` the file that you created.
4. Add the imported object to the data array in the same way the others were added.

---

#### Why is it set up like this?
The aim of this project is to help people get experience with contributing on projects, writing code, and working with git and github.

In removing the complexity of a backend database and instead using a simple data structure we increase the ease with which people can get started with commits that make real changes to the app.

---

#### How does it work?
Each user creates a file which has a data object. These objects are exported and then pulled into the `dataIndex.js` file. The objects are then added to the array which is in turn exported and pulled in to the app.
The array is mapped over and each of they keys of the object is used to fill in the member cards on the members page and other places around the app.

##### Note
All information added to this file will be committed to our public repository, so don't add any personal information you wouldn't share openly to the internet.
