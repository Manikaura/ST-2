// Step 1 - Create object pof XHR
const xhr = new XMLHttpRequest()
console.log(`Ready State - ${xhr.readyState}`)

// const variable = 'Ram'
// console.log(`Hi my name is ${variable} and I am 20 years old!`)

const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09&maxResults=10`

// Step 2 - Open the porta; of communication b/w client & the server
xhr.open('GET', url)
console.log(`Ready State - ${xhr.readyState}`)




// Step 3 - Execute the function when the request state changes
xhr.onreadystatechange = () => {
    console.log(`Ready State - ${xhr.readyState}`)
    if (xhr.readyState === 4 && xhr.status === 200) {
        const objectResponse = JSON.parse(xhr.responseText)
        console.log(objectResponse)
        var output = ''
        for (let i = 0; i < objectResponse.length; i++) {
            output += `
            <div class="projects-grid">
    <div class="card">
            
     <div class="desc">
        <h3 class="project-tile">${objectResponse[i].userId}</h3>
        <p> ${objectResponse[i].id}</p>
          
        <p>${objectResponse[i].body}</p>
      </div>
      </div>
    </div>

    `

        }

        console.log(output)
        document.querySelector('.projects-grid').innerHTML = output
    }
}

// Step 4 - Send the request
xhr.send()



