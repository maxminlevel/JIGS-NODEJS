# -PTUDW-19TN-Nhom13-BE

## Setup 
```bash
    npm run setup
```
If you want to run seperate command or what will setup, read following section.
### Libs and tools
It include many third-party libraries for developer process.

```bash
    npm i
    npm i --save-dev
```
### Enviroment
  Copy all file ```example*``` beside then remove prefix ```example``` change the value (ask admin/dev to get).
  
  To hide enviroment value before commit, run: ```npm run env:hide```

### Database
Load file .env into enviroment of terminal then subset them from  to docker-compose (note file .env is secret)
```bash
    npm run docker:setup
    npm run docker:up
```


## Testing
```bash
    npm run test
    npm run test:unit
    npm run test:coverage
```

## Deploy
Use docker to build an image to deploy. Docker file use multiple build context include: ```builder and nodeprod```
```bash
    npm run docker:image
```


