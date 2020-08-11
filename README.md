## Instruction for NPM/yarn to run project.

1. In repository: [https://github.com/MazurMaciej/uptime], click in 'clone or download' in the right corner and copy the link.
2. From a terminal window, change to the local directory where you want to clone the repository. 
3. Write 'git clone [link]' to copy the repository.
4. From a terminal window, write 'npm install' to install dependencies. 
5. To run app write in terminal 'npm/yarn start'. Application should run on port [http://localhost:3000].


## Comments to UpTime Application.

1. This project was built with Create React App.
2. To manage data I used React-Redux and UseState to manage data after filtration. I wanted to show You how I work with Redux. I know that in the more complex application I should use useSelector and reSelect to manage filters in store. Additionally, reSelect provides the possibility of memoization results for functions.
3. To navigate, I used React Router.
4. Styles are created with Saas. I recommend a structure for global styles:
- scss index
- scss reset
- scss vars, with all variables, the most important are colors from all app,
- scss media queriers mixins with breakpoints.
- scss fonts,
- Additionally, I recommend add one more file with mixins typography and font-size with 'rem'. It will be less code, and the application will be more flexible to resize on other devices. 
5. To display a chart I used chartJS and React Chart JS2. 
# UpTime
