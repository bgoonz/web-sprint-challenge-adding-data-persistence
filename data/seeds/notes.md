Required Endpoints
Build an API inside the api folder with endpoints for:

[POST] /api/resources

Example of response body: {"resource_id":1,"resource_name":"foo","resource_description":null}
[GET] /api/resources

Example of response body: [{"resource_id":1,"resource_name":"foo","resource_description":null}]
[POST] /api/projects

Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
Example of response body: {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
[GET] /api/projects

Even though project_completed is stored as an integer, the API uses booleans when interacting with the client
Example of response body: [{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]
[POST] /api/tasks

Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
Example of response body: {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}
[GET] /api/tasks

Even though task_completed is stored as an integer, the API uses booleans when interacting with the client
Each task must include project_name and project_description
Example of response body: [{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]
