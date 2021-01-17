# express-graphql
## How to use
### 1. Start the container
Execute the following command.
```
$ docker-compose up
```

### 2. Access the GraphQL query editor
Go to the following URL.  
http://localhost:3000/graphql


### 3. Execute the query
Query Sample
```
{
  user(id:1) {
    name
    posts {
      id
      title
    }
  }
}
```
Execution result
```
{
  "data": {
    "user": {
      "name": "Fikayo Adepoju",
      "posts": [
        {
          "id": "1",
          "title": "Debugging an Ionic Android App Using Chrome Dev Tools"
        },
        {
          "id": "2",
          "title": "Hosting a Laravel Application on Azure Web App"
        }
      ]
    }
  }
}
```