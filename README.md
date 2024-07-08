### To run, open terminal and type
```npm install```
###
```npm i express-session```
###
``` npm i ejs ```

### Install these packages,
``` npm i uuid ```
###
``` npm i nodemailer ```
###
``` npm i multer ```
### 
```npm i prisma --save-dev```
###
```npx prisma```
###
```npx prisma init```

### Log in into the official gmail account of the website.
    email: soundsendofficial@gmail.com
    pass: soundsendofficial01

### For the database, create your own database then create a model named ``` Emails ```,

### Go to schema.prisma and add this,
    model Emails {
          id String @id @default(auto()) @map("_id") @db.ObjectId
          email String @unique
          magicCode String?
    }

### In the datasource db, change the provider into mongodb,
    provider = "mongodb"

### In the root directory of our project, create a file ``` .env ``` and add this,
    DATABASE_URL="mongodb+srv://<account name>:<password>@cluster0.534kjgp.mongodb.net/<db name>"

    ps. make sure to remove the <> when you provide your account name, password, and db name.
    
### For this part in server.js, change the access token with the one provided by the OAuth you generated using the official gmail account of the website.
    const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        type:'OAuth2',
        user: 'soundsendofficial@gmail.com',
        accessToken: 'paste generated access token here'
      }
    })
    
### To have the generated access token, go to this website ``` https://developers.google.com/oauthplayground/ ```
### Scroll down, then click Gmail API v1,
### Click the first link that appears, which is the ``` https://mail.google.com/ ```
### Click the Authorize APIs button, make sure to use the ``` soundsendofficial@gmail.com ``` account, 
### Click the Exchange Authorization Code for Tokens,
### In the Request/Response window, go to "access_token" at the bottom then copy the provided/generated key and paste it on the accessToken.
### Note that the access token from OAuth is only accessible for 1hr, after 1hr you have to generate another access token.

PROGRESS:
- Magnifier (WORKING)
- Modes of Screen

- Magic Auth Link (WORKING)
- Email Layout (DONE)
- Email Functions

    a. Sending (WORKING)
  
    b. Attaching File (WORKING)
  
    c. Speech-to-Text
  
    d. Voice Commands

- Overall Design
- Database for handling user email address.
