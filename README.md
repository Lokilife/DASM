# DASM - Documented Assembly

It's a web-site containing documentation for all aspects of assembly.
Follow me and ask yourself a question: "What if assembly had good documentation?"

# Hello, World!

Sadly, documentation isn't writed yet cuz this site has been created only few days ago (2/18/2023).
But we'll work on it!

# dev, build, start

So here is a four classic commands for running and building this project.<br>
`yarn dev` is running development server with hot-reload<br>
`yarn start` is an alias for `yarn dev`<br>
`yarn build` is building out big project to a little bundle<br>
`yarn preview` is running server to preview builded website

# I want to contribute

Nice! You want to write documentation or improve website?<br>
Anyway, here is two guides for contributing.

## I want to write documentation

All our pages placed in `/src/pages/`, directory tree is how url will look like.
I.m. that if you have a file `/src/pages/docs/x86/linux/80h.md` then url to it will
look like `{HOST}/docs/x86/linux/80h`. You can use this page for example how to
make MD files. But that isn't enough, you also need to add it to navigation bar.
Here is nothing hard, just go to `/src/docs/index.astro` file, you will see const
pages that stores all routes and titles in navbar, you should add your page here.<br><br>
When you performed all actions above you need to post it. To post it you need to
fork our repo and perform a pull request with your changes.<br>
Thanks for your help!

## I want to improve website

Very well. If you know how to improve website then I think here is no need
to explain how to do that. In short: Fork repo, commit changes and perform
a pull request.<br>
Thanks for your help!

# Contributors

| [<img src="https://avatars.githubusercontent.com/u/60302610?v=4" width="75px;"/><br /><sub><b>Bychkov Maxim</b></sub>](https://github.com/Lokilife)<br /> 💻 🎨 | [<img src="https://avatars.githubusercontent.com/u/33878951?v=4" width="75px;"/><br /><sub><b>Zaharov Gleb</b></sub>](https://github.com/VerySweetBread)<br />📝 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |

# LICENSE

This project is maintained under [MIT License](LICENSE).
