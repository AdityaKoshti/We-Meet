# We-meet : A google meet clone

[![We-meet banner](front_img.png)](https://www.canva.com/design/DAFE28aNZE4/RvAHFSh-g6LQacmx4W7uEA/edit?utm_content=DAFE28aNZE4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

This repo houses the assets used to build the We-meet website, available at https://wemeet.io (Not currently functional).

### Creating a PR

In general, all PRs should be made against the `main` branch to update the edge version of the docs. If you are making a change that also affects released versions, indicate which release branches to update in your PR so a website maintainer can backport your changes.

If you are making a change that is specific to a single released version of documentation, make a PR against that branch (`release-X`). For example, if you are fixing something specific to v2.1.0 you should make a PR against the release-2.1.0 branch only. If you are fixing something that impacts v2.1.0 docs and all future versions, you should make the PR against the `main` branch so the change can also be backported to the v2.1.0 docs.

## Publishing the website

The We-meet website is published automatically on the [Netlify](https://netlify.com) platform. Whenever changes are merged, the site is re-built and re-deployed, usually within about one minute.

## Run the We-meet website locally

### Step 1: Clone project

```sh
git clone git@github.com:AdityaKoshti/We-Meet.git
cd We-Meet
```

## Step 2: Install npm dependencies

```sh
npm i
```

## Step 3: Run We-meet in server mode

```sh
make serve
```

This starts up the local Hugo server on http://localhost:8080. As you make changes, the site refreshes automatically in your browser.