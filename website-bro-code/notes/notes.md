cd website-bro-code/

@royceanton ➜ /workspaces/react (main) $ cd website-bro-code/
@royceanton ➜ /workspaces/react/website-bro-code (main) $ npm create vite@latest
Need to install the following packages:
create-vite@5.2.1
Ok to proceed? (y) y
✔ Project name: … my-react-app
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /workspaces/react/website-bro-code/my-react-app...

Done. Now run:

  cd my-react-app
  npm install
  npm run dev

npm notice 
npm notice New minor version of npm available! 10.2.4 -> 10.5.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.5.0
npm notice Run npm install -g npm@10.5.0 to update!
npm notice 
@royceanton ➜ /workspaces/react/website-bro-code (main) $ 

You can use the `cp` command to copy directories in the terminal. The `-R` option is used to copy directories recursively. Here's how you can do it:

```bash
mkdir -p /workspaces/react/study-sources/lesson-6-working-with-lists
cp -R /workspaces/react/website-bro-code/my-react-app/src /workspaces/react/study-sources/lesson-6-working-with-lists/
```

The `mkdir -p` command is used to create the `lesson-6-working-with-lists` directory. The `-p` option creates the directory and any necessary parent directories.

The `cp -R` command is used to copy the `src` directory and its contents to the `lesson-6-working-with-lists` directory. The `-R` option is used to copy directories recursively.