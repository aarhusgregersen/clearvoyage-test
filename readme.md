# ClearVoyage Backend

Custom built Node backend using Express and a recent version of node (`>= 20.10.0`).

## Starting it up

In order to get started with this repository you need to install `pnpm`, building with `yarn` or `npm` should work, but proceed at your own risk :-)
Note that `npm` does not support running multiple scripts simultaneously using regex, the same way `pnpm` does.

This backend can conveniently be run using just one script, or for better logging output running two separately.

Running the following, allows `pnpm` to run multiple scripts (prefixed with `dev:` in `package.json`) at the same time, giving one convenient way to run the entire application.

```
pnpm run dev
```

Alternatively, each of the dev scrips can be run separately, requiring multiple terminal windows:

```
pnpm run dev:tsc
pnpm run dev:node
```
