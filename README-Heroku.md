# Deployment to Heroku

## SignUp

```
https://signup.heroku.com/login
```

## Login

```
https://id.heroku.com/login
```

## Heroku Dashboard - Environment Variables

```
MYSQL_UPC_BANKING_NEST_URL
```

## Download Heroku CLI

```
https://devcenter.heroku.com/articles/heroku-cli#download-and-install
```

### Download Heroku CLI - Windows

```
https://cli-assets.heroku.com/heroku-x64.exe
https://cli-assets.heroku.com/heroku-x86.exe
```

### Download Heroku CLI - macOS

```
$ brew tap heroku/brew && brew install heroku
```

## Heroku CLI

```
$ heroku --version
$ heroku login
$ heroku auth:token
$ heroku authorizations:create
$ heroku logs --app banking-nest-upc-heroku
$ heroku logs --app banking-nest-upc-heroku --tail
```

## Download Travis CLI

```
https://github.com/travis-ci/travis.rb
```

### Download Travis CLI - Windows

```
https://rubyinstaller.org/
$ gem install travis
```

### Download Travis CLI - macOS

```
$ ruby -v
$ brew install travis
```

## Travis CLI

```
travis logout --pro
travis login --pro --github-token {GITHUB_TOKEN}
travis encrypt --pro {HEROKU_API_KEY}
travis encrypt --pro {HEROKU_API_KEY} --add deploy.api_key
```
