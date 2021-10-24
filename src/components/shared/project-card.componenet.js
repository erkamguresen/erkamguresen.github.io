export function generateProjectCard(project) {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'col-xl-4';

  const date = new Date(Date.parse(project.items[0].pushed_at));

  projectDiv.innerHTML = `
    <div class="card my-3">
      <div class="card-header"><h4>${project.items[0].name}</h4></div>
      <a href="${project.items[0].homepage}" class="card-link">
        <img src="./public/images/projects/${project.items[0].name}.png" 
        class="card-img-top" alt="screen shot of the app" />
      </a>
      <div class="card-body">
        <h6 class="card-title">${project.items[0].name}</h6>
        <p class="card-text">
        ${project.items[0].description}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          You can reach the live version of the project here:<br />
          <a href="${
            project.items[0].homepage
          }" class="card-link"> project demo</a>
        </li>   
        <li class="list-group-item">
          This project has received ${
            project.items[0].stargazers_count
          } stars on github.
        </li>
        <li class="list-group-item">
          This project is followed by ${
            project.items[0].watchers_count
          } on github.
        </li>
        <li class="list-group-item">
        You can reach the source code via:<br />
          <a href="${project.items[0].html_url}" class="card-link">github</a>
        </li>
      </ul>
      <div class="card-footer text-muted">
        Last Updated At: ${date.toLocaleString('en-GB', { timeZone: 'UTC' })}
      </div>
    </div>
    `;

  return projectDiv;
}
