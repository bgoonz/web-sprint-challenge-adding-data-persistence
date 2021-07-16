```
./codegrade_mvp.test.js (33.814 s)
  ✓ [0] sanity check (342 ms)
  server.js
    projects endpoints
      [GET] /api/projects
        ✓ [1] can get all projects that exist in the table (206 ms)
        ✓ [2] each project contains project_name, project_description and project_completed (as a boolean) (187 ms)
      [POST] /api/projects
        ✓ [3] can add a new project to the table (566 ms)
        ✓ [4] responds with the newly created project with its project_completed as a boolean (241 ms)
        ✓ [5] rejects projects lacking a project_name with an error status code (192 ms)
    resources endpoints
      [GET] /api/resources
        ✓ [6] can get all resources in the table (175 ms)
      [POST] /api/resources
        ✓ [7] can add a new resource to the table (210 ms)
        ✓ [8] responds with the newly created resource (184 ms)
        ✓ [9] rejects a resource with an existing resource_name with an error status code (165 ms)
    tasks endpoints
      [GET] /api/tasks
        ✓ [10] can get all tasks in the table (223 ms)
        ✓ [11] each task contains task_notes and task_description and task_completed (as a boolean) (223 ms)
        ✓ [12] each task contains the project_name and the project_description (221 ms)
      [POST] /api/tasks
        ✓ [13] can add a new task to the db (361 ms)
        ✓ [14] responds with the newly created task with the task_completed as a boolean (280 ms)
        ✓ [15] rejects a task lacking a task_description with an error status code (254 ms)
        ✓ [16] rejects a task lacking a project_id with an error status code (252 ms)
        ✓ [17] rejects a task containing an invalid project_id with an error status code (258 ms)
 PASS  ./codegrade_mvp.test.js (6.311 s)
  ✓ [0] sanity check (169 ms)
  server.js
    projects endpoints
      [GET] /api/projects
        ✓ [1] can get all projects that exist in the table (150 ms)
        ✓ [2] each project contains project_name, project_description and project_completed (as a boolean) (133 ms)
      [POST] /api/projects
        ✓ [3] can add a new project to the table (179 ms)
        ✓ [4] responds with the newly created project with its project_completed as a boolean (163 ms)
        ✓ [5] rejects projects lacking a project_name with an error status code (129 ms)
    resources endpoints
      [GET] /api/resources
        ✓ [6] can get all resources in the table (143 ms)
      [POST] /api/resources
        ✓ [7] can add a new resource to the table (153 ms)
        ✓ [8] responds with the newly created resource (128 ms)
        ✓ [9] rejects a resource with an existing resource_name with an error status code (120 ms)
    tasks endpoints
      [GET] /api/tasks
        ✓ [10] can get all tasks in the table (180 ms)
        ✓ [11] each task contains task_notes and task_description and task_completed (as a boolean) (170 ms)
        ✓ [12] each task contains the project_name and the project_description (165 ms)
      [POST] /api/tasks
        ✓ [13] can add a new task to the db (267 ms)
        ✓ [14] responds with the newly created task with the task_completed as a boolean (199 ms)
        ✓ [15] rejects a task lacking a task_description with an error status code (194 ms)
        ✓ [16] rejects a task lacking a project_id with an error status code (214 ms)
        ✓ [17] rejects a task containing an invalid project_id with an error status code (223 ms)

Test Suites: 1 passed, 1 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        6.342 s, estimated 34 s

```
