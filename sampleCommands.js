// Structure of API

[
    {
    "content": String,
    "createdAt": timestamp,
    "id": HASH String,
    "updatedAt": timestamp,
    "title": String
    }
]


// Create recipe
sudo curl -X POST https://n1aeccabv5.execute-api.us-east-1.amazonaws.com/dev/recipes --data '{"title":"recipe2","content":"this is content for recipe 2"}'


// Get particular recipe
sudo curl -X GET https://n1aeccabv5.execute-api.us-east-1.amazonaws.com/dev/recipes/93810650-0e4c-11e8-a01a-ed921fd3b3ea

// Get all the recipes
sudo curl -X GET https://n1aeccabv5.execute-api.us-east-1.amazonaws.com/dev/recipes 

// Update a recipe
sudo curl -X PUT https://n1aeccabv5.execute-api.us-east-1.amazonaws.com/dev/recipes/cc4075a0-0d63-11e8-9730-010f0ffac373 --data  '{"title":"recipe1","content":"this is the new content for recipe 1"}'

// Delete a recipe
sudo curl -X DELETE https://n1aeccabv5.execute-api.us-east-1.amazonaws.com/dev/recipes/cc4075a0-0d63-11e8-9730-010f0ffac373

