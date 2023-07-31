function createBlog() {
    const title = document.getElementById("blogTitle").value;
    const content = document.getElementById("blogContent").value;
    const image = document.getElementById("blogImage").value;
    const video = document.getElementById("blogVideo").value;

    const blogHTML = `
        <div class="blog">
            <h2>${title}</h2>
            <p>${content}</p>
            ${image ? `<img src="${image}" alt="Blog Image" />` : ""}
            ${video ? `<iframe width="560" height="315" src="${video}" frameborder="0" allowfullscreen></iframe>` : ""}
        </div>
    `;

    document.getElementById("blogsContainer").insertAdjacentHTML("beforeend", blogHTML);
    clearInputs();
}

function clearInputs() {
    document.getElementById("blogTitle").value = "";
    document.getElementById("blogContent").value = "";
    document.getElementById("blogImage").value = "";
    document.getElementById("blogVideo").value = "";
}
