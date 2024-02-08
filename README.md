# Frontend Synthesized Test Task

Dear candidate, 

In this test assignment we would like to verify your ability to interact with the tech stack that we use on a daily basis. From your side, you may also figure out our approaches and decide if they fit you.

We value your time and this task must not take more that 1-3 hours.

Imagine we already have a working backend, and we need to create a frontend UI for this. The backend is available at http://51.11.179.192, and its OpenAPI specification is available in this project under  [src/shared/api/api.spec.yaml](https://github.com/synthesized-io/fe-synthesized-skill-assessment/blob/main/src/shared/api/api.spec.yaml)

The backend provides mechanism of _submitting_ tasks, _monitoring_ task execution status, and _cancelling_ running tasks. A submitted task takes 6-12 seconds to execute, and it may finish successfully or unsuccessfully. If user requests cancellation of the task, it finishes immediately.

In this project the boilerplate code is already written, including project layout, client code for the API and proxy to the backend. You just need to fill out the missing parts. 

## Expected Deliverables

The result must be a private GitHub repository fork (shared with [@inponomarev](https://github.com/inponomarev/) GitHub user), or just a zip file with the project sent to ivan [at] synthesized.io.

## Business Logic Part
Implement the following business logic:
- **Table** with the results of http://51.11.179.192/api/v1/tasks, which periodically refreshes tasks from the backend.
- **Button** to submit a task, which should re-render the table.
- **Modal dialog or page** to display details of a specific task.
- **Button** to cancel task execution in an overlay modal dialog or details page.

_Feel free to propose your own implementation for the described features_

## Designing Part
Consider UX and UI design for the following features:
- Application layout
- Table
- Modal dialog
- Button

_You can use whatever design system you prefer. Feel free to propose your own implementation for the described features_

## Testing Part (if you have time)
- Add unit and/or e2e tests if you are willing.

Documentation links you may need:
- [React](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [React Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Panda CSS](https://panda-css.com/docs)
- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
- [Feature Sliced Design](https://feature-sliced.design/)

If you  need clarifications, technical help or if you want to provide feedback on the assignment, please write to ivan [at] synthesized.io.
