# React Native [Web] + Monorepo

### How to run

  - `$ git clone git@github.com:yashkumarsharma/zono-monorepo.git`
  - `$ cd zono-monorepo`
  - `$ yarn`
  - `$ cd packages/mobile/ios`
  - `$ pod install` (This is not yet tested on iOS)
  - `$ cd -`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the project
    - Via CLI
      - _You may need to launch your device emulator before the next command_
      - `$ yarn android` or  `$ yarn ios`
