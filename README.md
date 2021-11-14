# redesigned-spork

The repository holding COMP2406's student run unofficial documenting site. 

**Site link**

https://josephdrazen.github.io/redesigned-spork/

<br />

**What is this Project?**

Welcome to the COMP2406 Unofficial Documentation. This project is intended for computer science undergraduates at Carleton University for use in the course COMP2406.

<br />

**This is a work in progress!**

You will notice "Edit on Github" links at the bottom of each page. If you see information that needs an update or think a page needs changes follow the github link, edit it, and open a new Pull Request with your reason for the change.

There will be missing content, some bugs, and constant updates. We are currently looking for contributors to this project. If you have course notes, ideas, or want to help let us know by contacting: josephmalovic@cmail.carleton.ca.

Are you thinking of collaborating? If you're a TA or have the knowledge to share, create a new branch from main and open a PR with your proposed changes. Please include a detailed read-me and your reasons for adding the changes in your pull request.

<br />

**How do I add new documents?**

Following the getting started steps below. Then, open a new branch and switch to it.

Simply add the new `.mdx` file in `./src/docs/`

Then, add a label and link to the file in `./src/config/sidebar.yml`

It should look like: 

```yaml
    - label: YourLabel
      link: '/YourDocName'
```

Now you can open a PR and request to merge into our main branch. We will take care of the rest! 

<br />

**Getting Started (local development)**

`git clone https://github.com/JosephDrazen/redesigned-spork`

With npm: 

`npm i`

`npm start`

With yarn: 

`yarn install`

`yarn start`

Then, navigate to localhost:8000/
