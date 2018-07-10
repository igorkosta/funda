# Apps
`/apps` gives the Mbanq Cloud clients the possibility to manage their own API
clients.
Apps lambda function communicates directly with the Mbanq Core database.

## Create
Since we would like to use the Mbanq Core database without altering it, we
store the most information as a `json` in the `addtional_information` column.

On a successfull client (app) creation, a `client_id/client_secret` pair is
created. It has to be uses to obtain the `access_token` for the later requests to the API.

**Request**
```
{
  "data" : {
    "additional_information": {
      "provider": "Mbanq Cloud",
      "name": "API",
      "description": "Call me :)",
      "website": "https://api.cloud.mbanq.com"
    },
		"web_server_redirect_uri": "https://api.cloud.mbanq.com/callback"
  }
}
```

**Response**
```
{
  "statusCode": 201,
  "data": [
    {
      "additional_information": {
        "provider": "Mbanq Cloud",
        "name": "Mbanq API",
        "description": "Call me :)",
        "website": "https://api.cloud.mbanq.com"
      },
      "web_server_redirect_uri": "https://api.cloud.mbanq.com/callback",
      "client_id": "d24a6265bfc04ab2",
      "client_secret": "feec080fd6b13c714a22a2158c485118",
      "authorized_grant_types": "password,refresh_token",
      "scope": "all"
    }
  ]
}
```

## Get

### All Apps

### One App

## Delete

## Update Keys

## TODOs
* Get supported `grant_types`
* Get `scopes`
* Let users to submit `grant_types` and `scopes`
