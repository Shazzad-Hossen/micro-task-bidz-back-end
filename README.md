# MicroTaskBidz

Live URL: https://microtaskbidz.cyclic.app/

## How to Run

- Clone this repository to your local machine.
- Requires `node >= 16.0.0` and `npm >= 7.0.0`.
- Run `npm install` in the root directory.
- Run `npm run dev` in the root directory.

### How to start new task:

- Checkout to `develop` branch (`git checkout develop`).
- Pull from `develop` (`git pull origin develop`)
- Create new brach named as Trello ticket number. (`git checkout -b feature/<YOUR TICKET NUMBER>`)
- After finished, do the `IMPORTANT` task below.
- Commit and make a PR with `develop`.
- If any `conflicts` happen, resolve `locally`.
- If you get any `review`, reply there and resolve it in a new `commit` and just `push`. NO NEED TO MAKE A NEW PR UNLESS THAT IS CLOSED.
- Once everything resolves, reviewer will `approve` and `merge` the PR with main.

## IMPORTANT: Before commiting anything, make sure `husky` is working properly. Do this before commit.

- Run `npm run fix-lint` in the root directory.
- Run `npm run format` in the root directory.
